import { render } from "@testing-library/react";
import React, { Component } from "react";
import LandingBody from "./LandingBody";
import LandingNavBar from "./LandingNavBar";


class LandingPage extends Component{
    render(){
        return(
            <div style={{display:'grid'}}>
                <LandingNavBar/>
                <div style={{margin:'8%'}}><LandingBody/></div>
                
            </div>
            
        )
    }
}

export default LandingPage