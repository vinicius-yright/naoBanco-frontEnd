import { StyleSheet } from 'react-native';
import {theme} from '../../global/styles/theme'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        /* justifyContent: 'center',
        position: 'absolute', */
    },
    header: {
        flexDirection: 'row',
    },
    newAccountButton: {
        width: 130,
        height: 53,
        alignItems: 'center',
        backgroundColor: theme.colors.purpleButton,
        borderRadius: 14,
        marginLeft: 110,
        borderColor: "black",
        borderStyle: 'solid',
        borderWidth: 1,
        paddingTop: 10
    },
    scrollContainer: {
        flex: 1,
        backgroundColor: theme.colors.secondary100,
        borderRadius: 14,
        marginHorizontal: 20,
        marginBottom: 10,
        borderStyle: 'solid',
        borderColor: theme.colors.heading,
        borderWidth: 1,
        alignContent: 'center'
    },
    contentScrollContainer: {
        paddingVertical: 10,
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
        color: "white",
        fontSize: 25,
        textAlign: 'left',
        fontFamily: theme.fonts.roboto700,
        lineHeight: 68,
        margin: 10,
        marginLeft:30,
    },
    title2:{
        color: theme.colors.heading,
        fontSize: 25,
        textAlign: 'center',
        fontFamily: theme.fonts.roboto400,
        lineHeight: 55,
        marginRight:171
    },
    btnTxt: {
        color: "white",
        fontSize: 22,
        textAlign: 'center',
        fontFamily: theme.fonts.roboto700
    },
  });