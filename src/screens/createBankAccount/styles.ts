import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
      }, 
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    input: {
        fontSize: 17,
        height: 50,
        width: 300,
        margin: 11,
        padding: 10,
        marginLeft: 15,
        backgroundColor:theme.colors.heading
    },
    inputSenha: {
        fontSize: 17,
        height: 50,
        width: 150,
        margin: 11,
        padding: 10,
        marginLeft: 15,
        backgroundColor:theme.colors.heading,
    },
    title:{
        color: theme.colors.heading,
        fontSize: 30,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 31,
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 18,
        marginLeft: 15,
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
        
    },
    nomeApp: {
        color: theme.colors.heading,
        fontSize: 28,
        textAlign: 'center',
        alignContent: 'center',
        fontFamily: theme.fonts.title500,
        fontWeight:'bold',
        marginTop: 56,
        marginLeft: 81,
        width:190,
        height:100,
    },
  });