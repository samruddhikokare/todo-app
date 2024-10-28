import create from 'zustand';

const useTaskStore = create((set) => ({
  tasks: [],
  fetchTasks: async () => {
    const response = await fetch('/api/tasks');
    const tasks = await response.json();
    set({ tasks });
  },
  addTask: async (task) => {
    const response = await fetch('/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  deleteTask: async (id) => {
    await fetch(`/api/tasks/${id}`, { method: 'DELETE' });
    set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) }));
  },
}));

export default useTaskStore;
