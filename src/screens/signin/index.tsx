import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar 
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcons';
import { styles } from './styles';


export function Signin() {
    const [text, setText] = useState('estado');

    return (
        <View style={styles.container}>
            <StatusBar barStyle='light-content' backgroundColor="transparent" translucent/>
            <Image source={IllustrationImg} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {'\n'}
                    suas jogatinas{'\n'}
                    facilmente
            </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {'\n'}
                    favotiritos com seus amigos{'\n'}
                </Text>

                <ButtonIcon title="Entrar com Discord" activeOpacity={0.8}/>
            </View>
        </View>
    );
}

