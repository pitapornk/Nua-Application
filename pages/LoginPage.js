import React from 'react'
import { View, Text, Button, StyleSheet, Image, TextInput, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Octicon from 'react-native-vector-icons/Octicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-navigation';

const LoginPage = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
          <Image source={require('../assets/Logo_white.png')} style={styles.logo} />
          
          <View style={styles.inputView}>
            <Octicon style={styles.setIcon} name="person" size={20} color="#C7C7C7"/> 
            <TextInput  
              style={styles.inputText}
              placeholder="Username" 
              placeholderTextColor="#C7C7C7"/>
          </View>

          <View style={styles.inputView} >
            <FeatherIcon style={styles.setIcon} name="key" size={20} color="#C7C7C7"/> 
            <TextInput  
              secureTextEntry
              style={styles.inputText}
              placeholder="Password" 
              placeholderTextColor="#C7C7C7"/>
          </View>

          <TouchableOpacity>
            <Text style = {{marginLeft: 70, color: "#CFE8A9", fontSize: 13}}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginBttn} onPress = {() => navigation.navigate('MainMenuPage', {})}>
            <Text style={{color: "#fff", fontWeight: "bold", alignSelf: "center"}}>Login</Text>
          </TouchableOpacity>

          <View style={{alignItems: "center", flexDirection: 'row', justifyContent: "center", marginVertical: 25}}>
          <View style={{width: "33%", height: 1, backgroundColor: "#FF6464"}} />
          <View>
          <Text style={{width: 40, textAlign: "center", color: "#FF6464", fontSize: 13}}>OR</Text>
          </View>
          <View style={{width: "33%", height: 1, backgroundColor: "#FF6464"}} />
          </View>

          <View style={{alignItems: "center"}}>
            <TouchableOpacity style={styles.synceGoogleBttn}>
            <FontAwesome name="google" size={18} color="#fff"/>
            <Text style={{color: "#fff", fontWeight: "500", marginLeft: 10}}>Login with Google account</Text>
          </TouchableOpacity>
          </View>

          <View style={styles.bottomContainer}>
              <Text style={{color: "#CFE8A9", fontWeight: "400"}}>Don't have an account?</Text>
            <TouchableOpacity style={{marginLeft: 7}} onPress = {() => navigation.navigate('RegisterPage', {})}> 
              <Text style={{color: "#fff", fontWeight: "500"}}>
              Register here
            </Text></TouchableOpacity>
           
          </View>
         

    </View>
    </SafeAreaView>
    
  );
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#E64848',
},
text: {
  fontSize: 20,
  textAlign: 'center',
},
logo: {
  width: 160,
  height: 160,
  marginTop: 70,
  justifyContent: "center",
  alignSelf: 'center'
},
inputView:{
  width:"80%",
  height:45,
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor:"#fff",
  borderRadius:25,
  marginBottom:15,
  justifyContent:"center",
  padding:20,
  alignSelf: 'center'
},
inputText:{
  flex: 1,
  paddingLeft: 5,
  height:50,
  color:"#000",
},
setIcon: {
  padding: 5,
  paddingBottom: 25
},
loginBttn: {
  width: "30%",
  borderRadius: 10,
  height:38,
  alignSelf: "center",
  justifyContent: "center",
  backgroundColor: "#5A9E7C",
  marginTop: 30,
},
synceGoogleBttn: {
  width: "80%",
  height:50,
  borderRadius: 25,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#C21010",
  flexDirection: "row"
},
bottomContainer: {
  flex: 1,
  justifyContent: 'center',
  marginBottom: 40,
  alignItems: "flex-end",
  flexDirection: "row"
}
});

export default LoginPage

// const navigation = useNavigation();

// export default class LoginPage extends React.Component {
//   static navigationOptions = {
//     title: 'LoginPage',
//   };
  
//   render() {
//     return (
      
//         <View style={styles.container}>
//             <Image source={require('../assets/Logo_white.png')} style={styles.logo} />
            
//             <View style={styles.inputView}>
//               <Icon style={styles.setIcon} name="user" size={20} color="#C7C7C7"/> 
//               <TextInput  
//                 style={styles.inputText}
//                 placeholder="Username" 
//                 placeholderTextColor="#C7C7C7"/>
//             </View>

//             <View style={styles.inputView} >
//               <Icon style={styles.setIcon} name="key" size={20} color="#C7C7C7"/> 
//               <TextInput  
//                 secureTextEntry
//                 style={styles.inputText}
//                 placeholder="Password" 
//                 placeholderTextColor="#C7C7C7"/>
//             </View>

//             <TouchableOpacity>
//               <Text style = {{marginLeft: 70, color: "#CFE8A9", fontSize: 13}}>Forgot password?</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.loginBttn}>
//               <Text style={{color: "#fff", fontWeight: "bold", alignSelf: "center"}}>Login</Text>
//             </TouchableOpacity>

//             <View style={{alignItems: "center", flexDirection: 'row', justifyContent: "center", marginVertical: 25}}>
//             <View style={{width: "33%", height: 1, backgroundColor: "#FF6464"}} />
//             <View>
//             <Text style={{width: 40, textAlign: "center", color: "#FF6464", fontSize: 13}}>OR</Text>
//             </View>
//             <View style={{width: "33%", height: 1, backgroundColor: "#FF6464"}} />
//             </View>

//             <View style={{alignItems: "center"}}>
//               <TouchableOpacity style={styles.synceGoogleBttn}>
//               <Icon name="google" size={18} color="#fff"/>
//               <Text style={{color: "#fff", fontWeight: "500", marginLeft: 10}}>Login with Google account</Text>
//             </TouchableOpacity>
//             </View>

//             <View style={styles.bottomContainer}>
//                 <Text style={{color: "#CFE8A9", fontWeight: "400"}}>Don't have an account?</Text>
//               <TouchableOpacity style={{marginLeft: 7}} onPress = {() => navigation.navigate('RegisterPage', {})}> 
//                 <Text style={{color: "#fff", fontWeight: "500"}}>
//                 Register here
//               </Text></TouchableOpacity>
             
//             </View>
           

//       </View>
        
      
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#E64848',
//   },
//   text: {
//     fontSize: 20,
//     textAlign: 'center',
//   },
//   logo: {
//     width: 160,
//     height: 160,
//     marginTop: 70,
//     justifyContent: "center",
//     alignSelf: 'center'
//   },
//   inputView:{
//     width:"80%",
//     height:50,
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor:"#fff",
//     borderRadius:25,
//     marginBottom:15,
//     justifyContent:"center",
//     padding:20,
//     alignSelf: 'center'
//   },
//   inputText:{
//     flex: 1,
//     paddingLeft: 5,
//     height:50,
//     color:"white",
//   },
//   setIcon: {
//     padding: 5,
//     paddingBottom: 25
//   },
//   loginBttn: {
//     width: "30%",
//     borderRadius: 10,
//     height:38,
//     alignSelf: "center",
//     justifyContent: "center",
//     backgroundColor: "#5A9E7C",
//     marginTop: 30,
//   },
//   synceGoogleBttn: {
//     width: "80%",
//     height:50,
//     borderRadius: 25,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#C21010",
//     flexDirection: "row"
//   },
//   bottomContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     marginBottom: 40,
//     alignItems: "flex-end",
//     flexDirection: "row"
//   }
// });