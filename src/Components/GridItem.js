import React from 'react'
import { View, StyleSheet, Text, FlatList,Dimensions,TouchableOpacity,SafeAreaView} from 'react-native'

{/*const datalist = [
    { key: '1', type: 'Pending Order' },
    { key: '2', type: 'Completed Order' },
    { key: '3', type: 'New Order' },
    { key: '4', type: 'Setting' },
    { key: '5', type: 'Products' },
{ key: '6', type: 'Catalogue' }]*/}

const numColumns = 2

const Width = Dimensions.get('window').width

const GridItem = (props) => {
    
    const renderItem = (item,id) => {
        
        return (
           
            <TouchableOpacity style={Styles.itemStyle} onPress={()=>props.handle(id)} >
                <View style={{ top: 10 }} >
                   <Text style={Styles.itemText}>{item.type}</Text>
                 </View>
             </TouchableOpacity>
         
            
        )
    }
   
    return (
        <SafeAreaView style={Styles.Container}>
       
            <FlatList
                data={props.data}
                renderItem={({ item ,index}) =>renderItem(item,index)}
                keyExtractor={(item, index) => index.toString()}
                numColumns={numColumns} />
        </SafeAreaView>
    )
}

const Styles = StyleSheet.create({
    Container: {
     
        backgroundColor: '#006400',
        marginHorizontal:10,
        top:80
    },
    itemStyle: {
        backgroundColor:'white',
        height:100,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        borderRadius: 10,
        
    },
    itemText: {
        color: 'green',
        fontSize: 13,
        top:-10,
        fontWeight:'bold'
    }

})
export default GridItem