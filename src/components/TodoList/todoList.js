import React from "react";
import {
    CircularProgress,
    Typography,
    Box,
    List,
    Paper,
} from "@material-ui/core";
import { useTodo } from "../../context/todoContext";
import Todoitem from "./todoItem";

export default function Todolist(props) {
    const { loading, todos, changeTodo, removeTodo } = useTodo();

    if (loading)
        return <CircularProgress color="secondary" disableShrink={true} />;

    return (
        <>
            {todos.length ? (
                <Paper elevation={3}>
                    <Box maxHeight="50vh" overflow="auto">
                        <List>
                            {todos.map((todo) => {
                                return (
                                    <Todoitem
                                        key={todo.id}
                                        todo={todo}
                                        updateTodo={() =>
                                            changeTodo({
                                                id: todo.id,
                                                newData: {
                                                    completed: !todo.completed,
                                                },
                                            })
                                        }
                                        deleteTodo={() => removeTodo(todo.id)}
                                    />
                                );
                            })}
                        </List>
                    </Box>
                </Paper>
            ) : (
                <Typography variant="h4">There are no todos yet.</Typography>
            )}
        </>
    );
}
