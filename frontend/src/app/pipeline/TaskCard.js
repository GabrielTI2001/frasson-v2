import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import { Card, Dropdown} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import SoftBadge from 'components/common/SoftBadge';
import { Draggable } from 'react-beautiful-dnd';
import AppContext, { PipeContext } from '../../context/Context';
// import api from 'data/kanban2';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

// Adicione os ícones à biblioteca
library.add(faEllipsisH);

const TaskDropMenu = ({ id }) => {
  const { kanbanDispatch } = useContext(PipeContext);

  const {
    config: { isRTL }
  } = useContext(AppContext);
  
  const handleRemoveTaskCard = () => {
    // var url = "delete/card/"+id+"/";
    // api.delete(url)
    // .then(() => {
    //   kanbanDispatch({
    //     type: 'REMOVE_TASK_CARD',
    //     payload: {idcard: id}
    //   });
    // })
    // .catch((error) => {
    //   console.error('Erro ao atualizar os dados:', error);
    // });
  };
  return (
    <Dropdown
      onClick={e => e.stopPropagation()}
      align="end"
      className="font-sans-serif"
    >
      <Dropdown.Toggle
        variant="falcon-default"
        size="sm"
        className="kanban-item-dropdown-btn hover-actions dropdown-caret-none"
      >
        <FontAwesomeIcon icon={faEllipsisH} transform="shrink-2" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="py-0" align={isRTL ? 'start' : 'end'}>
        <Dropdown.Item href="#!">Add Card</Dropdown.Item>
        <Dropdown.Item href="#!">Edit</Dropdown.Item>
        <Dropdown.Item href="#!">Copy link</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleRemoveTaskCard} className="text-danger">
          Remove
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

const TaskCard = ({
  task,
  index
}) => {
  const { kanbanDispatch} = useContext(PipeContext);
  {/*const image = attachments && attachments.find(item => item.type === 'image');*/}
  const handleModalOpen = () => {
    kanbanDispatch({ type: 'OPEN_KANBAN_MODAL', payload: {card: task} });
  };

  // styles we need to apply on draggables
  const getItemStyle = isDragging => ({
    cursor: isDragging ? 'grabbing' : 'pointer',
    transform: isDragging ? 'rotate(-2deg)' : ''
  });
  return (
    <Draggable draggableId={`task${task.id}`} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={provided.draggableProps.style}
          className="kanban-item"
        >
          <Card
            style={getItemStyle(snapshot.isDragging)}
            className="kanban-item-card hover-actions-trigger"
            onClick={handleModalOpen}
          >
            <Card.Body>
              <div className="position-relative">
                <TaskDropMenu id={task.id} />
              </div>
              {task.detalhamento && (
                <h6 style={{'fontSize':'16px'}}
                  className="mb-2 fw-medium font-sans-serif fs-9 stretched-link"
                  dangerouslySetInnerHTML={{ __html: task.detalhamento.produto }}/>
              )}
              <div className='mb-1'>
                <label className='mb-0'>Card</label><br></br>
                <span>{task.card}</span>
              </div>
              <div className='mb-1'>
                <label className='mb-0'>Beneficiário</label><br></br>
                {task.beneficiario && (
                      <p className="text-word-break fs--1 mb-0">{task.beneficiario[0].razao_social}</p>
                )}
              </div>
              <div className='mb-1'>
                <label className='mb-0'>Data Abertura</label><br></br>
                <span>{task.created_at}</span>
              </div>
              <div className='mb-1'>
                <label className='mb-0'>Valor Operação</label><br></br>
                <span>{task.valor_operacao}</span>
              </div>
              {/* <div className='mb-1'>
                  <label className='mb-0'>Vencimento em </label>
                  <span> {task.prazovenc}</span>
              </div> */}
            </Card.Body>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

// TaskDropMenu.propTypes = {
//   id: PropTypes.number.isRequired
// };

// TaskCard.propTypes = {
//   task: PropTypes.shape({
//     idcard: PropTypes.number,
//     campo_set: PropTypes.arrayOf(
//       PropTypes.shape({
//         type: PropTypes.string,
//         text: PropTypes.string
//       })
//     ),
//   }),
//   index: PropTypes.number
// };

export default TaskCard;
