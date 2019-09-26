import React, { Component } from 'react';
import api from '../../services/api';

// import { Container } from './styles';

export default class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    //api.github.com/repos/leohmoraes/rocketseat-05

      // const response = await api.get( `/repos/${repoName}`);
      // const issues = await api.get( `/repos/${repoName}/issues`);

      const [ repository, issues ]= await Promise.all([
        api.get( `/repos/${repoName}`),
        api.get( `/repos/${repoName}/issues`, {
          params: { //?state=open&per_page=5
            state: 'open',
            per_page: 5, //testar e ver se no console traz 5 itens
          }
        })
      ]);

      // console.log(repository, issues); //teste ok

      this.setState({
        repository: repository.data,
        issues: issues.data,
        loading: false,
      });
    }

  render() {
    const { repository, issues, loading } = this.state;

    return <h1>Repository</h1>;
  }
}
