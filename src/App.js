import React from "react";
import { observer } from "mobx-react-lite";
import PhotoStore from "./stores/PhotoStore";
import Thumbnail from "./components/Thumbnail";

const App = observer(() => {
  const photoStore = new PhotoStore();

  return (
    <>
      {photoStore.photos.map(photo => (
        <Thumbnail key={photo.id} photo={photo} />
      ))}
    </>
  );
});

export default App;
