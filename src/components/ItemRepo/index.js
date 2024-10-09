import React from "react";

import { ItemContainer } from './styles';

function ItemRepo({ repo, handleRemoveRepo }) {

  const handleRemove = (e) => {
    e.preventDefault();
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
        <h3>{ repo.name }</h3>
        <p>{ repo.full_name }</p>
        <a href={ repo.html_url } rel="noreferrer" target="_blank" className="link-repositorio">Ver repositórios</a><br />
        <a href="/" rel="noreferrer" onClick={e => handleRemove(e) } className="remover">Remover</a>
        <hr />
    </ItemContainer>
  );
}

export default ItemRepo;