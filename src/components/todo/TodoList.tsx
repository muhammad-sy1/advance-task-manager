import { useTodoStore } from "@/store/useTodoStore";
import TodoItem from "./TodoItem";
import { motion, AnimatePresence } from "framer-motion";

const TodoList = () => {
  const { todos, filter } = useTodoStore();

  const filtered = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "uncompleted") return !todo.completed;
    return true;
  });

  const sorted = [...filtered].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  );

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {sorted.map((todo) => (
          <motion.div
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <TodoItem todo={todo} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
