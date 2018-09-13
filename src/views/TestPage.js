import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import Navigation from "../components/Navigation";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

class TestPage extends Component {
  render() {
    return (
      <Fragment>
        <Grid container spacing={16} alignItems="center" direction="row">
          <Grid item>
            <Card>
              <CardContent>
                <Typography>Friend</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Navigation />
      </Fragment>
    );
  }
}

export default withRouter(TestPage);
