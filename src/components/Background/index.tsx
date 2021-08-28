import { theme } from '../../global/styles/theme';
import React, { Children, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';

type Props = {
    children: ReactNode;
}


export function Background({ children }: Props) {

    return (
        <LinearGradient
            style={styles.container}
            colors={[theme.colors.primary, theme.colors.secondary100]}
        >
            {children}
        </LinearGradient>
    )
}
