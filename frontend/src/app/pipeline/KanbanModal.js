import React, { useState, useContext, useEffect } from 'react';
import { CloseButton, Col, Modal, Row } from 'react-bootstrap';
import '../../assets/scss/custom.css';
// import Background from 'components/common/Background';
// import { Link } from 'react-router-dom';
import ModalMediaContent from './ModalMediaContent';
// import GroupMember from './GroupMember';
// import { members } from 'data/kanban';
// import ModalLabelContent from './ModalLabelContent';
// import ModalAttachmentContent from './ModalAttachmentContent';
import ModalCommentContent from './ModalCommentContent';
// import ModalActivityContent from './ModalActivityContent';
import AppContext, { PipeContext } from '../../context/Context';
import api from '../../context/data';
import ModalSidebar from './ModalSidebar';
import EditForm from './EditForm';


const KanbanModal = ({show}) => {
  const [showForm, setShowForm] = useState({'card':false,'data':false,'beneficiario':false});
  const {kanbanState: {kanbanModal}, kanbanDispatch} = useContext(PipeContext);

  const card = kanbanModal.modalContent;
  const handleClose = () => {
    kanbanDispatch({ type: 'TOGGLE_KANBAN_MODAL' });
  };

  useEffect(() =>{

  }, [kanbanModal])

  const handleEdit = (key) =>{
    setShowForm(prevState => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  }
  const handleSubmit = (formData) =>{
    const updatedFields = {}
    const valorescard = card
    // if (formData.detalhamento !== card.detalhamento) {
    //   updatedFields.detalhamento = formData.detalhamento.id;
    // }
    if (formData.beneficiario){
      valorescard.beneficiario = formData.beneficiario
      const ids = formData.beneficiario.map(b =>b.id);
      updatedFields.beneficiario = ids;
      api.put(`pipeline/cards/${card.id}/update_beneficiarios/`, updatedFields)
      .then((response) => {
        kanbanDispatch({
          type: 'UPDATE_TASK_CARD',
          payload: {
            updatedCard: valorescard,
            targetListId: card.phase,
            id: card.id
          }
        })
      })
      .catch((erro) => {
        console.error('erro: '+erro);
      })
    }
    else{
      if (formData.card) {
        valorescard.card = formData.card
        updatedFields.card = formData.card;
      }
      if (formData.valor_operacao) {
        valorescard.valor_operacao = formData.valor_operacao;
        updatedFields.valor_operacao = formData.valor_operacao;
      }
      if (formData.faturamento_estimado) {
        valorescard.faturamento_estimado = formData.faturamento_estimado;
        updatedFields.faturamento_estimado = formData.faturamento_estimado;
      }
      if (updatedFields){
        api.put(`pipeline/cards/produtos/${card.id}/`, updatedFields)
        .then((response) => {
          kanbanDispatch({
            type: 'UPDATE_TASK_CARD',
            payload: {
              updatedCard: valorescard,
              targetListId: card.phase,
              id: card.id
            }
          })
        })
        .catch((erro) => {
          console.error('erro: '+erro);
        })
      }
    }
    kanbanDispatch({ type: 'OPEN_KANBAN_MODAL', payload: {card: valorescard}});
    setShowForm({...showForm, 'card':false,'data':false,'beneficiario':false})
  }

  if (card){
    return (
      <Modal
        show={show}
        onHide={handleClose}
        contentClassName="border-0"
        dialogClassName="mt-2 modal-custom modal-xxl"
      >
        <div className="position-absolute top-0 end-0 mt-1 me-1 z-index-1"style={{ zIndex: 1000 }}>
            <CloseButton
              onClick={handleClose}
              className="btn btn-sm btn-circle d-flex flex-center transition-base"
            />
        </div>
        <Modal.Body className="p-0">
           <Row className='p-2'>
              <Col className='border-1 ml-2 pe-0' id='infocard' lg={5}>
              <div className="rounded-top-lg px-1 py-2 text-center">
                {card.detalhamento && (
                  <h4 className="mb-1">{card.detalhamento.detalhamento_servico}</h4>
                )}
              </div>
              <div className="rounded-top-lg px-1">
                <div className='fw-bold fs-sm'>Card*
                  <span className='modal-editar ms-2 fs-xs fw-normal' onClick={() => handleEdit('card')}>
                    <i className='fa-solid fa-pencil fs-xs'></i>Editar
                  </span>
                </div>
                {card.card && (
                  !showForm['card'] &&(
                    <div className="fs-xs ms-3 row-10">{card.card}</div>
                  )
                )}
                <EditForm 
                  onSubmit={handleSubmit} 
                  show={showForm['card']}
                  fieldkey='card'
                  setShow={setShowForm}
                  data={card.card}
                />
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold fs-sm'>Beneficiário*</span>
                <span className='modal-editar ms-2 fs-xs' onClick={() => handleEdit('beneficiario')}>
                  <i className='modal-editar fa-solid fa-pencil fs-xs'></i>Editar
                  </span>
                {card.beneficiario && card.beneficiario.map ((b) => (
                  !showForm['beneficiario'] && (
                    <div className='p-1 mb-1 row ms-2 info-pipe' key={b.id}>
                      <label className='row fw-bold'>{b.razao_social}</label>
                      <span className='row fs-xs'>CPF/CNPJ:</span>
                      <label className='row fs-xs'>{b.cpf_cnpj}</label>
                    </div>
                  )))}
                <EditForm 
                  onSubmit={handleSubmit} 
                  show={showForm['beneficiario']}
                  fieldkey='beneficiario'
                  setShow={setShowForm}
                  data={card.beneficiario}
                />
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold fs-sm'>Detalhamento da Demanda*</span>
                <span className='modal-editar ms-2 fs-xs'><i className='fa-solid fa-pencil fs-xs'></i>Editar</span>
                {card.detalhamento && (
                    <div className='p-1 row ms-2 info-pipe'>
                      <label className='row fw-bold'>{card.detalhamento.detalhamento_servico}</label>
                      <span className='row fs-xs'>Produto:</span>
                      <label className='row fs-xs'>{card.detalhamento.produto}</label>
                    </div>
                  )}
              </div>
              <div className="rounded-top-lg px-1">
                <div className='fw-bold fs-sm'>Data de Abertura*
                  <span className='modal-editar ms-2 fs-xs fw-normal' onClick={() => handleEdit('data')}><i className='fa-solid fa-pencil fs-xs'></i>Editar</span>
                </div>
                {card.created_at && (
                  !showForm['data'] &&(
                  <div className="text-word-break fs--1 ms-3 row">{card.created_at}</div>
                  )
                )}
                <EditForm 
                  onSubmit={handleSubmit} 
                  show={showForm['data']}
                  fieldkey='data'
                  setShow={setShowForm}
                  data={card.created_at}
                />
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold'>Instituição Vinculada*</span>
                <span className='modal-editar ms-2 fs-xs'><i className='fa-solid fa-pencil fs-xs'></i>Editar</span>
                {card.instituicao && (
                    <div className='p-1 row ms-2 info-pipe'>
                      <label className='row fw-bold'>{card.instituicao.razao_social}</label>
                      <span className='row fs-xs'>Identificação:</span>
                      <label className='row fs-xs'>{card.instituicao.identificacao}</label>
                    </div>
                  )}
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold'>Contrato*</span>
                <span className='modal-editar ms-2 fs-xs'><i className='fa-solid fa-pencil fs-xs'></i>Editar</span>
                {card.contrato && (
                    <div className='p-1 row ms-2 info-pipe'>
                      <label className='row fw-bold'>{card.contrato.contratante}</label>
                      <span className='row fs-xs'>Produto:</span>
                      <label className='row fs-xs'>{card.contrato.produto}</label>
                    </div>
                  )}
              </div>
              </Col>
              <Col lg={4} className='col2modal'>
                <div className="rounded-top-lg px-1 py-2 text-center">
                  <span>Fase Atual</span>
                </div>
                <ModalMediaContent title='Comentários'>
                  <ModalCommentContent card={card} />
                </ModalMediaContent>
              </Col>
              <Col lg={3}>
                <ModalSidebar />
              </Col>
            </Row>
        </Modal.Body>
      </Modal>
    );
  }
  
};

export default KanbanModal;
