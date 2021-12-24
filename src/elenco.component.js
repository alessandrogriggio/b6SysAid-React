import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { List, Icon, Layout, Text, Divider,ListItem,SafeAreaLayout, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import {elencoTicket} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const renderItem = ({ item, index }) => (
  <ListItem
    title={`${item[2]} ${index + 1}`}
    description={`${item[5]} ${index + 1}`}
  />
);


const data = new Array(8).fill({
  title: 'Item',
  description: 'Description for Item',
});

export default class ElencoScreen extends React.Component {

  state = { tickets: null };

  async componentDidMount() {
    console.log("componentDidMount called in Elenco");
    //await elencoTicket();
    elencoTicket().then(response => this.setState({tickets: response}));
  }

  
  render() {
    return (
    <SafeAreaView style={styles.safeArea}>
      <List
        data={this.state.tickets}
        ItemSeparatorComponent={Divider}
        renderItem={renderItem}
      />
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  }
});


