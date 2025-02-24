import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

const Container = ({ children }: ContainerProps) => (
  <div className="max-w-[1440px] mx-auto">{children}</div>
);

export default Container;
