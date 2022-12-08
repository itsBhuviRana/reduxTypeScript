import React from 'react'
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';
import { NavigationContainer as NavContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';



const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});


/**
 *  Navigation Container
 */
function NavigationContainer() {
    return (
        <SafeAreaView style={styles.container}>
            <NavContainer>
                <AuthStack />  
            </NavContainer>
        </SafeAreaView>
    )
}

export default NavigationContainer
