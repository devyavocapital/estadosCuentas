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
                <Text style={{ fontSize: '10px' }}>Saldo inicial: {userData[1].G} Saldo final: {userData[1].H}</Text>
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
              <View style={{ backgroundColor: `${d.__rowNum__ % 2 === 0 ? '#fff' : '#989999'}`, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '5px', fontSize: '10px' }} key={index}>
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
                  {d.D.indexOf('Abono') > -1 ? `${d.K}` : ''}
                </Text>
                <Text style={{ padding: '2px', fontSize: '10px', width: '50px' }}>
                  {/* Cargo */}
                  {/* {d.D !== 'DISPERSION' ? `${d.K}` : ''} */}
                  {d.B.indexOf('Abono') > -1 ? '' : `${d.K}`}
                </Text>
                <Text style={{ padding: '2px', fontSize: '10px', width: '70px' }}>
                  {/* Status */}
                  {d.H}
                </Text>
              </View>
            ))}
            <View style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', alignItems: 'flex-end', alignContent: 'flex-end', flexDirection: 'row', marginRight: '4px' }}>
              <Text style={{ border: '1px solid #000', backgroundColor: '#FDBA74', padding: '2px', fontSize: '10px' }}>Saldo Final:</Text><Text style={{ fontSize: '12px', borderBottom: '1px solid black' }}>{userData[1].H}</Text>
            </View>
            <View style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', height: 'auto', display: 'grid', paddingVertical: '10px', position: 'relative' }} fixed>
              <Text style={{ fontSize: '14px', textAlign: 'center' }}>www.yavocapital.com</Text>
              <Text style={{ backgroundColor: '#FDBA74', marginVertical: '5px', width: '400px', borderRadius: '10px', alignItems: 'center', marginHorizontal: 'auto', height: '4px' }}> </Text>
              <Text style={{ fontSize: '10px', textAlign: 'center' }}>Av. Contreras 700 - 302, San Jerónimo Lídice</Text>
              <Text style={{ fontSize: '10px', textAlign: 'center' }}>Magdalena Contreras, CDMX 10200</Text>
              <Text style={{ fontSize: '10px', textAlign: 'center' }}>Oficina: 52 55 4165 3386</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: '20px', padding: '5px' }}>
          <View style={{ marginBottom: '10px' }}>
            <Text style={{ fontSize: '12px' }}>Advertencias.</Text>
            <Text style={{ fontSize: '10px', marginTop: '5px' }}>
              “INCUMPLIR TUS OBLIGACIONES TE PUEDE GENERAR COMISIONES E INTERESES MORATORIOS”. “CONTRATAR CRÉDITOS POR ARRIBA DE TU CAPACIDAD DE PAGO PUEDE AFECTAR TU HISTORIAL CREDITICIO”.
            </Text>
          </View>
          <View style={{ marginBottom: '10px', fontSize: '10px' }}>
            <Text>Para mayor información</Text>
            <Text>Centro de Atención Telefónica:</Text>
            <Text>55 9058 5240 lunes a domingo 9 am - 9 pm</Text>
            <Text>· Reporte de robo o extravío de tu tarjeta.</Text>
            <Text>· Consulta de saldo.</Text>
          </View>
          <View style={{ marginBottom: '10px', fontSize: '10px' }}>
            <Text>Trámite de aclaraciones o reclamaciones dirigirse a la UNE:</Text>
            <Text>Envía un correo a une@yavocapital.com</Text>
          </View>
          <View style={{ marginBottom: '10px', fontSize: '10px' }}>
            <Text>Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios financieros (CONDUSEF): 5340 0999 y 01 (800) 999 8080</Text>
            <Text>Podrás consultar las comisiones aplicables para fines informativos y de comparación en la siguiente dirección www.condusef.gob.mx</Text>
          </View>
          <View style={{ marginBottom: '10px', fontSize: '10px' }}>
            <Text>Cualquier aclaración o inconformidad, deberás presentarla dentro de los 90 días siguientes al corte de tu
              estado de cuenta, en caso contrario, se dará por aceptado.
            </Text>
          </View>
          <View style={{ marginBottom: '10px', fontSize: '10px' }}>
            <Text>En el caso de no obtener una respuesta satisfactoria, podrá acudir a la Comisión Nacional para la Protección
              y Defensa de los Usuarios de Servicios Financieros (www.condusef.gob.mx y teléfono 5340-0999 en la Zona
              Metropolitana, ó 01 800 999-8080 en el interior de la República Mexicana).
            </Text>
          </View>
        </View>
        <View style={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', height: 'auto', display: 'grid', paddingVertical: '10px', position: 'relative' }}>
          <Text style={{ fontSize: '14px', textAlign: 'center' }}>www.yavocapital.com</Text>
          <Text style={{ backgroundColor: '#FDBA74', marginVertical: '5px', width: '400px', borderRadius: '10px', alignItems: 'center', marginHorizontal: 'auto', height: '4px' }}> </Text>
          <Text style={{ fontSize: '10px', textAlign: 'center' }}>Av. Contreras 700 - 302, San Jerónimo Lídice</Text>
          <Text style={{ fontSize: '10px', textAlign: 'center' }}>Magdalena Contreras, CDMX 10200</Text>
          <Text style={{ fontSize: '10px', textAlign: 'center' }}>Oficina: 52 55 4165 3386</Text>
        </View>
      </Page>
    </Document>
  )
}

export default DocPdf
