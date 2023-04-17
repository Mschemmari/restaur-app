import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';

function Home(): JSX.Element {
    return (

        <View>
            <Text style={styles.itemText}>Hola</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    itemText: {
        color: 'white',
    },
});

export default Home;
