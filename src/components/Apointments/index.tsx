import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';

import { styles } from './style';
import PlayerSvg from '../../assets/player.svg';
import CalendarSvg from '../../assets/calendar.svg';

import { GuildProps } from '../Guild';
import { GuildIcon } from '../GuildIcon';
import { categories } from '../../utils/categorys';
import { theme } from '../../global/styles/theme';



export type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
}

type Props = RectButtonProps & {
  data: AppointmentProps;
} 

export function Appointment({ data, ...rest }: Props) {
  const [category] = categories.filter(item => item.id === data.category);
  const { owner } = data.guild;
  const { primary, on } = theme.colors;

  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon guildId={data.guild.id} iconId={data.guild.icon}/>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>
              { data.guild.name }
            </Text>

            <Text style={styles.category}>
              { category.title }
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />

              <Text style={styles.date}>
                { data.date }                
              </Text>
            </View>

            <View style={styles.playersInfo}>
              <PlayerSvg fill={ owner ? on : primary}/>

              <Text style={[
                styles.player, 
                { color: owner ? on : primary }
              ]}>
                { owner ? 'Anfitrião' : 'Visitante' }
              </Text>
            </View>          
          </View>
        </View>
      </View>
    </RectButton>
  )

}