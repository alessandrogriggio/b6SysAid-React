import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { List, Icon,Image, Layout, Text, Divider,Button,SafeAreaLayout, TopNavigation, TopNavigationAction, Spinner } from '@ui-kitten/components';
import {dettaglioTicket} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

export default class DettaglioScreen extends React.Component {

  state = { ticketDettaglio: null,isLoading: true };
  

  async componentDidMount() {
    const {navigation} = this.props;
    console.log("componentDidMount called in Dettaglio");
    dettaglioTicket().then(response => this.setState({ticketDettaglio: response,isLoading: false}));
  }

    onBackPress = () => {
        this.props.navigation.goBack();
    };

    chiudiTicket = () => {
        //pagina soluzioni
        this.props.navigation.navigate('Soluzioni');
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
            title={'Dettaglio ticket'}
            accessoryLeft={this.renderBackAction}
        />
        <Divider/>
        <Layout
          style={styles.contentContainer}
          level='1'>
          <Text>{this.state.ticketDettaglio}</Text>
        </Layout>
        <Divider/>
        <View style={styles.profileButtonsContainer}>
          <Button
            style={styles.profileButton}
            accessoryLeft={this.renderBackAction}>
            PEND NO SLA
          </Button>
          <Button
            appearance='outline'
            style={styles.profileButton}
            accessoryLeft={this.renderBackAction}
            onPress={this.chiudiTicket}>
            CHIUDI
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
    contentContainer: {
      flex: 1,
      padding: 24,
    },
    profileButtonsContainer: {
      flexDirection: 'row',
      marginVertical: 24,
    },
    profileButton: {
      flex: 1,
      marginHorizontal: 4,
    },
    loadMoreSpinnerView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
});


