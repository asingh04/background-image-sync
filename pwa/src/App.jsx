import './App.css';
import SideMenu from './SideMenu';
import NewPostBtn from './NewPostBtn';
import NewPostForm from './NewPostForm';

function App() {
  return (
    <nav className="z-depth-0">
      <div className="nav-wrapper-container">
        <a href="/" >LazyGram</a>
        <span className="right grey-text text-darken-1">
          <i className="material-icons sidenav-trigger" data-target="side-menu">menu</i>
        </span>

        <SideMenu />
        <NewPostBtn />
        <NewPostForm />
      </div>
    </nav>
  );
}

export default App;
