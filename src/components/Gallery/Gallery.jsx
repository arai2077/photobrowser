import React from "react";
import { observer } from "mobx-react-lite";
import PhotoStore from "../../stores/PhotoStore";
import Thumbnail from "./Thumbnail/Thumbnail";

const photoStore = new PhotoStore();

const App = observer(() => {
  return (
    <>
      {photoStore.photos.map(photo => (
		<Thumbnail
			key={photo.id}
			thumbnailUrl={photo.thumbnailUrl}
			title={photo.title}
		/>
      ))}
    </>
  );
});

export default App;