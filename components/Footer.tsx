import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
} from 'react-native';

import React from 'react';

function Footer() {
  const [totalAmount, setTotalAmount] = React.useState('');

  return (
    <View style={FooterStyle.container}>
      <Text style={FooterStyle.label}>Total Qty:</Text>
      <TextInput
        placeholder="Enter your amount"
        placeholderTextColor="#999999"
        style={FooterStyle.value}
        value={totalAmount}
        onChangeText={text => {
          // If first and last decimal position are same, there's only one (or none)
          if (text.indexOf('.') === text.lastIndexOf('.')) {
            setTotalAmount(text);
          }
        }}
        // keyboardType="numeric"
        keyboardType={
          Platform.OS === 'android' ? 'number-pad' : 'numbers-and-punctuation'
        }
        // returnKeyType="done"
        textContentType="none"
        autoCorrect={false}
        maxLength={10}
      />
    </View>
  );
}
const FooterStyle = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 2,
    borderTopColor: '#E0E0E0',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#444444',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333333',
  },
});

export default Footer;
