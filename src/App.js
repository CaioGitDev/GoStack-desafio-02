import React, { useState, useEffect } from "react";
import * as faker from 'faker'

import "./styles.css";
import api from "./services/api";

function App() {
  const [repositories, setRepositories] = useState([]);
  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    })
  }, []);
async function handleAddRepository() {
  // TODO
}

async function handleRemoveRepository(id) {
  console.log(id)
  // TODO
}

return (
  <div>
    <ul data-testid="repository-list">
      {repositories.map(repo => <li key={repo.id}>
          {repo.title}
          <button onClick={() => handleRemoveRepository(repo.id)}>Remover</button>
        </li>)}

    </ul>

    <button onClick={handleAddRepository}>Adicionar</button>
  </div>
);
}

export default App;
