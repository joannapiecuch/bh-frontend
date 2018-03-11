import {isEmail} from 'validator';

export const required = value => value ? undefined : 'This field is required';

export const validEmail = value => value && !isEmail(value) ? 'Invalid email address' : undefined;
