import React, { Fragment } from "react";
import { Switch, Route} from "react-router-dom";
import LoginPage from "../pages/loginPage"
import boardPage from "../pages/boardPage"
import Footer from "../components/common/footer"
import Header from "../components/common/header"




const Router = () => {
  return (
    <Fragment>
                <Header/>
                <Switch>  
                             {/* StartPage = LoginPage */}
                            <Route path="/" exact component={LoginPage} />
                            <Route path="/board" exact component={boardPage} />
                </Switch>
                <Footer/>
   
  </Fragment>
  );
}
 
 
  

export default Router;