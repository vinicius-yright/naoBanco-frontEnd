import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type Props = {
    title: string,
    children: never[]
}

export function ScreenTitle({ title }: Props) {
    return (
        <Text style={styles.title}>{title}</Text>
    );
}