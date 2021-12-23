import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation,Button, TopNavigationAction } from '@ui-kitten/components';
import {login} from './api'

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);


export default class DetailsScreen extends React.Component {

  componentDidMount() {
    console.log("componentDidMount called in DetailsScreen.js");
    login();
  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    );
  }
}





// export const DetailsScreen = ({ navigation }) => {

//     const [count, setCount] = useState(0);

//   const navigateBack = () => {
//     navigation.goBack();
//   };

//   const BackAction = () => (
//     <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
//   );

//   const getArticlesFromApi = async () => {
//     var myHeaders = new Headers();
//     var formdata = new FormData();
//     formdata.append("username", "brainsix");
//     formdata.append("password", "Br41nS1x");
//     try {
//       var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: formdata,
//         redirect: 'follow'
//       };
      
//       fetch("http://188.152.203.170:90/b6sysaid/api/login", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     } catch (error) {
//        console.error(error);
//     }
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       {/* <TopNavigation title='MyApp' alignment='center' accessoryLeft={BackAction}/> */}
//       <Divider/>
//       <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Text category='h1'>DETAILS</Text>

//         <Button onPress={() => getArticlesFromApi()}>
//           BUTTON
//         </Button>
//         <Text style={styles.text}>
//           Pressed {count} times
//         </Text>
//       </Layout>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   text: {
//     marginHorizontal: 8,
//   },
// });