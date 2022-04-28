import styled from "styled-components";

export const Container = styled.div`
    margin-top: 24px;
    height: 280px;
    overflow: auto;
    overflow-x: hidden;
`;
export const ContainerList = styled.div`
    width: 352px;
    height: 32px;
    border-radius: 2px;
    display: flex;
    margin: 8px 0px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: ${({theme})=>theme.colors.fourth_gray};
    
    @media(max-width: 400px) {
        width: 300px;
    }
`;
export const ItemList = styled.p`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    margin: 8px 0px 8px 16px;
    color: ${({theme})=>theme.colors.opacity_black};
`;