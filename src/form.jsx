import { Formik } from "formik";
import * as Yup from "yup";

const FormikForm = () => (
  <Formik
    initialValues={{
      image: [],
      productName: "",
      description: "",
      pkgDate: "01/01/2000",
      price: 0,
    }}
    validationSchema={Yup.object().shape({
      productName: Yup.string()
        .min(1, "Too short")
        .max(50, "Enough Already")
        .required("required"),
      description: Yup.string()
        .min(50, "Too Short")
        .max(200, "Enough Already")
        .required("required"),
      pkgDate: Yup.date().required("required"),
    })}
  ></Formik>
);

export default FormikForm;
