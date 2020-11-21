import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = {
    form: {
        textAlign: "center",
    },

}

class signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
            disabled: false,
            confirmPassword: "",
            handle: "",
            processing: "Signup"
        }
    }

    submitForm = (event) => {
        event.preventDefault();
        this.setState({ processing: <CircularProgress size={30} color="primary" />, disabled: true })
        let user = {
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword,
            handle: this.state.handle
        }
        axios.post('/signup', user)
            .then(res => {
                localStorage.setItem('userTokenId',`Bearer ${res.data.token}`);
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({
                    errors: err.response.data,
                    processing: "Signup",
                    disabled: false
                })
            })
    }
    changedField = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    render() {
        let { classes } = this.props;
        let { errors, disabled } = this.state;
        return (
            <div>
                <Grid container className={classes.form}>
                    <Grid item sm>
                    </Grid>
                    <Grid item sm>
                        <br></br>
                        <h1>Sign Up</h1>
                        <br></br>
                        <form noValidate onSubmit={this.submitForm}>
                            <TextField name="email" type="email" label="email" value={this.state.email} onChange={this.changedField} helperText={errors.email} error={errors.email ? true : false} fullWidth required />
                            <TextField name="password" type="password" label="password" value={this.state.password} onChange={this.changedField} helperText={errors.password} error={errors.password ? true : false} fullWidth required />
                            <TextField name="confirmPassword" type="confirmPassword" label="Confirm password" value={this.state.confirmPassword} onChange={this.changedField} helperText={errors.matchPassword} error={errors.matchPassword ? true : false} fullWidth required />
                            <TextField name="handle" type="handle" label="Handle" value={this.state.handle} onChange={this.changedField} helperText={errors.handle} error={errors.handle ? true : false} fullWidth required />
                            <br></br>
                            <br></br>
                            <div style={{ color: "red" }}>
                                {errors.error}
                                {errors.general}
                            </div>
                            <br></br>
                            <Button color="primary" type="submit" variant="contained" className={classes.button} disabled={disabled}>
                                {this.state.processing}
                            </Button>
                        </form>
                        <small>already have an account?.<Link to="/login">login here</Link></small>
                    </Grid>
                    <Grid item sm></Grid>
                </Grid>
            </div>

        )
    }
}

export default withStyles(styles)(signup);
