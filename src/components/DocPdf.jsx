import { Document, Image, Page, Text, View } from '@react-pdf/renderer'
import React from 'react'

const DocPdf = ({ userData, data }) => {
  return (
    <Document>
      <Page size='A4'>
        <Image src='/logo-yavo.png' alt='logo' style={{ marginLeft: 'auto', marginRight: 'auto', width: '325px', height: 'auto' }} fixed />
        <View style={{ width: '100%' }}>
          <View className='grid grid-cols-2 p-5' style={{ padding: '20px', display: 'grid' }}>
            <View>
              <Text style={{ fontSize: '12px', fontWeight: 'bold' }}>{userData[1].A}</Text>
              <Text style={{ fontSize: '10px' }}>No Crédito: {userData[1].B}</Text>
              <Text style={{ fontSize: '10px' }}>NSS: {userData[1].C}</Text>
            </View>
            <View style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>
              <View>
                <Text style={{ fontSize: '12px', marginTop: '20px' }}>Estado de cuenta MejoraSí</Text>
                <Text style={{ fontSize: '10px' }}>Cuenta: {userData[1].D}</Text>
                <Text style={{ fontSize: '10px' }}>Tarjeta: {userData[1].E}</Text>
                <Text style={{ fontSize: '10px' }}>Periodo: {userData[1].F}</Text>
              </View>
              <View>
                <Text style={{ fontSize: '12px', marginTop: '20px' }}>Saldo ATM</Text>
                <Text style={{ fontSize: '10px' }}>Saldo inicial: $44,450.50 Saldo final: $35.80</Text>
                <Text style={{ fontSize: '10px' }}>Moneda Nacional</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <View style={{ backgroundColor: '#FDBA74', fontSize: '12px', textTransform: 'uppercase', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '8px' }}>
            <Text style={{ width: '20px' }}>Fecha</Text>
            <Text style={{ width: '175px' }}>Concepto</Text>
            <Text style={{ width: '90px' }}>Autorización</Text>
            <Text style={{ width: '50px' }}>Abono</Text>
            <Text style={{ width: '50px' }}>Cargo</Text>
            <Text style={{ width: '70px' }}>Estatus</Text>
          </View>
          <View>
            {data.map((d, index) => (
              <View style={{ backgroundColor: `${d.__rowNum__ % 2 === 0 ? '#fff' : '#989999'}`, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '8px', fontSize: '10px' }} key={index}>
                <Text style={{ fontSize: '10px', width: '20px' }}>
                  {/* Fecha */}
                  {d.L}
                </Text>
                <View style={{ display: 'flex', flexDirection: 'column', width: '175px' }}>
                  {/* Concepto */}
                  <Text style={{ fontSize: '10px' }}>{d.D}</Text>
                  <Text>{d.B}</Text>
                </View>
                <Text style={{ padding: '2px', fontSize: '10px', width: '90px' }}>
                  {/* Autorizacion */}
                  {d.C}
                </Text>
                <Text style={{ padding: '2px', fontSize: '10px', width: '50px' }}>
                  {/* Abono */}
                  {d.D === 'DISPERSION' ? `${d.K}` : ''}
                </Text>
                <Text style={{ padding: '2px', fontSize: '10px', width: '50px' }}>
                  {/* Cargo */}
                  {d.D !== 'DISPERSION' ? `${d.K}` : ''}
                </Text>
                <Text style={{ padding: '2px', fontSize: '10px', width: '70px' }}>
                  {/* Status */}
                  {d.H}
                </Text>
              </View>
            ))}
            <View style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', height: 'auto', display: 'grid', paddingVertical: '10px', position: 'relative' }} fixed>
              <Text style={{ fontSize: '14px', textAlign: 'center' }}>www.yavocapital.com</Text>
              <Text style={{ backgroundColor: '#FDBA74', marginVertical: '5px', width: '400px', borderRadius: '10px', alignItems: 'center', marginHorizontal: 'auto', height: '4px' }}> </Text>
              <Text style={{ fontSize: '10px', textAlign: 'center' }}>Av. Contreras 700 - 302, San Jerónimo Lídice</Text>
              <Text style={{ fontSize: '10px', textAlign: 'center' }}>Magdalena Contreras, CDMX 10200</Text>
              <Text style={{ fontSize: '10px', textAlign: 'center' }}>Oficina: 52 55 4165 3386</Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default DocPdf
