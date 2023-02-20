import './App.css';
import BackBox from './components/BackBox';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
  
    <div className="flex w-full h-screen items-center justify-center">
      <div > <BackBox/></div>
      <div><Login/></div>
        <div><Register/></div>
      
     
     
      
    </div>
  );
}

export default App;
