import TodoForm from "@/components/todo/TodoForm";
import TodoList from "@/components/todo/TodoList";
import FilterButtons from "@/components/todo/FilterButtons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const TasksPage = () => {
  return (
    <div className="container mx-auto p-6 xl:px-20 lg:px-10">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">My Tasks</h1>

        <div className="grid gap-8 xl:grid-cols-3">
          {/* Add Task Section */}
          <Card className="xl:col-span-1 shadow-sm h-fit">
            <CardHeader>
              <CardTitle>Add New Task</CardTitle>
            </CardHeader>
            <CardContent>
              <TodoForm />
            </CardContent>
          </Card>

          {/* Tasks Section */}
          <div className="xl:col-span-2 space-y-6">
            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Filter Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <FilterButtons />
              </CardContent>
            </Card>

            <Card className="shadow-sm">
              <CardHeader>
                <CardTitle>Your Tasks</CardTitle>
              </CardHeader>
              <CardContent>
                <TodoList />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
