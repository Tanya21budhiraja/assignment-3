import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Platform,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';

import FontAwesome from '@react-native-vector-icons/fontawesome';

function Date() {
  return (
    <View style={Datest.text}>
      <FontAwesome
        name="calendar"
        size={18}
        color="#3A3A3A"
        style={{ marginRight: 8 }}
      />
      <Text style={Datest.font}>31-03-2023</Text>
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
