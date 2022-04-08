import React, { ElementType } from "react";
import styled from "styled-components";


export enum ButtonType {
    Number,
    Operation
};

type Props = React.HTMLProps<HTMLButtonElement> & {
    label: string;
    position?: [x: number, y:number];
    height?: number;
    buttonType?: ButtonType;
    width?: number;
}

const StyledButton = styled.button`
    background: #727171;
    border: none;
    border-radius: 8px;
    color: white;
    font-size: 24px;
`;

const Button: React.FC<Props> = ({
    label, 
    position, 
    height, 
    buttonType = ButtonType.Operation, 
    width, 
    onClick,
    }) => {
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

    if(buttonType === ButtonType.Number){
        styles.color = '#000';
        styles.background = '#E48900';
    }

    return(
        <StyledButton onClick={onClick} style={styles}>
            {label}
        </StyledButton>
    )
}

export default Button;