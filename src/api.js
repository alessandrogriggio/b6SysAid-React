import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login() {
    console.log("fetch login");

    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("username", "brainsix");
    formdata.append("password", "Br41nS1x");
    try {
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        };

        await fetch("http://188.152.203.170:90/b6sysaid/api/login", requestOptions)
        .then(response => response.text())
        .then(result =>  {
            //console.log(result)
            let position = result.search("JSESSIONID");
            let jsessionid = result.substring(position+11, position+43);
            //console.log(jsessionid);
            position = result.search("LBLSESSIONID");
            //console.log(position);
            let lblsessionid = result.substring(position+13, position+27);
            //console.log(lblsessionid);
            AsyncStorage.setItem('JSESSIONID', jsessionid);
            AsyncStorage.setItem('LBLSESSIONID', lblsessionid);
            return result;
        })
        .catch(error => console.log('error', error));
    } catch (error) {
        console.error(error);
    }
}

export async function elencoTicket() {
    console.log("fetch elenco ticket");

    const JSESSIONID = await AsyncStorage.getItem('JSESSIONID')    
    const LBLSESSIONID = await AsyncStorage.getItem('LBLSESSIONID')  

    var myHeaders = new Headers();
    var formdata = new FormData();
    formdata.append("LBLSESSIONID", LBLSESSIONID);
    formdata.append("JSESSIONID", JSESSIONID);
    formdata.append("REGIONEcookieID", '');
    try {
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        };

        return fetch("http://188.152.203.170:90/b6sysaid/api/sr", requestOptions)
        .then(response => response.json())
        .then(result =>  {
            //console.log(result.data);
            return result.data;
        })
        .catch(error => console.log('error', error));
    } catch (error) {
        console.error(error);
    }
}