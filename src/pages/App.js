import { useState } from 'react';
import gitLogo from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api';

import { Container } from './styles';

function App() {
  const [currentRepo, setCurrentRepo] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {

    await api.get(`repos/${currentRepo}`)
      .then(res => {

        if (res.status === 200) {
            const isExist = repos.find(repo => repo.id === res.data.id);
      
            if (!isExist) {
              setRepos(prev => [...prev, res.data]);
              setCurrentRepo('');
              return 0;
            } 
            
            setCurrentRepo('');
            alert('Repositório existe, mas já foi adicionado na tela!');    
        }
      })
      .catch(e => {
        setCurrentRepo('');
        alert(e.message + '\n>> Repositório não encontrado!!!');
      })
  };

  return (
    <Container>
      <img src={ gitLogo } width={72} height={72} alt="github logo" />
      <Input value={ currentRepo } onChange={ (e) => setCurrentRepo(e.target.value) } />
      <Button onClick={ handleSearchRepo } />
      <div className="itens-repositorios">
        {repos.map(repo => <ItemRepo repo={ repo } />)}
      </div>
    </Container>
  );
}

export default App;