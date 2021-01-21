import React from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Title = () => (
	<StyledContainer>
		<h1>Photobrowser</h1>
	</StyledContainer>
);

export default Title;
