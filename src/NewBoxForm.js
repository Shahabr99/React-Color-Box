import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const NewBoxForm = ({addBox}) => {

  const INITIAL_VALUES = {
    width: "",
    height: "",
    color: ""
  }

  // const INITIAL_STATE = {
  //   width: "",
  //   height: "",
  //   color: ""
  // }

  const validationSchema = Yup.object({
    width: Yup.number().required('Width is required'),
    height: Yup.number().required('Heght is required'),
    color: Yup.string().required('Color is required'),
  })

  // const [formData, setFormData] = useState(INITIAL_STATE)

  // const handleChange = (e) => {
  //   setFormData(formData => ({
  //     ...formData,
  //     [e.target.name]: e.target.value
  //   }))
  // }

  // const handleForm = (e) => {
  //   e.preventDefault();
  //   addBox(formData.width, formData.height, formData.color)
  //   setFormData(INITIAL_STATE)
  // }

  const handleSubmit = (values, { resetForm }) => {
    addBox(values.width, values.height, values.color);
    resetForm(INITIAL_VALUES);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form >
        <div>
          <label htmlFor="width">Width:</label>
          <Field id="width" name='width'  placeholder="Box Width" />
          <ErrorMessage name="width" component="div" className="error" />
        </div>
        
        <div>
          <label htmlFor="height">Height</label>
          <Field id="height" name="height"  placeholder="Box Height" />
          <ErrorMessage name="height" component="div" className="error" />
        </div>
        
        <div>
          <label htmlFor="color">Background color:</label>
          <Field id="color" name="color"  placeholder="Box Color" />
          <ErrorMessage name="color" component="div" className="error" />
        </div>
        
        <button type="submit">Create 📦</button>
      </Form>
    </Formik>
  )
}

export default NewBoxForm;