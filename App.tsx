import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  View,
} from 'react-native';
import MainNavigation from './lib/components/navigation';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


function App(): JSX.Element {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <MainNavigation />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#202b38',
    height: windowHeight,
    width: windowWidth,
  },
});

export default App;
