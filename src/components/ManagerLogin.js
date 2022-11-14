import React from "react";
import { Link } from "react-router-dom";
import { Button, Divider, Form, Checkbox, Tab,Menu} from 'semantic-ui-react';
import icon2 from './images/manager-login-icon.png';

const ManagerLogin =()=>{
    return(
        
        <div className='ui card' style={{ padding: '15px', width: '97%', boxShadow: '1px 1px 4px 2px #DEDEDE', backgroundColor: 'rgb(135 20 91)', borderRadius: '10px' }}>
          <Form>
            <Form.Field>
              <input type={'text'} style={{ padding: '15px', borderRadius: '7px', fontSize: '18px' }} placeholder='MANAGER LOGIN ID'  required />
            </Form.Field>
            <Form.Field style={{ marginTop: '10px' }}>
              <input type={'password'} style={{ padding: '15px', borderRadius: '7px', fontSize: '18px', marginTop: "5px" }} placeholder='PASSWORD'  required />
            </Form.Field>
            <Form.Field style={{ textAlign: "center", marginTop: '18px' }}>
            <Link to='/home'>
              <Button style={{ width: '100%', borderRadius: '7px', fontSize: '18px', padding: '15px'}} className='ui primary button'><span style={{ fontSize: '20px' }}>Login as Manager</span></Button>
            </Link>
              <label style={{ fontSize: "14px", paddingTop: "16px", fontWeight: '400'}}><a style={{color:'white'}}>Forgottten password?</a></label>
            </Form.Field>
            <Divider></Divider>
          </Form>
        </div>
    )
}

export default ManagerLogin