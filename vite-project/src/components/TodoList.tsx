import { Tabs, Tab, Box, Typography } from "@mui/material";
import { Todo } from "./Todo";
import type { FilterType, TodoType } from "../App";

export const TodoList = ({
  todoList,
  setFilter,
  filter,
  updateIsCompleted,
  deleteTodo,
  editTodo,
}: {
  todoList: TodoType[];
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
  updateIsCompleted: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
  editTodo: (todoId: string, newName: string) => void;
}) => {
  return (
    <div>
      <Tabs
        value={filter}
        onChange={(_e, value: FilterType) => setFilter(value)}
      >
        <Tab label="Tất cả" value="all" />
        <Tab label="Chưa xong" value="active" />
        <Tab label="Đã xong" value="completed" />
      </Tabs>

      {todoList.length === 0 ? (
        <Box sx={{ padding: "16px", textAlign: "center" }}>
          <Typography color="text.secondary">Không có công việc nào</Typography>
        </Box>
      ) : (
        todoList.map((todo) => {
          return (
            <Todo
              todoId={todo.id}
              key={todo.id}
              name={todo.name}
              isCompleted={todo.isCompleted}
              updateIsCompleted={updateIsCompleted}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            ></Todo>
          );
        })
      )}
    </div>
  );
};
