import { StatusBar, StyleSheet, Text, View, TextInput } from 'react-native';

import React from 'react';

function Footer() {
  const [totalAmount, setTotalAmount] = React.useState('0');

  return (
    <View style={FooterStyle.container}>
      <Text style={FooterStyle.label}>Total Qty:</Text>
      <TextInput
        style={FooterStyle.value}
        value={totalAmount}
        onChangeText={setTotalAmount}
        keyboardType="numeric"
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
