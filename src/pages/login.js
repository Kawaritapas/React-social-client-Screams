import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import withStyles from '@material-ui/core/styles/withStyles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from "react-redux";
import { loginUser } from '../redux/actions/userActions';

const styles = {
    form: {
        textAlign: "center",
    },

}

class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {},
            disabled: false,
            processing: "LOGIN"
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.UI.errors) {
            this.setState({
                errors: nextProps.UI.errors,
                processing: nextProps.processing,
                disabled: nextProps.disabled
            })
        }
    }
    submitForm = (event) => {
        event.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(user, this.props.history);
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
                        <h1>Login</h1>
                        <br></br>
                        <form noValidate onSubmit={this.submitForm}>
                            <TextField name="email" type="email" label="email" value={this.state.email} onChange={this.changedField} helperText={errors.email} error={errors.email ? true : false} fullWidth required />
                            <TextField name="password" type="password" label="password" value={this.state.password} onChange={this.changedField} helperText={errors.password} error={errors.password ? true : false} fullWidth required />
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
                        <small>Dont have an account?.<Link to="/signup">Sign up here</Link></small>
                    </Grid>
                    <Grid item sm></Grid>
                </Grid>
            </div>

        )
    }
}

const mapStateToProps = (state) => ({
    user: state.user,
    UI: state.ui,
    processing: state.processing,
    disabled: state.disabled
})

const mapActionsToProps = {
    loginUser
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(login));
