// import {navigate, resetScreen} from '@/Navigation/NavigationAction';
// import Colors from '@/Themes/Colors';
// import {AppDispatch} from '@/Types/redux';

// import React, {useState} from 'react';
// import {
//   View,
//   Switch,
//   StyleSheet,
//   TouchableOpacity,
//   Text,
//   SafeAreaView,
//   Dimensions,
//   FlatList,
// } from 'react-native';
// import {useDispatch} from 'react-redux';


// import ItemProductInCart from '@/Components/ItemProductInCart';
// import {useAppSelector} from '@/Hooks/reduxHook';
// import {ItemProduct, ItemProductInCartType} from '@/Types/Product';
// const {width, height} = Dimensions.get('window');
// // const ChatScreen = ({route}) => {
// //   // const {item} = route.params;
// //   const productState = useAppSelector(state => state.productReducer);
// //   const {products} = productState;
// //   const productCartState = useAppSelector(state => state.cartReducer);
// //   const {listProductInCart} = productCartState;
// //   const dispatch = useDispatch<AppDispatch>();
// //   const [isEnabled, setIsEnabled] = useState(false);
// //   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
// //   const [subTotal, setSubToTal] = useState(0);
// //   const back = () => {
// //     //
// //     navigate('Home');
// //   };

// //   const renderItemProductInCart = ({item}: ItemProduct) => {
// //     // type propety Component giong style cua Component khac nhu Component <View/>
// //     // cach su dung proprty item trong Component giong style cua Component View,
// //     //ItemProductComponent la com ponent nhu View, Text
// //     // item={item} giong style ={} cua View
// //     // item cua Flatlist bat buoc ten la item
// //     return <ItemProductInCart item={item} onPressToCart={() => {}} />;
// //   };
// //   return (
// //     <SafeAreaView style={styles.container}>
// //       <View style={styles.view1}>
// //         <TouchableOpacity onPress={back}>
// //           <Text>Back</Text>
// //         </TouchableOpacity>

// //         <Switch
// //           trackColor={{false: 'navy', true: 'black'}}
// //           thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
// //           ios_backgroundColor="green"
// //           onValueChange={toggleSwitch}
// //           value={isEnabled}
// //         />
// //       </View>
// //       <View style={styles.view2}>
// //         <FlatList
// //           // horizontal
// //           data={listProductInCart}
// //           renderItem={renderItemProductInCart}
// //         />
// //       </View>
// //       <View style={styles.view3}>
// //         <View
// //           style={{
// //             flex: 0.5,
// //             flexDirection: 'row',
// //             alignItems: 'center',
// //             justifyContent: 'space-between',

// //             marginHorizontal: 20,
// //           }}>
// //           <View>
// //             <Text style={{fontSize: 20, fontWeight: '300'}}>Subtotal :</Text>
// //           </View>
// //           <View style={{flexDirection: 'row'}}>
// //             <Text style={{fontSize: 20}}>740</Text>
// //             <Text style={{fontSize: 20}}>k VND</Text>
// //           </View>
// //         </View>
// //         <View
// //           style={{
// //             flex: 0.5,
// //             alignItems: 'center',
// //             justifyContent: 'center',
// //           }}>
// //           <TouchableOpacity
// //             onPress={() => {resetScreen('HomeStack'), console.log('quay lai')}}
// //             style={{
// //               flex: 0.8,
// //               // height: height * 0.06,
// //               width: width * 0.8,
// //               backgroundColor: '#F67952',
// //               borderRadius: 30,
// //               alignItems: 'center',
// //               justifyContent: 'center',
// //             }}>
// //             <Text
// //               style={{fontSize: 20, fontWeight: 'bold', color: Colors.white}}>
// //               CheckAccessToken
// //             </Text>
// //             <Text
// //               style={{
// //                 fontSize: 20,
// //                 fontWeight: 'bold',
// //                 color: Colors.white,
// //               }}></Text>
// //           </TouchableOpacity>
// //         </View>
// //       </View>
// //     </SafeAreaView>
// //   );
// // };
// const ChatScreen = () => {
//   // const {item} = route.params;
//   const productState = useAppSelector(state => state.productReducer);
//   const {products} = productState;
//   const productCartState = useAppSelector(state => state.cartReducer);
//   const {listProductInCart} = productCartState;
//   const dispatch = useDispatch<AppDispatch>();
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//   const [subTotal, setSubToTal] = useState(0);
//   const back = () => {
//     //
//     navigate('HomeStack');
//   };

//   const renderItemProductInCart = ({item}: ItemProduct) => {
//     // type propety Component giong style cua Component khac nhu Component <View/>
//     // cach su dung proprty item trong Component giong style cua Component View,
//     //ItemProductComponent la com ponent nhu View, Text
//     // item={item} giong style ={} cua View
//     // item cua Flatlist bat buoc ten la item
//     return <ItemProductInCart item={item} onPressToCart={() => {}} />;
//   };
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.view1}>
//         <TouchableOpacity onPress={back}>
//           <Text>BackChatScreen</Text>
//         </TouchableOpacity>
//         <Switch
//           trackColor={{false: 'navy', true: 'black'}}
//           thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
//           ios_backgroundColor="green"
//           onValueChange={toggleSwitch}
//           value={isEnabled}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };
// export default ChatScreen;
// const styles = StyleSheet.create({
//   container: {flex: 1},
//   view1: {
//     flex: 0.05,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'row',
//     marginHorizontal: 10,
//   },
//   view2: {
//     flex: 0.7,
//     margin: 10,
//   },
//   view3: {
//     flex: 0.25,
//     marginTop: 10,
//   },
//   image: {
//     width: width * 0.8,
//     height: height * 0.4,
//     marginHorizontal: 10,
//   },
// });
import React, {useState, useCallback} from 'react';
import {Dimensions, SafeAreaView, StyleSheet, View} from 'react-native';
import {GiftedChat, IMessage} from 'react-native-gifted-chat';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  return (
    // <SafeAreaView style={styles.keyboardAware}>
      // <KeyboardAwareScrollView
      //   style={styles.keyboardAware}
        // keyboardShouldPersistTaps={'handled'}
        // >
    <View style={styles.container}>
      <GiftedChat
        messages={messages}
        onSend={newMessages => onSend(newMessages)}
        user={{
          _id: 1,
        }}
      />
    </View>
    // </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
};

export default ChatScreen;

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  keyboardAware: {flex: 1},
  container: {flex: 1, height, marginHorizontal: 0},
  })