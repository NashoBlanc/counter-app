import React from 'react';
import PropTypes from 'prop-types';

const FirstApp = ({ greetings, subtitle })  => {

    return  (
    <>
        <h1>{ greetings }</h1>
        <p>{ subtitle } </p>
    </>
    );
}

FirstApp.propTypes = { 
    greetings: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    subtitle: 'Im a subtitle'
}

export default FirstApp;