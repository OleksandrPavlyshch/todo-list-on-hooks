import React, { useState } from "react";
import { Grid, Box, Button, TextField } from "@material-ui/core";
import { useTodo } from "../../context/todoContext";

export default function Header(props) {
    const { addTodo, removeAllTodos } = useTodo();

    const [todoText, setTodoText] = useState("");

    const submitTodo = (event) => {
        event.preventDefault();
        if (!todoText) return;
        addTodo({
            title: todoText,
            id: Date.now(),
            completed: false
        });
        setTodoText("");
    };

    return (
        <>
            <Grid>
                <Box bgcolor="text.secondary" color="background.paper" p={3}>
                    <Box
                        borderColor="text.primary"
                        borderRadius={5}
                        bgcolor="background.paper"
                        px={2}
                        py={1}
                    >
                        <form
                            noValidate
                            autoComplete="off"
                            onSubmit={submitTodo}
                        >
                            <Grid
                                mx={0}
                                container
                                direction="row"
                                justify="space-between"
                                alignItems="center"
                                spacing={2}
                            >
                                <Box flexGrow="1" px={0} py={2}>
                                    <TextField
                                        id="todo-text"
                                        placeholder="Create new todo"
                                        size="small"
                                        fullWidth
                                        onChange={(e) =>
                                            setTodoText(e.target.value)
                                        }
                                        value={todoText}
                                    />
                                </Box>
                                <Box pl={2}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        size="small"
                                        mr="auto"
                                        // type="submit"
                                        onClick={submitTodo}
                                    >
                                        Save
                                    </Button>
                                </Box>
                            </Grid>
                        </form>
                    </Box>
                </Box>
            </Grid>
            <Box py={2}>
                <Button
                    fullWidth
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={removeAllTodos}
                >
                    Remove all todo
                </Button>
            </Box>
        </>
    );
}
