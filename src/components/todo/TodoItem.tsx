import { useTodoStore, type Todo } from "@/store/useTodoStore";
import { Button } from "@/components/ui/button";
import ConfirmDialog from "../ConfirmModal";

interface Props {
  todo: Todo;
}

const TodoItem = ({ todo }: Props) => {
  const toggleTodo = useTodoStore((s) => s.toggleTodo);
  const deleteTodo = useTodoStore((s) => s.deleteTodo);

  const createdDateTime = new Date(todo.createdAt).toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <div className="flex justify-between items-start p-4 border rounded-xl bg-card shadow-sm">
      <div className="space-y-1">
        <h3
          className={`font-medium ${
            todo.completed ? "line-through text-muted-foreground" : ""
          }`}
        >
          {todo.title}
        </h3>

        {todo.description && (
          <p
            className={`text-sm text-muted-foreground ${
              todo.completed ? "line-through" : ""
            }`}
          >
            {todo.description}
          </p>
        )}

        <p className="text-xs text-muted-foreground">
          Created: {createdDateTime}
        </p>
      </div>

      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => toggleTodo(todo.id)}
          className="cursor-pointer"
        >
          {todo.completed ? "Undo" : "Complete"}
        </Button>

        <ConfirmDialog onConfirm={() => deleteTodo(todo.id)} />
      </div>
    </div>
  );
};

export default TodoItem;
