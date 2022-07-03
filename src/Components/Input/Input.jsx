import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../feature/addReducer";
import "./Input.css";

export const Input = () => {
  const [text, setText] = useState("");
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const dispatch = useDispatch();

  const addToDo = () => {
    if (text !== "") {
      dispatch({
        type: "addToDo",
        payload: {
            text: text,
            complited: false,  
        }
      });
      setText("");
    }
  };

  return (
    <div className="input_conteiner">
        <input
        type="text"
        value={text}
        placeholder="Введите текс"
        onChange={(e) => {
            handleChange(e);
        }}
        ></input>
        <button onClick={addToDo}>Добавить</button>
    </div>
  )
};
