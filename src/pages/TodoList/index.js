import React, { useEffect, useState } from "react";
import "./style.css";
import img from "../../assets/img/X2oObC4.png";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskAPI,
  checkTaskAPI,
  deleteTaskAPI,
  getTaskListAPI,
  rejectTaskAPI,
} from "../../redux/action";
export default function TodoList() {
  const { taskList } = useSelector((state) => state.reducers);
  const [state, setstate] = useState({
    values: { taskName: "" },
    errors: { taskName: "" },
  });
  const dispatch = useDispatch();
  const getTaskList = () => {
    dispatch(getTaskListAPI());
  };
  const handleChange = (e) => {
    let { value, name } = e.target;
    let newValues = { ...state.values };
    newValues = { ...newValues, [name]: value };
    let newErrors = { ...state.errors };
    let regexString = /^[a-z A-Z]+$/;
    if (!regexString.test(value) || value.trim() === "") {
      newErrors[name] = name + " invalid !";
    } else {
      newErrors[name] = "";
    }
    setstate({
      ...state,
      values: newValues,
      errors: newErrors,
    });
    console.log(state);
  };
  const addTask = (e) => {
    console.log(state.values.taskName);
    dispatch(addTaskAPI(state.values.taskName));
  };
  useEffect(() => {
    getTaskList();
    return () => {};
  }, []);
  const deleteTask = (taskName) => {
    dispatch(deleteTaskAPI(taskName));
  };
  const checkTask = (taskName) => {
    dispatch(checkTaskAPI(taskName));
  };
  const rejectTask = (taskName) => {
    dispatch(rejectTaskAPI(taskName));
  };
  const renderTaskToDo = () => {
    return taskList.filter((item) => !item.status)
    .map((item, index) => {
      return (
        <li key={index}>
          <span>{item.taskName}</span>
          <div className="buttons">
            <button
              className="remove"
              onClick={() => deleteTask(item.taskName)}
            >
              <i className="fa fa-trash-alt"></i>
            </button>
            <button
              className="complete"
              onClick={() => checkTask(item.taskName)}
            >
              <i className="far fa-check-circle"></i>
              <i className="fas fa-check-circle"></i>
            </button>
          </div>
        </li>
      );
    });
  };
  const renderTaskToDoDone = () => {
    return taskList
      .filter((item) => item.status)
      .map((item, index) => {
        return (
          <li key={index}>
            <span>{item.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                onClick={() => deleteTask(item.taskName)}
              >
                <i className="fa fa-trash-alt"></i>
              </button>
              <button
                className="complete"
                onClick={() => rejectTask(item.taskName)}
              >
                <i className="far fa-undo"></i>
                <i className="fas fa-undo"></i>
              </button>
            </div>
          </li>
        );
      });
  };
  return (
    <div className="card">
      <div className="card__header">
        <img src={img} />
      </div>
      <div className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              onChange={handleChange}
              value={state.taskName}
              type="text"
              name="taskName"
              placeHolder="Enter an activity..."
            />
            <button
              id="addItem"
              onClick={() => {
                addTask();
              }}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <p>{state.errors.taskName}</p>
          <div className="card__todo">
            <ul class="todo" id="todo">
              {renderTaskToDo()}
            </ul>
            <ul class="todo" id="completed">
              {renderTaskToDoDone()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
