import { cn } from '@/lib/utils';
import React, { InputHTMLAttributes } from 'react';

type InputGroupProps = {
  className?: string;
  children: React.ReactNode;
  onSubmit?: () => void;
};
type InputTextProps = InputHTMLAttributes<HTMLInputElement> & {
  onSubmit?: () => void;
};

const InputGroup = ({ className, children }: InputGroupProps) => {
  return (
    <div
      className={cn(
        'input-group focus-within:shadow-lg pl-4 transition-all relative flex items-center w-full rounded-md overflow-hidden',
        className ?? ''
      )}
    >
      {children}
    </div>
  );
};

const Input = React.forwardRef<HTMLInputElement, InputTextProps>(
  (props: InputTextProps, ref: React.Ref<HTMLInputElement>) => {
    const { className, ...rest } = props;
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && props.onSubmit) {
        props.onSubmit();
      }
    };
    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (props.onChange) {
        props.onChange(e);
      }
    };
    return (
      <input
        onChange={onHandleChange}
        onKeyDown={handleKeyDown}
        className={cn(
          'input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm',
          className ?? ''
        )}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="false"
        ref={ref}
        {...rest}
      />
    );
  }
);

Input.displayName = 'Input';
const InputGroupText = ({ className, children }: InputGroupProps) => {
  return (
    <div className={cn('input-group-text mr-3', className ?? '')}>
      {children}
    </div>
  );
};

InputGroup.Text = InputGroupText;
InputGroup.Input = Input;

export default InputGroup;
