import { useState, useCallback, useMemo } from "react";
import type { Todo } from "@/types/todo";


export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "uncompleted">(
    "all",
  );

  const addTodo = useCallback((title: string, description?: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title,
      description,
      completed: false,
      createdAt: new Date(),
    };

    setTodos((prev) => [...prev, newTodo]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case "completed":
        return todos.filter((t) => t.completed);
      case "uncompleted":
        return todos.filter((t) => !t.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  return {
    addTodo,
    toggleTodo,
    deleteTodo,
    filter,
    setFilter,
    filteredTodos,
  };
};
