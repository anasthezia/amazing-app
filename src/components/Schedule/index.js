import React from 'react'
import { Card } from 'antd';

import EventData  from '../../data/event-data';


var sectionStyle = {
  width: "100%",
  height: "100vh", 
  background: `url(/assets/images/fakedata/${EventData.bg_image}) no-repeat 0 0 /contain`
};


class Schedule extends React.Component {
  render() {
    return (
<section style={ sectionStyle }>
          <h1>Schedule</h1>
          <Card title={EventData.title} bordered={false} style={{ width: 300 }}>
      <p>{EventData.describtion}</p>

    </Card>
<div className="event-data">
<div>Дата: {EventData.date} </div>
<div>Место: {EventData.place} </div>
<div>Время: {EventData.time} </div>
<div>Кол-во гостей: {EventData.total_guests_count} </div>
<div>Планируемый бюджет: {EventData.budget} </div>
<div>Ответственные
 
{// EventData.map(item =>
 //   <p>{item[1]}</p>
 //   )}
}
 </div>

 </div>
    </section>

    ) 
    
  }
}
export default Schedule;