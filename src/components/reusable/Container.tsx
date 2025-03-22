import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`px-4 sm:px-8 md:px-12 lg:px-24 xl:px-40 ${className}`}>
      {children}
    </div>
  );
};
export default Container;
