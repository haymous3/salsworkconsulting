import {ArrowRightIcon} from "@heroicons/react/24/solid";

type ButtonProps = {
  children: React.ReactNode;
  className: string;
};

const Button = ({children, className}: ButtonProps) => {
  return (
    <button
      className={`bg-primary flex gap-1 cursor-pointer transition-shadow duration-300 ease ${className}`}
    >
      {children}
      <ArrowRightIcon className="w-5" />
    </button>
  );
};

export default Button;
