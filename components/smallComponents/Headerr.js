import {SafeAreaView, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const Headerr = () => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  }; 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal:30,
          height: 100,
          marginVertical:20,
        }}>
        <View>
          <TouchableOpacity  onPress={openDrawer} >
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assests/toggle.png')}
          />
          </TouchableOpacity>
        </View>
        <View style={{flexDirection:"row",gap:15}}>
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assests/search.png')}
          />
          <Image
            style={{width: 20, height: 20}}
            source={require('../../assests/Add_to_cart.png')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Headerr;

const styles = StyleSheet.create({});
