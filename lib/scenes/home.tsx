import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { API_KEY } from '@env';


function Home(): JSX.Element {
    return (
        <>
            <GooglePlacesAutocomplete
                placeholder='Don Julio, El preferido, Kansas...'
                onPress={(data, details = null) => {
                    //do something with state here
                }}
                fetchDetails={true}
                // currentLocation={true}
                // currentLocationLabel='Current location'
                query={{
                    key: API_KEY,
                    language: 'en',
                }}
                styles={inputStyles}
            />
        </>
    );
}

const styles = StyleSheet.create({
    itemText: {
        color: 'white',
    },
});

const inputStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInputContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },
    textInput: {
        marginLeft: 0,
        marginRight: 0,
        height: 38,
        color: '#5d5d5d',
        fontSize: 16,
    },
    listView: {
        backgroundColor: '#f5f5f5',
    },
    description: {
        fontSize: 16,
    },
});

export default Home;
