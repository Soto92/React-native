import React from 'react';
import {WebView} from 'react-native-webview';

const Product = ({navigation}) => (
  <WebView source={{uri: 'https://google.com'}} />
);

Product.navigationOptions = ({navigation}) => ({
  title: navigation.state.params.product.title,
});

export default Product;
