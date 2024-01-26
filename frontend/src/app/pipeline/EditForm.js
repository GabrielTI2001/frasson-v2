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
  const inputRef = useRef(null);

  const fetchData = async () => {
    try {
      const apiUrl = `http://localhost:8000/pipeline/beneficiarios/`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const options = data.map(b =>({
        value: b.id,
        label: b.razao_social,
        cpf_cnpj: b.cpf_cnpj
      }))
      setOptsBeneficiario(options)
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  useEffect(() => {
    if (show) {
      fetchData()
      inputRef.current.focus();
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
        {fieldkey == 'card' &&(
          <Form.Control
            type='text'
            rows={2}
            className="mb-2 w-50 fs-xs py-0 px-1 ms-2 shadow-none outline-none"
            ref={inputRef}
            onChange={({ target }) =>
              setFormData({ ...formData, card: target.value })
            }
            value={data}
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
          {fieldkey == 'beneficiario' &&(
            <Select options={optsBeneficiario} ref={inputRef} isMulti={true} 
            onChange={(selectedOptions ) => {
              console.log(selectedOptions)
              const selected = selectedOptions.map(s => ({
                id: s.value,
                razao_social: s.label,
                cpf_cnpj: s.cpf_cnpj
              }))
              setFormData((prevFormData) => ({
                ...prevFormData,
                beneficiario: selected
              }));
            }
          }/>
          )}
            <Row className="gx-2 w-50 ms-2">
            <Button
              variant="primary"
              size="sm"
              className="col w-30 fs-xs p-0 me-1"
              type="submit"
            >
              Add
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
              Cancel
            </Button>
          </Row>  
        </Form>
      </div>   
    )}
    </>
  );
};

export default EditForm;
