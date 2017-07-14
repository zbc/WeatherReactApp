var React = require('react');
var convertTemp = require('../utils/helpers').convertTemp;

class DetailDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        //var city = this.props.day.name;
        var description = this.props.day.weather[0].description;
        var mintemp = convertTemp(this.props.day.main.temp_min);
        var maxtemp = convertTemp(this.props.day.main.temp_max);
        var humidity = this.props.day.main.humidity;

        return (
            <div className='description-container'>
                <p>Description: {description}</p>
                <p>Min temp: {mintemp} degrees</p>
                <p>Max temp: {maxtemp} degrees</p>
                <p>Humdity: {humidity}%</p>
            </div>
        )
    }
}

module.exports = DetailDisplay;
