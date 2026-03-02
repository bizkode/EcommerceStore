import {
  Alert,
  AlertTitle,
  Button,
  ButtonGroup,
  Container,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import {
  useLazyGet400ErrorQuery,
  useLazyGet401ErrorQuery,
  useLazyGet404ErrorQuery,
  useLazyGet500ErrorQuery,
  useLazyGetValidationErrorQuery,
} from "./errorApi";
import { useState } from "react";

const AboutPage = () => {
  type ValidationProblemDetails = {
    data: {
      errors: Record<string, string[]>;
      type?: string;
      title?: string;
      status?: number;
      detail?: string;
      instance?: string;
      traceId?: string;
    };
  };

  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const [trigger400Error] = useLazyGet400ErrorQuery();
  const [trigger401Error] = useLazyGet401ErrorQuery();
  const [trigger404Error] = useLazyGet404ErrorQuery();
  const [trigger500Error] = useLazyGet500ErrorQuery();
  const [triggerValidationError] = useLazyGetValidationErrorQuery();
  const getValidationError = async () => {
    try {
      await triggerValidationError().unwrap();
    } catch (error: unknown) {
      if (error && typeof error === "object") {
        const errors = (error as ValidationProblemDetails).data.errors;
        const errorArray = Object.values(errors).flat();
        setValidationErrors(errorArray);
        console.log(errorArray);
      }
    }
  };

  return (
    <Container>
      <Typography gutterBottom variant={"h3"}>
        Errors for testing
      </Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          onClick={() => trigger400Error().catch((err) => console.log(err))}
        >
          Test 400 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => trigger401Error().catch((err) => console.log(err))}
        >
          Test 401 Error
        </Button>

        <Button
          variant="contained"
          onClick={() => trigger404Error().catch((err) => console.log(err))}
        >
          Test 404 Error
        </Button>
        <Button
          variant="contained"
          onClick={()=>trigger500Error()}
        >
          Test 500 Error
        </Button>

        <Button variant="contained" onClick={getValidationError}>
          Test Validation Error
        </Button>
      </ButtonGroup>

      {validationErrors.length > 0 && (
        <Alert severity="error">
          <AlertTitle>Validation Errors</AlertTitle>
          <List>
            {validationErrors.map((err) => (
              <ListItem key={err}>{err}</ListItem>
            ))}
          </List>
        </Alert>
      )}
    </Container>
  );
};

export default AboutPage;
