import React, { useContext, useEffect, useRef, useState } from 'react';
// import PropTypes from 'prop-types';
import KanbanColumnHeader from './KanbanColumnHeader';
import TaskCard from './products/TaskCard';
// import AddAnotherForm from './AddAnotherForm';
// import IconButton from 'components/common/IconButton';
import { Droppable } from 'react-beautiful-dnd';
import classNames from 'classnames';
import { PipeContext } from '../../context/Context';
// import StrictModeDroppable from './StrictModeDroppable';
// import api from "data/kanban2";

const KanbanColumn = ({ kanbanColumnItem}) => {
  const { id, descricao, card_produtos_set } = kanbanColumnItem;
  const [showForm, setShowForm] = useState(false);
  const formViewRef = useRef(null);
  const {
    kanbanState: { fases},
    kanbanDispatch
  } = useContext(PipeContext);

  // const handleSubmit = cardData => {
  //   console.log(fases)
  //   const targetList = fases.find(fase =>fase.idfase === idfase);
  //   const cardId = targetList.card_set.length
  //     ? Math.max(...targetList.card_set.map(card => card.idcard)) + 1
  //     : Number(`${targetList.idfase}0`);
  //   const newCard = {
  //     idcard: cardId,
  //     fase: kanbanColumnItem.idfase,
  //     user: 1,
  //     valor: cardData.valor,
  //     prazovenc: cardData.venc
  //   };
  //   const isEmpty = !Object.keys(cardData).length;

  //   if (!isEmpty) {
  //     api.post('/cards/', newCard)
  //     .then((response) => {
  //       kanbanDispatch({
  //         type: 'ADD_TASK_CARD',
  //         payload: { targetListId: idfase, novocard:newCard}
  //       });
  //     })
  //     .catch((erro) => {
  //       console.error('erro: '+erro);
  //     })
  //     setShowForm(false);
  //   }
  // };

  useEffect(() => {
    const timeout = setTimeout(() => {
      formViewRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 500);
    return clearTimeout(timeout);
  }, [showForm, fases]);

  return (
    <div className={classNames('kanban-column', { 'form-added': showForm })}>
      <KanbanColumnHeader id={id} title={descricao} itemCount={card_produtos_set.length} />
      <Droppable droppableId={`${id}`} type="KANBAN">
        {provided => (
          <>
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              id={`container-${id}`}
              className="kanban-items-container scrollbar"
            >
              {card_produtos_set.map((card, index) => (
                <TaskCard key={card.id} index={index} task={card}/>
              ))}
              {/* <AddAnotherForm
                //   onSubmit={handleSubmit}
                //   type="card"
                //   showForm={showForm}
                //   setShowForm={setShowForm}
                // />
               */}
              {provided.placeholder}
              <div ref={formViewRef}></div>
            </div>
            {!showForm && (
              <div className="kanban-column-footer">
                {/* <IconButton
                  size="sm"
                  variant="link"
                  className="d-block w-100 btn-add-card text-decoration-none text-600"
                  icon="plus"
                  iconClassName="me-2"
                  onClick={() => setShowForm(true)}
                >
                  Add another card
                </IconButton> */}
              </div>
            )}
          </>
        )}
      </Droppable>
    </div>
  );
};

// KanbanColumn.propTypes = {
//   kanbanColumnItem: PropTypes.shape({
//     idfase: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
//     descricao: PropTypes.string,
//     card_set: PropTypes.arrayOf(TaskCard.propTypes.task)
//   })
// };

export default KanbanColumn;
