import './App.css';
import HomeScreen from "./home.screen";
import SignScreen from "./sign.screen";
function App() {
    let loginCheck = false;
  return (
   <div className='web-base'>
       {
           loginCheck ? <HomeScreen/> : <SignScreen/>
       }
   </div>
  );
}

export default App;
