import React from 'react';
import Gallery from './components/Gallery/Gallery.jsx';
import { GalleryProvider } from './GalleryContext.js';

const App = () => (
  <GalleryProvider>
    <Gallery />
  </GalleryProvider>
)

export default App;