import { Outlet } from "react-router-dom"

import "./App.css"

export default function App(){
    const styles = {
        textAlign: 'center',
        color:"#e83d45"
    }
    return (
        <div className="App">
            <h1 style={styles}>List Character</h1>
            <Outlet/>
        </div>
    )
}