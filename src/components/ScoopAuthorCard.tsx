import React from 'react';

import Webtoon from '../images/독립일기.png';

interface AuthorCardProps {
  author: any
}

export const ScoopAuthorCard: React.FC<AuthorCardProps> = ({
  author
}) => {
  return (
    <div>
      <div style={{backgroundImage: `url(${Webtoon})`, backgroundSize: 'cover', backgroundRepeat:"no-repeat", height: "100px"}} className="rounded-full"></div>
      <div className="grid justify-center text-sm mt-3"  >{author.name}</div>
    </div>
   
  )
}