import React from "react"
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import home from "./pages/about";
import portfolio from "./pages/portfolio"
import contacts from "./pages/contacts"

const App = () => 
    (

        <div>
            <BrowserRouter>
            <Header/>
                    <Route exact path ="/about" component={home} />
                    <Route exact path="/portfolio" component={portfolio} />
                    <Route exact path="/contacts" component={contacts} />

                 <Footer/>
            </BrowserRouter>
        </div>
    )


export default App
