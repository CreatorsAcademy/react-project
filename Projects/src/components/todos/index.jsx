import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TodoList from "./list";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { useEffect } from "react";

function Todo() {
  const [name, setName] = useState("");
  const [todo, setTodo] = useState(() => {
    const savedTodo = localStorage.getItem("todo");
    return savedTodo ? JSON.parse(savedTodo) : [];
  });

  const [search, setSearch] = useState("");

  const [checkedItems, setCheckedItems] = useState(() => {
    const savedChecked = localStorage.getItem("checkedItems");
    return savedChecked ? JSON.parse(savedChecked) : [];
  });

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [todo, checkedItems]);

  function handleCheckboxToggle(value) {
    setCheckedItems((prev) => {
      const isChecked = prev.includes(value);
      return isChecked
        ? prev.filter((item) => item !== value)
        : [...prev, value];
    });
  }

  function myFunction(e) {
    setName(e.target.value);
  }

  function handleSearchInput(e) {
    setSearch(e.target.value);
  }

  function clickBtn() {
    setTodo((prevValue) => {
      return [...prevValue, name];
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
      <TodoList
        value1={todo}
        onDelete={handleDelete}
        checkedItems={checkedItems}
        onToggle={handleCheckboxToggle}
      />
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
      <TodoList
        value1={filteredTodos}
        checkedItems={checkedItems}
        onToggle={handleCheckboxToggle}
        showDelete={false}
      />
    </>
  );
}

export default Todo;
