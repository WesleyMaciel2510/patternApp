import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
//import {useInit, useSharedState} from './logic';
//import {useNavigation} from '@react-navigation/native';

export default function Home() {
  //const {loading, setLoading} = useSharedState();
  //const navigation = useNavigation();
  const isDarkMode = useColorScheme() === 'dark';
  //useInit();
  // ============================================================================
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView>
        <View style={[styles.container]}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Home Screen</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
