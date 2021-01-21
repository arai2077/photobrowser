import React from "react";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import PhotoStore from "../../stores/PhotoStore";
import Thumbnail from "./Thumbnail/Thumbnail";

const StyledGalleryContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const photoStore = new PhotoStore();

const App = observer(() => {
	return (
		<StyledGalleryContainer>
			{photoStore.photos.map(photo => (
				<Thumbnail
					key={photo.id}
					thumbnailUrl={photo.thumbnailUrl}
					title={photo.title}
				/>
			))}
		</StyledGalleryContainer>
	);
});

export default App;