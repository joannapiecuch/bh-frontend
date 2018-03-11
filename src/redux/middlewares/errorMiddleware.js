import {SubmissionError} from 'redux-form';

export const errorMiddleware = store => next => action => {
  next(action);

  if (action.payload && action.payload.name === 'ApiError') {
    let errors = {};

    for (let error of Object.values(action.payload.response.errors)) {
      errors[error.path] = error.message;
    }

    throw new SubmissionError(errors);
  }
};
