import * as React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {AppState} from '../../rootReducer';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {getMovies, deleteMovie} from './actions';
import {MovieCard} from '../../components';
import {Movie} from './reducer';
import {connect} from 'react-redux';
import styles from './styles';

// export interface HomeScreenProps {
//   type: IReduxMoviesState;
// }

// export interface HomeScreenState {
//   type: IReduxMoviesState;
// }

class HomeScreen extends React.Component<
  ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>,
  {}
> {
  public componentDidMount() {
    const {getMovies, isLoaded, moviesLoadedAt} = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || !moviesLoadedAt || Date.now() - moviesLoadedAt > oneHour) {
      getMovies();
    }
  }
  deleteItemHanlder = (movie: Movie) => {
    this.props.deleteMovie(movie);
  };

  public renderMovies = () => {
    const {movies} = this.props;
    return movies.map((movie: Movie, index: number) => (
      <MovieCard
        key={movie.id}
        data={movie}
        deleteItem={() => {
          this.deleteItemHanlder(movie);
        }}
      />
    ));
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Recent Movies</Text>
        <ScrollView style={styles.scrollContainer}>
          {this.renderMovies()}
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  movies: state.homeReducer.movies,
  isLoaded: state.homeReducer.moviesLoaded,
  moviesLoadedAt: state.homeReducer.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getMovies,
      deleteMovie,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
