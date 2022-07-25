import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToDoList, removeToDoList, editToDoList, undo } from "../redux/apiState";
const Todo = () => {
  // redux thunk
  let listData = useSelector((state) => state.api.listData);
  let prevData = useSelector((state) => state.api.prevData);
  const dispatch = useDispatch();
  const [inputData, setInputData] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editDataId, setEditDataId] = useState("");
  const [editData, setEditData] = useState("");
  const [error, setError] = useState(false);
  useEffect(() => {
    console.log(listData);
  }, [listData]);
  return (
    <div
      style={{
        backgroundColor: "#352f5b",
        height: "835px",
        marginTop: "-23px",
      }}
    >
      <div className="container">
        {/*  HEADER  */}
        <header className="text-center text-light my-4">
          <h1 className="mb-4">Todo List</h1>
          {/*  FORM  */}
          <form className="add text-center my-4">
            <label htmlFor="add" className="add text-light">
              Add a new todo:
            </label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                className="form-control m-auto"
                value={isEdit ? editData : inputData}
                name="add"
                id="add"
                onChange={(e) => {
                  const value = e.target.value;
                  if(isEdit){
                    setEditData(value);
                    
                  }
                  setInputData(value);
                 
                }}
              />
              {isEdit?  <button
                class="btn btn-dark"
                onClick={(e) => {
                  e.preventDefault();
                    setError(false);
                    dispatch(editToDoList({
                      id: editDataId.id,
                      todo:editData}));
                    setInputData("");
                    setIsEdit(false);
                }}
              >
                Update
              </button>: <button
                class="btn btn-dark"
                onClick={(e) => {
                  e.preventDefault();
                  if (inputData === "") {
                    setError(true);
                  } else {
                    setError(false);
                    dispatch(addToDoList(inputData));
                    setInputData("");
                  }
                }}
              >
                Add
              </button>}
             
              <button
                class="btn btn-dark"
                onClick={(e) => {
                  e.preventDefault();
                    dispatch(undo());
                }}
              >
                Undo
              </button>
            </div>
          </form>
          {error ? (
            <div
              style={{
                color: "red",
                marginTop: "-6%",
                marginRight: "65%",
                fontWeight: "400",
              }}
            >
              Please add a todo
            </div>
          ) : (
            ""
          )}
        </header>
        {/*  LIST  */}
        <ul className="list-group todos mx-auto text-light">
          {listData.map((item) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={item.id}
              >
                <span>{item.todo}</span>
                <i
                  class="fa-solid fa-pen-to-square delete"
                  style={{ position: "absolute", left: "86%" }}
                  onClick={() => {
                    setIsEdit(true);
                    setEditDataId({
                      id:item.id,
                    })
                    setEditData(item.todo);
                  }}
                />
                <i
                  className="far fa-trash-alt delete"
                  onClick={() => {
                    dispatch(removeToDoList(item.id));
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
