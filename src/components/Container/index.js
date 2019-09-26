import styled from "styled-components";

// Nao é possivel colocar export default em uma constante

const Container = styled.div`
  max-width: 700px; /* largura maxima, no resize da janela */
  background: #FFF;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1); /* sombra leve no lado de fora do box */
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

export default Container;
