import React from 'react'
import { View } from '../../components/Layout/Theme'
import { Text, View as DefaultView, TouchableOpacity, Image, TextInput } from 'react-native'
import Icon  from 'react-native-vector-icons/Ionicons'

const Search = () => {
  return (
    <View style={{
        backgroundColor: '#0c0f24',
        height: '100%'
    }}>
        <Text style={{
            color: '#fff',
            fontSize: 25,
            marginTop: 60,
            textAlign: 'center',
            fontWeight: '600',
            letterSpacing: 2
        }}>Itaaj Realty</Text>

        <DefaultView style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexDirection: 'row',
            marginTop: 40
        }}>
            <Text style={{
                color: '#15a0b8',
                marginRight: 15,
                fontSize: 14,
                fontWeight: '400',
                borderBottomWidth: 1,
                borderColor: '#15a0b8',
                width: '29%',
                textAlign: 'center',
                paddingBottom: 5
            }} >COMPRAR</Text>
            <Text style={{
                color: '#fff',
                marginRight: 15,
                fontSize: 14,
                width: '29%',
                textAlign: 'center',
                paddingBottom: 5
            }} >DESARROLLOS</Text>
            <Text style={{
                color: '#fff',
                fontSize: 14,
                width: '29%',
                textAlign: 'center',
                paddingBottom: 5
            }} >AGENTES</Text>
        </DefaultView>

        <DefaultView style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15
        }}>
            <DefaultView style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                borderRadius: 10,
                width: '95%',
                alignItems: 'center',
                paddingHorizontal: 10
            }}>

            <Icon name='ios-search' size={20}  />
            <TextInput style={{
                width: '95%',
                borderRadius: 10,
                backgroundColor: '#fff',
            }} placeholder='Ciudad, colonia, etc...' />
            </DefaultView>

            <TouchableOpacity style={{
                borderWidth: 1,
                backgroundColor: '#15a0b8',
                width: '95%',
                padding: 15,
                borderRadius: 10,
                marginTop: 15,
            }}>  
                <Text style={{
                    color: '#fff',
                    textAlign: 'center'
                }}>Buscar</Text>
            </TouchableOpacity>
        </DefaultView>

        <DefaultView style={{
            backgroundColor: '#fff',
            padding: 20,
            position: 'absolute',
            bottom: 0,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15
        }}>
            <DefaultView style={{
                position: 'absolute',
                width: 20,
                height: 4,
                top: 5,
                borderRadius: 50,
                backgroundColor: '#999'
            }} />
            <Text style={{
                fontWeight: '600',
                marginBottom: 20,
                fontSize: 16
            }}>Quieres vender un inmueble?</Text>
            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: '#15a0b8',
                width: '100%',
                padding: 10,
                borderRadius: 10
            }}>  
                <Text style={{
                    color: '#15a0b8',
                    textAlign: 'center'
                }}>Publica tu propiedad gratis</Text>
            </TouchableOpacity>
            <DefaultView style={{
                flexDirection: 'row',
                marginTop: 20
            }}>
            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.1)',
                width: '47%',
                padding: 10,
                borderRadius: 10,
                marginRight: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>  
            <Image style={{
                width: 40,
                height: 40,
                marginRight: 5
            }} source={{
                uri: 'https://i.ibb.co/mF2vtmR/value.webp'
            }} />
                <Text style={{
                    color: '#000',
                    textAlign: 'left',
                    fontSize: 16,
                    fontWeight: '500',
                    width: '70%',

                }}>Valora tu casa</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                borderWidth: 1,
                borderColor: 'rgba(0,0,0,.1)',
                width: '47%',
                padding: 10,
                borderRadius: 10,
                marginLeft: 10,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
            }}>  
            <Image style={{
                width: 40,
                height: 40,
                marginRight: 5
            }} source={{
                uri: 'https://i.ibb.co/DWGTZYT/investment.webp'
            }} />
                <Text style={{
                    color: '#000',
                    textAlign: 'left',
                    width: '80%',
                    fontSize: 16,
                    fontWeight: '500'
                }}>Meta agentes itaaj</Text>
            </TouchableOpacity>
            </DefaultView>
        </DefaultView>
    </View>
  )
}

export default Search;