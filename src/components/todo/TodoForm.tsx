import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, type TodoFormValues } from "@/schemas/todo.schema";
import { useTodoStore } from "@/store/useTodoStore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Label } from "../ui/label";

const TodoForm = () => {
  const addTodo = useTodoStore((s) => s.addTodo);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TodoFormValues>({
    resolver: zodResolver(todoSchema),
  });

  const onSubmit = (data: TodoFormValues) => {
    addTodo(data.title, data.description);

    toast("Task added successfully", {
      description: "Your task has been added to the list",
    });
    reset();
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 p-6 rounded-2xl border bg-card shadow"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <Label>Task Title</Label>
      <Input placeholder="Task title" {...register("title")} />
      {errors.title && (
        <p className="text-sm text-destructive">{errors.title.message}</p>
      )}
      <Label>Task Description</Label>
      <Textarea
        className="min-h-40 "
        placeholder="Description (optional)"
        {...register("description")}
      />

      <Button type="submit" className="w-full">
        Add Task
      </Button>
    </motion.form>
  );
};

export default TodoForm;
