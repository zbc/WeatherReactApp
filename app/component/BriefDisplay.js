var React = require('react');
var helpers = require('../utils/helpers'); 

class BriefDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var date = helpers.getDate(this.props.day.dt);
        var icon = this.props.day.weather[0].icon;
        return (
            <div className='dayContainer'>
                <img className='weather' src={'/app/images/weather-icons/'+icon+'.svg'} alt='Weather' />
                <h2 className='subheader'>{date}</h2>
            </div>    
        )
    }
}

module.exports = BriefDisplay;
