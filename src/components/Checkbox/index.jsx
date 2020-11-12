import React from 'react'
import { Container } from './style'
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';



import FormControl from '@material-ui/core/FormControl';
const Checkbox = withStyles({
  root: {
    color: 'tomato',
    '&$checked': {
      color: 'tomato',
    },
  },
  checked: {},
})((props) =>
  <FormControlLabel labelPlacement="End" value={props.value}
    label={props.label}
    control={<Radio color="default" {...props} />}
  />

);



const Checkboxs = () => {
  const [selectedValue, setSelectedValue] = React.useState('번역회사');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Container>
      <FormControl component="fieldset">

        <RadioGroup row aria-label="position" name="position" defaultValue="top">

          <Checkbox
            checked={selectedValue === '번역회사'}
            onChange={handleChange}
            label="번역회사" value="번역회사"
          />
          <Checkbox
            checked={selectedValue === '의뢰인'}
            onChange={handleChange}
            label="의뢰인" value="의뢰인"
          />
          <Checkbox
            checked={selectedValue === '번역가'}
            onChange={handleChange}
            label="번역가" value="번역가"
          />
        </RadioGroup>
      </FormControl>
    </Container>
  )
}

export default Checkboxs