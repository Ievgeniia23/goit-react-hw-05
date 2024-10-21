import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { Formik, Form, Field } from 'formik';

const SearchWindow = ({ submit }) => {
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
    submit(values.query);
    actions.resetForm();
  };
  return (
    <header className={css.searchBar}>
      <Toaster position="top-right"></Toaster>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
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
    </header>
  );
};

export default SearchWindow;
