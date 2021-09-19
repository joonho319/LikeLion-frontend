import React from 'react';

interface TagCardProps {
  tag: string
}

export const ScoopTagCard: React.FC<TagCardProps> = ({
  tag
}) => {
  return (
    <div className="border rounded-lg px-3 py-1 mt-4">
      <div className="text-sm">#{tag}</div>
     </div>
   
  )
}