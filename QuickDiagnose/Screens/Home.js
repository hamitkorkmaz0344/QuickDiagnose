import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, FlatList, Dimensions } from 'react-native';
import { Octicons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StyledContainer, InnerContainer, SubTitle, Colors, styles } from './../Components/styles';

const { brand } = Colors;
const screenWidth = Dimensions.get('window').width;
const cardWidth = (screenWidth / 2) - 30;

const Home = () => {
  const navigation = useNavigation();

  const cards = [
    { id: '1', title: 'Kişisel Bilgiler', icon: 'person', screen: 'Kişisel Bilgiler' },
    { id: '2', title: 'Hastalıklarım', icon: 'heart', screen: 'Hastalıklarım' },
    { id: '3', title: 'Tahlil Sonuçları', icon: 'file', screen: 'Tahlil Sonuçları' },
    { id: '4', title: 'Radyoloji', icon: 'device-camera', screen: 'Radyoloji' },
    { id: '5', title: 'Hastaneler', icon: 'home', screen: 'Hastaneler' },
    { id: '6', title: 'Doktorlar', icon: 'briefcase', screen: 'Doktorlar' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.userTypeButton, { width: cardWidth, margin: 10 }]}
      onPress={() => navigation.navigate(item.title)}
    >
      <Octicons name={item.icon} size={30} color={brand} />
      <Text style={styles.userTypeText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/img/back.png')} // Aynı login ekranındaki gibi back.png kullanıyoruz
      style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center' }}
    >
      <InnerContainer> {/* StyledContainer kullanmıyoruz, direkt InnerContainer */}
        
        {/* Sol Üst Menü Butonu */}
        <TouchableOpacity
          style={{ position: 'absolute', top: 40, left: 20, zIndex: 1 }}
          onPress={() => navigation.openDrawer()}
        >
          <Ionicons name="menu" size={30} color="#fff" />
        </TouchableOpacity>

        <SubTitle>Hoşgeldiniz</SubTitle>

        <FlatList
          data={cards}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={2}
          contentContainerStyle={{ alignItems: 'center', paddingBottom: 20 }}
        />

      </InnerContainer>
    </ImageBackground>
  );
};

export default Home;
