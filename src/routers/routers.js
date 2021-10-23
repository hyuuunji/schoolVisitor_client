import React, { Fragment } from "react";
import { Switch, Route,BrowserRouter} from "react-router-dom";
import LoginPage from "../pages/loginPage"
import boardPage from "../pages/boardPage"
import Footer from "../components/common/footer"




const Router = () => {
  return (
    <Fragment>
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