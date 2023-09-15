import { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`bg-card-surface drop-shadow-md rounded-lg p-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
