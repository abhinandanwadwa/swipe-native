import { View, Text, StyleSheet, StatusBar, Button, Image, Pressable, Animated, Vibration } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HomeScreen = ({ navigation }) => {
    // Initial scale value of 1 means no scale applied initially.
    const animatedButtonScale = new Animated.Value(1);

    // When button is pressed in, animate the scale to 1.5
    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 0.9,
            useNativeDriver: true,
        }).start();
    };

    // When button is pressed out, animate the scale back to 1
    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    // The animated style for scaling the button within the Animated.View
    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };



    const getStarted = () => {
        navigation.navigate('Login');
    }


  return (
    <>
    <StatusBar barStyle={'light-content'} />
    <View style={styles.container}>
        <View style={styles.image}>
            <Image style={{ width: 300, height: 300 }} source={require("../assets/logoHeader.png")} />
            <Text>Hi</Text>
        </View>
        <View style={styles.button}>
            <TouchableWithoutFeedback
                onPress={getStarted}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
            >
            <Pressable onPress={getStarted} style={({ pressed }) => [
                {
                    display: 'flex',
                    width: 250,
                    transform: [{ scale: pressed ? 0.97 : 1 }]
                }
            ]}>
                <Animated.View style={[styles.buttonTextContainer, animatedScaleStyle]}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </Animated.View>
        </Pressable>
        </TouchableWithoutFeedback>
        </View>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    image: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        flex: 1,
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        transform: [{ scale: 1 }]
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
        backgroundColor: '#2a2a2a',
        padding: 20,
        borderRadius: 20,
        overflow: 'hidden',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
    },
    buttonTextContainer: {
        display: 'flex',
        width: '100%',
    },
    // buttonPressable: {
    //     display: 'flex',
    //     width: 250,
    // }
});

export default HomeScreen