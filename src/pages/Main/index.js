import React from 'react';

import { FaGithubAlt, FaPlus } from "react-icons/fa"; //pacote com fontes de icones Font-Awesome... Icones

import { Container, Form, SubmitButton } from "./styles";

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input
          type="text"
          placeholder= "Adicionar repositório"
        />

        <SubmitButton disabled>
            <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
    )
}
