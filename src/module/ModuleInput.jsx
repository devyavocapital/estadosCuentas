import * as XLSX from 'xlsx'

const ModuleInput = ({ setLoading, setData, setUserData }) => {
  const handleChange = (e) => {
    setLoading(true)
    setData([])
    // eslint-disable-next-line no-undef
    const reader = new FileReader()
    reader.readAsArrayBuffer(e.target.files[0])

    reader.onload = (e) => {
      const conf = e.target.result
      const excel = XLSX.read(conf, { type: 'array' })
      const wsname = excel.SheetNames[0] // Hoja1
      const ws = excel.Sheets[wsname]
      const data = XLSX.utils.sheet_to_json(ws, { header: 'A' }) // agregar valores a json

      const wsUser = excel.SheetNames[1]
      const user = excel.Sheets[wsUser]
      const userData = XLSX.utils.sheet_to_json(user, { header: 'A' })
      setUserData(userData)
      setData(data)
    }

    setLoading(false)
  }
  return (
    <div className='grid min-h-screen place-items-center'>
      <h1 className='text-2xl font-bold text-center'>Estados de cuenta</h1>
      <div>
        <label className='font-bold mr-2 text-2xl'>Archivo:</label>
        <input
          type='file'
          id='file'
          name='file'
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default ModuleInput
