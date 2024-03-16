import * as Style from "./ModalStyle";

interface Modal {
    emailCadastrado: string,
    modalMensagem: boolean
}

export default function Modal({ emailCadastrado, modalMensagem }: Modal){
    return (
        <Style.Container modalMensagem={modalMensagem}>
            <p className="mensagem__sucesso">Obrigado pela assinatura, você receberá nossas novidades no e-mail: {emailCadastrado}.</p>
        </Style.Container>
    )
}