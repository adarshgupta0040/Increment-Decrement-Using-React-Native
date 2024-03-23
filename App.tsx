/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewComponent,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

// function Section({ children, title }: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const name: string = "Adarsh";

  const [counter, setcount] = useState(0);

  function increment(): void {
    console.log('increment.');
    setcount(counter+1);
  }

  function decrement(): void {
    console.log('decrement');
    if(counter>0)
    setcount(counter-1);
  }

  return (

    <View style={{ flex: 1, }}>
      <StatusBar backgroundColor={'grey'}/>
      <View style={{ flex: 1,  justifyContent:'space-evenly', alignItems:"center", backgroundColor:'purple', flexDirection:'row',}}>
        
        <Button title='+'  onPress={increment}/> 
        <Text>Hi {name} !</Text>
        <Button  title='-' onPress={decrement}/> 

      </View>
      <View  style={{ flex: 1, justifyContent:'center', alignItems:"center", backgroundColor:'lightblue'}}>
        <Text style={{fontWeight:"bold"}}>Increment/Decrement Game</Text>
        <Text style={{fontSize:40}}>{counter}</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
    backgroundColor:""
  },
});

export default App;
