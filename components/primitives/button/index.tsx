import { cn } from '@/scripts/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'danger';
  wFull?: boolean;
}

const ButtonTypeStyle = {
  primary: 'bg-gray-900 text-white border-transparent hover:brightness-105',
  outline: 'bg-transparent text-gray-900 border-gray-200 hover:bg-gray-50',
  danger: 'bg-red-500 text-white border-transparent hover:brightness-105',
};

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  wFull = false,
  className,
  ...attr
}) => {
  return (
    <button
      className={cn(
        'px-5 py-2 rounded-md border flex flex-row items-center justify-center gap-1.5 font-medium text-sm focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 focus:outline-none transition-all',
        ButtonTypeStyle[variant],
        wFull && 'w-full',
        className,
      )}
      {...attr}>
      {attr?.children}
    </button>
  );
};

export default Button;
