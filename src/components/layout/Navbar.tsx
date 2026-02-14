import { NavLink } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Tasks", to: "/tasks" },
  ];

  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <NavLink to="/" className="font-bold text-lg">
        Advanced Todo
      </NavLink>

      <div className="flex gap-3">
        <div className="flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end>
              {({ isActive }) => (
                <Button
                  variant="ghost"
                  className={cn(
                    "transition-colors cursor-pointer",
                    isActive
                      ? "bg-accent text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {link.label}
                </Button>
              )}
            </NavLink>
          ))}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};
