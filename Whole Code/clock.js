import React from 'react';

class Clock extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            date:new Date(),
            isOpen:false
        };
    }

    componentDidMount()
    {
        this.loadTime=setInterval(()=>{
            this.setState({
                date:new Date()
            });
        },20);
    }

    componentWillMount()
    {
        clearInterval(this.loadTime);
    }

    componentWillUnmount()
    {
        clearInterval(this.loadTime);
    }

    render()
    {
        let hour = this.state.date.getHours();
        let minute = this.state.date.getMinutes();
        let second = this.state.date.getSeconds();
        let milliSecond = this.state.date.getMilliseconds();
        let arrDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        let arrMonthFF=["January","February","March","April","May","June","July","August","September","October","November","December"];
        let arrMonthSF=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        let dayValue=this.state.date.getDay();   
        let currentDay=arrDay[dayValue];
        let date=this.state.date.getDate();
        let year=this.state.date.getFullYear();
        let monthValue=this.state.date.getMonth();
        let monthFF=arrMonthFF[monthValue];
        let monthSF=arrMonthSF[monthValue];
        let yearStart=new Date('January 1,2020 00:00:00').getTime();
        let yearNow=this.state.date.getTime();
        let calculateDays=(yearNow - yearStart) / (1000 * 60 * 60 * 24);
        let totalDays=Math.floor(calculateDays);
        let sub;
        
        if(hour.toString().length == 1)
        {
            hour= "0" + hour;
        }

        if(minute.toString().length == 1)
        {
            minute= "0" + minute;
        }

        if(second.toString().length == 1)
        {
            second= "0" + second;
        }

        if(totalDays.toString().slice(-1) == 1)
        {
            sub="st";
        }
        else if(totalDays.toString().slice(-1) == 2)
        {
            sub="nd";
        }
        else if(totalDays.toString().slice(-1) == 3)
        {
            sub="rd";
        }
        else 
        {
            sub="th";
        }

        return(
            <div className="container">
                <header>
                    <div className="header">
                        <h1>DIGITAL CLOCK</h1>
                    </div>
                </header>
                <section>
                    <div className="Clock">
                        <div className="greeting">
                            <h2 className="dayGreeting">
                                {
                                    (hour >= 0 && hour < 12) ? "Good Morning" : 
                                    (hour >= 12 && hour < 15) ? "Good Afternoon" : 
                                    (hour >= 15 && hour <=18) ? "Good Evening" : "Good Night"
                                }
                            </h2>
                        </div>
                        <div className="clock-contents">
                            <div className="hour">{hour}</div>
                            <div className="minute">{minute}</div>
                            <div className="second">{second}</div>
                            <div className="millisecond">{milliSecond}</div>
                        </div>  
                        <div className="total-days-done">
                            <h2>Date : <span className="date-def">{date} {monthSF}, {year}</span></h2>
                            <h2>Day : <span className="date-def">{currentDay}</span></h2>
                            <h2>Week : <span className="date-def">{Math.round(this.state.date.getDate() / 7)}</span></h2>
                            <h2>Ongoing Day ({year}) : <span className="date-def">{totalDays}<sup>{sub}</sup>day</span></h2>
                        </div>
                    </div>
                </section>
                <footer>
                    <h2>All &copy; Rights Reserved <span className="copy-right-year">2020 - {new Date().getFullYear()}</span></h2>
                </footer>
            </div>
        );
    }
}


export default Clock;