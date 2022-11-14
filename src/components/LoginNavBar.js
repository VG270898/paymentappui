import React from "react";
import { Menu } from "semantic-ui-react"; 
import easypaylogo from "./images/easypaylogo.png"


const LoginNavBar = () => {
    return (
        <div style={{display:'block',width:'100%',height:'0'}}>
            
            <Menu inverted className="ui center" style={{height:'0',width:'100%',justifyContent:'center',border:'0px',backgroundColor:'rgb(130 38 95)',borderRadius:'0px',padding:'0px'}}>
                
                <Menu.Item
                style={{borderRight:'1px solid gray',margin:'5px'}}
                    name='EasyPay'
             
                />
                <Menu.Item
                style={{borderRight:'1px solid gray',margin:'5px'}}
                    name='About US'
               
                />
                <Menu.Item
                style={{borderRight:'0px',margin:'5px'}}
                    name='Customer Care'
          
                />
            </Menu>

            <div class='left' style={{borderBottomRightRadius:'15px',width:'34%',backgroundColor:'rgb(130 38 95)',display:'flex',justifyContent:'center',alignItems:'center',paddingTop:'3px',paddingBottom:'3px',top:'0',position:'fixed'}}>
                <img src={easypaylogo} style={{width:'47%',height:'47%',padding:'4px'}}></img>
                <h4 style={{fontSize:'18px',borderLeft:'2px solid white',padding:'15px',paddingBottom:'15px',marginTop:'15px',marginBottom:'15px',color:'white'}}><i>PAYMENT SYSTEM</i></h4>
                
            </div>
            <div style={{width:'50%',padding:'10px',marginTop:'40px',position:'absolute',right:'0',top:'0',textAlign:'right',paddingRight:'10%'}}>
                <span style={{fontWeight:'600',color:'rgb(130 38 95)'}}>Secured Login</span><br/>
                <span style={{fontSize:'11px',fontWeight:'550',color:'rgb(130 38 95)'}}>Personal information collected by App will not be disclosed</span>
                </div>

        </div>
    )
}

export default LoginNavBar