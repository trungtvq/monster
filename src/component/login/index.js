import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from 'react-bootstrap'
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RegisterComponent from '../register';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login';
import IconButton from '@material-ui/core/IconButton';
import { FcGoogle } from 'react-icons/fc';
import { FiFacebook } from 'react-icons/fi'
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  root: {
    flexGrow: 1,
  },
}));

const openAnotherModal = (closer, opener) => {
  closer()
  opener()
}

const LoginComponent = (props) => {
  const classes = useStyles();
  let closer = props.closer
  let registerOpenHandler = props.registerOpenHandler
  const responseFacebook = (response) => {
    console.log(response);
  }
  const responseGoogle = (response) => {
    console.log(response);
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>


        <Button
          variant="contained"
          color="primary"
          disabled
          className={classes.button}
          startIcon={<Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>}
        >
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>
        </Button>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid component="span" m={1}>
              <ButtonGroup className="mr-2" aria-label="Basic example">
                <Button variant="secondary">
                  <FacebookLogin
                    style={{ background: "blue", fontSize: 5 }}
                    appId="287813625551814"
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={renderProps => (
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={renderProps.onClick}>
                        <FiFacebook />
                      </IconButton>
                    )}
                  />
                </Button>
                <Button disabled>
                  or
                </Button>
                <Button variant="secondary">
                  <GoogleLogin
                    clientId="595655941041-29v7d0ta38dfkbbuciftjipido1rt5at.apps.googleusercontent.com"
                    render={renderProps => (
                      <IconButton color="primary" aria-label="upload picture" component="span" onClick={renderProps.onClick}>
                        <FcGoogle />
                      </IconButton>
                    )}
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}

                    cookiePolicy={'single_host_origin'}
                  /></Button>
              </ButtonGroup>

            </Grid>
            <Grid item>

            </Grid>
            <Grid item xs>
              <Button variant="outlined" color="secondary">
                Forgot password?
              </Button>
            </Grid>
            <Grid className={classes.form}  >
              <Button variant="contained" fullWidth className={classes.submit} onClick={() => openAnotherModal(closer, registerOpenHandler)} variant="body2">
                {"Don't have an account, Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
export default LoginComponent;