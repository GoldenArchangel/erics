

import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

/**
 *
 * @param {*} properties
 * @returns
 */

export default Header

// Default properties




function Header() {
    return (
       
              <header className="header">
      <h1>Task</h1>
      <Button color={PropTypes.bool.isRequired ? 'Red' : 'Green'} text={PropTypes.bool.isRequired ? 'Close' : 'Add'} onClick={PropTypes.func.isRequired} />
    </header>
      
    );


}
