import * as React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles';
import {NavigationType} from '../../rootInterfaces';
import {ScreenWrapper} from '../../components';

export interface HomeProps {
  navigation: NavigationType['type'];
}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <ScreenWrapper>
        <View style={styles.container}>
          <View style={styles.innerContainer}>
            <Text style={styles.heading}>Wellcome To Movie TypeScript App</Text>
          </View>
          <View style={styles.buttonConatianer}>
            <Button
              color="#40b9ff"
              title="Browse Latest Movies"
              onPress={() => {
                this.props.navigation.navigate('MovieScreen');
              }}
            />
          </View>
        </View>
      </ScreenWrapper>
    );
  }
}

export default Home;
