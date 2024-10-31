import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Form.css';

const Hero = () => {
  const [customers, setCustomers] = useState([]);

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Ad daxil edilməlidir'),
      phone: Yup.string()
        .required('Telefon nömrəsi daxil edilməlidir')
        .matches(/^\+994\d{9}$/, 'Telefon nömrəsi +994 formatında olmalıdır'),
      email: Yup.string().email('Düzgün e-poçt daxil edin').required('E-poçt daxil edilməlidir')
    }),
    onSubmit: (values, { resetForm }) => {
      setCustomers([...customers, values]);
      toast.success('Müştəri uğurla əlavə edildi', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
      resetForm();
    }
  });

  return (
    <div className="container">
      <h2 className='text-light'>CRM Sistemi</h2>

      <div className="form-container">
        <form onSubmit={formik.handleSubmit} className="form">
          <div className="form-group">
            <label>Ad:</label>
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.touched.name && formik.errors.name && (
              <small className="error">{formik.errors.name}</small>
            )}
          </div>

          <div className="form-group">
            <label>Telefon:</label>
            <input
              type="text"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.touched.phone && formik.errors.phone && (
              <small className="error">{formik.errors.phone}</small>
            )}
          </div>

          <div className="form-group">
            <label>E-poçt:</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="form-control"
            />
            {formik.touched.email && formik.errors.email && (
              <small className="error">{formik.errors.email}</small>
            )}
          </div>

          <button type="submit" className="submit-button">Müştəri Əlavə Et</button>
        </form>
      </div>

      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        progress={undefined}
        className="custom-toast" 
      />

      <table className="table">
        <thead>
          <tr>
            <th>Ad</th>
            <th>Telefon</th>
            <th>E-poçt</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hero;
