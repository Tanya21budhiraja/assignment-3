import { StyleSheet, Text, View, FlatList } from 'react-native';

function List() {
  const data = [
    { id: '1', name: 'Patanjali Mustard Oil 1 ltr', pcs: '18.00 Pcs.' },
    { id: '2', name: 'Patanjali Mustard Oil 5 ltr', pcs: '20.00 Pcs.' },
    { id: '3', name: 'Poha 1 kg', pcs: '100.00 Pcs.' },
    { id: '4', name: 'Poha 500 Gm', pcs: '50.00 Pcs.' },
    { id: '5', name: 'Saffola Refined Oil 5 ltr', pcs: '10.00 Pcs.' },
    { id: '6', name: 'Sooji 1 kg', pcs: '10.00 Pcs.' },
    { id: '7', name: 'Saffola Refined Oil 9 ltr', pcs: '15.00 Pcs.' },
    { id: '8', name: 'Aashirvaad Atta 5 kg', pcs: '25.00 Pcs.' },
    { id: '9', name: 'Fortune Refined Oil 1 ltr', pcs: '30.00 Pcs.' },
    { id: '10', name: 'Tata Salt 1 kg', pcs: '80.00 Pcs.' },
    { id: '11', name: 'Rajma 1 kg', pcs: '40.00 Pcs.' },
    { id: '12', name: 'Toor Dal 2 kg', pcs: '35.00 Pcs.' },
    { id: '13', name: 'Chana Dal 1 kg', pcs: '60.00 Pcs.' },
    { id: '14', name: 'Maggi Noodles 420g', pcs: '45.00 Pcs.' },
    { id: '15', name: 'Kissan Mixed Fruit Jam 500g', pcs: '22.00 Pcs.' },
    { id: '16', name: 'Amul Butter 500g', pcs: '18.00 Pcs.' },
    { id: '17', name: 'Dettol Handwash 250ml', pcs: '75.00 Pcs.' },
    { id: '18', name: 'Harpic Toilet Cleaner 500ml', pcs: '50.00 Pcs.' },
    { id: '19', name: 'Surf Excel 1 kg', pcs: '28.00 Pcs.' },
    { id: '20', name: 'Vim Dishwash Bar 300g', pcs: '95.00 Pcs.' },
    { id: '21', name: 'Lifebuoy Soap 125g', pcs: '100.00 Pcs.' },
    { id: '22', name: 'Colgate Toothpaste 200g', pcs: '32.00 Pcs.' },
    { id: '23', name: 'Clinic Plus Shampoo 340ml', pcs: '26.00 Pcs.' },
    { id: '24', name: 'Tide Detergent 2 kg', pcs: '20.00 Pcs.' },
    { id: '25', name: 'Good Day Biscuits 200g', pcs: '60.00 Pcs.' },
    { id: '26', name: 'Parle-G Biscuits 1 kg', pcs: '55.00 Pcs.' },
    { id: '27', name: 'Red Label Tea 500g', pcs: '30.00 Pcs.' },
    { id: '28', name: 'Brook Bond Tea 1 kg', pcs: '40.00 Pcs.' },
    { id: '29', name: 'Britannia Cheese Slices 200g', pcs: '25.00 Pcs.' },
    { id: '30', name: 'Mother Dairy Ghee 1 ltr', pcs: '12.00 Pcs.' },
    { id: '31', name: 'Fortune Sunflower Oil 5 ltr', pcs: '22.00 Pcs.' },
    { id: '32', name: 'Britannia Cheese Slices 200g', pcs: '25.00 Pcs.' },
    { id: '33', name: 'Amul Paneer 1 kg', pcs: '15.00 Pcs.' },
    { id: '34', name: 'Haldirams Bhujia 1 kg', pcs: '30.00 Pcs.' },
    { id: '35', name: 'Bournvita 500g Jar', pcs: '28.00 Pcs.' },
    { id: '36', name: 'Complan 400g', pcs: '20.00 Pcs.' },
    { id: '37', name: 'Patanjali Dant Kanti 200g', pcs: '36.00 Pcs.' },
    { id: '38', name: 'Ariel Matic 2 kg', pcs: '17.00 Pcs.' },
    { id: '39', name: 'Savlon Hand Sanitizer 500ml', pcs: '42.00 Pcs.' },
    { id: '40', name: 'Lizol Floor Cleaner 1 ltr', pcs: '34.00 Pcs.' },
    { id: '41', name: 'Tata Tea Gold 250g', pcs: '45.00 Pcs.' },
    { id: '42', name: 'Nestle Milkmaid 400g', pcs: '19.00 Pcs.' },
    { id: '43', name: 'Kinder Joy Chocolate', pcs: '80.00 Pcs.' },
    { id: '44', name: 'Real Fruit Juice 1 ltr', pcs: '38.00 Pcs.' },
    { id: '45', name: 'Paper Boat Aam Panna 600ml', pcs: '27.00 Pcs.' },
    {
      id: '46',
      name: 'EveresChholimagnge Masala 100g',
      pcs: '90.00 Pcs.',
    },
    { id: '47', name: 'MDH Garam Masala 200g', pcs: '65.00 Pcs.' },
    { id: '48', name: 'Dabur Honey 250g', pcs: '22.00 Pcs.' },
    { id: '49', name: 'Horlicks 500g', pcs: '33.00 Pcs.' },
    { id: '50', name: 'Sunfeast Yippee Noodles 280g', pcs: '48.00 Pcs.' },
    { id: '51', name: 'Toor Dal 2 kg', pcs: '35.00 Pcs.' },
    { id: '52', name: 'Chana Dal 1 kg', pcs: '60.00 Pcs.' },
    { id: '53', name: 'Maggi Noodles 420g', pcs: '45.00 Pcs.' },
    { id: '54', name: 'Kissan Mixed Fruit Jam 500g', pcs: '22.00 Pcs.' },
    { id: '55', name: 'Amul Butter 500g', pcs: '18.00 Pcs.' },
    { id: '56', name: 'Dettol Handwash 250ml', pcs: '75.00 Pcs.' },
    { id: '57', name: 'Harpic Toilet Cleaner 500ml', pcs: '50.00 Pcs.' },
    { id: '58', name: 'Surf Excel 1 kg', pcs: '28.00 Pcs.' },
    { id: '59', name: 'Vim Dishwash Bar 300g', pcs: '95.00 Pcs.' },
    { id: '60', name: 'Lifebuoy Soap 125g', pcs: '100.00 Pcs.' },
  ];

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
        keyExtractor={item => item.id}
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
