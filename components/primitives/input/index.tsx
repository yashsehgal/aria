import { cn } from '@/scripts/utils';
import { useState } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  wFull?: boolean;
}

const FormContainer: React.FunctionComponent<
  React.FormHTMLAttributes<HTMLFormElement>
> = ({ className, ...attr }) => {
  return (
    <form className={cn('form-container', className)} {...attr}>
      {attr?.children}
    </form>
  );
};

const FormInputItem: React.FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, ...attr }) => {
  return (
    <div
      className={cn('form-input-item flex flex-col items-start', className)}
      {...attr}>
      {attr?.children}
    </div>
  );
};

const FormInput: React.FunctionComponent<InputProps> = ({
  wFull = false,
  className,
  ...attr
}) => {
  if (attr?.type !== 'file') {
    const [isFormValidate, setIsFormValidate] = useState({
      initialState: false,
      validityStatus: false,
    });
    return (
      <input
        type={attr?.type}
        className={cn(
          'rounded-md w-[340px] border border-gray-200 px-4 py-2 text-sm focus:ring-2 focus:ring-offset-1 focus:ring-gray-300 transition-all focus:outline-none placeholder:text-gray-400',
          wFull && 'w-full',
          className,
        )}
        onChange={() =>
          setIsFormValidate({ ...isFormValidate, initialState: true })
        }
        {...attr}
      />
    );
  } else {
    return <input type={'file'} {...attr} />;
  }
};

const FormInputSupportText: React.FunctionComponent<
  React.LabelHTMLAttributes<HTMLLabelElement>
> = ({ className, ...attr }) => {
  return (
    <label
      className={cn('text-xs text-gray-400 font-normal mt-0.5', className)}
      {...attr}>
      {attr?.children}
    </label>
  );
};

export { FormContainer, FormInputItem, FormInput, FormInputSupportText };
