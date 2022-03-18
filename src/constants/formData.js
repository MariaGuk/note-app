const FORMDATA = [
  {
    login: true,
    id: 'email',
    label: 'Email Address',
    name: 'email',
    type: 'email',
    required: true,
    initialValue: '',
  },
  {
    id: 'firstName',
    label: 'First Name',
    name: 'firstName',
    type: 'text',
    required: true,
    initialValue: ''
  },
  {
    id: 'lastName',
    label: 'Last Name',
    name: 'lastName',
    type: 'text',
    required: true,
    initialValue: ''
  },
  {
    id: 'dateOfBirthDay',
    label: '',
    name: 'dateOfBirthDay',
    type: 'date',
    required: true,
    initialValue: ''
  },
  {
    login: true,
    id: 'password',
    label: 'Password',
    name: 'password',
    type: 'password',
    required: true,
    initialValue: '',
  },
  {
    id: 'confirmpassword',
    label: 'Confirm password',
    name: 'confirmpassword',
    type: 'password',
    required: true,
    initialValue: ''
  }
]
export default FORMDATA;