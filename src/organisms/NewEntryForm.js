import React from 'react';

import './NewEntryForm.scss';
import Container from '../atoms/Container';
import Button from '../atoms/Button';

const NewEntryForm = ({show}) => {

  const content = <div className="NewEntryForm">
      <Container>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input placeholder="(Optional)" />
          </div>
          <div className="field">
            <label>Title</label>
            <textarea placeholder="Tell us more" rows="2" />
          </div>
          <Button type="submit" name="Post"/>
        </form>
      </Container>
    </div>

  return show && content
}

export default NewEntryForm
