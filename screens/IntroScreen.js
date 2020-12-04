import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';



export default () => {
   
    return (
        <View style={styles.container}>
           
            <StatusBar style="auto" />
            
            <Image
          style={styles.image}
          source={{uri: 'https://images3.alphacoders.com/651/651074.jpg'}}/>
              
              <Text style={styles.text}>POST</Text> 
            <Button
                title="Entrar"
                color="#FF5733"
               
                onPress={() => Alert.alert('Siga')}
                
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: "column",
        
    },
    tinyLogo: {
        width: 500,
        height: 550,
    },
    image: {
        flex: 2,
        justifyContent: "center",
        width: '100%',
         height: '100%',
         position: 'absolute',
         
    },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        backgroundColor: "#000000a0",
        position: 'relative',
        padding: "5px",
        margin: "35px"
      }
});

