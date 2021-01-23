import React from "react";
import { Link } from "react-router-dom";
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
			{photoStore.apiError
			? <div>Something went wrong fetching the photos.</div>
			: photoStore.photos.map(photo => (
				<Link
					key={photo.id}
					to={`/${photo.id}`}
				>
					<Thumbnail
						key={photo.id}
						thumbnailUrl={photo.thumbnailUrl}
						title={photo.title}
					/>
				</Link>
			))}
		</StyledGalleryContainer>
	);
});

export default App;
