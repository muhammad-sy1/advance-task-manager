import { Button } from "@/components/ui/button";
import { useTodoStore } from "@/store/useTodoStore";

const filters = ["all", "completed", "uncompleted"] as const;

const FilterButtons = () => {
  const { filter, setFilter } = useTodoStore();

  return (
    <div className="flex gap-2">
      {filters.map((value) => (
        <Button
          key={value}
          variant={filter === value ? "default" : "outline"}
          onClick={() => setFilter(value)}
          className="capitalize"
        >
          {value}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
