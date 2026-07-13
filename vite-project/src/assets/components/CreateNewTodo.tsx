import { Button, TextField } from "@mui/material";
import { useState, type ChangeEvent } from "react";

type Props = {
  newTodoString: string;
  onNewTodoChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onAddingBtnClick: () => void;
};

export const CreateNewTodo = ({
  newTodoString,
  onNewTodoChange,
  onAddingBtnClick,
}: Props) => {
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (error) {
      setError(false);
    }
    onNewTodoChange(e);
  };

  const handleAddClick = () => {
    if (!newTodoString.trim()) {
      setError(true);
      return;
    }
    onAddingBtnClick();
  };

  return (
    <div>
      <TextField
        size="small"
        value={newTodoString}
        onChange={handleChange}
        error={error}
        helperText={error ? "Vui lòng điền thông tin vào ô trống!" : ""}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddingBtnClick();
          }
        }}
      >
        {" "}
      </TextField>
      <Button variant="contained" onClick={handleAddClick}>
        {" "}
        Thêm{" "}
      </Button>
    </div>
  );
};
