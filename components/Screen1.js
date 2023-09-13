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
} from 'react-native';
import Headerr from './smallComponents/Headerr';
import Footerr from './smallComponents/Footerr';

const Screen1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        setProducts(json);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
      <View style={{flex:1}}>
        <View style={{width: '100%', height: 70}}>
          <Headerr />
        </View>

        <View style={{paddingHorizontal:20,paddingVertical:20,}}>
          <Image
            style={{width: '100%', height:350}}
            resizeMode="stretch"
            source={require('../assests/BabarAzam.jpg')}
          />
        </View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            color: '#083177',
            fontWeight: 'bold',
          }}>
          New
        </Text>
        <View style={styles.collectionContainer}>
          <View style={styles.line} />
          <Text style={styles.collectionText}>Collection</Text>
          <View style={styles.line} />
        </View>
        <Text style={{textAlign: 'center', fontSize: 17}}>
          Discover New Watches
        </Text>
        {loading ? (
               <View style={{alignItems:"center",justifyContent:"center",alignSelf:"center",padding:20,}}>
               <ActivityIndicator size={40} color="black" />
               </View>
             
            ) : (
        <ScrollView horizontal>
          <View
            style={{ justifyContent: 'center', alignItems: 'center'}}>
           
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 20,
                  marginVertical: 20,
                }}>
                {products.map(item => (
                  <View key={item.id} style={{marginRight: 20}}>
                    <Image
                      style={styles.itemImage}
                      source={{uri: item.image}}
                    />
                    <Text
                      style={{
                        textAlign: 'center',
                        color: '#000',
                        fontSize: 20,
                      }}>
                      ${item.price}
                    </Text>
                  </View>
                ))}
              </View>
              </View>
        </ScrollView>
            )}
        

        <View style={{flexDirection: 'row', paddingHorizontal: 20,alignItems:"center",gap:10,}}>
          <Image
            style={{width: 200, height: 80}}
            source={require('../assests/Sofas.jpg')}
          />
          <Image
            style={{width: 200, height: 80}}
            source={require('../assests/Sofas2.jpg')}
          />
        </View>
       
      </View>
      </ScrollView>
      <Footerr />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  collectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  line: { 
    flex: 1,
    height: 1,
    backgroundColor: '#000',
    marginTop: 15,
    marginHorizontal: 40,
  },
  collectionText: {
    fontSize: 25,
    color: '#083177',
    fontWeight: 'bold',
  },
  productItem: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
  },
});

export default Screen1;
