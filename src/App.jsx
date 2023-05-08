import React, { Component } from "react";
import { createRoot } from "react-dom/client"
import VendingMachine from "./Maquina";

class App extends Component {
    render() {
        return(
            <div className="App">
                <VendingMachine />
            </div>
        )
    }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);