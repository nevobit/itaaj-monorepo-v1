import React from 'react';
import { Font, Document, Page, Svg, Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import { styles } from './Prooving.module';
import { QRCodeSVG } from 'qrcode.react';
import { renderToString } from 'react-dom/server';
import svgToImg from 'svg-to-img';


interface Props {
    name?: string;
    city?: string;
    phone?: string;
    date?: string;
    due?: string;
}

const Prooving = ({ name, city, phone, date, due }: Props) => {
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
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 9,
                                marginBottom: '3px',
                            }}
                        >
                            1004010670
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 9,
                                marginBottom: '3px',
                            }}
                        >
                            Carrera 80A #35-16
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 9,
                                marginBottom: '3px',
                            }}
                        >
                            Medellin - Antioquia
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 9,
                                marginBottom: '3px',
                            }}
                        >
                            3207768383
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 9,
                                marginBottom: '3px',
                            }}
                        >
                            ventas@prooving.com
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontWeight: 'bold',
                                color: '#333',
                                fontSize: 10,
                                marginBottom: '2px',
                                fontFamily: 'Helvetica-Bold'
                            }}
                        >
                            No. P1067
                        </Text>
                        <Text
                            style={{
                                color: '#333',
                                fontSize: 10,
                            }}
                        >
                            Cotización
                        </Text>
                    </View>
                </View>
                <View style={styles.client_information}>
                    <View style={styles.info}>
                        <View style={styles.field}>
                            <Text style={styles.title}>SEÑOR(ES)</Text>
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
                                TELEFONO
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
                                    fontSize: 8,
                                    height: '50%',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                    paddingTop: 2,
                                    fontFamily: 'Helvetica-Bold'
                                }}
                            >
                                FECHA DE EXPEDICION
                            </Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    height: '50%',
                                    paddingTop: 2,
                                }}
                            >
                                {date}
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    fontSize: 8,
                                    height: '50%',
                                    borderTopWidth: '0.1px',
                                    borderTopColor: 'rgba(0,0,0,0.01)',
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                    paddingTop: 2,
                                    fontFamily: 'Helvetica-Bold'
                                }}
                            >
                                FECHA DE VENCIMIENTO
                            </Text>
                            <Text
                                style={{
                                    fontSize: 9,
                                    height: '50%',
                                    paddingTop: 2,
                                }}
                            >
                                {due}
                            </Text>
                        </View>
                    </View>
                </View>
                
                <View style={{
                    paddingHorizontal: 10
                }}>
                    <View>
                        <Text
                            style={{
                                fontSize: 8,
                                color: '#333',
                            }}
                        >
                            Moneda: COP
                        </Text>
                        <Text
                            style={{
                                fontSize: 8,
                                color: '#333',
                            }}
                        >
                            Fecha de generacion: {date}
                        </Text>
                        <Text
                            style={{
                                fontSize: 8,
                                color: '#333',
                            }}
                        >
                            Tipo de documento: Nacional
                        </Text>
                        <Text
                            style={{
                                fontSize: 8,
                                color: '#333',
                            }}
                        >
                            Tipo de operacion: Estandar
                        </Text>
                        <Text
                            style={{
                                fontSize: 8,
                                color: '#333',
                            }}
                        >
                            Forma de pago: Contado
                        </Text>
                        <Text
                            style={{
                                fontSize: 8,
                                color: '#333',
                            }}
                        >
                            Medio de pago: Efectivo
                        </Text>
                    </View>
                </View>
                
                <Text style={{
                   fontSize: 8,
                   marginTop: 20,
                   marginBottom: 20 ,
                   color: '#333',
                   maxWidth: '90%',
                   paddingHorizontal: 10
                }}>
                    
                En <Text style={{fontFamily: 'Helvetica-Bold'}}>Prooving S.A.S</Text>, estamos tan seguros de la calidad de nuestros productos que ofrecemos una <Text style={{fontFamily: 'Helvetica-Bold'}}>garantía</Text> de <Text style={{fontFamily: 'Helvetica-Bold'}}>18 meses</Text> en todos nuestros productos. Si experimenta algún problema con su equipo durante los primeros <Text style={{fontFamily: 'Helvetica-Bold'}}>18 meses</Text> después de la compra, háganoslo saber y haremos todo lo posible para resolverlo de manera rápida y efectiva. Si aún no está satisfecho, le ofrecemos un <Text style={{fontFamily: 'Helvetica-Bold'}}>reembolso completo</Text>. Queremos que se sienta seguro y feliz con su compra, y nuestra <Text style={{fontFamily: 'Helvetica-Bold'}}>garantía</Text> de <Text style={{fontFamily: 'Helvetica-Bold'}}>18 meses</Text> demuestra nuestro compromiso con su satisfacción total.
                </Text>
                    
                <View style={styles.sings}>
        <View>
            <Text style={styles.author}>Nestor Mosquera</Text>
            {/* <h3>{userState.user.name} {userState.user.lastname}</h3> */}
            <View style={styles.line}></View>
            <Text style={styles.signs_text}>ELABORADO POR</Text>
        </View>
        <View style={{
            position: 'relative',
            marginTop: 10
        }}>
            <Image src="https://i.postimg.cc/50bQb28Q/1-Stamp.png" style={{
                width: 160,
                height: 160,
                position: 'absolute',
                top: -90,
                left: 5
            }} />
            <Text style={styles.line}></Text>
            <Text style={styles.signs_text}>ACEPTADA, FIRMA Y/O SELLO</Text>
        </View>
      </View>
            </Page>
        </Document>
    );
};

export default Prooving;
