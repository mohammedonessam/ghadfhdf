import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Please insert at least 2 characters!')
      .max(50, 'Please insert maximum 50 characters!')
      .required('Title is Required'),
    author: Yup.string()
      .min(2, 'Please insert at least 2 characters!')
      .max(50, 'Please insert maximum 50 characters!')
      .required('Author is Required'),
  });