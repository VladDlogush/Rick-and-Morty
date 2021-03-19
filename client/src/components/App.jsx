import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Navigation from './Navigation';
import Loader from './Loader';

const AsyncHomePage = Loadable({
  loader: () => import('../pages/HomePage' /* webpackChunkName: "home-page" */),
  loading: Loader,
});

const AsyncCharactersPage = Loadable({
  loader: () =>
    import('../pages/CharactersPage' /* webpackChunkName: "characters-page" */),
  loading: Loader,
});

const AsyncCharacterPage = Loadable({
  loader: () =>
    import('../pages/CharacterPage' /* webpackChunkName: "character-page" */),
  loading: Loader,
});

const AsyncEpisodesPage = Loadable({
  loader: () =>
    import('../pages/EpisodesPage' /* webpackChunkName: "episodes-page" */),
  loading: Loader,
});

const AsyncLocationsPage = Loadable({
  loader: () =>
    import('../pages/LocationsPage' /* webpackChunkName: "locations-page" */),
  loading: Loader,
});

const AsyncMyWatchListPage = Loadable({
  loader: () =>
    import(
      '../pages/MyWatchListPage' /* webpackChunkName: "my-watch-list-page" */
    ),
  loading: Loader,
});

const AsyncNotFoundPage = Loadable({
  loader: () =>
    import(
      '../pages/NotFoundPage.jsx' /* webpackChunkName: "not-found-page" */
    ),
  loading: Loader,
});

const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/" exact component={AsyncHomePage} />
      <Route path="/characters/:characterId" component={AsyncCharacterPage} />
      <Route path="/characters" component={AsyncCharactersPage} />
      <Route path="/episodes" component={AsyncEpisodesPage} />
      <Route path="/locations" component={AsyncLocationsPage} />
      <Route path="/watch" component={AsyncMyWatchListPage} />
      <Route component={AsyncNotFoundPage} />
    </Switch>
  </div>
);

export default App;

/* навигация темно зеленая 
   остальние страници фон темно серый 
   добавить стили
*/

// подумать как можна оптимизировать код(HOC и другое)

/* сделать так, чтобы при вставке URL отображалась страница персонажа */
