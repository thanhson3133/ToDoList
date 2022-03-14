import axios from "axios";
import { GET_TASK_LIST } from "../constant";
import { createAction } from "./createAction";

export const getTaskListAPI = () => {
  return (dispatch) => {
    axios({
      url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
      method: "GET",
    })
      .then((res) => {
        dispatch(createAction(GET_TASK_LIST, res.data));
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const addTaskAPI = (taskName) => {
  return (dispatch) => {
    axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: { taskName: taskName },
    })
      .then((res) => {
        dispatch(getTaskListAPI());
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const deleteTaskAPI = (taskName) => {
  return (dispatch) => {
    axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    })
      .then((res) => {
        alert("Xóa thành công ");
        dispatch(getTaskListAPI());
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
};

export const checkTaskAPI = (taskName) =>{
  return (dispatch) => {
    axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    })
      .then((res) => {
        alert(res.data);
        dispatch(getTaskListAPI());
      })
      .catch((err) => {
        alert(err.response.data);
      });
  };
}

export const rejectTaskAPI =(taskName) =>{
  return dispatch =>{
    axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    })
      .then((res) => {
        alert(res.data);
        dispatch(getTaskListAPI());
      })
      .catch((err) => {
        alert(err.response.data);
      });
  }
}