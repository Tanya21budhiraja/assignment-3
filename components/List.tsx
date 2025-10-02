import { StyleSheet, Text, View, FlatList } from 'react-native';
import { data } from './data';

const ITEM_HEIGHT = 40;
const SEPARATOR_HEIGHT = 31;

const renderItem = ({
  item,
}: {
  item: { id: number; name: string; pcs: number };
}) => (
  <View style={list.st}>
    <Text style={{ flex: 1, color: '#3A3A3A' }}>{item.name}</Text>
    <Text style={{ color: '#3A3A3A' }}> Pcs : {item.pcs}</Text>
  </View>
);

// const getItemLayout = (_: any, index: number) => ({
//   length: ITEM_HEIGHT,
//   offset: (ITEM_HEIGHT + SEPARATOR_HEIGHT) * index + 16,
//   index,
// });

function List() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        keyboardShouldPersistTaps="handled"
        // getItemLayout={getItemLayout}
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
