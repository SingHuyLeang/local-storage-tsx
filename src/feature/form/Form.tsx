import { useEffect, useState } from "react";
import Button from "../../components/Button";
import { ButtonType } from "../../types/button_type";
import { LocalStorageStoreService } from "../../data/data";

interface Prop {
  task: string;
  visible: boolean;
  onEmit: (value: boolean) => void;
}
const Form = ({ task, visible, onEmit }: Prop) => {
  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    setValue(task);
    setText(task === "" ? "Save" : "Update");
  }, []);

  const storage = new LocalStorageStoreService();

  const handleToggle = () => {
    onEmit(false);
  };

  const handleEvent = () => {
    if (value.trim() && task === "") {
      storage.addTask(value.trim());
    } else {
      storage.updateTask(task, value.trim());
    }
  };

  return (
    <div
      className={` w-screen h-screen fixed inset-0 ${
        visible ? "block" : "hidden"
      } flex flex-col justify-center items-center duration-slide bg-light dark:bg-dark`}
    >
      <form className="relative w-[60vw] h-[70vh] bg-light dark:bg-dark">
        <textarea
          className="w-full h-96 resize-none bg-transparent px-8 py-4 outline-none ring-2 ring-dark dark:ring-light rounded-lg font-medium text-lg"
          placeholder="Enter new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <aside className="absolute mt-5 flex gap-5 right-0">
          <Button event={handleToggle} text="Close" modifier={`w-28`} />
          <Button
            event={handleEvent}
            text={text}
            type={ButtonType.primary}
            modifier={`w-28`}
          />
        </aside>
      </form>
    </div>
  );
};

export default Form;
