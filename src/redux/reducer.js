import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './actionTypes.js';


const initialState = {
  tasks: [],
  filter: 'all'
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };

    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        )
      };

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        )
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      };

    case FILTER_TASKS: 
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

export default todoReducer;