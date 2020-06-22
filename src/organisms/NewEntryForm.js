import React, { useState } from 'react';

import './NewEntryForm.scss';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const NewEntryForm = ({show, maxLength, label}) => {

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
            <input
              placeholder="(Optional)"
              maxLength={50}
            />
          </div>
          <div className="field">
            <div className="NewEntryForm__LabelContainer">
              <label>{label}*</label>
              <label>{charNum}/{maxLength}</label>
            </div>
            <textarea
              required
              maxLength={maxLength}
              rows={2}
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
