import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
      },
    bodyMainButton: {
        flex: 1,
        backgroundColor: "#0F3B49",
        marginTop: -275
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
        marginTop: -50
    },
    title2:{
        color: theme.colors.heading,
        fontSize: 40,
        textAlign: 'left',
        fontFamily: theme.fonts.title700,
        lineHeight: 55,
        marginLeft: 30,
        marginTop: 0
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 22,
        textAlign: 'left',
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        marginLeft: 30,
        marginBottom: 10
    },
    btnPrincipal: {
        width: '80%',
        height: 50,
        backgroundColor: "#117F7B",
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: '10%'
    },
    btnSecundario: {
        width: '35%',
        height: 50,
        backgroundColor: "#117F7B",
        borderRadius: 14,
        alignItems: 'center',
        marginTop: 10,
        marginLeft: '10%'
    },
    btnTxt: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'center'
    },
    linha: {
        marginTop: -40,
        color: theme.colors.heading,
    }
  });