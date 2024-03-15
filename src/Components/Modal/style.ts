import styled from "styled-components"
interface ContainerProps {
    modalMensagem: boolean
}

export const Container = styled.div<ContainerProps>`
    display: ${props => props.modalMensagem === false ? 'none' : 'block'};
    transition: 1s;

    p {
        font-size: 18px;
        margin: 2rem 0;
        padding: 1.5rem;
        border-radius: 1rem;
        background-color: #ffe5a4;
    }
`