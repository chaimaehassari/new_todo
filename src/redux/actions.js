// export const ADD_TASK = 'ADD_TASK';
// export const TOGGLE_TASK = 'TOGGLE_TASK';
// export const EDIT_TASK = 'EDIT_TASK';
// export const DELETE_TASK = 'DELETE_TASK';
// export const FILTER_TASKS = 'FILTER_TASKS';
import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './actionTypes.js';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: { id: Date.now(), description, isDone: false }
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: id
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: { id, description }
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id
});

export const filterTasks = (filter) => ({
  type: FILTER_TASKS,
  payload: filter
});