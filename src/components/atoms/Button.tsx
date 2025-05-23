import type { ButtonHTMLAttributes } from "react"
import css from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "text",
  size?: 'sm' | 'md' | 'lg',
  shape?: 'square' | 'rounded' | 'circle',
  full?: boolean,
  loading?: boolean,
  icon?: string
}

const Button = ({ size = 'md', shape = 'square', full, loading, icon, children, className, ...rest }: ButtonProps) => {
  const classList = `${size}${shape ? ` ${css.shape}` : ''}${full ? ` ${css.full}` : ''}${loading ? ` ${css.loading}` : ''}${className ? ` ${className}` : ''}`
  return (
    <button className={classList} {...rest}>{children}</button>
  )
}

export default Button;