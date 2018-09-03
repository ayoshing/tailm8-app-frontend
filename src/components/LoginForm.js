import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export default class extends Component {

  state = {
    email: '',
    password: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return(
      <Grid
        container
        spacing={12}
        justify='center'
        alignItems='center'
        direction='column'
        >
          <Grid item>
            <TextField
              required
              id='email'
              name='email'
              label='Email'
              value={this.state.email}
              onChange={this.handleChange}
              margin='normal'
            />
          </Grid>
          <Grid item>
            <TextField
              required
              id='password'
              name='password'
              label='Password'
              value={this.state.password}
              onChange={this.handleChange}
              margin='normal'
              type='password'
            />
          </Grid>
      </Grid>
    )
  }
}
