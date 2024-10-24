import toast, { Toaster } from 'react-hot-toast';
import css from './SearchWindow.module.css';
import { Formik, Form, Field } from 'formik';

const SearchWindow = ({ onSubmit }) => {
  const handleSubmit = (values, actions) => {
    if (values.query.trim() === '') {
      toast('Please enter a request', {
        duration: 3000,
        style: {
          backgroundColor: 'red',
          color: 'white',
          fontSize: '20px',
          padding: '10px',
          borderRadius: '5px',
        },
      });
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };
  return (
    <div className={css.searchWindow}>
      <Toaster position="top-right"></Toaster>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form className={css.formStyle} >
          <Field
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search film"
          ></Field>

          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchWindow;
