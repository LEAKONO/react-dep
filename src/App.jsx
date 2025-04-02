import { Toaster } from 'react-hot-toast';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>
      <TaskList />
      <Toaster position="top-right" />
    </div>
  );
}
export default App;