import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout,Text, Icon } from '@ui-kitten/components';
import {login} from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';

//const [loading, setLoading] = useState(true);
const ArrowIcon = (props) => (
  <Icon {...props} name='arrow-right-outline'/>
);

export default class HomeScreen extends React.Component {

  state = { user: null };

  async componentDidMount() {
    console.log("componentDidMount called in HomeScreen.js");
    await login();
    try {
      const JSESSIONID = await AsyncStorage.getItem('JSESSIONID')    
      const LBLSESSIONID = await AsyncStorage.getItem('LBLSESSIONID')    
      if(JSESSIONID !== null) {      // value previously stored    
        console.log(JSESSIONID);
        console.log(LBLSESSIONID);
        this.setState({ user: JSESSIONID });
      }
    } catch(e){

    }

  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>HOME</Text>
        <Text>{this.state.user}</Text>

        <Button
            style={styles.signUpButton}
            size=''
            accessoryLeft={ArrowIcon}
            onPress={() => this.props.navigation.navigate('Elenco')}>
            Elenco ticket
        </Button>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  signUpButton: {
    flexDirection: 'row-reverse',
    paddingHorizontal: 0,
  }
});