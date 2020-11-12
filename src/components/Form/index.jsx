import React from 'react'
import { Formik } from 'formik';
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';
import { Container, ErrorText, ButtonsGroup, Header } from './style'
import Button from '@material-ui/core/Button';
import { createMuiTheme, withStyles, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';


const ColorButton = withStyles((theme) => ({
  root: {
    width: 'fit-content',
    color: theme.palette.getContrastText('#f15642'),
    backgroundColor: '#f15642',
    '&:hover': {
      backgroundColor: '#f15642',
    },
  },
}))(Button);


const validationSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email('이메일 양식을 확인하세요')
    .required('필수'),
  password: yup
    .string()
    .label('Password')
    .required('필수')
    .min(8, '비밀번호는 8자리 이상, 16자리 이')
    .max(16, '비밀번호는 8자리 이상, 16자리 이'),

  status: yup
    .string()
    .required('이름을 입력하세요.')
    .label("Status"),
  name: yup
    .string()
    .required('필수 입력사항입니다.')
    .label("Name"),
  state: yup
    .string()
    .required('필수 입력사항입니다.')
    .label("State")
});
const Form = ({ onSubmit }) => {
  return (
    <>
      <Header>기본정보 입력</Header>
      <Formik
        initialValues={{ email: '', password: '', status: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onSubmit(values)
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
            <Container onSubmit={handleSubmit}>
              <TextField
                id="outlined-basic"
                label="이메일(아이디)를 입력하세요."
                variant="outlined"
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <ErrorText>
                {errors.email && touched.email && errors.email}
              </ErrorText>
              <TextField
                id="outlined-basic"
                label="비밀번호를 입력하세요."
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <ErrorText>
                {errors.password && touched.password && errors.password}
              </ErrorText>
              <TextField
                id="outlined-basic"
                label="이름을 입력하세요."
                variant="outlined"
                type="text"
                name="status"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.status}
              />
              <ErrorText>
                {errors.status && touched.status && errors.status}
              </ErrorText>
              <FormControl variant="outlined">
                <InputLabel htmlFor="outlined-age-native-simple">이름을 입력하세요</InputLabel>
                <Select
                  native
                  // value={'age'}
                  value={values.name}
                  onChange={handleChange}
                  label="이름을 입력하세요."
                >
                  <option aria-label="None" value="" />
                  <option value="Ali">Ali</option>
                  <option value="Sardor">Sardor</option>
                </Select>
              </FormControl>
              <ErrorText>
                {errors.name && touched.name && errors.name}
              </ErrorText>
              <FormControl variant="outlined" >
                <InputLabel htmlFor="outlined-age-native-simple">이름을 입력하세요</InputLabel>
                <Select
                  native
                  value={values.state}
                  onChange={handleChange}
                  label="이름을 입력하세요."
                >
                  <option aria-label="None" value="" />
                  <option value="Ali">Ali</option>
                  <option value="Sardor">Sardor</option>
                </Select>
              </FormControl>
              <ErrorText>
                {errors.state && touched.state && errors.state}
              </ErrorText>
              <ButtonsGroup>
                <ColorButton size='large' variant="contained" color='secondary' type="submit" disabled={isSubmitting}>
                  다음
          </ColorButton>
                <Button color="primary">로그인</Button>
              </ButtonsGroup>

            </Container>
          )
        }
      </Formik >
    </>
  )
};

export default Form;
