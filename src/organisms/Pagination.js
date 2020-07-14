import React from 'react';
import { Pagination as Pag } from 'semantic-ui-react';

const Pagination = ({getDiscussions, url}) => {

  const handleClick = (e) => {
    const pageNum = e.target.getAttribute('value');
    getDiscussions(`${url}?page=${pageNum}`)
  };

  return (
    <Pag
      onPageChange={(e) => handleClick(e)}
      boundaryRange={0}
      ellipsisItem={null}
      firstItem={null}
      lastItem={null}
      siblingRange={1}
      defaultActivePage={1}
      totalPages={10}
    />
  );
}

export default Pagination
