import styled from "styled-components";

export const Container = styled.div`
    width: 352px;
    height: 280px;
    background: ${({theme})=>theme.colors.second_gray};
    border: 1px dashed ${({theme})=>theme.colors.first_gray};
    box-sizing: border-box;
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    @media(max-width: 400px) {
        width: 300px;
    }
`;

export const Text = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 14px;
    color: ${({theme})=>theme.colors.opacity_black};
`;