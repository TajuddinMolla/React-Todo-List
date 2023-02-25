import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actions";

const numberOfTaks = (number) => {
  if (number == 0) {
    return "No Task";
  } else if (number == 1) {
    return "1 task";
  } else {
    return `${number} tasks`;
  }
};

export default function Footer() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const data = todos.filter((todo) => !todo.completed);

  const handleStatusChange = (status) => {
    dispatch(statusChanged(status));
  };

  const colorChangeHandler = (color) => {
    if (filters.colors.includes(color)) {
      dispatch(colorChanged(color, "remove"));
    } else {
      dispatch(colorChanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{data && numberOfTaks(data.length)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${
            filters.status === "All" && "font-bold"
          } `}
          onClick={() => handleStatusChange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status == "Incomplete" && "font-bold"
          }`}
          onClick={() => handleStatusChange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${
            filters.status == "Complete" && "font-bold"
          }`}
          onClick={() => handleStatusChange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            filters.colors.includes("green") && "bg-green-500"
          } `}
          onClick={() => colorChangeHandler("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            filters.colors.includes("red") && "bg-red-500"
          }`}
          onClick={() => colorChangeHandler("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            filters.colors.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => colorChangeHandler("yellow")}
        ></li>
      </ul>
    </div>
  );
}
