import React from "react";
import styled from "styled-components";

const Container = styled.div `
    background: #323232;
    flex: 1;
`;

const Calculator: React.FC<{}> = () => {
    return(
        <Container>Calculator Component</Container>
    )
}

export default Calculator