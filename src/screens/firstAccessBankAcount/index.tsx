import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Background } from '../../components/Background';
import { ButtonIcon } from '../../components/ButtonIcon';
import { LogoPlusName } from '../../components/LogoPlusName';
import { Tutorial } from '../../components/Modal/Tutorial.js';
import { styles } from './styles';


export function FirstAccessBankAccount() {

    const navigation = useNavigation();
    const [tutorial, setTutorial] = useState(false);
    const [firstView, setFirstView] = useState(true);

    function handleCreateBankAccount() {
        if (firstView){
            setTutorial(true) 
            setFirstView(false)
        }
        else{
            navigation.navigate('CreateBankAccount');
        } 
    }

    return (
        <Background>
            <LogoPlusName backToScreen='FirstAccess'/>

            <View style={styles.container}>

                <View>
                    <Text style={styles.subtitle}>
                        Você ainda não possui uma conta bancária. Clique no botão abaixo para criar a sua primeira!{`\n`}
                    </Text>
                </View>

                <View>
                    <ButtonIcon title="Criar 1ª Conta Bancária!"
                        onPress={() => handleCreateBankAccount()}
                    />
                </View>
            </View>
            <Tutorial
                show={tutorial}
                textTutorial = {
                    "Crie sua primeira conta bancária. \n\nVai ser um sucesso."
                }
                redirect=''
            />
        </Background>
    );
}