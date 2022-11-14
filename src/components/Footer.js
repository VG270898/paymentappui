import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import easypaylogo from "./images/easypaylogo-footer.png"


const Footer = () => {
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'absolute', bottom: '0' }}>
            
            <Grid columns='equal' divided inverted padded style={{borderTop:'2px solid #d8d8d8',width:'80%'}}>
                <Grid.Row textAlign='center' style={{padding:'3px'}}>
                    <Grid.Column style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Segment style={{color:'rgb(130 38 95)',backgroundColor:'transparent',border:'0',boxShadow:'0px 0px 0px 0px'}}>
                            Copyrightⓒ2022, EasyPay | All Rights Reserved.
                        </Segment>
                    </Grid.Column>
                    <Grid.Column style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                        <Segment style={{padding:'3px',backgroundColor:'transparent',border:'0',boxShadow:'0px 0px 0px 0px',}}>
                            <img src={easypaylogo} style={{width:'156px',height:'40px',marginTop:'6px'}}></img>
                        </Segment>
                    </Grid.Column>
                    <Grid.Column style={{display:'flex',justifyContent:'center'}}>
                        <Segment style={{display:'flex',border:'0',boxShadow:'0px 0px 0px 0px',justifyContent:'space-around',alignItems:'center',width:'50%',padding:'3px',backgroundColor:'transparent'}}>
                            <i className="ui large black google circular icon"></i>
                            <i className="ui  large black linkedin circular icon"></i>
                            <i className="ui large black facebook f circular icon"></i>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )

}

export default Footer