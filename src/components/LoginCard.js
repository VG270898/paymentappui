import React, { Component, useState } from 'react';
import { Button, Divider, Form, Checkbox, Tab, Menu } from 'semantic-ui-react';
import icon1 from './images/user-login-icon.png';
import icon2 from './images/manager-login-icon.png';
import ManagerLogin from './ManagerLogin';
import UserLogin from './UserLogin';
import LoginNavBar from './LoginNavBar';



class LoginCard extends Component {
  

  render() {
    const panes = [
      {
        menuItem: (
          <Menu.Item style={{borderRight:'1px solid grey'}}>
            <a class='user-login'>

              <h4 class="ui header" style={{ paddingTop: '3px', paddingBottom: '3px' }}>
                <img style={{ width: '23px', height: '23px' }} src={icon1}></img>
                <div class="content" style={{ paddingLeft: '8px',color:'white'}}>User Login</div>
              </h4>

            </a>
          </Menu.Item>
        ),
        render: () =>
          <Tab.Pane style={{backgroundColor:'#FAF9F6',boxShadow: '3px 3px 8px 3px #DEDEDE' ,display: 'flex', justifyContent: 'center', borderRadius:'10px', borderTopLeftRadius: '0px',borderTopRightRadius: '0px'}}>
            <UserLogin />
          </Tab.Pane>

      },

      {
        menuItem: (
          <Menu.Item style={{borderLeft:'1px solid grey'}}>
            <a class='manager-login'>

              <h4 class="ui header" style={{ paddingTop: '3px', paddingBottom: '3px' }}>
                <img style={{ width: '23px', height: '23px' }} src={icon2}></img>
                <div class="content" style={{ paddingLeft: '8px',color:'white'}}>Manager Login</div>
              </h4>

            </a>
          </Menu.Item>
        ),
        render: () =>
          <Tab.Pane style={{ backgroundColor:'#FAF9F6',boxShadow: '3px 3px 6px 3px #DEDEDE',display: 'flex', justifyContent: 'center',borderRadius:'10px', borderTopLeftRadius: '0px',borderTopRightRadius: '0px', }}>
            <ManagerLogin />
          </Tab.Pane>
      }
    ]



    return (
      <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', width: '100%', marginTop: '150px' }}>
        <Tab panes={panes} class='login-tab' menu={{ secondary: true, pointing: true }} style={{ width: '30%'}} />
      </div>
    )
  }
}



export default LoginCard;