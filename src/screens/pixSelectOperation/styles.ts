import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        /* justifyContent: 'center',
        position: 'absolute', */
      }, 
    description:{
        color: theme.colors.heading,
        fontSize: 18,
        textAlign: 'center',
        fontFamily: theme.fonts.title500,
        lineHeight: 30,
        width: '80%',
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
    emptySpace: {
        fontSize: 35
    }
  });