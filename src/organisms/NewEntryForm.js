import React, { useState } from 'react';

import './NewEntryForm.scss';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import useCreateNewEntry from '../hooks/useCreateNewEntry';

const NewEntryForm = ({show, maxLength, label, url}) => {

  const [text, setText] = useState('');
  const [author, setAuthor] = useState(undefined);
  const [charNum, setCharNum] = useState(0);
  const [createNewEntry, isLoading, errorMessage] = useCreateNewEntry();

  const handleTextChange = (event) => {
    const value = event.target.value;
    setCharNum(value.length);
    setText(value);
  };

  const handleAuthorChange = (event) => setAuthor(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    createNewEntry(url, {author, title: text})
  }

  const content = <Container>
      <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label>Name</label>
          <input
            placeholder="(Optional)"
            maxLength={50}
            value={author}
            onChange={(e) => handleAuthorChange(e)}
          />
        </div>
        <div className="field">
          <div className="NewEntryForm__LabelContainer">
            <label>{label}*</label>
            <label>{charNum}/{maxLength}</label>
          </div>
          <textarea
            required
            value={text}
            maxLength={maxLength}
            rows={2}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        { errorMessage }
        { isLoading ?
          <Button disabled />
          :
          <Button type="submit">Post</Button>
        }
      </form>
    </Container>

  return show && content
}

export default NewEntryForm
