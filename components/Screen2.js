import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  Text,
  FlatList,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Headerr from './smallComponents/Headerr';
import Footer from './smallComponents/Footerr';

const Screen2 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView>
      <View style={{flex:1}}>
        <View style={{width: '100%', height: 70}}>
          <Headerr />
        </View>
        <View style={{marginHorizontal: 40}}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#083177'}}>
            WATCHES
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 15,
          }}>
          <TouchableOpacity>
            <Text>PEBBLE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>FACETTE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>ORE</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>OBLONG</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Image
            style={{width: '100%', height: 320}}
            resizeMode="cover"
            source={require('../assests/watch2.jpg')}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 20,
          }}>
          <View>
            <Text style={{fontWeight: 'bold'}}>OREO WATCH 04</Text>
            <Text>€ 329</Text>
          </View>
          <View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                paddingHorizontal: 25,
                paddingVertical: 4,
                borderColor: '#000',
              }}>
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingHorizontal: 20}}>
          <Image
            style={{width: '100%', height: 220}}
            resizeMode="cover"
            source={require('../assests/Watch3.jpeg')}
          />
        </View>
       
      </View>
      </ScrollView>
      <Footer/>
    </SafeAreaView>
  );
};

export default Screen2;
const styles = StyleSheet.create({});
