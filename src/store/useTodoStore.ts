import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  createdAt: string;
}

type Filter = "all" | "completed" | "uncompleted";

interface TodoState {
  todos: Todo[];
  filter: Filter;

  addTodo: (title: string, description?: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  setFilter: (filter: Filter) => void;
}

export const useTodoStore = create<TodoState>()(
  persist(
    (set) => ({
      todos: [],
      filter: "all",

      addTodo: (title, description) =>
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: crypto.randomUUID(),
              title,
              description,
              completed: false,
              createdAt: new Date().toISOString(),
            },
          ],
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo,
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((todo) => todo.id !== id),
        })),

      setFilter: (filter) => set({ filter }),
    }),
    {
      name: "todo-storage",
    },
  ),
);
