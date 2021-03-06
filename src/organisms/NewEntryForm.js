import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import './NewEntryForm.scss';
import Container from '../atoms/Container';
import Button from '../atoms/Button';
import useCreateNewEntry from '../hooks/useCreateNewEntry';

const NewEntryForm = ({show, setShow, maxLength, label, url, setIsCreated}) => {

  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [charNum, setCharNum] = useState(0);
  const [createNewEntry, isLoading, errorMessage] = useCreateNewEntry();
  const { t } = useTranslation(['topic']);

  const handleTextChange = (event) => {
    const value = event.target.value;
    setCharNum(value.length);
    setText(value);
  };

  const handleAuthorChange = (event) => setAuthor(event.target.value);
  const resetInput = () => {
    setText('');
    setAuthor('');
    setShow(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const authorPayload = author ? author : undefined;
    createNewEntry(url,
      {
        author: authorPayload,
        title: text,
        message: text
      },
      resetInput,
      setIsCreated,
    )
  };

  const content = <Container>
      <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
        <div className="field">
          <label>{t('topic:form.primaryLabel', 'Name')}</label>
          <input
            placeholder={t('topic:form.placeholder', '(Optional)')}
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
        <div className="NewEntryForm__ErrorText">{errorMessage}</div>
        { isLoading ?
          <Button disabled />
          :
          <Button type="submit">{t('topic:form.buttonLabel', 'Post')}</Button>
        }
      </form>
    </Container>

  return show && content
}

export default NewEntryForm
