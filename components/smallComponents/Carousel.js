import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import PagerView from 'react-native-pager-view';

const ImageCarousel = () => {
  const images = [
    require('../../assests/Watch3.jpeg'),
    require('../../assests/watch2.jpg'),
    require('../../assests/watch1.jpg'),
  ];

  const renderPage = (image, pageIndex) => (
    <View style={styles.pageContainer} key={pageIndex}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <PagerView style={styles.container} initialPage={0}>
      {images.map((image, index) => renderPage(image, index))}
    </PagerView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height:'100%',
  },
});

export default ImageCarousel;
