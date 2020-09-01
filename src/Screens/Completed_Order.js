import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView,ActivityIndicator } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { Searchbar } from 'react-native-paper';

const CompletedOrder = (props) => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [showMe, setIndicator] = React.useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIndicator(false)
        }
        , 3000)
    })

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <SafeAreaView style={Styles.container}>
            <View style={Styles.header}>
                <View style={{ right: 90 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Ionicons name="md-arrow-back" style={{ color: 'white' }} size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={Styles.headerTitle}>Completed Orders</Text>

            </View>
            {
                showMe ?
                    <ActivityIndicator size="small" color="white" /> :
                    <Searchbar
                        placeholder="Search"
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                    />}



        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#006400',
    },
    header: {
        paddingTop: 64,
        paddingBottom: 16,
        backgroundColor: '#006400',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#EBECF4',
        shadowColor: '#454D65',
        shadowOffset: { height: 5 },
        shadowRadius: 15,
        shadowOpacity: 0.2,
        zIndex: 10,
        flexDirection: 'row'
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',

    },
})
export default CompletedOrder;