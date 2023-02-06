import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import MyFooter from './Components/MyFooter';
import BookList from './Components/BookList';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
     
      <BookList  />
      <AllTheBooks />
   
      <MyFooter />
    </div>
  );
}

export default App;
