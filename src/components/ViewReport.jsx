'use client'

import React, { useState } from 'react'
import ModuleInput from '../module/ModuleInput'
// import HeaderUser from './HeaderUser'
// import Table from './common/Table'
import { PDFViewer } from '@react-pdf/renderer'
import DocPdf from './DocPdf'

const ViewReport = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)

  return (
    <main className='w-full h-screen'>
      {!loading && data.length === 0
        ? (
          <ModuleInput setData={setData} setLoading={setLoading} setUserData={setUserData} />
          )
        : (
          // <>
          //   <div className='w-8/12'>
          //     <div ref={reportTemplateRef}>
          //       <HeaderUser userData={userData} />
          //       <Table data={data} />
          //     </div>
          //   </div>
          // </>
          <PDFViewer style={{ width: '100%', minHeight: '100vh' }}>
            <DocPdf userData={userData} data={data} />
          </PDFViewer>
          )}
    </main>
  )
}

export default ViewReport
