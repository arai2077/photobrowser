import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import styled from "styled-components";

const StyledPhotoContainer = styled.div`
	display: flex;
	justify-content: center;
`;

const Photo = ({ url, title }) => (
	<StyledPhotoContainer>
		<img src={url} alt={title} />
		<h1>{title}</h1>
		<Link to="/">
			<button>Close</button>
		</Link>
	</StyledPhotoContainer>
);

export default Photo;
