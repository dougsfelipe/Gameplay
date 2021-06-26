import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/categorySelect';
import { ListHeader } from '../../components/ListHeader';
import { Profile } from '../../components/profile';
import { Appointment, AppointmentProps } from '../../components/Apointments';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Load } from '../../components/Load';



import { styles } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { COLLECTION_APPOINTMENTS } from '../../configs/database';


export function Home() {
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  }

  function handleeAppointmentDetails() {
    navigation.navigate('AppointmentDetails')
  }

  function handleeAppointmentCreate() {
    navigation.navigate('AppointmentCreate')
  }

  async function loadAppointments() {
    const response = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = response ? JSON.parse(response) : [];

    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage)
    }

    setLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadAppointments();
  },[category]));


  return (
    <Background>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleeAppointmentCreate} />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />

      {
        loading ? <Load/> : 
        <>
          <ListHeader
            title={"Partidas Agendadas"}
            subtitle={`Total:${appointments.length}`}
          />

          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Appointment data={item}
                onPress={handleeAppointmentDetails} />
            )}
            ItemSeparatorComponent={() => <ListDivider />}
            contentContainerStyle={{ paddingBottom: 69 }}
            style={styles.matches}
            showsVerticalScrollIndicator={false}
          />
        </>

      }



    </Background>



  );
}
