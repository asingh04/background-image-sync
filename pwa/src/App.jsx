import {useState, useCallback} from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer';
import SideMenu from './SideMenu';
import NewPostBtn from './NewPostBtn';
import NewPostForm from './NewPostForm';
import {makeStyles} from ''



function App() {
  const [isCreatePostFormOpen, setCreatePostForm] = useState(false)

  const toggleCreatePostForm = useCallback(() => {
      setCreatePostForm(flag => !flag)
  },[])
  return (
    <AppBar position="static">
        <a href="/" >LazyGram</a>
        <IconButton edge="end">
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="left"
          open={isCreatePostFormOpen}
          onClose={toggleCreatePostForm}
        >

        </Drawer>
        {/* <SideMenu /> */}
        {/* <NewPostBtn />
        <NewPostForm /> */}
    </AppBar>
  );
}

export default App;
