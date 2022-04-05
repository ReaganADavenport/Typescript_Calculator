import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled.div `
    background: #323232;
    flex: 1;
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: repeat(5, 80px);
`;

const Calculator: React.FC<{}> = () => {
    return(
        <Container>
            <Grid>
                <Button label="9"></Button>
                <Button label="8"></Button>
                <Button label="7"></Button>
                <Button label="6"></Button>
                <Button label="5"></Button>
                <Button label="4"></Button>
                <Button label="3"></Button>
                <Button label="2"></Button>
                <Button label="1"></Button>
            </Grid>
        </Container>
    )
}

export default Calculator