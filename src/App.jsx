import React, { Component } from "react";
import { createRoot } from "react-dom/client"
import VendingMachine from "./Maquina";
import {  BrowserRouter, Routes, Route } from "react-router-dom";
import Config from "./Config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions : {
        queries : {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

class App extends Component {
    render() {
    return(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
                <Routes>
                    <Route path="/Config/" element={<Config />}/>
                    <Route path="/" element={<VendingMachine />}/>
                </Routes>
        </QueryClientProvider>
    </BrowserRouter>
    );
    }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);