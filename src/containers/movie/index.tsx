import * as React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {AppButton, MovieCard, ScreenWrapper} from '../../components';
import {NavigationType} from '../../rootInterfaces';
import {AppState} from '../../rootReducer';
import {deleteMovie, getMovies} from './actions';
import {MovieObj} from './interfaces';
import styles from './styles';

export interface HomeScreenProps {
  navigation: NavigationType['type'];
}

// export interface HomeScreenState {
//   type: IReduxMoviesState;
// }

class Movies extends React.Component<
  HomeScreenProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>,
  {}
> {
  public componentDidMount() {
    const {getMovies, isLoaded, moviesLoadedAt} = this.props;
    const oneHour = 60 * 60 * 1000;
    if (!isLoaded || !moviesLoadedAt || Date.now() - moviesLoadedAt > oneHour) {
      getMovies();
    }
  }
  deleteItemHanlder = (movie: MovieObj) => {
    this.props.deleteMovie(movie);
  };

  onEditItemHandler = (movie: MovieObj) => {
    this.props.navigation.navigate('MovieEditScreen', {movie});
  };

  public renderMovies = () => {
    const {movies} = this.props;
    return movies.map((movie: MovieObj, index: number) => (
      <MovieCard
        key={movie.id}
        data={movie}
        editItem={() => {
          this.onEditItemHandler(movie);
        }}
        deleteItem={() => {
          this.deleteItemHanlder(movie);
        }}
      />
    ));
  };

  public render() {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.headingText}>Recent Movies</Text>
          <AppButton
            text="Add Movie"
            style={styles.button}
            onPress={() => {
              this.props.navigation.navigate('NewMovieScreen');
            }}
          />
          <ScrollView style={styles.scrollContainer}>
            {this.renderMovies()}
          </ScrollView>
        </View>
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  movies: state.movieReducer.movies,
  isLoaded: state.movieReducer.moviesLoaded,
  moviesLoadedAt: state.movieReducer.moviesLoadedAt,
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
)(Movies);
