import { ReactNode, HTMLAttributes} from 'react'
export type ButtonProps  = {
  variant?: 'primary' | 'outline';
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;

} & HTMLAttributes<HTMLButtonElement>

export default function Button( props: ButtonProps) {
  const { className, variant = 'primary', leadingIcon, trailingIcon, children, ...rest} = props;

  const btnVariant = variant == 'outline' ? 'border-2 border-skin text-skin' : 'bg-skin text-white';
  return(
  <button className={`flex gap-4 ${btnVariant} rounded-full ${className && className}`} {...rest}>
      {leadingIcon && leadingIcon}
      {children}
      {trailingIcon && trailingIcon}
    </button>
  )
}
