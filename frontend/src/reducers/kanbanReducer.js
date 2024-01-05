export const kanbanReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_DATA':
      return {
        ...state,
        pipes: action.payload.pipes,
        pipe: action.payload.pipe,
        fases: action.payload.fases
        // ... outras propriedades conforme necessário
      };
    case 'SET_DATA2':
      return {
        ...state,
        pipes: action.payload.pipes,
        pipe: action.payload.pipe,
          // ... outras propriedades conforme necessário
      };
    case 'OPEN_KANBAN_MODAL':
      return {
        ...state,
        kanbanModal: {
          ...state.kanbanModal,
          modalContent: payload.card,
          show: true
        }
      };

    case 'TOGGLE_KANBAN_MODAL':
      return {
        ...state,
        kanbanModal: {
          ...state.kanbanModal,
          show: !state.kanbanModal.show
        }
      };

    case 'ADD_KANBAN_COLUMN':
      return {
        ...state,
        fases: [...state.fases, payload]
      };

    case 'ADD_TASK_CARD':
      return {
        ...state,
        fases: state.fases.map(fase =>
          fase.idfase === payload.targetListId
            ? { ...fase, card_set: [...fase.card_set, payload.novocard] }
            : fase
        )
      };

    case 'REMOVE_TASK_CARD':
      return {
        ...state,
        fases: state.fases.map(f => {
          return {
            ...f,
            card_set: f.card_set.filter(card => card.idcard !== payload.idcard)
          };
        })
      };

    // case 'UPDATE_SINGLE_COLUMN':
    //   return {
    //     ...state,
    //     kanbanItems: state.kanbanItems.map(kanbanItem =>
    //       kanbanItem.id === payload.column.id
    //         ? {
    //             ...kanbanItem,
    //             items: [...payload.reorderedItems]
    //           }
    //         : kanbanItem
    //     )
    //   };

    case 'UPDATE_DUAL_COLUMN':
      return {
        ...state,
        fases: state.fases.map(fase =>
          fase.idfase == payload.sourceColumn.idfase ||
          fase.idfase == payload.destColumn.idfase
            ? {
                ...fase,
                card_set:
                  (fase.idfase == payload.sourceColumn.idfase &&
                    payload.updatedSourceItems) ||
                  (fase.idfase == payload.destColumn.idfase &&
                    payload.updatedDestItems)
              }
            : fase
        )
      };

    // case 'REMOVE_KANBAN_COLUMN':
    //   return {
    //     ...state,
    //     kanbanItems: state.kanbanItems.filter(
    //       kanbanItem => kanbanItem.id !== payload.id
    //     )
    //};

    default:
      return state;
  }
};
