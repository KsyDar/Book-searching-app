import './App.scss'
import MainHeader from "./components/MainHeader/MainHeader";
import {Outlet} from "react-router";

function App() {

    return (
        <div className="app">
            <MainHeader title="Search for books"/>
            <Outlet/>
        </div>
    )
}

export default App
