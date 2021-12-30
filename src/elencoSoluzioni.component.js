import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Dimensions, View } from 'react-native';
import { List, Icon, Layout, Text, Divider,Card, TopNavigation, TopNavigationAction, Spinner } from '@ui-kitten/components';
import {soluzioni} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);
const StarIcon = (props) => (
    <Icon {...props} name='star'/>
  );

  const Header = ({ title }) => (
    <View  >
      <Text category='h6' style={styles.header}>{title}</Text>
    </View>
  );

export default class SoluzioniScreen extends React.Component {

  state = { elencoSoluzioni: null,isLoading: true,id: null };
  
  constructor(props) {
    super(props);
    this.state.id = props.route.params.id;
  }

  async componentDidMount() {
    console.log("componentDidMount called in Soluzioni");
    console.log("id: ", this.state.id);
    soluzioni().then(response => this.setState({elencoSoluzioni: response,isLoading: false}));
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

    renderItem = ({ item, index }) => (
      <Card
      style={styles.itemContainer}
      header={(props) => <Header {...props} title={`${item['risptitle']}`}/>}
      onPress={() => this.props.navigation.navigate('EditSoluzione',{soluzione: item['rispdesc'],id: this.state.id})}
     >
        <Text>{`${item['rispdesc']}`}</Text>
    </Card>
        

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
        <List
          data={this.state.elencoSoluzioni}
          ItemSeparatorComponent={Divider}
          renderItem={this.renderItem}
        />
    </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    itemContainer: {
      flex: 1,
      margin: 8
    },
    header: {
      marginHorizontal: 20,
      marginVertical: 8
    },
    loadMoreSpinnerView: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 8,
    },
});


