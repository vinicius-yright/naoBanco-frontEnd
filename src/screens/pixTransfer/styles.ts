import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        /* justifyContent: 'center',
        position: 'absolute', */
      }, 
    /*input: {
        fontSize: 17,
        height: 50,
        width: 150,
        margin: 11,
        padding: 10,
        backgroundColor:theme.colors.heading,
    },*/
    input: {
        fontSize: 17,
        height: 50,
        width: 300,
        margin: 11,
        padding: 10,
        backgroundColor:theme.colors.heading
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
        marginBottom: -10
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 17,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 25,
        marginLeft: 5,
        marginTop: 10,
        marginBottom: -10
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
  });