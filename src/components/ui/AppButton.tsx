import { MouseEventHandler, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

const AppButton = ({ onClick, children, className }: Props) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className={`bg-primary text-surface rounded-full px-6 py-3 ml-auto ${className}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
