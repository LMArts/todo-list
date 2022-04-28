import styled from "styled-components";

export const InputText = styled.input`
    color: ${({theme})=>theme.colors.black};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    width: 288px;
    height: 48px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    border: none;
    margin-right: 16px;
    text-indent: 16px;
    font-size: 16px;
    line-height: 19px;
    outline-width: 0px;

    @media(max-width: 400px) {
        width: 230px;
    }
`;
