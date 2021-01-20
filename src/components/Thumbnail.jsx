import React from "react";

const Thumbnail = ({ id, thumbnailUrl, title }) => (
	<img key={id} src={thumbnailUrl} alt={title} />
);

export default Thumbnail;
