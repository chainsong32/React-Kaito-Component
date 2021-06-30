import React, { createContext, useState } from 'react'
import {MenuItemProps} from './menuItem'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectIndex: string) => void

export interface MenuProps{
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

interface IMenuContext{
  index: string;
  onSelect?: SelectCallback;
  mode?: MenuMode;
  defaultOpenSubMenus?: string[];
}

export const MenuContext=createContext<IMenuContext>({index:'0'})


const Menu: React.FC<MenuProps> = (props) => {

  const { className, mode, style, children, defaultIndex,onSelect,defaultOpenSubMenus } = props
  const [currentActive,setActive] = useState(defaultIndex)
  const classes = classNames('kaito-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal':mode!=='vertical'
  })

  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus,
  }

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElemnet = child as React.FunctionComponentElement<MenuItemProps>
      const { displayName } = childElemnet.type
      if (displayName === 'MenuItem'||displayName==='SubMenu') {
        return React.cloneElement(childElemnet,{index:index.toString()})
      } else {
        console.error('Warning:Menu has a child which is not a MenuItem');
      }
    })
}

  return (
    <ul className={classes} style={style} data-testid="test-menu">
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus:[],
}

export default Menu
