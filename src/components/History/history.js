import React from 'react'
import { useTodo } from "../../context/todoContext";
import {
    Typography,
    Box,
    Paper,
} from "@material-ui/core";

export default function History(props) {
    const { history } = useTodo();
    return (
        <>
            <Paper elevation={2}>
                <Box textAlign="left" p={2} my={2}>
                    <Typography variant="h6" gutterBottom>
                        History
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        delited: {history.delited}
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        completed: {history.completed}
                    </Typography>
                    <Typography variant="body1" component="p" gutterBottom>
                        created: {history.created}
                    </Typography>
                </Box>
            </Paper>
        </>
    );
}
