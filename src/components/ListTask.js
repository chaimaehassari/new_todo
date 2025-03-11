import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from '../redux/actions'; // Import corrigé ici
import Task from './Task';

const ListTask = () => {
  const dispatch = useDispatch();
  const { tasks, filter } = useSelector(state => state);
  
  const filteredTasks = tasks.filter(task => {
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => dispatch(filterTasks('all'))}
          className={`px-4 py-2 rounded ${filter === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          All
        </button>
        <button
          onClick={() => dispatch(filterTasks('done'))}
          className={`px-4 py-2 rounded ${filter === 'done' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Done
        </button>
        <button
          onClick={() => dispatch(filterTasks('notDone'))}
          className={`px-4 py-2 rounded ${filter === 'notDone' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Not Done
        </button>
      </div>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;