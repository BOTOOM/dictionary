import React, {FC } from 'react'
import NavBar from './components/NavBar';
import Container from '@material-ui/core/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'


import './App.css';
import PageNotFound from './components/PageNotFound';
import Academic from './pages/academic';

const App: FC = () => {

  return (
    <div className="contenedor_general">
      <NavBar />
      <Container fixed>
        {/* <Router> */}
          <Switch>
            <Route exact path="/dictionary/academic">
              <Academic/> 
            </Route>
            <Route path="/dictionary/urban">
              urban
            </Route>
            <Route>
              <PageNotFound/>
            </Route>
          </Switch>
        {/* </Router> */}
      </Container>
    </div>
  );
}

export default App;
