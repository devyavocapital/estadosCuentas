import Image from 'next/image'
import React from 'react'

const HeaderUser = ({ userData }) => {
  return (
    <div className='w-full'>
      <Image src='/logo-yavo.png' alt='logo' width={400} height={400} className='mx-auto' />
      <section className='grid grid-cols-2 p-5'>
        <div className='col-span-1 col-start-1'>
          <h1 className='uppercase text-3xl font-bold'>{userData[1].A}</h1>
          <h2 className='text-xl'>No Crédito: {userData[1].B}</h2>
          <h3 className='text-xl'>NSS: {userData[1].C}</h3>
        </div>
        <div className='col-span-1 col-start-2 text-right text-xl mb-2'>
          <h3>Estado de cuenta MejoraSiNo</h3>
          <p className='mb-2'>Cuenta: {userData[1].D}</p>
          <h3 className='mb-2'>Tarjeta: {userData[1].E}</h3>
          <h3>Periodo: {userData[1].F}</h3>
          <p>Moneda Nacional</p>
        </div>
        <div className='col-span-1 col-start-2 text-right'>
          <h4 className='text-2xl font-bold'>Saldo ATM</h4>
          <p className='text-xl'>Saldo inicial: $44,450.50 Saldo final: $35.80</p>
        </div>
      </section>
    </div>
  )
}

export default HeaderUser
