// src/components/Task.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask, deleteTask } from '../redux/actions';

const Task = ({ task }) => {
  const [editing, setEditing] = useState(false);
  const [newDesc, setNewDesc] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editing && newDesc.trim()) {
      dispatch(editTask(task.id, newDesc));
    }
    setEditing(!editing);
  };

  return (
    <div className="flex  items-center gap-4 p-4 mb-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleTask(task.id))}
        className="w-5 h-5 text-blue-500 rounded focus:ring-blue-500 "
      />
      
      {editing ? (
        <input
          type="text"
          value={newDesc}
          onChange={(e) => setNewDesc(e.target.value)}
          className="flex-1 p-1 border-2 border-gray-300 break-words w-full rounded"
        />
      ) : (
        <span className={`flex-1 ${task.isDone ? 'line-through text-gray-400' : 'text-gray-700'}`}>
          {task.description}
        </span>
      )}
      
      <div className="flex gap-2 ">
        <button
          onClick={handleEdit}
          className={`px-3 py-1 rounded ${editing ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
        >
          {editing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => dispatch(deleteTask(task.id))}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Task;