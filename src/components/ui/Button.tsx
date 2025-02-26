import { ReactNode } from "react";

type ButtonProps = {
  variant: "primary" | "secondary" | "tertiary";
  text?: string;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = ({
  variant = "primary",
  text,
  icon,
  className,
}: ButtonProps) => {
  const variants = {
    primary: "px-6 py-[10px] bg-[white] rounded-[4px] uppercase",
    secondary: "",
    tertiary: "",
  };

  return (
    <button className={`${variants[variant]} ${className}`}>
      {icon && <span>{icon}</span>}
      {text}
    </button>
  );
};

export default Button;
