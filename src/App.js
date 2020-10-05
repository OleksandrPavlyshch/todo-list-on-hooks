import React from "react";
import "./App.css";
import {
    Container,
    Button
} from "@material-ui/core";
import { TodoProvider } from './context/todoContext';
import Header from './components/Header/header';
import Todolist from './components/TodoList/todoList';
import History from './components/History/history';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import {
    red,
} from "@material-ui/core/colors";


const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            containedSecondary: {
                backgroundColor: red[500],
                fontWeight: 700,
                "&:hover": {
                    backgroundColor: red[700],
                },
            },
        },
        MuiListItem: {
            button: {
                "&:hover": {
                    backgroundColor: red[700],
                    color: "#fff",
                },
            },
        },
        MuiIconButton: {
            edgeEnd: {
                "&:hover": {
                    backgroundColor: red[700],
                    color: "#fff",
                },
            },
        },
    },
});

function App() {
    return (
        <TodoProvider>
            <ThemeProvider theme={theme}>
                <div className="App">
                    <Container maxWidth="md">
                        <History />
                        <Header />
                        <Todolist />
                    </Container>
                </div>
            </ThemeProvider>
        </TodoProvider>
    );
}

export default App;
