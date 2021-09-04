import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import {GlobalStyle} from "./GlobalStyled"
import Hero from "./components/Hero"
import Products  from "./components/Products/index"
import {productsData} from "./components/Products/data"
import Features from "./components/Features/index"
import Sweets from "./components/Sweets/index"
import {sweetData} from "./components/Sweets/dataTwo"
import Footer from "./components/Footer/index"

function App() {
  return (
    <>
    <Router>
    <GlobalStyle/>
   <Hero/>
   <Products heading="choose your favorite" data={productsData}/>
   <Features/>
   <Sweets  heading="sweet treats for you" dataTwo={sweetData}/>
   <Footer/>
    <Switch>
      <Route path ="/" exact />
      {/* <Route path ="/" exact component={}/> */}
    </Switch>
    </Router>
    </>
  );
}

export default App;
