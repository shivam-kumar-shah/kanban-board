import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const SubTitle = ({ children, className }: Props) => {
  return (
    <div className={`font-bold text-font-secondary ${className}`}>
      {children}
    </div>
  );
};

export default SubTitle;
