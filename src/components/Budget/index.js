import React from 'react'
import { Tabs, Table } from 'antd';
import BudgetPlan from '../../data/budget-plan';
import Expenditure from '../../data/expenditure';



const TabPane = Tabs.TabPane;


const columns_plan = [{
  title: 'Наименование',
  dataIndex: 'title',
  key: 'title',
}, {
  title: 'Сумма',
  dataIndex: 'sum',
  width: '30%',
  key: 'sum',
}];

const columns_exp = [{
  title: 'Дата',
  dataIndex: 'date',
  key: 'date',
}, 
{
  title: 'Наименование',
  dataIndex: 'title',
  key: 'title',
},
{
  title: 'Сумма',
  dataIndex: 'sum',
  width: '30%',
  key: 'sum',
}];
// rowSelection objects indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};


class Budget extends React.Component {
  render() {
    return (
    <div> 
      <h1>Бюджет мероприятия</h1>
      <Tabs defaultActiveKey="1" >
        <TabPane tab="План" key="1">  
          <Table columns={columns_plan} rowSelection={rowSelection} dataSource={BudgetPlan} />,
        </TabPane>
        <TabPane tab="Расходы" key="2">
        <Table columns={columns_exp} dataSource={Expenditure} />,
        </TabPane>
      </Tabs>
    </div> 
      )
  }
}
export default Budget