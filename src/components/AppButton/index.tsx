import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import appButtonStyle from './appButtonStyle';

export default class AppButton extends React.Component {
  public props: any;
  public text: any;
  public onPress: any;
  public style: any;
  public isLoading: any;
  public textStyle: any;
  public disabled: any;

  render() {
    const {text, onPress, style, isLoading, textStyle, disabled} = this.props;
    return (
      <TouchableOpacity
        disabled={disabled}
        style={[appButtonStyle.buttonStyle, style]}
        onPress={onPress}>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={this.props.loaderColor ? this.props.loaderColor : '#0087d1'}
          />
        )}
        {!isLoading && (
          <Text style={[appButtonStyle.textStyle, textStyle]}>{text}</Text>
        )}
      </TouchableOpacity>
    );
  }
}
