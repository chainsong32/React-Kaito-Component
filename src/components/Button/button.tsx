import React, { ButtonHTMLAttributes,FC,AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

// export enum ButtonSize{
//   Large = 'lg',
//   Small='sm'
// }

// export enum ButtonType{
//   Primary = 'primary',
//   Default = 'default',
//   Danger = 'danger',
//   Link='link'
// }

export type ButtonSize='lg'|'sm'
export type ButtonType='primary'|'default'|'danger'|'link'

interface BaseButtonProps{
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: React.ReactNode;
  href?:string
}

type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
type AnchorButtonProps=BaseButtonProps&AnchorHTMLAttributes<HTMLElement>
export type ButtonProps= Partial<NativeButtonProps&AnchorButtonProps>

const Button: FC<ButtonProps> = (props) => {
  const {
    btnType,
    className,
    disabled,
    size,
    children,
    href,
    ...restProps
  } = props
  //默认btn className
  /** btn,btn-lg,btn-primary */
  const classes = classNames('btn',className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled':(btnType==='link')&&disabled
  })

  if (btnType === 'link' && href) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  }else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >{children}</button>
    )
  }
}

Button.defaultProps = {
  disabled: false,
  btnType:'default'
}

export default Button;
