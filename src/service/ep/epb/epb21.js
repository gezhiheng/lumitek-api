function handleExcelData(sheets) {
  const data = sheets[0].data
  data.forEach(element => {
    console.log(element)
  })
  return data.slice(2)
}

export default {
  info() {
    return 'EPB21 APIs created by henry ge'
  },
  handleExcelData,
}
