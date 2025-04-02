import { motion } from 'framer-motion';
import { TrashIcon, CheckIcon } from '@heroicons/react/20/solid';
import toast from 'react-hot-toast';

export default function TaskItem({ task, onDelete, onToggle }) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center justify-between p-2 bg-gray-100 rounded-lg"
    >
      <div className="flex items-center gap-2">
        <button 
          onClick={() => {
            onToggle(task.id);
            toast.success(task.completed ? 'Task marked incomplete!' : 'Task completed!');
          }}
          className={`p-1 rounded-full ${task.completed ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          <CheckIcon className="h-4 w-4 text-white" />
        </button>
        <span className={task.completed ? 'line-through text-gray-500' : ''}>
          {task.text}
        </span>
      </div>
      <button 
        onClick={() => {
          onDelete(task.id);
          toast.error('Task deleted!');
        }}
        className="p-1 text-red-500 hover:bg-red-100 rounded-full"
      >
        <TrashIcon className="h-5 w-5" />
      </button>
    </motion.li>
  );
}