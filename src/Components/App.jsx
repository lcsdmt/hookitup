import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "isomorphic-fetch";
import "es6-promise";
import Display from './Display';
import Info from './Info';


const App = () => {

  return (

    <div className="container wrap">
      <Router>
        <>
          <Switch>
            <Route exact path="/" component={Display} />
            <Route path="/:id/details" component={Info} />
          </Switch>
        </>
      </Router>
    </div>

  )

}



export default App;
