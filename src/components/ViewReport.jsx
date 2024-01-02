'use client'

import React, { useState, useRef } from 'react'
import ModuleInput from '../module/ModuleInput'
import HeaderUser from './HeaderUser'
import Table from './common/Table'
import jsPDF from 'jspdf'

const ViewReport = () => {
  const [data, setData] = useState([])
  const [userData, setUserData] = useState([])
  const [loading, setLoading] = useState(false)
  const reportTemplateRef = useRef(null)

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: 'a1',
      orientation: 'p',
      unit: 'px'
    })

    doc.html(reportTemplateRef.current, {
      callback (doc) {
        doc.save('document')
      }
    })
  }

  return (
    <>
      {!loading && data.length === 0
        ? (
          <ModuleInput setData={setData} setLoading={setLoading} setUserData={setUserData} />
          )
        : (
          <>
            <div className='w-8/12'>
              <button className='button' onClick={handleGeneratePdf}>
                Generate PDF
              </button>
              <div ref={reportTemplateRef}>
                <HeaderUser userData={userData} />
                <Table data={data} />
              </div>
            </div>
          </>
          )}
    </>
  )
}

export default ViewReport
