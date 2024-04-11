
import {  View } from 'react-native';
import { styles } from '../css/indexStyle';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
      source={require("../../assets/nav.json")}
      style={{width: "100%", height: "100%"}}
      autoPlay
      loop={false}
      autoSize
     onAnimationFinish={()=> router.navigate('login')}
      />
    
    </View>
  );
}





