import React from "react";
import styled from "styled-components";

const Thumbnail = ({ thumbnailUrl, title }) => (
	<StyledThumbnail src={thumbnailUrl} alt={title} />
);

const StyledThumbnail = styled.img`
	margin: 5px;
`;

export default Thumbnail;
