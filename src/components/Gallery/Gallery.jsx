import React from 'react';
import Thumbnail from './Thumbnail/Thumbnail.jsx';
import { useGalleryStore } from '../../GalleryContext.js';
import { useObserver } from 'mobx-react';

const Gallery = () => {
  const galleryStore = useGalleryStore();

  return useObserver(() => (
    <ul>
      {galleryStore.photos.map(photo => {
        <Thumbnail photo={photo} />
      })}
    </ul>
  ));
}

export default Gallery;