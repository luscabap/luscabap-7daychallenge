import * as Style from "./style";

interface Modal {
    emailCadastrado: string,
    modalMensagem: boolean
}

export default function Modal({ emailCadastrado, modalMensagem }: Modal){
    return (
        <Style.Container modalMensagem={modalMensagem}>
            <p>Obrigado pela assinatura, você receberá nossas novidades no e-mail: {emailCadastrado}.</p>
        </Style.Container>
    )
}