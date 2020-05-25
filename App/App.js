/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';
import {HolidayItem} from './Components/HolidayItem';
import {ActivityIndicator} from 'react-native';
const App: () => React$Node = () => {
  const [Holidays, setHolidays] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      'https://www.googleapis.com/calendar/v3/calendars/en.usa%23holiday%40group.v.calendar.google.com/events?key=AIzaSyDoP_UMmTZRNG8KoXSv4zxASSedQnI9920',
    )
      .then(response => response.json())
      .then(json => {
        console.log('json', json.items.length);
        setHolidays(json.items);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 18,
          paddingTop: 10,
          fontFamily: 'Cochin',
          fontWeight: 'bold',
          height: '7%',
          backgroundColor: '#fff',
        }}>
        All Holidays in US
      </Text>
      {Loading && <ActivityIndicator />}
      <FlatList
        data={Holidays}
        renderItem={({item, index}) => (
          <HolidayItem item={item} index={index} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
