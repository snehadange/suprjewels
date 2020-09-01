import React, { useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, TextInput,Picker } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { Card } from 'react-native-shadow-cards';

import { ScrollView } from 'react-native-gesture-handler';

const AddCustomer = (props) => {
    const [showMe, setIndicator] = React.useState(true)
    const [name, setName] = React.useState('')
    const [number, setNumber] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [selectedValue,setSelectedValue]= React.useState('java');

    useEffect(() => {
        setTimeout(() => {
            setIndicator(false)
        }
            , 3000)
    })


    return (
        <View style={Styles.container}>
            <View style={Styles.header}>
                <View style={{ right: 90 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                        <Ionicons name="md-arrow-back" style={{ color: 'white' }} size={25} />
                    </TouchableOpacity>
                </View>
                <Text style={Styles.headerTitle}>Add Customer</Text>
            </View>

            {
                showMe ?
                    <ActivityIndicator size="small" color="white" /> :
                    <View style={{ flex: 1 }}>
                        <ScrollView style={{ marginTop: 10 }}>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Componey Name *</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="none"
                                    placeholder="Enter Compony Name"
                                    onChangeText={name => setName(name)}
                                    value={name} />
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Componey Number *</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="none"
                                    placeholder="Enter Compony Number"
                                    keyboardType="number-pad"
                                    maxLength={10}
                                    onChangeText={number => setNumber(number)}
                                    value={number} />
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Componey Email *</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="none"
                                    placeholder="Enter Compony Email"
                                    keyboardType="email-address"
                                    onChangeText={email => setEmail(email)}
                                    value={email} />
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Componey Type *</Text>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 50, width: 300 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Type *</Text>
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 50, width: 300 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                    <Picker.Item label="Java" value="java" />
                                    <Picker.Item label="JavaScript" value="js" />
                                </Picker>
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Componey address *</Text>
                                <TextInput
                                    style={Styles.input}
                                    autoCapitalize="none"
                                    placeholder="Enter Compony Email"
                                    keyboardType="email-address"
                                    onChangeText={email => setEmail(email)}
                                    value={email} />
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Pin code *</Text>
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Country *</Text>
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>State *</Text>
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Point of Contact Name *</Text>
                            </Card>
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold' }}>Point of Contact Number *</Text>
                            </Card>``
                            <Card style={{ padding: 10, margin: 10 }}>
                                <Text style={{ color: 'black', fontWeight: 'bold', backgroundColor: 'green', width: 90, borderRadius: 10, height: 30 }}>Select Logo</Text>
                            </Card>
                            <TouchableOpacity style={{ backgroundColor: 'white', width: 90, borderRadius: 10, height: 40, left: 100 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', paddingLeft: 10 }}>Submit</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
            }

        </View>
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
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
        height: 40,
        fontSize: 15,
        color: '#161F3D',


    },
})

export default AddCustomer;