import React from 'react'

const LangChooser = ({ lang, setLang }) => {
  return (
    <select defaultValue={lang} onChange={(e) => setLang(e.currentTarget.value)}>
      <option value="en">en</option>
      <option value="ua">ua</option>
      {/* TODO */}
    </select>
  )
}

export default LangChooser
