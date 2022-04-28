import styled from "styled-components";

export const Button = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 100px;
    border: none;
    background-color: ${({theme})=>theme.colors.green};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:disabled{
        background-color: ${({theme})=>theme.colors.opacity_green};;
    }
`; 