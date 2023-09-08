import React, {useState} from 'react';

const NewBoxForm = ({addBox}) => {

  const INITIAL_STATE = {
    width: "",
    height: "",
    color: ""
  }

  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value
    }))
  }

  const handleForm = (e) => {
    e.preventDefault();
    addBox(formData.width, formData.height, formData.color)
    setFormData(INITIAL_STATE)
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