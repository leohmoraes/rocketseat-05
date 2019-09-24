import styled from "styled-components";

export const Container = styled.div`
  max-width: 700px; /* largura maxima, no resize da janela */
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0,0,0, 0.1); /* sombra leve no lado de fora do box */
  padding: 30px;
  margin: 80px auto; /* margin top,bottom com 80px e centralizado nas laterais */

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center; /* icone e texto centralizados */
    flex-direction: row; /* icone e texto centralizados */

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex:1; /* ocupe todo o espaco disponivel */
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  /* sempre alinhado ao centro */
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;
