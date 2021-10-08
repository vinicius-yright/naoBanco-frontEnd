import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        marginTop: 240,
        marginBottom: 225,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
    },
    title: {
        flex: 1,
        color: theme.colors.heading,
        fontSize: 60,
        textAlign: 'center',
        alignContent: 'center',
        fontFamily: theme.fonts.title700,
        lineHeight: 60
    },
    subtitle: {
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center',
        marginBottom: 64,
        fontFamily: theme.fonts.title500,
        lineHeight: 25
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
        height:200,
        
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