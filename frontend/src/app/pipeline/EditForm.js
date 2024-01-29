import classNames from 'classnames';
import PropTypes from 'prop-types';
import Select from 'react-select';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const EditForm = ({
  onSubmit: handleSubmit,
  type,
  fieldkey,
  show,
  setShow,
  data
}) => {
  const [formData, setFormData] = useState({});
  const [optsBeneficiario, setOptsBeneficiario] = useState([]);
  const [defaultselected, setdefaultSelected] = useState();
  const inputRef = useRef(null);

  const fetchData = async () => {
    try {
      const apiUrl = `http://localhost:8000/pipeline/beneficiarios/`;
      const response = await fetch(apiUrl);
      const dataapi = await response.json();
      const options = dataapi.map(b =>({
        value: b.id,
        label: b.razao_social,
        cpf_cnpj: b.cpf_cnpj
      }))
      setOptsBeneficiario(options)
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
    if (fieldkey == 'beneficiario'){
      const ids = data.map(b => ({value: b.id, label: b.razao_social, cpf_cnpj: b.cpf_cnpj}));
      setdefaultSelected(ids)
    }
  };

  useEffect(() => {
    if (show) {
      if (fieldkey !== 'beneficiario'){
        inputRef.current.focus();
      }
      fetchData()
    }
  }, [show]); 

  return (
    <>
    {show &&(
      <div
        className={classNames('rounded-3 transition-none', {
          'bg-100 p-x1': type === 'list',
          'p-3 border bg-white dark__bg-1000 mt-3': type === 'card'
        })}
      >
        <Form
          onSubmit={e => {
          e.preventDefault();
            return handleSubmit(formData);
          }}
        >
        {fieldkey === 'card' &&(
          <Form.Control
            type='text'
            rows={2}
            className="mb-2 w-50 fs-xs py-0 px-1 ms-2 shadow-none outline-none"
            ref={inputRef}
            onChange={({ target }) =>
              setFormData({ ...formData, card: target.value })
            }
            defaultValue={data}
          />
          )}
          {fieldkey == 'data' &&(
            <Form.Control
            type='date'
            rows={2}
            className="mb-2 w-50 fs-xs py-0 px-1 ms-2 shadow-none outline-none"
            ref={inputRef}
            onChange={({ target }) =>
              setFormData({ ...formData, data: target.value })
            }
            value={data.slice(0,10)}
            />
          )}
          {fieldkey == 'beneficiario' &&( defaultselected &&
            <Select options={optsBeneficiario} ref={inputRef} isMulti={true} defaultValue={defaultselected}
            onChange={(selectedOptions ) => {
              const selected = selectedOptions.map(s => ({
                id: s.value,
                razao_social: s.label,
                cpf_cnpj: s.cpf_cnpj
              }))

              selected.length > 0 && setFormData((prevFormData) => ({
                ...prevFormData,
                beneficiario: selected
              }));
            }
          } className='mb-1'/>
          )}
            <Row className="gx-2 w-50 ms-2">
            <Button
              variant="primary"
              size="sm"
              className="col w-30 fs-xs p-0 me-1"
              type="submit"
            >
              <span>Atualizar</span>
            </Button>
            <Button
              variant="outline-secondary"
              size="sm"
              className="col w-30 fs-xs p-0 border-400"
              type="button"
              onClick={() =>     
                setShow(prevState => ({
                ...prevState,
                [fieldkey]: !prevState[fieldkey]
              }))}
            >
              <span>Cancelar</span>
            </Button>
          </Row>  
        </Form>
      </div>   
    )}
    </>
  );
};

export default EditForm;
