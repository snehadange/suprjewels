import React from 'react'
import { View, StyleSheet, Text, Modal,Button } from 'react-native'
import { AntDesign, MaterialCommunityIcons } from 'react-native-vector-icons'
import GridItem from '../Components/GridItem'
import ModalOrder from '../Components/ModalOrder'
import { TouchableOpacity } from 'react-native-gesture-handler'

const datalist = [
    { key: '1', type: 'Pending Order' },
    { key: '2', type: 'Completed Order' },
    { key: '3', type: 'New Order' },
    { key: '4', type: 'Setting' },
    { key: '5', type: 'Products' },
    { key: '6', type: 'Catalogue' }]

const Home = (props) => {
    [visible, setVisible] = React.useState(false)

    const goToNext = (id) => {
        if (id == 0) {
            props.navigation.navigate('PendingOrder')
        } else if (id == 1) {
            props.navigation.navigate('CompletedOrder')
        } else if (id == 2) {
           setVisible(true)
        }

    }


    const addCustomer=()=>{
      setVisible(false)
       props.navigation.navigate('AddCustomer')
    }

    const selectCustomer=()=>{
        setVisible(false)
        props.navigation.navigate('SelectCustomer')
    }


    return (
        <View style={Styles.Container}>
            <View style={Styles.header}>
                <Text style={Styles.headerTitle}>Dashboard</Text>
                <View style={{ left: 100 }}>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="logout" style={{ color: 'white' }} size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={{ color: 'white', top: 10, left: 10, fontWeight: 'bold' }}>Hello Sneha</Text>
            <GridItem handle={(id) => goToNext(id)} data={datalist} />

             <ModalOrder visible={visible} addCustomer={()=>addCustomer()} 
             selectCustomer={()=>selectCustomer()}/>
            
            
        </View>
    )
}

const Styles = StyleSheet.create({
    Container: {
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
export default Home