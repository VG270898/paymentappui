import React from "react";
import { Button, Card, Feed, Header, Icon } from "semantic-ui-react";
import favicon from "./images/favicon.png"
import b1 from "./images/airtel-logo.jpg"
import b2 from "./images/Jio-logo.png"
import b3 from "./images/adani-logo.jpg"
import b4 from "./images/vi-logo.png"

const RegisteredBillers = () => {
    return (
        <Card style={{ width: '100%', height: '100%',}}>
            <Card.Content>
                <Card.Header style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '46%' }}>
                        <img src={favicon} style={{ width: '40px', height: '40px', borderRadius: '50px', boxShadow: '0px 0px 6px 3px #DEDEDE' }}></img>
                        <span style={{ textShadow: '1px 1px 3px #DEDED8', fontSize: '16px', fontFamily: 'sans-serif' }}>Saved Billers</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'right', width: '54%' }}>
                        <Button style={{ borderRadius: '20px', fontSize: '12px', paddingTop: '5px', paddingBottom: '5px', padding: '8px' }}>See all</Button>
                    </div>

                </Card.Header>
            </Card.Content>
            <Card.Content>
                <Feed className="ui cards" style={{justifyContent:'center'}}>
                    <a className="ui card" style={{borderRadius:'10px'}}>
                        <Header as='h4' icon>
                            <img src={b1} style={{width:'140px',height:'80px'}}/><br/>
                            6398222157
                        </Header>
                    </a>

                    <a className="ui card" style={{borderRadius:'10px'}}>
                        <Header as='h4' icon>
                            <img src={b2} style={{width:'140px',height:'80px'}}/><br/>
                            6398222157
                        </Header>
                    </a>
                    <a className="ui card" style={{borderRadius:'10px'}}>
                        <Header as='h4' icon>
                            <img src={b3} style={{width:'140px',height:'80px'}}/><br/>
                            6398222157
                        </Header>
                    </a>
                    <a className="ui card" style={{borderRadius:'10px'}}>
                        <Header as='h4' icon>
                            <img src={b4} style={{width:'140px',height:'80px'}}/><br/>
                            6398222157
                        </Header>
                    </a>

                </Feed>
            </Card.Content>
        </Card>
    )
}

export default RegisteredBillers;