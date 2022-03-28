import React from "react";
import "./style.css"
import Button from "./Button"
const App = () => {
    return (
    <div>
        <h1 style={{textAlign: "center"}}>Hello World</h1>
        <Button title="App store"></Button>
        <Button title="Play Store"></Button>
        {/* <button className="button">Hey Shashwat</button> */}
    </div>
    );
}


export default App;