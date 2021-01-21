import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import PhotoStore from "../../stores/PhotoStore";
import Thumbnail from "./Thumbnail/Thumbnail";
import Photo from "./Photo/Photo";

const StyledGalleryContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

const photoStore = new PhotoStore();

const App = observer(() => {
	return (
		<Router>
			<Switch>
				<Route exact path="/">
					<StyledGalleryContainer>
						{photoStore.photos.map(photo => (
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
				</Route>
				<Route path="/:id" component={Photo} />
			</Switch>
		</Router>
	);
});

export default App;