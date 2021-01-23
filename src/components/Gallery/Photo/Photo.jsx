import React from "react";
import { Link, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import styled from "styled-components";
import PhotoStore from "../../../stores/PhotoStore";

const photoStore = new PhotoStore();

const Photo = observer(() => {
	const { id } = useParams();
	const photo = photoStore.getPhotoByID(id);

	return (
		<StyledPhotoContainer>
			<img src={photo.url} alt={photo.title} />
			<h1>{photo.title}</h1>
			<Link to="/">
				<StyledButton>Back to gallery</StyledButton>
			</Link>
		</StyledPhotoContainer>
	);
});

const StyledPhotoContainer = styled.div`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const StyledButton = styled.button`
	font-size: 1rem;
  background-color: #282C34;
  color: white;
  border: 2px solid white;
  border-radius: 5px;
  outline: none;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
  height: 2.25em;
  width: auto;
	padding: 1em;
`;

export default Photo;
