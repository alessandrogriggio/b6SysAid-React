import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import {  Icon, Layout, Text, Divider,Card, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import {soluzioni} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const SendIcon = (props) => (
  <Icon {...props} name='paper-plane' />
);

export default class EditSoluzioneScreen extends React.Component {

  state = { soluzione: null,isLoading: true, id: null };

  constructor(props) {
    super(props);
    console.log(props.route.params.soluzione);
    this.state.soluzione = props.route.params.soluzione;
    this.state.id = props.route.params.id;
  }

  courseInputHandler = (enteredText) => {
    console.log(enteredText);
    this.state.soluzione = enteredText;
  };
  

  async componentDidMount() {
    console.log("componentDidMount called in EditSoluzione");
  }

    onBackPress = () => {
      this.props.navigation.goBack();
    };

    chiudiTicket = () => {
        //pagina soluzioni
       alert(this.state.soluzione + ' --- ' + this.state.id);
    };

    renderBackAction = () => (
        <TopNavigationAction
        icon={BackIcon}
        onPress={this.onBackPress}
        />
    );

  render() {
    return ( 
    <SafeAreaView
        style={styles.container}
        insets='top'>
        <TopNavigation
            title={'Soluzioni'}
            accessoryLeft={this.renderBackAction}
        />
        <Divider/>
        <View>
          <Input
            style={styles.itemContainer}
            multiline={true}
            numberOfLines={10}
            value={this.state.soluzione}
            onChangeText={(text) => this.setState({ soluzione: text })}
          />
        </View>
        <Divider/>
        <View style={styles.profileButtonsContainer}>
          <Button
            style={styles.profileButton}
            onPress={this.chiudiTicket}
            accessoryLeft={SendIcon}>
            INVIA SOLUZIONE
          </Button>
        </View>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
      margin: 8,
      height:600
    },
    header: {
      marginHorizontal: 20,
      marginVertical: 8
    },
    profileButton: {
      flex: 1,
      marginHorizontal: 4,
    },
    profileButtonsContainer: {
      flexDirection: 'row',
      marginVertical: 24,
    }
});


