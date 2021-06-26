import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import {
    Text,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png';
import {styles} from './style'

type Props = RectButtonProps &{
    title: string;
}
export function Button({title, ...rest } : Props){
    return(
        <RectButton style={styles.container} {...rest}>
          
            <Text style={styles.title}>
                {title}
            </Text>
        </RectButton>
    )
}