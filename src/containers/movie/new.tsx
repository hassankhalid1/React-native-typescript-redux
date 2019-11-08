import * as React from 'react';
import {Text, View, Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {connect} from 'react-redux';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {AppButton, AppTextInput, ScreenWrapper} from '../../components';
import {NavigationType} from '../../rootInterfaces';
import {AppState} from '../../rootReducer';
import {newMovie} from './actions';
import styles from './edit.styles';
import {MovieObj} from './interfaces';
import DocumentPicker from 'react-native-document-picker';
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
  public uploadDocumentHandler = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.images],
      });
      this.setState(prevState => ({
        movie: {
          ...prevState.movie,
          poster_path: res.uri,
        },
      }));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };
  public submitHandler = () => {
    this.state.movie &&
      this.props.newMovie(this.state.movie, this.props.navigation);
  };

  public render() {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex: 1}}
          >
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
              <DatePicker
                style={{width: '100%', marginVertical: 40}}
                date={this.state.movie.release_date}
                mode="date"
                androidMode="calendar"
                placeholder="select date"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0,
                  },
                  dateInput: {
                    // marginLeft: 36,
                    borderRadius: 5,
                    height: 50,
                    backgroundColor: '#eee',
                  },
                }}
                onDateChange={(date: string) => {
                  this.setState(prevState => ({
                    movie: {
                      ...prevState.movie,
                      release_date: date,
                    },
                  }));
                }}
              />
              <View style={{flex: 1}}>
                <Image
                  source={{uri: this.state.movie.poster_path}}
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
              <AppButton
                text="Select Cover Image"
                // textStyle={styles.buttonText}
                style={styles.button}
                onPress={() => {
                  this.uploadDocumentHandler();
                }}
              />
            </View>

            <View style={styles.buttonContainer}>
              <AppButton
                style={styles.button}
                text="Submit"
                onPress={() => {
                  this.submitHandler();
                }}
              />
            </View>
          </KeyboardAwareScrollView>
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
