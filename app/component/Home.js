var React = require('react');
var ZipCode = require('./ZipCode');

var styles = {
    background : {
        backgroundImage:"url('app/images/pattern.svg')"
    }
}

class Home extends React.Component {

    render() {
        return (
            <div className='home-container' style={styles.background}>
                <h1>Enter a City and State</h1>
                <ZipCode direction='column' onSubmitZipCode={
                    (city) => {
                        this.props.history.push({
                            pathname: 'forecast',
                            search : '?city='+city
                        })
                    } 
                }/>
            </div>
        )
    }   
}

module.exports = Home;
