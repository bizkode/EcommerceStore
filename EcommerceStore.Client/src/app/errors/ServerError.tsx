import { Paper, Typography } from "@mui/material"
import { useLocation } from "react-router-dom"

const ServerError = () => {
    const {state} = useLocation();
   
  return (
    <Paper>
        {
            state.error ? (<>
            <Typography gutterBottom variant="h3">{state.error.title}</Typography>
            <Typography>{state.error.detail}</Typography>
            </>)
            : (<>
            <Typography>Server Error</Typography>
            </>)
        }
    </Paper>
  );
};

export default ServerError;