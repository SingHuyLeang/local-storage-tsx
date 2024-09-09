import { ButtonType } from "../types/button_type";

type Event = (event: { value?: string }) => any;

interface ButtonProps {
  text: string;
  type?: ButtonType;
  modifier?: string;
  event: Event;
}

const Button = ({
  text,
  event,
  modifier,
  type = ButtonType.outline,
}: ButtonProps) => {
  const onClick = () => {
    event({ value: undefined });
  };
  return (
    <button
      onClick={onClick}
      className={`
        ${modifier?.trim() + " "}
        h-10 px-4 py-2 ring-2
        text-dark dark:text-light
        ${
          type === ButtonType.outline
            ? "bg-transparent ring-dark dark:ring-light"
            : type === ButtonType.primary
            ? "bg-primary hover:bg-green-700 focus:bg-green-700 ring-green-700 hover:ring-green-600 focus::ring-green-600"
            : type === ButtonType.danger
            ? "bg-red-800 hover:bg-red-700 focus:bg-red-700 ring-red-700 hover:ring-red-600 focus::ring-red-600"
            : ""
        } 
            outline-none
            rounded-lg
            font-medium
            text-md
        `}
    >
      {text}
    </button>
  );
};

export default Button;
