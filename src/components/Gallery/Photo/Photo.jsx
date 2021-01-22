import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import PhotoStore from "../../../stores/PhotoStore";

const StyledPhotoContainer = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const photoStore = new PhotoStore();

const Photo = observer(() => {
	const { id } = useParams();
	const [photo, setPhoto] = useState({});

	useEffect(() => {
		setPhoto(photoStore.getPhotoByID(id));
	}, [id]);

	return (
		<StyledPhotoContainer>
			<img src={photo.url} alt={photo.title} />
			<h1>{photo.title}</h1>
			<Link to="/">
				<button>Back to gallery</button>
			</Link>
		</StyledPhotoContainer>
	);
});

export default Photo;
