import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class TodoForm extends React.Component {
  state = {
    selectedDate: new Date('2014-08-18T21:11:54'),
  };
  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  handleSubmit = (e, values) => {
    e.preventDefault();
    console.log('Received values of form: ', values);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  render() {
    const { selectedDate } = this.state;
    return (
      <form className="add-todo-form" onSubmit={this.handleSubmit}>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            margin="normal"
            label="Date picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            value={selectedDate}
            onChange={this.handleDateChange}
          />

        </MuiPickersUtilsProvider>
        <TextField
          id="standard-name"
          label="Что нужно сделать"
          //   className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('name')}
          margin="normal"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Подробное описание"
          multiline
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          //   className={classes.textField}
          margin="normal"
        />
        <Button color="primary" >
          Добавить
      </Button>
      </form>
    )
  }
}

export default TodoForm;