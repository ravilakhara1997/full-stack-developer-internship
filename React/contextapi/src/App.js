import logo from './logo.svg';
import './App.css';
import GrandGrandParent from './propdriling/GrandGrandParent';
import MyContextProvider from './Contextdemo1/MyContext';
import MyGrandGrandParent from './Contextdemo1/MyGrandGrandParent';
import ThemeProvider from './Contextdemo2/themeContext';
import LoginContextProvider from './Contextdemo3/loginContext';
import Header from './Contextdemo2/Header';
import Login from './Contextdemo3/Login';

function App() {
  return (
   <LoginContextProvider>
    <Header/>
    <Login/>
   </LoginContextProvider>
  );
}

export default App;
