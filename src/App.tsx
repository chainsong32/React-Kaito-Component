import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button, { ButtonSize } from './components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon'
import Transition from './components/Transition/transition'
import Input from './components/Input/input'
import axios from 'axios'

library.add(fas) 
const App: React.FC = () => {
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState('')
  const postData = {
    title: 'my title',
    body:'hello man'
  }

  useEffect(
    () => {
      axios.post('https://jsonplaceholder.typicode.com/posts', postData)
        .then(resp => {
          console.log(resp);
          setTitle(resp.data.title)  
      })
    }
  )

  //处理文件上传
  const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      //如果选择了文件
      const uploadedFile = files[0]
      const formData = new FormData()
      formData.append(uploadedFile.name,uploadedFile)
      axios.post("https://jsonplaceholder.typicode.com/posts", formData, {
        headers: {
          'Content-Type':'multipart/form-data'
        }
      }).then(resp => {
        console.log(resp)
      })
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       <input type="file" name="myFile" onChange={handleFileChange} />
        <Menu
          defaultIndex={'0'}
          onSelect={(index) => {
          console.log(index)
          }}
        defaultOpenSubMenus={['2']}
        >
          <MenuItem>cool link</MenuItem>
          <MenuItem>cool link2</MenuItem>
          <MenuItem>cool link3</MenuItem>

          <SubMenu title='dropdown'>
            <MenuItem>11</MenuItem>
            <MenuItem>22</MenuItem>
            <MenuItem>33</MenuItem>
          </SubMenu>
          
        </Menu>

        <Button size='lg' onClick={() => { setShow(!show) }}>Toggle</Button>
        <Transition
          in={show}
          timeout={500}
          animation="zoom-in-top"
          wrapper
        >
          <Button btnType="primary" size='lg'>A large button </Button>
        </Transition>

        <Input size='lg'></Input>
      </header>
    </div>
  );
}

export default App;