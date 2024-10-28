import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import useTaskStore from '../store/useTaskStore';
import { useEffect } from 'react';

export default function Home() {
  const { tasks, fetchTasks, addTask, deleteTask } = useTaskStore();

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <TaskForm onSubmit={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}
