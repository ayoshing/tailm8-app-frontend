import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block', // Fix IE11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

class SignUpForm extends React.Component {

  state = {
    name: '',
    email: '',
    password: '',
    password2: '',
    accountType: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Name</InputLabel>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <Input
                  id="email"
                  name="email"
                  autoComplete="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  autoFocus />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password2">Confirm Password</InputLabel>
                <Input
                  name="password2"
                  type="password2"
                  id="password2"
                  autoComplete="current-password"
                  value={this.state.password2}
                  onChange={this.handleChange}
                />
              </FormControl>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="accountType">Account Type</InputLabel>
                <Select
                  value={this.state.accountType}
                  onChange={this.handleChange}
                  inputProps={{
                    name: 'accountType',
                    id: 'accountType',
                  }}
                >
                  <MenuItem value="Pet">
                    <em>Pet (Default)</em>
                  </MenuItem>
                  <MenuItem value='business'>Business</MenuItem>
                </Select>
              </FormControl>

              <Button
                type="submit"
                fullWidth
                variant="outlined"
                color="primary"
                className={classes.submit}
              >
                Create Account
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);
