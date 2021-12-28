import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { List, Icon,Image, Layout, Text, Divider,Button,SafeAreaLayout, TopNavigation, TopNavigationAction, Spinner } from '@ui-kitten/components';
import {dettaglioTicket} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
//const BackIcon = style => <Icon {...style} name="arrow-back-outline" height={40} width={24} />;


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
        <Text>{this.state.ticketDettaglio}</Text>
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    loadMoreSpinnerView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
});


