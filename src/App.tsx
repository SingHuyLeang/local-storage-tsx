import { useEffect, useState } from "react";
import Button from "./components/Button";
import Form from "./feature/form/Form";
import { LocalStorageStoreService } from "./data/data";
import basket from "./assets/icons/basket.svg";

const App = () => {
  const [openModal, setModal] = useState(false);
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  const toggleModal = () => {
    setModal(!openModal);
    console.log(openModal);
  };

  const storage = new LocalStorageStoreService();

  useEffect(() => {
    setTasks(storage.getTasks());
  }, []);

  const deleteTask = (taskId: string) => {
    storage.deleteTask(taskId);
    setTasks(storage.getTasks());
  };

  return (
    <main className="w-screen h-screen bg-light dark:bg-dark text-light font-regular">
      <header className="w-full h-[10vh] inline-flex justify-between items-center  px-8">
        <h1 className="text-4xl font-bold text-dark dark:text-light">
          My Todo List
        </h1>
        <Button text="Add new task" event={() => toggleModal()} />
      </header>
      <Form
        task={task}
        visible={openModal}
        onEmit={(value) => setModal(value)}
      />

      {tasks.map((task, index) => (
        <div
          className="flex justify-between w-full h-auto bg-slate-800 px-8 py-4 my-4 "
          key={index}
          onClick={() => {
            setTask(task);
            toggleModal();
          }}
        >
          <p className="text-lg font-medium text-wrap">{task}</p>
          <button onClick={() => deleteTask(task)}>
            <img src={basket} alt="Remove task" />
          </button>
        </div>
      ))}
    </main>
  );
};

export default App;
