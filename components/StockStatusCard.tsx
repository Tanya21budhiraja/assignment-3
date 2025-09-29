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

function StockStatusCard() {
  return (
    <View style={sty.card}>
      <Text style={sty.title}>STOCK STATUS</Text>
    </View>
  );
}

const sty = StyleSheet.create({
  card: {
    marginTop: -30,
    backgroundColor: 'white',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 90,
    borderWidth: 1.2,
    borderColor: '#E0E0E0',
    borderTopColor: '#000080',
  },
  title: {
    fontSize: 14,
    color: '#3A3A3A',
  },
});

export default StockStatusCard;
