import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerTitulo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    .containerTitulo__titulo{
        color: #213E26;
    }
`;

export const ContainerLista = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.3rem;

    .containerLista__item{
        list-style-type: none;
        font-weight: bolder;
        font-size: 16px;
        cursor: pointer;
    };

    .containerLista__separacao{
        list-style-type: none;
        font-weight: bolder;
        font-size: 16px;
    }
`;