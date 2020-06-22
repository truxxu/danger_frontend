import React, { useState } from 'react';

import './NewEntryForm.scss';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const NewEntryForm = ({show, maxLength}) => {

  const [charNum, setCharNum] = useState(0)

  const handleChange = (event) => {
    // event.preventDefault();
    const value = event.target.value;
    setCharNum(value.length)
  }

  const content = <div className="NewEntryForm">
      <Container>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input placeholder="(Optional)"/>
          </div>
          <div className="field">
            <label>Title {charNum}/{maxLength}*</label>
            <textarea
              maxLength={maxLength}
              rows="3"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <Button type="submit" name="Post"/>
        </form>
      </Container>
    </div>

  return show && content
}

export default NewEntryForm
