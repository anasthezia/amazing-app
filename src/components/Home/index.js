import React from 'react'
import Grid from '@material-ui/core/Grid';

import EventData from '../../data/event-data';
import './style.scss';


var sectionStyle = {
    backgroundImage: `url(/assets/images/fakedata/${EventData.bg_image})`
};


class Home extends React.Component {
    render() {
        return (
            <div className="root">
                <section className="home" style={sectionStyle} >

                    <Grid container>
                        <Grid item xs={12}>

                            <div className="home__screen" >
                                <div className="home__wrapper-1" >
                                    <h1 className="home__title" >{EventData.title}</h1>
                                    <p className="home__description" >{EventData.describtion}</p>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="event-data">
                                <div className="event-data__row">
                                    <div className="event-data__row-title">Дата: </div>
                                    <div className="event-data__row-content">{EventData.date} </div>
                                </div>
                                <div className="event-data__row">
                                    <div className="event-data__row-title">Время: </div>
                                    <div className="event-data__row-content">{EventData.time} </div>
                                </div>
                            </div>
                            <div className="event-data">
                                <div className="event-data__row">
                                    <div className="event-data__row-title">Место:</div>
                                    <div className="event-data__row-content">{EventData.place} </div>
                                </div>
                            </div>
                            <div className="event-data">
                                <div className="event-data__row">
                                    <div className="event-data__row-title">Кол-во гостей:</div>
                                    <div className="event-data__row-content">{EventData.total_guests_count} </div>
                                </div>
                                <div className="event-data__row">
                                    <div className="event-data__row-title">Планируемый бюджет:</div>
                                    <div className="event-data__row-content">{EventData.budget} </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <div className="event-data">
                                <h3 className="event-data__title">Ответственные</h3>
                                {EventData.responsibles.map((item, index) =>
                                    <div className="event-data__row">
                                        <div className="event-data__row-title">
                                            {item.title}
                                        </div>
                                        <div classNme="event-data__row-content">
                                            {item.content}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                </section>
            </div>
        )

    }
}
export default Home;