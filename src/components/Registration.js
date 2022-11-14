import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Header, Form } from 'semantic-ui-react'

class Registration extends Component {

  userDTO = { username: '', password: '', firstName: '', lastName: '' };
  user = { username: this.userDTO.username, password: this.userDTO.password, userFullName: this.userDTO.firstName + " " + this.userDTO.lastName };

  handleOnSubmit = (e) => {
    this.user.username=this.userDTO.username;
    this.user.password=this.userDTO.password;
    this.user.userFullName=this.userDTO.firstName + " " + this.userDTO.lastName;
    e.preventDefault();
    // this.props.dispatch(userRegister(Object.assign({}, this.user)));
  }


  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (

      <Modal show={this.props.show} onHide={this.props.onHide} style={{ display: 'flex' }}>
        <Modal.Header style={{ display: 'inline-flex' }} closeButton>
          <div>
            <Modal.Title style={{ width: '100%', fontWeight: '700', fontSize: '30px', color: 'black' }}>Sign Up</Modal.Title>
            <Header.Subheader>
              It's quick and easy
            </Header.Subheader>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form size='large' onSubmit={this.handleOnSubmit}>
            <Form.Group widths='equal'>

              <Form.Input placeholder='First name' onChange={e => this.userDTO.firstName = e.target.value} />

              <Form.Input placeholder='Last name' onChange={e => this.userDTO.lastName = e.target.value} />

            </Form.Group>

            <Form.Input placeholder='Username' onChange={e => this.userDTO.username = e.target.value} />

            <Form.Input placeholder='Password' onChange={e => this.userDTO.password = e.target.value} />

          </Form>
        </Modal.Body>
        <Modal.Footer style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <span style={{ fontSize: '12px', fontWeight: '300' }}>
            People who use our service may have uploaded your contact information to Facebook. Learn more.
            <br />
            <br />
            By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
            You may receive SMS notifications from us and can opt out at any time.
          </span>
          <button onClick={this.handleOnSubmit} style={{ border: '0', width: '45%', fontSize: '12px', margin: '20px', padding: '13px', borderRadius: '7px', backgroundColor: '#4BB543', color: 'white' }}>
            <h5>
              Sign Up
            </h5>
          </button>
        </Modal.Footer>
      </Modal>
    )
  }
}



export default Registration;