import { Container, Paper, Typography } from "@mui/material"
import { useLocation } from "react-router"

const ServerError = () => {
    const {state} = useLocation();
  return (
    <Container component={Paper}>
        {
            state ? <>
            <Typography gutterBottom variant="h3">{state.error.title}</Typography>
            <Typography>{state.error.details}</Typography>
            </>
            : <>
            <Typography>Server Error</Typography>
            </>
        }
    </Container>
  );
};

export default ServerError;