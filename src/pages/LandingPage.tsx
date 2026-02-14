import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-[80vh]">
      <Card className="p-10 text-center max-w-md">
        <CardContent className="space-y-6">
          <h1 className="text-3xl font-bold">
            Welcome to Advanced Todo App 🚀
          </h1>

          <p className="text-muted-foreground">
            Manage your tasks efficiently with filtering and theme support.
          </p>

          <Button
            onClick={() => navigate("/tasks")}
            className="w-full cursor-pointer"
          >
            Go to Tasks
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
