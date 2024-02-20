import React, { useReducer, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { PipeContext } from '../../context/Context';
// import currentUserAvatar from 'assets/img/team/3.jpg';
//import { pipes } from 'data/kanban2';
import { kanbanReducer } from '../../reducers/pipeproductReducer';
// import { data } from '../../context/data';

const KanbanProvider = ({ children, id }) => {
  // const a = useContext(KanbanContext);
  // console.log(a);
  // const {uuid} = useParams();
  const navigate = useNavigate();
  const [initialized, setInitialized] = React.useState(false);
  const [kanbanState, kanbanDispatch] = useReducer(kanbanReducer, {
    pipes: [],
    fases: [],
    pipe: [],
    kanbanModal: {
      show: false,
      modalContent: {}
    }
  });

  const currentUser = {
    name: 'Emma',
    // avatarSrc: currentUserAvatar,
    profileLink: '/user/profile',
    institutionLink: '#!'
  };

  const fetchData = async () => {
    try {
      //Faça a solicitação com o token
      const apiUrl = `http://localhost:8000/pipeline/pipes/produtos/${id}/`;
      const response = await fetch(apiUrl, {
        // headers: {
        //   Authorization: `Bearer ${token}`
        // }
      });

      if (response.status === 401) {
        // Token inválido, redirecione para a página de login
        console.log('Token inválido. Redirecionando para a página de login.');
        navigate('/authentication/login');
        return;
      }

      const data = await response.json();

      kanbanDispatch({
        type: 'SET_DATA',
        payload: {
          pipes: [],
          fases: data.fase_set,
          pipe: data,
          kanbanModal: {show: false, modalContent: {}}
          // ... outras propriedades conforme necessário
        }
      });
      setInitialized(true);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  useEffect(() => {
    // Execute a função fetchData apenas se ainda não estiver inicializado
    if (!initialized) {
      fetchData();
    }
  }, [initialized]);

  return (
    <PipeContext.Provider
      value={{ kanbanState, kanbanDispatch, currentUser }}
    >
      {children}
    </PipeContext.Provider>
  );
};

export default KanbanProvider;

