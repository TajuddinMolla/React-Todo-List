import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const { status, colors } = filters;
  const statusFilter = () => {
    if (status == "All") {
      return todos;
    } else if (status == "Incomplete") {
      return todos.filter((todo) => !todo.completed);
    } else {
      return todos.filter((todo) => todo.completed);
    }
  };
  const colorFilter = (todos) => {
    if (colors.length <= 0) {
      return todos;
    }
    return todos.filter((todo) => colors.includes(todo?.color));
  };
  return (
    <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
      {colorFilter(statusFilter()).map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
