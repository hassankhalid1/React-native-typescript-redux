import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {MovieObj} from './interfaces';
import {connect} from 'react-redux';
import {AppState} from '../../rootReducer';
import {newMovie} from './actions';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import styles from './edit.styles';
import {AppTextInput, ScreenWrapper, MovieCard} from '../../components';
import {NavigationType} from '../../rootInterfaces';

export interface NewScreenProps {
  navigation: NavigationType['type'];
}

export interface EditScreenState {
  movie: MovieObj;
}

class NewMovie extends React.Component<
  NewScreenProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>,
  Readonly<EditScreenState>
> {
  constructor(props: NewScreenProps & ReturnType<typeof mapDispatchToProps>) {
    super(props);
    this.state = {
      movie: {
        title: '',
        vote_average: '',
        id: '23343245324',
        overview: '',
        poster_path: '',
        release_date: '',
      },
      //   movie:typeof <MovieObj>
    };
  }
  public submitHandler = () => {
    this.state.movie &&
      this.props.newMovie(this.state.movie, this.props.navigation);
  };

  public render() {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.headingText}>New Movie</Text>
          <View style={styles.innerContainer}>
            <AppTextInput
              placeholder="Title"
              style={styles.input}
              label="Title"
              getText={(text: string) => {
                this.setState(prevState => ({
                  movie: {
                    ...prevState.movie,
                    title: text,
                  },
                }));
              }}
              onFocus
              text={this.state.movie.title}
            />
            <AppTextInput
              placeholder="Rating"
              style={styles.input}
              label="Rating"
              getText={(text: string) => {
                this.setState(prevState => ({
                  movie: {
                    ...prevState.movie,
                    vote_average: text,
                  },
                }));
              }}
              onFocus
              text={this.state.movie.vote_average.toString()}
            />
            <AppTextInput
              placeholder="Release Date"
              style={styles.input}
              label="Release Date"
              getText={(text: string) => {
                this.setState(prevState => ({
                  movie: {
                    ...prevState.movie,
                    release_date: text,
                  },
                }));
              }}
              onFocus
              text={this.state.movie.release_date}
            />
          </View>
          <View style={styles.buttonContainer}>
            <Button
              title="Submit"
              onPress={() => {
                this.submitHandler();
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  // isLoaded: state.homeReducer.moviesLoaded,
  // moviesLoadedAt: state.homeReducer.moviesLoadedAt,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      newMovie,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMovie);
