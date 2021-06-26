import React from 'react';
import { ScrollView } from 'react-native'
import {
    Text,
    Image,
    View,
    TouchableOpacity,
    TouchableOpacityProps
} from 'react-native';


import {styles} from './style';
import {categories} from '../../utils/categorys'
import { Category } from '../Category';


type Props = {
    categorySelected: string;
    setCategory: (categoryId: string) => void;
    hasCheckBox?: boolean;
  }



export function CategorySelect({ categorySelected,setCategory, hasCheckBox=true, }: Props){
    return(
        <ScrollView
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingRight:40}}
        >

            {
                categories.map(category => (
                    <Category 
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked= { category.id === categorySelected}
                        onPress={() => setCategory(category.id)}
                        hasCheckBox={hasCheckBox}
                    />
                ))
            }
           

        </ScrollView>
    )
}