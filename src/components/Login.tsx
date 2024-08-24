import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        const response = await axios.post('API_URL/login', values);
        alert('Login successful!');
      } catch (error) {
        alert('Login failed!');
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
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      <Button type="submit">Login</Button>
    </form>
  );
};

export default Login;