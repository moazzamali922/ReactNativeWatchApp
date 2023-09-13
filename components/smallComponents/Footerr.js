import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../../assests/home.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../../assests/watch.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>Pricing</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../../assests/Notification.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>Notifications</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.footerItem}>
        <Image source={require('../../assests/contact.png')} style={styles.footerImage} />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerImage: {
    width: 25,
    height: 25,
    resizeMode: 'cover',
    marginBottom: 5,
    tintColor:"#6f8dc0"
  },
  footerText: {
    fontSize: 12,
    color: '#000',
  },
});



export default Footer;
