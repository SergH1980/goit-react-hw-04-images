import React, { Component } from 'react';
import PropTypes from 'prop-types';

import * as yup from 'yup';
import { Formik } from 'formik';
import { MdSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';
import {
  FormWrap,
  Form,
  Field,
  SearchButton,
  SearchButtonIcon,
  ErrorMessage,
} from './Searchbar.styled';

let schema = yup.object().shape({ query: yup.string().min(1).max(46) });

const initialValues = {
  query: ``,
};

export default function Searchbar({ onSubmit }) {
  function handleSubmit(values) {
    onSubmit(values.query);
  }
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormWrap>
        <Form autoComplete="off" autoFocus>
          <SearchButton type="submit">
            <SearchButtonIcon>
              <IconContext.Provider value={{ size: `2.5em` }}>
                <div>
                  <MdSearch />
                </div>
              </IconContext.Provider>
            </SearchButtonIcon>
          </SearchButton>

          <Field name="query" placeholder="Search images and photos" />
          <ErrorMessage name="query" component={`div`} />
        </Form>
      </FormWrap>
    </Formik>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
