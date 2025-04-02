import { motion } from 'framer-motion';
import { ChevronDownIcon } from "@heroicons/react/24/solid";  
import useTasks from '../hooks/useTasks';
import TaskItem from './TaskItem';
import AddTask from './AddTask';

export default function TaskList() {
  const { tasks, addTask, deleteTask, toggleTask } = useTasks();

  return (
    <div>
      <AddTask onAdd={addTask} />
      <motion.ul className="mt-4 space-y-2">
        {tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onDelete={deleteTask} 
            onToggle={toggleTask} 
          />
        ))}
      </motion.ul>
    </div>
  );
}