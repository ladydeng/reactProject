import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Home = lazy(() => import('../views/index/index'));
const Login = lazy(() => import('../views/login/login'));

function App() {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      {/* </Suspense> */}
    </BrowserRouter>
  );
}

export default App;
