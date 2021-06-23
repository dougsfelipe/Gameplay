import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from '../avatar';
import { styles } from './style';


export function Profile() {
    return (
        <View style={styles.container}>

            <Avatar urlImage="https://github.com/dougsfelipe.png"/>
           <View>
               <View style={styles.user}>
                   <Text style={styles.greeting} >
                       Olá, 
                   </Text>

                   <Text style={styles.username} >
                       Rodrigo
                   </Text>
               </View>

               <Text style={styles.message} >
                       Hoje é dia de vitóriia
                   </Text>
           </View>
        </View>
    )
}