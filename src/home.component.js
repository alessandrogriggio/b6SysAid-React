import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Layout,Text } from '@ui-kitten/components';
import {login} from './api'
import AsyncStorage from '@react-native-async-storage/async-storage';


//const [loading, setLoading] = useState(true);

export default class HomeScreen extends React.Component {

  state = { user: null };

  async componentDidMount() {
    console.log("componentDidMount called in HomeScreen.js");
    await login();
    try {
      const JSESSIONID = await AsyncStorage.getItem('JSESSIONID')    
      const LBLSESSIONID = await AsyncStorage.getItem('LBLSESSIONID')    
      if(JSESSIONID !== null) {      // value previously stored    
        console.log(JSESSIONID);
        console.log(LBLSESSIONID);
        this.setState({ user: JSESSIONID });
      }
    } catch(e){

    }

  }

  render() {
    return (
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>HOME</Text>
        <Text>{this.state.user}</Text>
      </Layout>
    );
  }
}




// export const HomeScreen = ({ navigation }) => {

//   const navigateDetails = () => {
//     navigation.navigate('Details');
//   };

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <TopNavigation title='MyApp' alignment='center'/>
//       <Divider/>
//       <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <Button onPress={navigateDetails}>OPEN DETAILS</Button>
//       </Layout>
//     </SafeAreaView>
//   );
// };