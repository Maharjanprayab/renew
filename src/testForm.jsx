import { Form, Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import './testForm.css'

const TestForm = () => {
 return (<Formik
    initialValues={{
      username: "",
      password: "",
    }}
    validationSchema={yup.object({
      username: yup.string().required("This field is required."),
      password: yup.string().required("This field is required"),
    })}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    
     <Form id="formikForm">

      <div id="uname">
        <label htmlFor="username">Username</label>
        <Field name="username" type="text" />
        <ErrorMessage name="username" />
      </div>

      <div id="pass">
        <label htmlFor="password">Email Address</label>
        <Field name="password" type="password" />
        <ErrorMessage name="password" />
      </div>


      <button type="submit">Submit</button>



    </Form>
  </Formik>);
};

export default TestForm;
