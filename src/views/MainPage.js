import React, { Component, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import LoginForm from '../components/LoginForm';


export default class extends Component {

  render() {
    return (
      <div>
        <Grid
          container
          spacing={12}
          alignItems='center'
          justify='center'
          direction='column'
          style={{marginTop:200}}
          >
          <Grid item xs><LoginForm /></Grid>
          <Grid item xs>
            <Button variant="outlined" color="primary" href="/login" style={{marginTop: 50 }}>Login Button</Button>
          </Grid>
          <Grid item xs>
            <Button variant="contained" color="primary" href="/signup" style={{marginTop: 10}}>Create An Account</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}
