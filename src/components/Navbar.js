import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from 'react-router-dom/Link';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

class Navbar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar style={{margin:"auto"}}>
                        <Button color="inherit" component={Link} to="/">
                            Home
                            </Button>
                        <Button color="inherit" component={Link} to="/login">
                            Login
                            </Button>
                        <Button color="inherit" component={Link} to="/signup">
                            Signup
                            </Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar
