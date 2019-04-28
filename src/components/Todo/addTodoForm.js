import React from 'react';
import { Form, DatePicker, TimePicker, Button, Input} from 'antd';

function handleSubmit (e, values) {
            e.preventDefault();
            console.log('Received values of form: ', values);
          }

const TodoForm = () => {
    return (
        <Form  layout='inline' onSubmit={handleSubmit}>
        <Form.Item>
            <DatePicker  format="DD-MM-YYYY" />
        </Form.Item>
        <Form.Item>
           <TimePicker format = 'HH:mm' />
        </Form.Item>
        <Form.Item>
            <Input  placeholder="Что нужно сделать" />
        </Form.Item>
        <Form.Item>
        <Button
            type="primary"
            htmlType="submit"
        >
            Добавить
        </Button>
      </Form.Item>
  </Form>
    )
  };



// class TodoForm extends React.Component {
//     handleSubmit = (e, values) => {
//         e.preventDefault();
//         console.log('Received values of form: ', values);
//       }

//     render() {
//         return (
//         //     <Form  layout='inline' onSubmit={this.handleSubmit}>
//         //         <Form.Item>
//         //             <DatePicker  format="DD-MM-YYYY" />
//         //         </Form.Item>
//         //         <Form.Item>
//         //            <TimePicker format = 'HH:mm' />
//         //         </Form.Item>
//         //         <Form.Item>
//         //             <Input  placeholder="Что нужно сделать" />
//         //         </Form.Item>
//         //         <Form.Item>
//         //         <Button
//         //             type="primary"
//         //             htmlType="submit"
//         //         >
//         //             Добавить
//         //         </Button>
//         //       </Form.Item>
//         //   </Form>
//         )
//     }
// }

export default TodoForm;