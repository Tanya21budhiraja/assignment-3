import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';

import FontAwesome from '@react-native-vector-icons/fontawesome';

import AsyncStorage from '@react-native-async-storage/async-storage';
// const storeData = async () => {
//   await AsyncStorage.setItem('date', '31-03-2023');
// };

const getData = async () => {
  const value = await AsyncStorage.getItem('date');
  return value;
};

function Date() {
  const [currendate, setdate] = useState('');

  useEffect(() => {
    const loadDate = async () => {
      await AsyncStorage.setItem('date', '15-08-2025');
      setdate('15-08-2025');
    };
    loadDate();
  }, []);

  return (
    <View style={Datest.text}>
      <FontAwesome
        name="calendar"
        size={18}
        color="#3A3A3A"
        style={{ marginRight: 8 }}
      />
      <Text style={Datest.font}>{currendate}</Text>
    </View>
  );
}

const Datest = StyleSheet.create({
  text: {
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 10,
    marginRight: 10,
  },
  font: {
    color: '#3A3A3A',
  },
});

export default Date;
