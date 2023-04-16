import React from 'react';
import { Font, Document, Page, Svg, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { styles } from './ShippingGuide.module';
import { QRCodeSVG } from 'qrcode.react';
import { renderToString } from 'react-dom/server';
import svgToImg from 'svg-to-img';


interface Props {
    
    name?: string;
    identification?: string | number; 
    phone?: string | number;
    address?: string;
    city?: string;
}

const ShippingGuide = ({ name, identification, address, city, phone }: Props) => {
    const qrcode = <QRCodeSVG size={200} value="Any valuie for this qrcode" />;

    
    const qrCodeDataURL = renderToString(qrcode);
        
    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <Image src="/img/logo/prooving_logo.png" style={styles.logo} />
                    <View
                        style={{
                            alignItems: 'center',
                        }}
                    >
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 12,
                                marginBottom: '3px',
                                fontFamily: 'Helvetica-Bold'
                            }}
                        >
                            Prooving S.A.S
                        </Text>
                    </View>
                    <View>
                    </View>
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 10,
                    marginTop: 30
                }}>
                    <Text style={{
                        fontSize: 12,
                        marginLeft:40
                    }} >DESTINATARIO</Text>
                    <Text style={{
                        fontSize: 12,
                        marginLeft: 160
                    }} >REMITENTE</Text>
                </View>
                <View style={styles.client_information}>
                    <View style={styles.info}>
                        <View style={styles.field}>
                            <Text style={styles.title}>NOMBRE</Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    height: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                    width: '85.5%',
                                }}
                            >
                                {name}
                            </Text>
                        </View>
                        <View style={styles.field}>
                            <Text  style={[
                                    styles.title,
                                    {
                                        borderTopWidth: '0.1px',
                                        borderTopColor: 'rgba(0,0,0,0.01)',
                                    },
                                ]}>CÉDULA</Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    height: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                    width: '85.5%',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                }}
                            >
                                {identification}
                            </Text>
                        </View>
                        <View style={styles.field}>
                            <Text  style={[
                                    styles.title,
                                    {
                                        borderTopWidth: '0.1px',
                                        borderTopColor: 'rgba(0,0,0,0.01)',
                                    },
                                ]}>TELÉFONO</Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    height: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                    width: '85.5%',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    
                                }}
                            >
                                {phone}
                            </Text>
                        </View>
                        <View style={styles.field}>
                            <Text  style={[
                                    styles.title,
                                    {
                                        borderTopWidth: '0.1px',
                                        borderTopColor: 'rgba(0,0,0,0.01)',
                                    },
                                ]}>DIRECCIÓN</Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    height: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                    width: '85.5%',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                }}
                            >
                                {address}
                            </Text>
                        </View>
                        <View style={styles.field}>
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        borderTopWidth: '0.1px',
                                        borderTopColor: 'rgba(0,0,0,0.01)',
                                    },
                                ]}
                            >
                                CIUDAD
                            </Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '85.5%',
                                    height: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                }}
                            >
                                {city}
                            </Text>
                        </View>
                        <View style={styles.field}>
                            <Text
                                style={[
                                    styles.title,
                                    {
                                        borderTopWidth: '0.1px',
                                        borderTopColor: 'rgba(0,0,0,0.01)',
                                    },
                                ]}
                            >
                                CORREO
                            </Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '85.5%',
                                    height: 20,
                                    paddingHorizontal: 5,
                                    paddingVertical: 5,
                                }}
                            >
                                {phone}
                            </Text>
                        </View>
                         
                    </View>
                    <View style={styles.date}>
                        <View>
                           
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '100%',
                                    height: 20,
                                    textAlign: 'left',
                                    fontFamily: 'Helvetica-Bold',
                                    paddingHorizontal: 25,
                                    paddingVertical: 4
                                }}
                            >
                                Prooving S.A.S
                            </Text>
                        </View>
                        <View>
                           
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '100%',
                                    height: 20,
                                    textAlign: 'left',
                                    fontFamily: 'Helvetica-Bold',
                                    paddingHorizontal: 25,
                                    paddingVertical: 4
                                }}
                            >
                                1004010670
                            </Text>
                        </View>
                        <View>
                            
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '100%',
                                    height: 20,
                                    textAlign: 'left',
                                    fontFamily: 'Helvetica-Bold',
                                    paddingHorizontal: 25,
                                    paddingVertical: 4
                                }}
                            >
                                3207668383
                            </Text>
                        </View>
                        <View>
                           
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '100%',
                                    height: 20,
                                    textAlign: 'left',
                                    fontFamily: 'Helvetica-Bold',
                                    paddingHorizontal: 25,
                                    paddingVertical: 4
                                }}
                            >
                                Carrera 80a #35-16
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '100%',
                                    height: 20,
                                    textAlign: 'left',
                                    fontFamily: 'Helvetica-Bold',
                                    paddingHorizontal: 25,
                                    paddingVertical: 4
                                }}
                            >
                                Medellín
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 9,
                                    color: '#333',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    width: '100%',
                                    height: 20,
                                    textAlign: 'left',
                                    fontFamily: 'Helvetica-Bold',
                                    paddingHorizontal: 25,
                                    paddingVertical: 4
                                }}
                            >
                                info@prooving.com
                            </Text>
                        </View>
                    </View>
                </View>
                
            </Page>
        </Document>
    );
};

export default ShippingGuide;
