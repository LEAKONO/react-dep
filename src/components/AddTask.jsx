import { useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/20/solid';
import toast from 'react-hot-toast';

export default function AddTask({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      toast.error('Task cannot be empty!');
      return;
    }
    onAdd(text);
    setText('');
    toast.success('Task added!');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
        className="flex-1 p-2 border rounded-lg"
      />
      <button 
        type="submit" 
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        <PlusCircleIcon className="h-5 w-5" />
      </button>
    </form>
  );
}