import React from 'react'

const Table = ({ data }) => {
  return (
    <table className='w-full text-sm text-left rtl:text-right text-gray-500'>
      <thead className='text-xs text-gray-700 uppercase bg-orange-300'>
        <tr>
          <th scope='col' className='px-6 py-3'>
            Fecha
          </th>
          <th scope='col' className='px-6 py-3'>
            Concepto
          </th>
          <th scope='col' className='px-6 py-3'>
            Autorización
          </th>
          <th scope='col' className='px-6 py-3'>
            Abono
          </th>
          <th scope='col' className='px-6 py-3'>
            Cargo
          </th>
          <th scope='col' className='px-6 py-3'>
            Estatus
          </th>
        </tr>
      </thead>
      {data.map((d, index) => (
        <tbody key={index}>
          <tr className={`${d.__rowNum__ % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
            <th scope='row' className='px-6 py-4 text-gray-900 whitespace-nowrap'>
              {d.L}
            </th>
            <td className='px-6 py-4'>
              {d.D}
              <br />
              {d.B}
            </td>
            <td className='px-6 py-4'>
              {d.C}
            </td>
            <td className='px-6 py-4'>
              {d.D === 'DISPERSION' ? `${d.K}` : ''}
            </td>
            <td className='px-6 py-4'>
              {d.D !== 'DISPERSION' ? `${d.K}` : ''}
            </td>
            <td className='px-6 py-4'>
              {d.H}
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  )
}

export default Table
