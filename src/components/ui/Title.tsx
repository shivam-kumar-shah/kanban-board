import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Title = ({ children, className }: Props) => {
  return (
    <div className={`font-bold text-font-primary ${className}`}>{children}</div>
  );
};

export default Title;
