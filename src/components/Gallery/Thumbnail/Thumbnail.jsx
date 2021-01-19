import React from 'react';

const Thumbnail = ({ photo }) => (
  <img src={photo.thumbnailUrl} />
)

export default Thumbnail;