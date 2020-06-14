import React from 'react';

import Container from '../atoms/Container';
import Button from '../atoms/Button';

const NewEntryForm = () => {
  return (
    <div>
      <Container>
        <form className="ui form">
          <div className="field">
            <label>Name</label>
            <input placeholder="(Optional)" />
          </div>
          <div className="field">
            <label>Title</label>
            <input />
          </div>
          <Button type="submit" name="Post"/>
        </form>
      </Container>
    </div>
  )
}

export default NewEntryForm
