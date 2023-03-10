/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Alert,
} from 'react-native';
export interface IItem {
    item: string;
    quantity: string;
}
interface Props {
    setShoppingList: React.Dispatch < React.SetStateAction < IItem[] >>;
    shoppingList: IItem[];
}
const AddItem: React.FC < Props > = ({shoppingList, setShoppingList}) => {
    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState('');
    const addItem = () => {
        if (!item) {
            Alert.alert('No Item!', 'You need to enter an item');
        } else {
            setShoppingList([
                ...shoppingList, {
                    item,
                    quantity: quantity || '1',
                },
            ]);
            setItem('');
            setQuantity('');
        }
    };
    return (
        <View>
            <Text style={
                styles.heading
            }>Add Shopping Item</Text>
            <View style={
                styles.form
            }>
                <TextInput style={
                        styles.input
                    }
                    placeholder="Enter item"
                    value={item}
                    onChangeText={
                        text => setItem(text)
                    }/>
                <TextInput style={
                        styles.input
                    }
                    placeholder="Enter quantity"
                    keyboardType="numeric"
                    value={quantity}
                    onChangeText={
                        q => {
                            setQuantity(q);
                        }
                    }/>
                <TouchableOpacity style={
                        styles.addItemButton
                    }
                    onPress={addItem}>
                    <Text style={
                        styles.buttonText
                    }>Add Item</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: '900',
    },
    form: {
        marginTop: 20,
    },
    input: {
        padding: 15,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 20,
    },
    addItemButton: {
        backgroundColor: 'orange',
        paddingVertical: 20,
        borderRadius: 15,
        alignItems: 'center',
    },
    buttonText: {
        color: 'black',
        fontWeight: '800',
    },
});
export default AddItem;
