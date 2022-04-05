import React from "react";
import styled from "styled-components";

type Props = {
    label: string;
}

const StyledButton = styled.button`

`;

const Button: React.FC<Props> = ({label}) => {
    return(
        <StyledButton>{label}</StyledButton>
    )
}

export default Button;