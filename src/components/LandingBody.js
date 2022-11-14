import React, { Component } from "react";
import { Grid, Segment } from 'semantic-ui-react'
import RegisteredBillers from "./RegisteredBillers";

class LandingBody extends Component {

    render() {
        return (
            <div>
                <Grid columns={3}>
                    <Grid.Row stretched>
                        <Grid.Column>
                            <Segment><RegisteredBillers/></Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>1</Segment>
                            <Segment>2</Segment>
                            <Segment>3</Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default LandingBody