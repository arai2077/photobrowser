import React from 'react';
import { createGalleryStore } from './galleryStore.js';
import { useLocalStore } from 'mobx-react';

const GalleryContext = React.createContext(null);

const useGalleryStore = () => React.useContext(GalleryContext);

const GalleryProvider = ({ children }) => {
	const galleryStore = useLocalStore(createGalleryStore);

	return (
		<GalleryContext.Provider value={galleryStore}>
			{children}
		</GalleryContext.Provider>
	);
}

export { GalleryProvider, useGalleryStore };