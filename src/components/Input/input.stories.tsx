import React, { useState } from 'react'
import Input from './input'
import { storiesOf } from '@storybook/react'
import {action} from '@storybook/addon-actions'

//受控组件
const ControlledInput = () => {
  const [value, setValue] = useState('')
  return <Input value={value} onChange={(e)=>{setValue(e.target.value)}}/>
}

const defaultInput = () => (
  <>
    <Input
      style={{ width: '300px' }}
      placeholder="placeholder"
      onChange={action('changed')}
    />
  </>
)

const disabledInput = () => (
  <Input
    style={{ width: '300px' }}
    placeholder='disabled input'
    disabled
  />
)

const iconInput = () => (
  <>
    <Input
      style={{ width: '300px' }}
      defaultValue="large value"
      size="lg"
    />
    <Input
      style={{ width: '300px' }}
      placeholder="large size"
      size="lg"
    />
  </>
)

const sizeInput = () => (
  <>
    <Input
      style={{ width: '300px' }}
      defaultValue="large size"
      size="lg"
    />
    <Input
      style={{ width: '300px' }}
      placeholder="small size"
      size="sm"
    />
  </>
)



storiesOf('Input component', module)
  .add('Input', defaultInput)
  .add('被禁用的 Input', disabledInput)
  .add('带图标的 Input', iconInput)
  .add('大小不同的 Input', sizeInput)
