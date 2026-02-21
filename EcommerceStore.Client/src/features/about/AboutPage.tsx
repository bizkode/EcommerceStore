import {Alert, AlertTitle, Button, ButtonGroup, Container, List, ListItem, Typography} from "@mui/material";
import { useLazyGet400ErrorQuery, useLazyGet401ErrorQuery, useLazyGet404ErrorQuery, useLazyGetValidationErrorQuery } from "./errorApi";
import { useState } from "react";

const AboutPage = () => {
    const [validationErrors, setValidationErrors] = useState([]);

    const [trigger400Error] = useLazyGet400ErrorQuery();
    const [trigger401Error] = useLazyGet401ErrorQuery();
    const [trigger404Error] = useLazyGet404ErrorQuery();
    const [triggerValidationError] = useLazyGetValidationErrorQuery();
    const getValidationError = async () => {
        try{
            await triggerValidationError().unwrap();
        }catch(error){
           console.log(error);
            if(error && typeof error === 'object' && 'errors' in error.data
                && typeof (error as {errors: unknown}).errors === 'string'){
                     
                    const errorArray = (error as {errors: string}).errors.split(', ');
                    setValidationErrors(errorArray);
                    console.log(errorArray);
                }else{
                    console.log("if passed");
                }
             
        }
    }

    return (
            <Container>
                <Typography gutterBottom variant={"h3"}>Errors for testing</Typography>
                <ButtonGroup>
                    <Button variant="contained" onClick={()=> trigger400Error()
                        .catch(err => console.log(err))
                    } >Test 400 Error</Button>

                    <Button variant="contained" onClick={()=> trigger401Error()
                        .catch(err => console.log(err))
                    } >Test 401 Error</Button>

                    <Button variant="contained" onClick={()=> trigger404Error()
                        .catch(err => console.log(err))
                    } >Test 404 Error</Button>

                    <Button variant="contained" onClick={getValidationError}>Test Validation Error</Button>
                </ButtonGroup>

                    {
                        validationErrors.length > 0 && (
                            <Alert severity="error" >
                                <AlertTitle>Validation Errors</AlertTitle>
                                <List>
                                    {
                                        validationErrors.map(err => (
                                            <ListItem key={err}>{err}</ListItem>
                                        ))
                                    }
                                </List>
                            </Alert>
                        )
                    }
                
            </Container>
    );
};

export default AboutPage;