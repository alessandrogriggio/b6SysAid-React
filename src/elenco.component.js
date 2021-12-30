import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { List, Icon,Image, Layout, Text, Divider,Button,SafeAreaLayout, TopNavigation, Card, Spinner } from '@ui-kitten/components';
import {elencoTicket} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const Header = (props) => (
  <View style={{ flexDirection: 'row' }}>
    <Icon name='person-outline' fill='black' width={20} height={20} marginLeft={10} marginTop={10} />
    <Text category='s1' style={styles.header}>{props.title}</Text>
  </View>
);

const Footer = (props) => (
  <View style={styles.footerContainer}>
    <Text category='s1' style={styles.textFooter}>{props.asset}</Text>
    {(() => {
        if (props.stato == 'Resolved'){
            return (
              <Text category='s1' style={styles.textFooterGreen}>{props.stato}</Text>
            )
        }else if (props.stato == 'Pend no SLA'){
            return (
              <Text category='s1' style={styles.textFooterYellow}>{props.stato}</Text>
            )
        }else if (props.stato == 'Queued'){
            return (
              <Text category='s1' style={styles.textFooterRed}>{props.stato}</Text>
            )
        }else{
            return (
              <Text category='s1' style={styles.textFooterRight}>{props.stato}</Text>
            )
        }
    })()}
  </View>
);

export default class ElencoScreen extends React.Component {

  state = { tickets: null,isLoading: true };

  async componentDidMount() {
    console.log("componentDidMount called in Elenco");
    //await elencoTicket();
    elencoTicket().then(response => this.setState({tickets: response,isLoading: false}));
  }

  renderItem = ({ item, index }) => (
    <Card
      style={styles.itemContainer}
      header={(props) => <Header {...props} title={`${item[3]}`} />}
      footer={(props) => <Footer {...props} asset={`${item[4]}`}  stato={`${item[6]}`}/>}
      onPress={() => this.props.navigation.navigate('Dettaglio',{id: item['DT_RowId']})}
     >
        <Text>{`${item[2]}`}</Text>
    </Card>
  );
  
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
        renderItem={this.renderItem}
      />
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    marginHorizontal: 10,
    marginVertical: 10
  },
  textFooter: {
    marginHorizontal: 10,
    marginVertical: 10,
    flex:1
  },
  textFooterGreen: {
    marginHorizontal: 10,
    marginVertical: 10,
    flex:1,
    color: 'green',
    textAlign: 'right'
  },
  textFooterRed: {
    marginHorizontal: 10,
    marginVertical: 10,
    flex:1,
    color: 'red',
    textAlign: 'right'
  },
  textFooterRight: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  textFooterYellow: {
    marginHorizontal: 10,
    marginVertical: 10,
    flex:1,
    color: 'orange',
    textAlign: 'right'
  },
  itemContainer: {
    flex: 1,
    margin: 8
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
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


