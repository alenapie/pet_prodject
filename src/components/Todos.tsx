import {
  Button,
  List,
  ListItem,
  IconButton,
  ListItemText,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import * as React from "react";

type TTodo = {
  title: string;
  body: string;
};

export const Todos = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [todos, setTodos] = useState<TTodo[]>([]);

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, { title: title, body: body }]);
    setTitle("");
    setBody("");
  };

  const handleDeleteTodo = (index: number) => {
    const newState = todos.filter((_, i) => i !== index);
    setTodos(newState);
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "50vh" }} // Устанавливаем минимальную высоту, чтобы контейнер занимал всю высоту видимой области
      >
        {" "}
        <Grid item>
          <Typography>Введите имя </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Например, Иван"
            id="outlined-required"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Typography>Введите фамилию </Typography>
        </Grid>
        <Grid item>
          <TextField
            label="Например, Иванов"
            id="outlined-required"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" onClick={handleAddTodo}>
            Добавить
          </Button>
        </Grid>
        <Grid item>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {todos.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.title} secondary={item.body} />
                <IconButton onClick={() => handleDeleteTodo(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};
