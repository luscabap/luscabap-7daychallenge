import styled from "styled-components";

export const ContainerNewsletter = styled.main`
    @import url('https://fonts.googleapis.com/css2?family=Elsie+Swash+Caps:wght@400;900&display=swap');
    
    display: flex;
    margin: 4rem 0;
`;

export const ContainerInfos = styled.div`
    flex: 1;

    .containerInfos__titulo{
        font-size: 22px;
        font-weight: 400;
    };

    .containerInfos__titulo__planta{
        font-weight: bold;
        font-size: 82px;
        font-family: "Elsie Swash Caps", serif;
    };

    .containerInfos__texto{
        font-size: 16px;
        line-height: 26px;
    };

    .containerInfos__input{
        height: 75px;
        border: none;
        outline: none;
        text-align: left;
        width: 450px;
        background-image: url("../../assets/icon-mail.svg");
        background-repeat: no-repeat;
        background-position: 16px center;
        text-align: center;

        &:hover{
            box-shadow: 10px 10px 30px 0px #0000002e;
        };
        
        &:focus{
            box-shadow: 10px 10px 30px 0px #0000002e;
        }
    }

    .containerInfos__botao{
        border: none;
        background-color: #FFCB47;
        height: 75px;
        color: white;
        width: 194px;
        cursor: pointer;
        transition: 0.5s;

        &:hover{
            background-color: #c29a35;
        }
    };
`;

export const ContainerVisual = styled.div`
    display: flex;
    flex: 1;

    .containerVisual__img{
        max-width: 700px;
        margin: -20rem 0 0 -11rem;
        z-index: -10;
    }
`
