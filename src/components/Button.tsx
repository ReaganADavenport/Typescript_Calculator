import React from "react";
import styled from "styled-components";

type Props = {
    label: string;
    position?: [x: number, y:number];
    height?: number;
    width?: number;
}

const StyledButton = styled.button`
    background: #E48900;
    border: none;
    border-radius: 8px;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({ label, position, height, width }) => {
    const styles:React.CSSProperties = {};
    if(position) {
       styles.gridColumnStart = position[0] + 1;
       styles.gridRowStart = position[1] + 1;
    }

    if(width){
        styles.gridColumnEnd = `span ${width}` ;  
    }

    if(height){
        styles.gridRowEnd = `span ${height}`;
    }

    return(
        <StyledButton style={styles}>{label}</StyledButton>
    )
}

export default Button;