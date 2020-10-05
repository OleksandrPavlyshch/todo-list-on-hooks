import React from 'react'
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    lineThrough: {
        textDecoration: "line-through",
    },
}));

export default function Todoitem(props) {
    const { todo, updateTodo, deleteTodo } = props;
    const classes = useStyles();

    return (
        <>
            <ListItem button key={todo.id} divider onClick={updateTodo}>
                <ListItemText
                    className={`${todo.completed ? classes.lineThrough : ""}`}
                >
                    {todo.title}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton
                        color='inherit'
                        onClick={deleteTodo}
                        edge="end"
                        aria-label="delete"
                    >
                        <DeleteOutlineIcon />
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </>
    );
}
