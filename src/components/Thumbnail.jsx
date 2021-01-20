import React from "react";

const Thumbnail = ({ photo: { thumbnailUrl, title }}) => (
	<img src={thumbnailUrl} alt={title} />
);

export default Thumbnail;
