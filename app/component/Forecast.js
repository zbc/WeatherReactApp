var React = require('react');
var api = require('../utils/api');
var queryString = require('query-string');
var Loading = require('./Loading');
var BriefDisplay = require('./BriefDisplay');
var DetailDisplay = require('./DetailDisplay');

class Forecast extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city : null,
            loading : true,
            current : null,
            forecast : []
        }
    }

    componentDidMount() {
        this.state.city = queryString.parse(this.props.location.search).city;

        api.getCurrentWeather(this.state.city)
            .then(function(result){
                //console.log(result);
                this.setState(function() {
                    return {
                        loading : false,
                        current : result
                    }
                });  
            }.bind(this));
        
        api.getForecastWeather(this.state.city)
            .then(function(result) {
                this.setState(function() {
                    return {
                        forecast : result
                    }
                });
            }.bind(this));

        //console.log('currentWeather: '+ this.state.current);
        //console.log('forecastWeather: ' + this.state.forecast);
    }

    render() {
        var loading = this.state.loading;
        var current = this.state.current;
        var forecast = this.state.forecast;

        if (loading) {
            return <Loading /> 
        }
    
        return (
            <div>
                <div className='forecast-header'>{this.state.city}</div>
                <div className='forecast-container'>
                    <BriefDisplay day={current} />
                    <DetailDisplay day={current} />
                </div>
                <div className='forecast-container'>
                    {
                        forecast.list.map((singleday)=>{
                            return (
                                <BriefDisplay day={singleday} key={singleday.dt}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}   

module.exports = Forecast;
