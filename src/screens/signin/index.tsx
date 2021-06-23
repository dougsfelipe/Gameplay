import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar 
} from 'react-native';

import { ButtonIcon } from '../../components/ButtonIcons';
import IllustrationImg from '../../assets/illustration.png';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


export function Signin() {
    const [text, setText] = useState('estado');

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.container}>
           
            <Image source={IllustrationImg} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Conecte-se {'\n'}
                    e organize suas{'\n'}
                    jogatinas
            </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favotiritos com seus amigos{'\n'}
                </Text>

                <ButtonIcon title="Entrar com Discord"  onPress={handleSignIn}/>
            </View>
        </View>
    );
}

