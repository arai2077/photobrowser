import React from "react";
import styled from "styled-components";

const StyledThumbnail = styled.img`
	margin: 3px;
`;

const Thumbnail = ({ thumbnailUrl, title }) => (
	<StyledThumbnail src={thumbnailUrl} alt={title} />
);

export default Thumbnail;
