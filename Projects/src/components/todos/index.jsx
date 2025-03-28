import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CheckboxList from "./list";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";

function Sample() {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo]);

  function myFunction(e) {
    setName(e.target.value);
  }

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  function clickBtn() {
    setTodo((p) => {
      return [...p, name];
    });
    setName("");
  }

  function handleDelete(index) {
    setTodo((p) => p.filter((_, i) => i !== index));
  }

  const filteredTodos = todo.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Typography variant="h4">TODO List</Typography>
      <Stack direction="row" spacing={2}>
        <Box sx={{ width: "75%" }}>
          <TextField
            fullWidth
            label="enter task"
            id="fullWidth"
            value={name}
            onChange={myFunction}
          />
        </Box>
        <Button variant="contained" className="add-btn" onClick={clickBtn}>
          Add
        </Button>
      </Stack>
      <CheckboxList value1={todo} onDelete={handleDelete} />
      <Typography variant="h4">Search</Typography>
      <Box sx={{ width: "75%" }}>
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          value={search}
          onChange={handleSearchInput}
        />
      </Box>
      <CheckboxList value1={filteredTodos} onDelete={handleDelete} />
    </>
  );
}

export default Sample;
