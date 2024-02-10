import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCategory } from "./category-provider";

export function CategorySelect({ className }: { className?: string }) {
  const { category, setCategory } = useCategory();

  const topikMap = {
    'topik1': "TOPIK I",
    'topik2': "TOPIK II",
    'all': 'All'
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="absolute left-5 top-5">
        <Button variant="outline" className={className}>
          {topikMap[category]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setCategory("topik1")}>
          {topikMap['topik1']}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCategory("topik2")}>
          {topikMap['topik2']}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCategory("all")}>
          {topikMap['all']}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
