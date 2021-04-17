import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Navbar, Button } from "react-bootstrap";
import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Too Short! Must be atleast 6 characters long")
    .max(18, "Too Long!")
    .required("Required"),
});

const LoginPage = (props) => {
  const [showPassword, setShowPassword] = useState(false);
  const showPasswordHandler = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="container-fluid bg-white" style={{}}>
      <div className="container">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand className="mx-auto">Lorem Ipsum</Navbar.Brand>
        </Navbar>
        <div
          className="col-md-4 mx-auto p-3 rounded-2 shadow-sm"
          style={{ backgroundColor: "#eee" }}
        >
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              toast.success(
                `Email: ${values.email}, Password: ${values.password}`,
                {
                  position: toast.POSITION.TOP_CENTER,
                  hideProgressBar: true,
                  autoClose: 3000,
                }
              );
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-row">
                  <div className="form-label-group col-12 mt-3">
                    <Field
                      name="email"
                      id="email"
                      type="email"
                      placeholder="Email"
                      className={
                        errors.email && touched.email
                          ? "form-control is-invalid"
                          : "form-control"
                      }
                    ></Field>
                    <label htmlFor="email" className="mb-1">
                      Email
                    </label>
                    {errors.email && touched.email ? (
                      <div className="text-danger ml-2 text-capitalize small">
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="form-row d-flex">
                  <div className="col-12 mt-3">
                    <div className="form-label-group col-12 mt-3 input-group">
                      <Field
                        name="password"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        className={
                          errors.password && touched.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      ></Field>

                      <span
                        class="input-group-text"
                        style={{ cursor: "pointer" }}
                        id="inputGroupPrepend3"
                      >
                        <FontAwesomeIcon
                          icon={showPassword ? faEye : faEyeSlash}
                          className="text-dark"
                          onClick={showPasswordHandler}
                        />
                      </span>
                      <label htmlFor="password" className="mb-1">
                        Password
                      </label>
                    </div>
                    {errors.password && touched.password ? (
                      <div className="text-danger ml-2 text-capitalize small">
                        {errors.password}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="d-flex w-100 mt-3">
                  <Button
                    type="submit"
                    variant="none"
                    className="btn-outline-primary mx-auto"
                  >
                    Login
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
