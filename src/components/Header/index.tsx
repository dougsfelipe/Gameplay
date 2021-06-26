import React, { ReactNode } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import {
    Text,
    View
} from 'react-native';
import { theme } from '../../global/styles/theme';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';

type Props = {
    title: string,
    action?: ReactNode;
}
export function Header({ title, action }: Props) {

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <LinearGradient colors={[theme.colors.secondary100, theme.colors.secondary40]} style={styles.container}>
            <BorderlessButton>
                <Feather
                    name="arrow-left"
                    size={24}
                    color={theme.colors.heading}
                    onPress={handleGoBack}
                />
            </BorderlessButton>

            <Text style={styles.title} >
                {title}
            </Text>

            {
                action
                    ?
                    <View>
                        {action}
                    </View>
                    :
                    <View style={{ width: 24 }} />
            }
        </LinearGradient>
    )
}


