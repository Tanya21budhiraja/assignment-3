import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
} from 'react-native';
import StockStatusCard from './StockStatusCard';
import { KeyboardController } from 'react-native-keyboard-controller';
import List from './List';
import Footer from './Footer';
import Date from './Date';
import FontAwesome from '@react-native-vector-icons/fontawesome';

import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
function MainContent() {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}/
      >
        <View style={[styles.headerSection, { paddingTop: insets.top + 20 }]}>
          <View style={styles.navBar}>
            <FontAwesome name="bars" size={24} color="white" />
            <Text style={styles.navTitle}>Demo Company</Text>
            <FontAwesome name="caret-down" size={24} color="white" />
          </View>
        </View>
        <StockStatusCard />
        <Date />
        <View style={{ flex: 1 }}>
          <List />
        </View>
        <Footer />
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#f5f5f5',
  // },
  headerSection: {
    backgroundColor: '#0066CC',
    height: 150,
    paddingHorizontal: 20,
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
    // borderWidth: 1.2,
    // borderColor: '#000080',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navTitle: {
    color: 'white',
    fontSize: 18,
    flex: 1,
    marginLeft: 15,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
    fontStyle: 'italic',
  },
  st: {
    marginLeft: 15,
    flex: 1,
    color: 'white',
    fontSize: 18,
    // fontWeight: 'bold',
  },
});

export default MainContent;
