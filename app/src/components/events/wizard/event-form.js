import 'date-fns';
import React from 'react';
import {
  Form,
  FormGroup,
  TextInput,
  TextArea,
  FormSelectOption,
  FormSelect
} from '@patternfly/react-core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default ({
  event,
  setEvent,
  getOrganizations
}) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2019-08-18T21:11:54'));
    const [ selectedOrganization, setSelectedOrganization] = React.useState();
    return (
      <Form isHorizontal>
        <FormGroup
          label="Name"
          isRequired
          fieldId="horizontal-form-name"
          helperText="Please provide organizational name"
        >
          <TextInput
            value={event.name}
            isRequired
            type="text"
            id="horizontal-form-name"
            aria-describedby="horizontal-form-name-helper"
            name="horizontal-form-name"
            onChange={value => setEvent({
              ...event, 
              name: value
            })}
          />
        </FormGroup>
        <FormGroup label="Date" isRequired fieldId="horizontal-form-email">
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={selectedDate}
            onChange={date => {
              setSelectedDate(date);
              setEvent({
                ...event, 
                eventDate: date.toDateString()
              });
            }}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
        </FormGroup>
        <FormGroup label="Organization" fieldId="horizontal-form-title">
          <FormSelect
            value={selectedOrganization}
            onChange={value =>{
              setEvent({
                ...event, 
                organisationId: value,
              });
              setSelectedOrganization(value);
            }}
            id="horzontal-form-title"
            name="horizontal-form-title"
          >
            {getOrganizations.data.map((option, index) => (
              <FormSelectOption isDisabled={option.disabled} key={index} value={option.Id} label={option.Name} />
            ))}
          </FormSelect>
        </FormGroup>
        <FormGroup label="Description" fieldId="horizontal-form-exp">
          <TextArea
            value={event.description}
            onChange={value => setEvent({
              ...event, 
              description: value
            })}
            name="horizontal-form-exp"
            id="horizontal-form-exp"
          />
        </FormGroup>
      </Form>
    );
}
