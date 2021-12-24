import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { List, Icon,Image, Layout, Text, Divider,Button,SafeAreaLayout, TopNavigation, Card, Spinner } from '@ui-kitten/components';
import {elencoTicket} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const renderItemHeader = (
  <Layout>
    <Text category='h6'>aaa</Text>
    <Text category='s1'>fff</Text>
  </Layout>
);

const Header = ({ title }) => (
  <Layout>
    <Text category='s1'>{title}</Text>
  </Layout>
);

const Footer = (props) => (
  <View {...props} style={[props.style, styles.footerContainer]}>
    <Button
      style={styles.footerControl}
      size='small'
      status='basic'>
      CANCEL
    </Button>
    <Button
      style={styles.footerControl}
      size='small'>
      ACCEPT
    </Button>
  </View>
);

const renderItem = ({ item, index }) => (
  
  // <ListItem
  //   title={}
  //   description={`${item[5]} ${index + 1}`}
  // />

  <Card
    style={styles.itemContainer}
    footer={Footer}
    header={(props) => <Header {...props} title={`${item[3]}`} />}
    onPress={() => alert('ciao')}>
      <Text>{`${item[2]}`}</Text>
  </Card>

);

export default class ElencoScreen extends React.Component {

  state = { tickets: null,isLoading: true };

  async componentDidMount() {
    console.log("componentDidMount called in Elenco");
    //await elencoTicket();
    elencoTicket().then(response => this.setState({tickets: response,isLoading: false}));
  }

  
  render() {
      if(this.state.isLoading){
        return(
          <View style={styles.loadMoreSpinnerView}>
            <Spinner size="medium" />
          </View>
        )
      }   
    return ( 
    <SafeAreaView style={styles.safeArea}>
      <TopNavigation
        title='Elenco tickets'
      />
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
  },
  itemContainer: {
    flex: 1,
    margin: 8
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  footerControl: {
    marginHorizontal: 2,
  },
  loadMoreSpinnerView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 8,
  },
});


