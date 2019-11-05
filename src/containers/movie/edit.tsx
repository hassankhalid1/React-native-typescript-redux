import * as React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {MovieObj} from './interfaces';
import {connect} from 'react-redux';
import {AppState} from '../../rootReducer';
import {editMovie} from './actions';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import styles from './edit.styles';
import {AppTextInput, MovieCard, ScreenWrapper} from '../../components';
import {NavigationType} from '../../rootInterfaces';

export interface EditScreeenProps {
  navigation: NavigationType['type'];
}

export interface EditScreeenState {
  movie: MovieObj;
}

class EditScreeen extends React.Component<
  EditScreeenProps &
    ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>,
  Readonly<EditScreeenState>
> {
  constructor(props: EditScreeenProps & ReturnType<typeof mapDispatchToProps>) {
    super(props);
    this.state = {
      movie: this.props.navigation.state.params.movie,
    };
  }
  public submitHandler = () => {
    this.props.editMovie(this.state.movie, this.props.navigation);
  };

  public render() {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <Text style={styles.headingText}>{this.state.movie.title}</Text>
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
      editMovie,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditScreeen);
