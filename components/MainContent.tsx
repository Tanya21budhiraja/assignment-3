import { StyleSheet, Text, View, Keyboard, Platform } from 'react-native';
import StockStatusCard from './StockStatusCard';
import List from './List';
import Footer from './Footer';
import Date from './Date';
import FontAwesome from '@react-native-vector-icons/fontawesome';

import React, { useState, useEffect } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

function MainContent() {
  const insets = useSafeAreaInsets();
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      e => {
        setKeyboardHeight(e.endCoordinates.height);
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        setKeyboardHeight(0);
      },
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return (
    <View
      style={[
        styles.container,
        { paddingBottom: keyboardHeight > 0 ? keyboardHeight + 20 : 0 },
      ]}
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
      <View style={styles.listContainer}>
        <List />
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerSection: {
    backgroundColor: '#0066CC',
    height: 150,
    paddingHorizontal: 20,
    borderEndEndRadius: 15,
    borderEndStartRadius: 15,
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
  listContainer: {
    flex: 1,
  },
});

export default MainContent;
