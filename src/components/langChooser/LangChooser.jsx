import React from 'react'
import { Select } from './style'

const LangChooser = ({ lang, setLang }) => {
  return (
    <Select defaultValue={lang} onChange={(e) => setLang(e.currentTarget.value)}>
      <option value='en'>en</option>
      <option value='ua'>ua</option>
      {/* TODO */}
    </Select>
  )
}

export default LangChooser
