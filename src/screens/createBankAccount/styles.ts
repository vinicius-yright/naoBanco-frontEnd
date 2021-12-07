import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title2:{
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: theme.fonts.title700,
        lineHeight: 30,
        marginLeft: 30,
        marginTop: 0
    },
    input: {
        fontSize: 17,
        height: 50,
        width: 330,
        margin: 11,
        padding: 10,
        backgroundColor:theme.colors.heading
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 25
    },
    logoApp: {
        justifyContent:'center',
        alignContent: 'center',
        marginTop: 50,
        width:51,
        height:54,
        marginHorizontal:125,
        top: 1,
        bottom:20,
        position:'absolute',
        
    }
  });