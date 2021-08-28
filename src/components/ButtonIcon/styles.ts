import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        
        width: '70%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        marginBottom: 500,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },
})