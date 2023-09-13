import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Headerr from './smallComponents/Headerr';
import ImageCarousel from './smallComponents/Carousel';
import Footer from './smallComponents/Footerr';

const Screen3 = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <View style={{width: '100%', height: 70}}>
            <Headerr />
          </View>
          <View style={{width: '100%', height: 400}}>
            <ImageCarousel />
          </View>

          <View style={styles.container}>
            <View style={styles.centeredContent}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: 10,
                }}>
                <Text
                  style={{color: '#083177', fontWeight: 'bold', fontSize: 17}}>
                  OREO WATCH 04
                </Text>
                <Text style={{color: '#083177', fontSize: 17}}>€299.00</Text>
              </View>
              <Text style={{fontWeight: 'bold', fontSize: 17}}>COLOURS</Text>
              <View style={styles.circleContainer}>
                <TouchableOpacity
                  style={[styles.circle, {backgroundColor: '#ffcdd2'}]}
                />
                <TouchableOpacity
                  style={[styles.circle, {backgroundColor: '#795548'}]}
                />
                <TouchableOpacity
                  style={[styles.circle, {backgroundColor: '#555555'}]}
                />
              </View>
              <Text style={{color: '#000', paddingVertical: 3}}>
                Sapphire Crystal,Italian Leather Strap,Two year Warranty,Ten
                Year {'\n'}Battery Life 18mm wide strap
              </Text>
              <Text style={{fontSize: 18, marginTop: 8, fontWeight: 'bold'}}>
                MATERIALS
              </Text>
              <Text style={{color: '#000', paddingVertical: 3}}>
                Sapphire Crystal,Italian Leather Strap,Two year Warranty,Ten
                Year{' '}
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: '#2a41d6',
                  padding: 5,
                  marginTop: 7,
                  justifyContent: 'center',
                }}>
                <Text style={{textAlign: 'center', color: '#fff'}}>
                  ADD TO CARD
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    padding: 20,
  },
  centeredContent: {
    width: '70%',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  circleContainer: {
    flexDirection: 'row',
    gap: 20,
    marginVertical: 10,
    marginRight: 'auto',
  },
  circle: {
    width: 27,
    height: 27,
    borderRadius: 30,
  },
});
