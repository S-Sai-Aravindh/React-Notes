// import logo from './logo.svg';
import './App.css';
import ClassComp from './components/ClassComp';
import CondionalRenComp from './components/CondionalRenComp';
import EventComp from './components/EventComp';
import FunComp from './components/FuncComp';
import MyStateComp from './components/MyStateComp';
import SaiFuncComp from './Tasks/SaiFuncComp';
import CssComp from './components/CssComp';
import ParentComp from './components/ParentComp';
import ClickCounterComp from './Tasks/ClickCounterComp';
import HoverCounterComp from './Tasks/HoverCounterComp';
import MyimagesComp from './Tasks/MyimagesComp';
import UserComp from './Tasks/UserComp';
import ErrorBoundaryComp from './components/ErrorBoundaryComp';
import VirtualDOM from './components/VirtualDOM';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Roronoa Zoro</h1>
      {/* <FunComp fname="Sai" post="Developer"></FunComp>
      <SaiFuncComp fname = "Sai" lname="Aravindh" salary = {50000} gender = "Male" address= "Chennai"></SaiFuncComp>
      <ClassComp fname = "Zoro" post = "Swordsman" />
      <EventComp />
      <MyStateComp />
      <CondionalRenComp />
      <CssComp /> */}
      {/* <ParentComp gender = "Male" contact = {9876556789}/> */}
      <ClickCounterComp />
      <HoverCounterComp />
      <MyimagesComp />

      <ErrorBoundaryComp>
      <UserComp name="Sai" salary={5000}/>
      </ErrorBoundaryComp>


      <ErrorBoundaryComp>
      <UserComp name="Zoro" salary={15000}/>
      </ErrorBoundaryComp>
      <ErrorBoundaryComp>
      <UserComp name="Luffy" salary={25000}/>
      </ErrorBoundaryComp>
      {/* <ErrorBoundaryComp>
      <UserComp name="Brook" salary={35000}/>
      </ErrorBoundaryComp> */}
      
      {/* <VirtualDOM/> */}
    </div>
  );
}

export default App;
