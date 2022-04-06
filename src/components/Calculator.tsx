import React from "react";
import styled from "styled-components";
import Button, { ButtonType } from "./Button";

const Container = styled.div `
    
`;

const Grid = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(4, 80px);
    grid-template-rows: 120px repeat(5, 80px);
`;

const Display = styled.div`
    background: #fff;
    border-radius: 8px;
    font-size: 48px;
    grid-column-end: span 4;
    padding: 30px 24px;
    text-align: right;
`;

const Calculator: React.FC<{}> = () => {
    return(
        <Container>
            <Grid>
                <Display>42</Display>
                <Button label="AC" position={[0,1]} width={2}></Button>
                <Button label="Oops" position={[2,1]} width={2}></Button>
                <Button label="+" position={[3,2]}></Button>
                <Button label="-" position={[3,3]}></Button>
                <Button label="=" position={[3,4]} height={2}></Button>
                <Button type={ButtonType.Number} label="9" position={[2,2]}></Button>
                <Button type={ButtonType.Number} label="8" position={[1,2]}></Button>
                <Button type={ButtonType.Number} label="7" position={[0,2]}></Button>
                <Button type={ButtonType.Number} label="6" position={[2,3]}></Button>
                <Button type={ButtonType.Number} label="5" position={[1,3]}></Button>
                <Button type={ButtonType.Number} label="4" position={[0,3]}></Button>
                <Button type={ButtonType.Number} label="3" position={[2,4]}></Button>
                <Button type={ButtonType.Number} label="2" position={[1,4]}></Button>
                <Button type={ButtonType.Number} label="1" position={[0,4]}></Button>
                <Button type={ButtonType.Number} label="0" position={[0,5]} width={3}></Button>
            </Grid>
        </Container>
    )
}

export default Calculator