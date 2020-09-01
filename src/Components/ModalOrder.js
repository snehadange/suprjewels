import React from 'react'
import { View, StyleSheet, Text, Modal,TouchableOpacity } from 'react-native'

const ModalOrder = (props) => {

    

    return (
        <Modal
            animationType={"fade"}
            transparent={true}
            visible={props.visible}
            onRequestClose={() => { console.log("Modal has been closed.") }} >
            <View style={{ marginTop: 250, backgroundColor: 'white', width: 500, height: 100 ,justifyContent:'space-around'}}>
                <TouchableOpacity style={{backgroundColor:'green',height:30,left:4,width:350}} onPress={()=>props.addCustomer()}>
                    <Text style={{color:'white',alignItems:'center',left:100,textTransform:'uppercase',fontWeight:'bold'}}>Add New Customer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{backgroundColor:'green',height:30,left:4,width:350}} onPress={()=>props.selectCustomer()}>
                    <Text style={{color:'white',alignItems:'center',left:70,textTransform:'uppercase',fontWeight:'bold'}}>Select Existing Customer</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}

export default ModalOrder;