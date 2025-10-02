import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import React from 'react';

function Footer() {
  const insets = useSafeAreaInsets();
  const [totalAmount, setTotalAmount] = React.useState('');

  const decimalRegex = /^[0-9]*.?[0-9]*$/;
  const numberRegex = /[^0-9.]/g;

  return (
    <View style={FooterStyle.container}>
      <Text style={FooterStyle.label}>Total Qty:</Text>
      <TextInput
        placeholder="Enter your amount"
        placeholderTextColor="#999999"
        style={FooterStyle.value}
        value={totalAmount}
        onChangeText={text => {
          const newtext = text.replace(numberRegex, '');

          if (decimalRegex.test(newtext)) {
            setTotalAmount(newtext);
          }
        }}
        // keyboardType="numeric"
        keyboardType={Platform.OS === 'android' ? 'number-pad' : 'numeric'}
        returnKeyType="done"
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
