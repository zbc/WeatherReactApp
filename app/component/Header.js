var React = require('react');
var ZipCode = require('./ZipCode');
var Link = require('react-router-dom').Link;

var styles = {
    title : {
        textAlign:'center',
        fontSize:'26px',
        color:'white'
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <Link style={styles.title} to='/'>Weather React App</Link>
                <ZipCode direction='row'/>
            </div>
        )
    }
}

module.exports = Header;
