interface StoreService {
  getTasks(): string[];
  addTask(task: string): void;
  deleteTask(taskId: string): void;
  updateTask(taskId: string, updatedTask: string): void;
}

export class LocalStorageStoreService implements StoreService {
  getTasks(): string[] {
    const tasks = localStorage.getItem("tasks");
    return tasks ? JSON.parse(tasks) : [];
  }
  addTask(task: string): void {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  deleteTask(taskId: string): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex((task) => task === taskId);
    if (index >= 0) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
  updateTask(taskId: string, updatedTask: string): void {
    const tasks = this.getTasks();
    const index = tasks.findIndex((task) => task === taskId);
    if (index >= 0) {
      tasks[index] = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
}
