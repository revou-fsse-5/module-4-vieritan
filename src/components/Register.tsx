import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required').min(6, 'Must be at least 6 characters'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('API_URL/register', values);
        alert('Registration successful!');
      } catch (error) {
        alert('Registration failed!');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="username"
        label="Username"
        onChange={formik.handleChange}
        value={formik.values.username}
        error={formik.touched.username && Boolean(formik.errors.username)}
        helperText={formik.touched.username && formik.errors.username}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
      <Button type="submit">Register</Button>
    </form>
  );
};

export default Register;