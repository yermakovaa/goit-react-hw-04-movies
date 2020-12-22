import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from './components/Container';
import AppBar from './components/AppBar';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import MovieDetailsPage from './views/MovieDetailsPage';

function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/goit-react-hw-04-movies/" exact>
          <HomePage />
        </Route>

        <Route path="/goit-react-hw-04-movies/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/goit-react-hw-04-movies/movies/:movieId">
          <MovieDetailsPage />
        </Route>
      </Switch>
      <ToastContainer autoClose={3700} />
    </Container>
  );
}

export default App;
