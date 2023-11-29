import React from "react";
import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo massege",
      completed: false,
    },
  ],
  addTodo: ( todo) => {},
  removeTodo: (id) => {},
  updateTodo: (id, todo) => {},
  toggleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider

export function useTodo() {
    return useContext(TodoContext)
}