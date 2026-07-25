import { Button, IconButton, Stack, TextField } from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

const Icon = ({
  isCompleted,
  updateIsCompleted,
  todoId,
}: {
  todoId: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
}) => {
  return (
    <div onClick={() => updateIsCompleted(todoId)}>
      {isCompleted ? (
        <CheckBoxIcon></CheckBoxIcon>
      ) : (
        <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
      )}
    </div>
  );
};

export const Todo = ({
  todoId,
  name,
  isCompleted,
  updateIsCompleted,
  deleteTodo,
  editTodo,
}: {
  todoId: string;
  name: string;
  isCompleted: boolean;
  updateIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, newName: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(name);

  const onSaveClick = () => {
    editTodo(todoId, editValue);
    setIsEditing(false);
  };

  const onEditClick = () => {
    setEditValue(name);
    setIsEditing(true);
  };

  if (isEditing) {
    return (
      <Stack
        direction="row"
        spacing={1}
        sx={{ alignItems: "center", padding: "4px 0" }}
      >
        <TextField
          size="small"
          fullWidth
          value={editValue}
          autoFocus
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSaveClick();
            }
          }}
        ></TextField>
        <IconButton onClick={onSaveClick} color="primary">
          <SaveIcon></SaveIcon>
        </IconButton>
      </Stack>
    );
  }

  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Button
        style={{ justifyContent: "space-between" }}
        fullWidth={true}
        endIcon={
          <Icon
            todoId={todoId}
            isCompleted={isCompleted}
            updateIsCompleted={updateIsCompleted}
          ></Icon>
        }
        sx={{
          textDecoration: isCompleted ? "line-through" : "none",
        }}
      >
        {name}
      </Button>
      <IconButton onClick={onEditClick}>
        <EditIcon></EditIcon>
      </IconButton>
      <IconButton onClick={() => deleteTodo(todoId)} color="error">
        <DeleteIcon></DeleteIcon>
      </IconButton>
    </Stack>
  );
};
