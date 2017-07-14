var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;
var api = require('../utils/api');

class ZipCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            city: ''
        };

        this.handleChanges = this.handleChanges.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChanges(event) {
        var value = event.target.value;

        this.setState(function() {
            return {
                city : value
            }
        });
    }

    handleSubmit() {
        this.props.onSubmitZipCode(this.state.city);

        //var result = api.getForecastWeather(this.state.city);
        //console.log(result);
        
        this.setState(function() {
        
            return {
                city:''
            }
        });
    }

    render() {
        var url = this.props.url;
        var city = this.state.city;

        return (
            <div className='zipcode-container' style={{flexDirection: this.props.direction}}>
                <input className='form-control' type='text' onChange={this.handleChanges} placeholder='St. Dallas, Texas'/>
                <button className='btn btn-success' onClick={this.handleSubmit}>Get Weather</button>
            </div>
        )
    }
}

ZipCode.propTypes = {
    direction: PropTypes.string.isRequired
}

ZipCode.defaultProps = {
    direction : 'column'
}

module.exports = ZipCode;
