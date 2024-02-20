import classNames from 'classnames';
import AsyncSelect from 'react-select/async';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';

const EditForm = ({
  onSubmit: handleSubmit,
  type,
  fieldkey,
  show,
  setShow,
  data
}) => {
  const [formData, setFormData] = useState({});
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
      return options
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const fetchDetalhamento = async () => {
    try {
      const apiUrl = `http://localhost:8000/pipeline/detalhamentos/`;
      const response = await fetch(apiUrl);
      const dataapi = await response.json();
      const options = dataapi.map(d =>({
        value: d.id,
        label: d.detalhamento_servico,
        produto: d.produto
      }))
      return options
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const fetchInstituicao = async () => {
    try {
      const apiUrl = `http://localhost:8000/pipeline/instituicoes/`;
      const response = await fetch(apiUrl);
      const dataapi = await response.json();
      const options = dataapi.map(d =>({
        value: d.id,
        label: d.razao_social,
        identificacao: d.identificacao
      }))
      return options
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  const fetchContrato = async () => {
    try {
      const apiUrl = `http://localhost:8000/pipeline/contratos/`;
      const response = await fetch(apiUrl);
      const dataapi = await response.json();
      const options = dataapi.map(d =>({
        value: d.id,
        label: d.contratante,
        produto: d.produto
      }))
      return options
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
    }
  };

  useEffect(() => {
    if (show) {
      if (fieldkey === 'card'){
        inputRef.current.focus();         
      }
      let sel;
      switch(fieldkey){
        case 'beneficiario':
          const ids = data.map(b => ({value: b.id, label: b.razao_social, cpf_cnpj: b.cpf_cnpj}));
          setdefaultSelected({...defaultselected, 'beneficiario':ids})
          break
        case 'detalhamento':
          sel = {value: data.id, label: data.detalhamento_servico, produto: data.produto};
          setdefaultSelected({...defaultselected, 'detalhamento':sel})
          break
        case 'instituicao':
          sel = {value: data.id, label: data.razao_social, identificacao: data.identificacao};
          setdefaultSelected({...defaultselected, 'instituicao':sel})
          break
        case 'contrato':
          sel = {value: data.id, label: data.contratante, produto: data.produto};
          setdefaultSelected({...defaultselected, 'contrato':sel})
          break
        default:
          setdefaultSelected({...defaultselected})
      }
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
          {fieldkey === 'data' &&(
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
          {fieldkey === 'beneficiario' &&( defaultselected &&
            <AsyncSelect ref={inputRef} isMulti={true} defaultValue={defaultselected['beneficiario']} loadOptions={fetchData}
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
          {fieldkey === 'detalhamento' &&( defaultselected &&
            <AsyncSelect ref={inputRef} isMulti={false} defaultValue={defaultselected['detalhamento']} loadOptions={fetchDetalhamento}
            onChange={(selectedOptions ) => {
              const selected = {
                id: selectedOptions.value,
                detalhamento_servico: selectedOptions.label,
                produto: selectedOptions.produto
              }
              setFormData((prevFormData) => ({
                ...prevFormData,
                detalhamento: selected
              }));
            }
            } className='mb-1'/>
          )}
          {fieldkey === 'instituicao' &&( defaultselected &&
            <AsyncSelect ref={inputRef} isMulti={false} defaultValue={defaultselected['instituicao']} loadOptions={fetchInstituicao}
            onChange={(selectedOptions ) => {
              const selected = {
                id: selectedOptions.value,
                identificacao: selectedOptions.identificacao,
                razao_social: selectedOptions.label
              }
              setFormData((prevFormData) => ({
                ...prevFormData,
                instituicao: selected
              }));
            }
            } className='mb-1'/>
          )}
          {fieldkey === 'contrato' &&( defaultselected &&
            <AsyncSelect ref={inputRef} isMulti={false} defaultValue={defaultselected['contrato']} loadOptions={fetchContrato}
            onChange={(selectedOptions ) => {
              const selected = {
                id: selectedOptions.value,
                produto: selectedOptions.produto,
                contratante: selectedOptions.label
              }
              setFormData((prevFormData) => ({
                ...prevFormData,
                contrato: selected
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
