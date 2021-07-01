
import './App.css';
import { Typography, Button, CssBaseline, Container, Grid, AppBar, Toolbar, IconButton } from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import PenIcon from "@material-ui/icons/Create"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import PostsList from "./components/postList"
import AddPostForm from "./components/AddPostForm"


import React from 'react'




const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    //marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  container: {
    //marginTop: theme.spacing(3)
  }
}))

const App = () => {
  const Classes = useStyles()
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="lg">
        <AppBar position="static" color="inherit" elevation={0} >
          <Toolbar>
            <IconButton edge="start" className={Classes.container} ></IconButton>
            <Typography variant={6} color="secondary" className={Classes.title}></Typography>
            <a href="http://localhost:3000/posts">Blogfy</a>
            <Button color="primary" variant="outlined" startIcon={<PenIcon />}>Yeni yazı</Button>
          </Toolbar>
        </AppBar>
        <Grid container className={Classes.container}>
          <Grid item xs={12}>
            <Router>
              <Switch>
                <Route exact path="/posts" component={PostsList}/>
              </Switch>
              <Redirect from="/" to="/posts"/>
            </Router>
          </Grid>

        </Grid>

      </Container>
      <AddPostForm/>
    </div>
  )
}

export default App
