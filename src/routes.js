import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Book from './pages/Book';
import Favorites from './pages/Favorites';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/favoritos" component={Favorites} />
        <Route path="/:id" component={Book} />
      </Switch>
    </BrowserRouter>
  );
}
