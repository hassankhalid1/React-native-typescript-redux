import React from 'react';
import {TextInput, View, Text} from 'react-native';
import appTextInputStyle from './styles';

class AppTextInput extends React.Component {
  public state: any;
  public props: any;
  public setState: any;
  public isFocused: any;

  constructor(props: any) {
    super(props);

    this.state = {
      isFocused: false,
      text: this.props.text ? this.props.text : '',
      borderColorChange: false,
    };
  }
  handleBlur = () => this.setState({isFocused: false});
  onChangeText = (text: string) => {
    this.setState(
      {
        text,
      },
      () => this.props.getText(text),
    );
  };

  onFocus = () => {
    this.setState({
      borderColorChange: true,
      isFocused: true,
    });
  };

  onEndEditing = () => {
    this.setState({
      borderColorChange: false,
    });
  };

  render() {
    const {isFocused} = this.state;
    const labelStyle = {
      // position: 'absolute',
      left: 6,
      // zIndex: 9999,
      width: '100%',
      top: !isFocused ? 35 : 5,
      fontSize: !isFocused ? 16 : 16,
      color: !isFocused ? 'red' : 'red',
      paddingBottom: !isFocused ? 5 : 5,
    };
    const labelFilledStyle = {
      // position: 'absolute',
      left: 6,
      width: '100%',
      top: !isFocused ? 5 : 5,
      paddingBottom: !isFocused ? 5 : 5,
      fontSize: !isFocused ? 16 : 16,
      color: !isFocused ? 'green' : 'red',
    };

    const styleFilled = {
      paddingTop: 25,
    };
    const styleEmpty = {
      paddingTop: 25,
    };
    return (
      <View
        style={{
          width: '100%',
          justifyContent: 'center',
          overflow: 'visible',
        }}>
        <View style={this.state.isFocused ? styleFilled : styleEmpty}>
          {this.state.text ? (
            <Text style={labelFilledStyle}>{this.props.label}</Text>
          ) : (
            <Text style={labelStyle}>{this.props.label}</Text>
          )}
          <TextInput
            placeholderTextColor="red"
            style={[
              appTextInputStyle.appInputField,
              this.state.borderColorChange &&
                appTextInputStyle.appInputBorderChange,
              this.props.style,
            ]}
            multiline={this.props.multiline}
            onBlur={this.handleBlur}
            value={this.state.text}
            placeholder={this.state.isFocused ? '' : this.props.placeholder}
            onChangeText={text => this.onChangeText(text)}
            onFocus={() => this.onFocus()}
            onEndEditing={() => this.onEndEditing()}
            autoFocus={this.props.autoFocus}
            selectionColor="#0089d4"
          />
        </View>
      </View>
    );
  }
}

export default AppTextInput;
