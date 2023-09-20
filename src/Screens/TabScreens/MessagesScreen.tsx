import {navigate, resetScreen} from '@/Navigation/NavigationAction';
import Colors from '@/Themes/Colors';
import {AppDispatch} from '@/Types/redux';

import React, {useState} from 'react';
import {
  View,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';


import ItemProductInCart from '@/Components/ItemProductInCart';
import {useAppSelector} from '@/Hooks/reduxHook';
import {ItemProduct, ItemProductInCartType} from '@/Types/Product';
const {width, height} = Dimensions.get('window');

const MessagesScreen = () => {
  const productState = useAppSelector(state => state.productReducer);
  const {products} = productState;
  const productCartState = useAppSelector(state => state.cartReducer);
  const {listProductInCart} = productCartState;
  const dispatch = useDispatch<AppDispatch>();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [subTotal, setSubToTal] = useState(0);
  const back = () => {
    //
    navigate('AuthStack');
  };

  const renderItemProductInCart = ({item}: ItemProduct) => {
    // type propety Component giong style cua Component khac nhu Component <View/>
    // cach su dung proprty item trong Component giong style cua Component View,
    //ItemProductComponent la com ponent nhu View, Text
    // item={item} giong style ={} cua View
    // item cua Flatlist bat buoc ten la item
    return <ItemProductInCart item={item} onPressToCart={() => {}} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <TouchableOpacity onPress={back}>
          <Text>BackMessageScreen</Text>
        </TouchableOpacity>

        <Switch
          trackColor={{false: 'navy', true: 'black'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="green"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </SafeAreaView>
  );
};
export default MessagesScreen;
const styles = StyleSheet.create({
  container: {flex: 1},
  view1: {
    flex: 0.05,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  view2: {
    flex: 0.7,
    margin: 10,
  },
  view3: {
    flex: 0.25,
    marginTop: 10,
  },
  image: {
    width: width * 0.8,
    height: height * 0.4,
    marginHorizontal: 10,
  },
});
