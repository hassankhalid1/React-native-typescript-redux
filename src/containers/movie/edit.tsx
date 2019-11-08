import * as React from 'react';
import {Text, View, Image} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {connect} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AnyAction, bindActionCreators, Dispatch} from 'redux';
import {AppButton, AppTextInput, ScreenWrapper} from '../../components';
import {NavigationType} from '../../rootInterfaces';
import {AppState} from '../../rootReducer';
import DocumentPicker from 'react-native-document-picker';
import {editMovie} from './actions';
import styles from './edit.styles';
import {MovieObj} from './interfaces';

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

  public render() {
    const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';
    const path = this.state.movie.poster_path.length < 35;
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <KeyboardAwareScrollView
            scrollEnabled={true}
            contentContainerStyle={{flex: 1}}>
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
                  source={
                    path
                      ? {uri: `${POSTER_PATH}${this.state.movie.poster_path}`}
                      : {uri: this.state.movie.poster_path}
                  }
                  resizeMode="contain"
                  style={styles.image}
                />
              </View>
              <AppButton
                text="Change Image"
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
      editMovie,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditScreeen);
