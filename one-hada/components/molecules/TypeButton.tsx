import { ButtonHTMLAttributes } from 'react';
import { Button } from '../ui/button';

type TypeButtonProps = {
  button_type: string;
  onClick: () => void;
  children: React.ReactNode; // children 속성 추가
  // classNames: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function TypeButton({
  button_type,
  onClick,
  children,
  // classNames,
  ...rest
}: TypeButtonProps) {
  return (
    <Button
      id={button_type}
      // className='px-3 py-2 bg-[#61B89F] text-xs text-white rounded-3xl hover:bg-[#377b68] w-12 h-8'
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
}
