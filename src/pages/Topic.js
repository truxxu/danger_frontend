import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Button from '../atoms/Button';
import PageContainer from '../atoms/PageContainer';
import TopicHeader from '../molecules/TopicHeader';
import NewEntryForm from '../organisms/NewEntryForm';
import ItemList from '../organisms/ItemList';
import Pagination from '../organisms/Pagination';
import useResources from '../hooks/useResources';

const Topic = (props) => {

  let { topicId } = useParams();
  let currentUrl = `topics/${topicId}/discussions`;
  let { url } = useRouteMatch();

  const [show, setShow] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const { t } = useTranslation(['topic']);

  const [getDiscussions, discussions, isLoadingDiscussions] = useResources();

  useEffect(() => {
    getDiscussions(currentUrl)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topicId, isCreated]);

  return (
    <PageContainer>
      <TopicHeader topicId={topicId}/>
      <Button onClick={() => setShow(!show)}>
        {show ?
          t('topic:button.hide', 'Close')
          :
          t('topic:button.show', 'Create new discussion')
        }
      </Button>
      <NewEntryForm
        label={t('topic:form.secondaryLabel', 'Title')}
        show={show}
        setShow={setShow}
        setIsCreated={setIsCreated}
        maxLength={75}
        url={currentUrl}
      />
      <ItemList
        data={discussions}
        to={`${url}/discussion`}
        isLoading={isLoadingDiscussions}
      />
      <Pagination getDiscussions={getDiscussions} url={currentUrl} />
    </PageContainer>
  )
}

export default Topic
