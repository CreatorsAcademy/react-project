import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TodoList from "./list";
import { useState } from "react";

function Sample() {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState([]);
  console.log(todo);
  return (
    <>
      <Typography variant="h4" component="h2">
        ToDO List
      </Typography>
      <Box sx={{ width: 500, maxWidth: "100%" }}>
        <TextField
          fullWidth
          label="Enter Task"
          id="fullWidth"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={(e) => {
          // console.log(name);
          setTodo((prev) => {
            return [...prev, name];
          });
        }}
      >
        Add
      </Button>

      <TodoList value1={todo} />
    </>
  );
}

export default Sample;
