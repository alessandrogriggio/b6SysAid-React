import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Button, Layout,Text, Icon, View,Divider } from '@ui-kitten/components';
import {login} from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { motion } from "framer-motion"


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
        <Layout style={styles.imgContainer}>
          <Image style={styles.image} source={require('./assets/logo-sysaid.png')} />
        </Layout>
      
        <Layout style={styles.imgContainer}>
          <Text>{this.state.user}</Text>
        </Layout>
        <Divider/>
        <Button
            style={styles.submitButton}
            accessoryRight={ArrowIcon}
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
  },
  imgContainer: {
    flexDirection: 'row'
  },
  image: {
      resizeMode: 'contain',
      flex: 1,
      aspectRatio: 1 // Your aspect ratio
  },
  submitButton: {
    position: 'absolute',
    bottom:30,
    width: '90%',
    marginHorizontal: 20,
    tintColor: 'red'
  }
});