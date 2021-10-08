import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 22
    },
    button: {
      height: 50,
      borderRadius: 10,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      marginTop: 20
    },
    content: {
        marginTop: -40,
        paddingHorizontal: 50
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
    }
  })
  