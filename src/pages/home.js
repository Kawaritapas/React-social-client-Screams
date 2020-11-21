import React, { Component } from 'react';
import Scream from '../components/Scream';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class home extends Component {
    state = { screams: null };
    componentDidMount() {
        axios({
            method: "get",
            url: "/screams"
        })
            .then(res => {
                if (res && res.data) {
                    console.log(res.data);
                    this.setState({ screams: res.data })

                }
            })
            .catch(err => {
                console.log({ error: err.message });
            })
    };

    render() {
        let recentScreams = this.state.screams ? (
            this.state.screams.map(scream=> <Scream key={scream.screamId} screams={scream}/>)
            ) : ( <p>Loading...</p>);

        return (
            <Grid container spacing={16}>
                <Grid item sm={8} xs={12}>
                    {recentScreams}
                </Grid>
                <Grid item sm={4} xs={12}>
                    content...
               </Grid>
            </Grid>
        )
    }
}

export default home
