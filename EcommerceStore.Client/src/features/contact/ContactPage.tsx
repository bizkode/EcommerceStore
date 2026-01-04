import {increment, decrement} from "./counterReducer.ts";
import {ButtonGroup, Typography, Button} from "@mui/material";
import {useAppDispatch, useAppSelector} from "../../app/store/store.ts";


const ContactPage = () => {
    const {data} = useAppSelector((state) => state.counter)
    const dispatch = useAppDispatch();
      
        
 
        return (
        <div>
            <Typography variant="body2" color="textSecondary">{data}</Typography>
            
            <ButtonGroup>
                <Button color={'primary'} onClick={()=>dispatch(increment(1))}>Increment</Button>
                <Button color={'error'} onClick={()=>dispatch(decrement(1))}>Decrement</Button>
                <Button color={'success'} onClick={()=>dispatch(increment(5))}>Increment by 5</Button>
                <Button color={'warning'} onClick={()=>dispatch(decrement(5))}>Decrement by 5</Button>
            </ButtonGroup>
        </div>
    );
};

export default ContactPage;