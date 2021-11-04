import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    saudacoes:{
        color: theme.colors.heading,
        fontSize: 25,
        textAlign: 'left',
        fontFamily: theme.fonts.title700,
        lineHeight: 68,
        margin:10,
        marginLeft:30,
    },
    title2:{
        color: theme.colors.heading,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 55,
        marginRight:171
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 22,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        marginLeft: -80,
        marginBottom: 15
    },
    btnBox: {
        width: '60%',
        height: 56,
        backgroundColor: theme.colors.purpleButton,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnTxt: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center'
    },
    linha: {
        color: theme.colors.heading,
    }
  });