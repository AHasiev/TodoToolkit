import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      text: "Выйти погулять",
      completed: true,
    },
    {
      text: "Купить бананы",
      completed: false,
    },
    {
      text: "Шучу не бананы",
      completed: false,
    },
  ],
};
console.log();

export const addToDo = createAction("addToDo");
export const deleteToDo = createAction("deleteToDo");
export const changeToDo = createAction("changeToDo");

const addReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addToDo, (state, action) => {
      state.todos.push(action.payload);
    })
    .addCase(deleteToDo, (state, action) => {
      state.todos = state.todos.filter((element, index) => {
        if (index === action.payload) {
          return false;
        }
        return true;
      });
    })
    .addCase(changeToDo, (state, action) => {
      state.todos = state.todos.map((element, index) => {
        if (index === action.payload) {
          return {
            ...element,
            completed: !element.completed,
          };
        }
        return element;
      });
    });
});

export default addReducer;
