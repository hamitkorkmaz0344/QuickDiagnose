import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const kutular = [
  { title: 'Tahlil Sonuçları', route: 'TahlilSonuclari' },
  { title: 'Radyoloji Görüntüleri', route: 'RadyolojiGoruntuleri' },
  { title: 'Hastaneler', route: 'Hastaneler' },
  { title: 'Doktorlar', route: 'Doktorlar' },
  { title: 'Hastalığım Ne', route: 'HastaligimNe' },
  { title: 'Kişisel Bilgilerim', route: 'KisiselBilgilerim' },
  { title: 'Hastalıklarım', route: 'Hastaliklarim' },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {kutular.map((kutu, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.box}
            onPress={() => navigation.navigate(kutu.route)}
          >
            <Text style={styles.boxText}>{kutu.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Home;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 30,
  },
  box: {
    width: width * 0.4,
    height: 110,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
    textAlign: 'center',
  },
});