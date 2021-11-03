import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    logoApp: {
       // justifyContent:'center',
       // alignContent: 'center',
        marginTop: 50,
        width:51,
        height:54,
        marginHorizontal:125,
        top: 1,
        bottom:20,
       // position:'absolute',
        
    },
    nomeApp: {
        color: theme.colors.heading,
        fontSize: 28,
        fontFamily: theme.fonts.title500,
        fontWeight:'bold',
        /* marginTop: 56,
        marginLeft: 180,
        width:190,
        marginBottom:500, */
        marginTop: -49,
        height:100,
        marginHorizontal:179,
        width:150,
        top: 1,
        bottom:20,
    },
})