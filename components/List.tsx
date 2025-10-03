import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { data } from './data';

const ListItem = React.memo(
  ({
    item,
  }: {
    item: { id: number; name: string; pcs: number; price?: number };
  }) => (
    <View style={list.st}>
      <Text style={list.itemText}>{item.name}</Text>
      <Text style={list.pcsText}>Pcs : {item.pcs}</Text>
      {item.price && <Text style={list.priceText}>Price: ${item.price}</Text>}
    </View>
  ),
);

const ItemSeparator = React.memo(() => <View style={list.separator} />);

const ListHeader = React.memo(() => <View style={list.header} />);

const renderItem = ({
  item,
}: {
  item: { id: number; name: string; pcs: number; price?: number };
}) => <ListItem item={item} />;

function List() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => String(item.id)}
        keyboardShouldPersistTaps="handled"
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        windowSize={10}
        initialNumToRender={15}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={ListHeader}
      />
    </View>
  );
}

const list = StyleSheet.create({
  st: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  itemText: {
    flex: 1,
    color: '#3A3A3A',
  },
  pcsText: {
    color: '#3A3A3A',
  },
  priceText: {
    color: '#3A3A3A',
    marginTop: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 15,
    marginHorizontal: 4,
  },
  header: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 4,
    marginBottom: 15,
  },
});

export default List;
