import React, { useState, useContext } from 'react';
import { CloseButton, Col, Modal, Row, Dropdown, Button } from 'react-bootstrap';
import '../../assets/scss/custom.css';
// import Background from 'components/common/Background';
// import { Link } from 'react-router-dom';
import ModalMediaContent from './ModalMediaContent';
// import GroupMember from './GroupMember';
// import { members } from 'data/kanban';
// import ModalLabelContent from './ModalLabelContent';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import ModalAttachmentContent from './ModalAttachmentContent';
import ModalCommentContent from './ModalCommentContent';
// import ModalActivityContent from './ModalActivityContent';
import AppContext, { PipeContext } from '../../context/Context';
import ModalSidebar from './ModalSidebar';
import EditForm from './EditForm';

const KanbanModal = ({show}) => {
  const [showForm, setShowForm] = useState(false);
  const {
    kanbanState: { kanbanModal},
    kanbanDispatch
  } = useContext(PipeContext);
  const {
    config: { isRTL }
  } = useContext(AppContext);
  const handleClose = () => {
    kanbanDispatch({ type: 'TOGGLE_KANBAN_MODAL' });
  };
  const handleSubmit = () =>{

  }

  const card = kanbanModal.modalContent;

  if (card){
    return (
      <Modal
        show={show}
        size="lg-11 xxl-10"
        onHide={handleClose}
        contentClassName="border-0"
        dialogClassName="mt-2 modal-xl"
        //style={{'backgroundColor':'red'}}
      >
        {/* {kanbanModal.modalContent.image && (
          <div className="position-relative overflow-hidden py-8">
            <Background
              image={kanbanModal.modalContent.image.url}
              className="rounded-top-lg"
            />
          </div>
        )} */}
        
        <div className="position-absolute top-0 end-0 mt-1 me-1 z-index-1">
          <CloseButton
            onClick={handleClose}
            className="btn btn-sm btn-circle d-flex flex-center transition-base"
          />
        </div>
        <Modal.Body className="p-0 ps-2">
          {/* <div className="bg-light rounded-top-lg px-4 py-3">
            <h4 className="mb-1"></h4>
            <p className="fs--2 mb-0">
              Adicionado pelo usuário: {card.username}
            </p>
          </div> */}


            <Row className='p-2'>
              <Col className='border-1 pe-2 ml-2' lg={4}>
              <div className="bg-light rounded-top-lg px-1 py-2 text-center">
                {card.detalhamento && (
                  <h4 className="mb-1">{card.detalhamento.detalhamento_servico}</h4>
                )}
              </div>
              {/*<ModalMediaContent title="Reviewers" icon="user">
                  <GroupMember
                    users={/members/}
                    addMember
                    showMember={6}
                    avatarSize="xl"
                  />
              </ModalMediaContent>*/}
              <div className="rounded-top-lg px-1">
                <div className='fw-bold fs-sm'>Card*</div>
                {card.card && (
                  <div className="text-word-break fs--1 ms-3 row">{card.card}</div>
                )}
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold fs-sm'>Beneficiário*</span>
                {card.beneficiario && card.beneficiario.map ((b) => (
                    <div className='p-1 row ms-2 info-pipe'>
                      <label className='row fw-bold'>{b.razao_social}</label>
                      <span className='row fs-xs'>CPF/CNPJ:</span>
                      <label className='row fs-xs'>{b.cpf_cnpj}</label>
                    </div>
                  ))}
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold fs-sm'>Detalhamento da Demanda*</span>
                {card.detalhamento && (
                    <div className='p-1 row ms-2 info-pipe'>
                      <label className='row fw-bold'>{card.detalhamento.detalhamento_servico}</label>
                      <span className='row fs-xs'>Produto:</span>
                      <label className='row fs-xs'>{card.detalhamento.produto}</label>
                    </div>
                  )}
              </div>
              <div className="rounded-top-lg px-1">
                <div className='fw-bold fs-sm'>Data de Abertura*</div>
                {card.created_at && (
                  <div className="text-word-break fs--1 ms-3 row">{card.created_at}</div>
                )}
              </div>
              <div className="rounded-top-lg px-1 py-2">
                <span className='fw-bold'>Instituição Vinculada*</span>
                {card.instituicao && (
                    <div className='p-1 row ms-2 info-pipe'>
                      <label className='row fw-bold'>{card.instituicao.razao_social}</label>
                      <span className='row fs-xs'>Identificação:</span>
                      <label className='row fs-xs'>{card.instituicao.identificacao}</label>
                    </div>
                  )}
              </div>
                <ModalMediaContent isHr={false} title="Valor da Operação: " icon="align-left">
                  {/* <p className="text-word-break fs--1">
                      {card.valor}
                  </p> */}
                </ModalMediaContent>
              </Col>
              <Col lg={5}>
                <ModalMediaContent
                    title="Commentários"
                    icon={['far', 'comment']}
                    headingClass="mb-3"
                  >
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
