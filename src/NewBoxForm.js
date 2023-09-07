import React, {useState} from 'react';

const NewBoxForm = () => {

  const INITIAL_STATE = {
    width: "",
    height: "",
    backgroundColor: ""
  }

  const [formData, setFromData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    setFromData(formData => ({
      ...formData,
      [e.target.name]: e.target.value
    }))
  }

  const handleForm = (e) => {
    e.preventDefault();
    setFromData("")
  }

  return (
    <>
      <form onSubmit={handleForm} >
        <label htmlFor="width">Width:</label>
        <input id="width" name='width' value={formData.value} placeholder="Box Width" onChange={handleChange} />
        <label htmlFor="height">Height</label>
        <input id="height" name="height" value={formData.value} placeholder="Box Height" onChange={handleChange} />
        <label htmlFor="color">Background color:</label>
        <input id="color" name="color" value={formData.value} placeholder="Box Color" onChange={handleChange} />
        <button>Create 📦</button>
      </form>
    </>
  )
}

export default NewBoxForm;