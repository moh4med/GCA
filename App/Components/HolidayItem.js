/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
  Animated,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Linking,
  Easing,
} from 'react-native';
export const HolidayItem = ({item, index}) => {
  const window = useWindowDimensions();
  const Width = window.width;
  const Height = window.height;

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const transAnim = useRef(new Animated.Value(Width)).current;

  //   const fadeAnim = useRef(new Animated.Value(1)).current;
  //   const transAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    let delayTime = 200 * index + 20;
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        delay: delayTime,
        useNativeDriver: true,
      }),
      Animated.timing(transAnim, {
        toValue: 0,
        duration: 300,
        delay: delayTime,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <Animated.View
      style={{
        transform: [{translateX: transAnim}],
        opacity: fadeAnim,
        width: Width,
        height: Height * 0.15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL(item.htmlLink);
        }}
        style={{
          flexDirection: 'row',
          borderRadius: 10,
          elevation: 5,
          width: '86%',
          height: '80%',
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: '22%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{
              uri:
                'https://kikolani.com/wp-content/uploads/2010/12/happy-holidays.jpg',
            }}
            resizeMode="cover"
            style={{
              borderRadius: Height * 0.045,
              borderWidth: 0.2,
              borderColor: '#555',
              width: Height * 0.09,
              height: Height * 0.09,
            }}
          />
        </View>
        <View
          style={{
            width: '68%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingHorizontal: '4%',
          }}>
          <Text style={{fontSize: 16}}>{item.summary}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
const styles = StyleSheet.create({});
