import React, { ReactElement, InputHTMLAttributes, ChangeEvent } from 'react'
import classNames from 'classnames'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import Icon from '../Icon/icon'

type InputSize = 'lg' | 'sm'

export interface InputProps extends Omit<InputHTMLAttributes<HTMLElement>,'size'>{
  disabled?: boolean;
  size?: InputSize;
  icon?: IconProp;
  prepend?: string | ReactElement;
  append?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = (props) => {
  //取出所有属性
  const {
    disabled,
    size,
    icon,
    prepend,
    append,
    style,
    ...restProps
  }=props

  //根据属性计算不同的className
  const cnames = classNames('kaito-input-wrapper', {
    [`input-size-${size}`]: size,
    'is-disabled': disabled,
    'input-group': prepend || append,
    'input-group-append': !!append,
    'input-group-prepand':!!prepend
  })

  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return ''
    }
    return value
  }
  if ('value' in props) {
    delete restProps.defaultValue
    restProps.value=fixControlledValue(props.value)
  }
  return (
    //根据属性判断是否添加节点
    <div className={cnames} style={style}>
      {prepend && <div className="input-group-prepand">{prepend}</div>}
      {icon && <div className="icon-wrapper"><Icon icon={icon} title={`title-${icon}`} /></div>}
      <input
        className="kaito-input-inner"
        disabled={disabled}
        {...restProps}
      />
      {append && <div className="kaito-input-group-append">{append}</div>}
    </div>
  )
}

export default Input;
 