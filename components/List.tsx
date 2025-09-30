import { StyleSheet, Text, View, FlatList } from 'react-native';
import { data } from './data';

function List() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View style={list.st}>
            <Text style={{ flex: 1, color: '#3A3A3A' }}>{item.name}</Text>
            <Text style={{ color: '#3A3A3A' }}>{item.pcs}</Text>
          </View>
        )}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: '#E0E0E0',
              marginVertical: 15,
              marginHorizontal: 4,
            }}
          />
        )}
        ListHeaderComponent={() => (
          <View
            style={{
              height: 1,
              backgroundColor: '#E0E0E0',
              marginHorizontal: 4,
              marginBottom: 15,
            }}
          />
        )}
      />
    </View>
  );
}

const list = StyleSheet.create({
  st: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default List;
