import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
      },
    content: {
        width: "90%",
        paddingHorizontal: 10,
        height: 300
    },
    btnContainer: {
        top: -60,
        flexDirection: "column"
    },
    input: {
        fontSize: 17,
        height: 50,
        width: 300,
        margin: 11,
        padding: 10,
        backgroundColor: theme.colors.heading
    },
    title:{
        color: theme.colors.heading,
        fontSize: 35,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 68,
        margin:10,
        marginLeft:30,
    },
    title2:{
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 20,
        margin:10,
        marginTop: -20,
        marginBottom: 40
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        fontWeight: 'bold',
        marginBottom: 10
    },
    subtitle2: {
        color: theme.colors.heading,
        fontSize: 20,
        textAlign: 'left',
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
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
    btnBoxContinuar: {
        width: '60%',
        height: 56,
        backgroundColor: theme.colors.purpleButton,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: -65
    },
    btnBoxCancelar: {
        width: '60%',
        height: 56,
        backgroundColor: theme.colors.purpleGay,
        borderRadius: 14,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 80,
        marginBottom: -65
    },
    btnTxt: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center'
    },
  });