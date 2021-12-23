import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { List, Icon, Layout, Text, TopNavigation,ListItem, TopNavigationAction } from '@ui-kitten/components';
import {elencoTicket} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const renderItem = ({ item, index }) => (
  <ListItem title={`${item} ${index + 1}`}/>
);

export default class ElencoScreen extends React.Component {

  state = { tickets: null };

  async componentDidMount() {
    console.log("componentDidMount called in Elenco");
    //await elencoTicket();
    elencoTicket().then(response => this.setState({tickets: response}));
  }

  
  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>Elenco</Text>
        <List
          style={styles.container}
          data={this.state.tickets}
          renderItem={renderItem}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 192,
  },
});


