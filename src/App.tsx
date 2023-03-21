import './App.scss'
import MainHeader from "./components/MainHeader/MainHeader";
import {Outlet} from "react-router";

function App() {

  return (
    <div className="App">
        <MainHeader title="Search for books"/>
        <Outlet/>
    </div>
  )
}

export default App
