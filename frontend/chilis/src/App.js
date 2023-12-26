import React from 'react';
import Home from './pages/Home';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={About} />
        <Route path="/dashboard/create" component={createUser} />
      </Switch>
    </Router>
  );
}

export default App;
