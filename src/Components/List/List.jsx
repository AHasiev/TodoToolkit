import { useDispatch, useSelector } from "react-redux";
import "./List.css";

const List = () => {
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const deleteToDo = (i) => {
    dispatch({
      type: "deleteToDo",
      payload: i,
    });
  };

  console.log(todos)

  const changeToDo = (i) => {
    dispatch({
      type: "changeToDo",
      payload: i,
    });
  };

  return (
    <div className="List_conteiner">
      {todos.map((element, index) => {
        return (
          <div
            className={`todos_conteiner ${element.complited ? "selected" : ""}`}
          >
            <div className="comleted_button">
              <button
                className={`${element.completed ? "selected" : ""}`}
                onClick={() => changeToDo(index)}
              >
                ★
              </button>
            </div>
            <div className="todo_text">{element.text}</div>
            <div className="delete_button">
              <button onClick={() => deleteToDo(index)}>X</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
