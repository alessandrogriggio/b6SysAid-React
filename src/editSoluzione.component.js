import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native';
import {  Icon, Layout, Text, Divider,Card, TopNavigation, TopNavigationAction, Input, Button } from '@ui-kitten/components';
import {soluzioni} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
  const Header = ({ title }) => (
    <View  >
      <Text category='h6' style={styles.header}>{title}</Text>
    </View>
  );

export default class EditSoluzioneScreen extends React.Component {

  state = { soluzione: null,isLoading: true };

  constructor(props) {
    super(props);
    console.log(props.route.params.soluzione);
    this.state.soluzione = props.route.params.soluzione;
    //soluzione = params.soluzione;
    //console.log(soluzione);
  }

  async componentDidMount() {
    console.log("componentDidMount called in EditSoluzione");
    //console.log(this.props.navigation);
    //soluzioni().then(response => this.setState({elencoSoluzioni: response,isLoading: false}));
  }

    onBackPress = () => {
        this.props.navigation.goBack();
    };

    chiudiTicket = () => {
        //pagina soluzioni
        this.props.navigation.goBack();
    };

    renderBackAction = () => (
        <TopNavigationAction
        icon={BackIcon}
        onPress={this.onBackPress}
        />
    );

    renderItem = ({ item, index }) => (
      <Card
      style={styles.itemContainer}
      header={(props) => <Header {...props} title={`${item['risptitle']}`}/>}
      onPress={() => this.props.navigation.navigate('Dettaglio')}
     >
        <Text>{`${item['rispdesc']}`}</Text>
    </Card>
        

    );

  render() {
    const { navigation } = this.props;
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
            onChangeText={nextValue => setValue(nextValue)}
          />
        </View>
        <Divider/>
        <View style={styles.profileButtonsContainer}>
          <Button
            style={styles.profileButton}
            accessoryLeft={this.renderBackAction}>
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


