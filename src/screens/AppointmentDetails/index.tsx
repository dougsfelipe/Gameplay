import React from 'react'
import { Fontisto } from '@expo/vector-icons'
import {
    View,
    Text,
    ImageBackground,
    FlatList
} from 'react-native';

import { Background } from '../../components/Background'
import { ListHeader } from '../../components/ListHeader'
import { Header } from '../../components/Header'
import { BorderlessButton } from 'react-native-gesture-handler'
import { theme } from '../../global/styles/theme';
import BannerImg from '../../assets/banner.png'
import { styles } from './style';
import { Member } from '../../components/Member';
import { ButtonIcon } from '../../components/ButtonIcons'
import { ListDivider } from '../../components/ListDivider';

export function AppointmentDetails() {

    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline'
        }
    ]

    return (

        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto
                            name="share"
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />

            <ImageBackground source={BannerImg}
                style={styles.banner}>

                <View style={styles.bannerContent}>
                    <Text style={styles.title}>
                        Lendarios
                 </Text>

                    <Text style={styles.subtitle}>
                        E Hoje que vamos chegar ao chalanger sem perder uma partida da md10
                 </Text>

                </View>
            </ImageBackground>
            <ListHeader
                title="Jogadores"
                subtitle="Total 3" />

            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member data={item}/>
                    )}
                ItemSeparatorComponent={()=> <ListDivider isCentered/>}
                style={styles.members}
                
            />
            <View style={styles.footer}>
            <ButtonIcon
            title="Entrar na Partida"
            />
            </View>
        </Background>
    )
}
