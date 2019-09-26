import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner } from "react-icons/fa"; //pacote com fontes de icones Font-Awesome... Icones
import { Link } from 'react-router-dom';

import api from "../../services/api";
import Container from "../../components/Container/";

import { Form, SubmitButton, List } from "./styles";

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
  };

  //Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if(repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  //Salva os dados do localstorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if(prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
   }

  handleInputChange =  e => {
    this.setState({ newRepo: e.target.value }); //atualiza o status
  };

   /**
    * Como ela demora e precisa aguardar a resposta
    * adiciona-se o async (handleSubmit = async e ...)
    */
  handleSubmit = async e => {
    e.preventDefault(); //previne o refresh da pagina no submit

    this.setState({ loading: true });
    const { newRepo, repositories } = this.state;
    const response = await api.get(`/repos/${newRepo}`);//leohmoraes/rocketseat-05
    console.log(response.data); //Video 7 - 6'10"

    const data = {
      name: response.data.full_name, //avatar, dono do repositorio....
    }

    this.setState({
      repositories: [ ...repositories, data], //preencher a repositories com o que já tem nela, novos dados adicionados (conceito de imutabilidade)
      newRepo: '', //limpa o status do campo
      loading: false,
    });
  };

  render() {
    const { newRepo, repositories, loading } = this.state; //resgata a informacao do status

    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder= "Adicionar repositório"
            value={ newRepo }
            onChange={ this.handleInputChange }
          />

          <SubmitButton loading={ loading }>
              { loading ? (
              <FaSpinner color="#FFF" size={14} />
              ) : (
              <FaPlus color="#FFF" size={14} />
              )}
          </SubmitButton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={ `/repository/${encodeURIComponent(repository.name)}`}>Detatlhes</Link>
            </li>
          ))}
        </List>
      </Container>
    ); //return
  } //render
} //componente Main
