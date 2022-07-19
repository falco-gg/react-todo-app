import React, { useEffect, useState } from 'react'

const CheckBox = (props) => {
  const [checked, setChecked] = useState(props.checked)

  useEffect(() => {
    props.onChange(checked)
  }, [checked])

  const handleChange = (e) => {
    setChecked(e.target.checked)
  }

  return <input type="checkbox" checked={checked} onChange={handleChange} />
}

export default CheckBox
