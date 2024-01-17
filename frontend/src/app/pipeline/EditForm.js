import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';

const EditForm = ({
  onSubmit: handleSubmit,
  type,
  showForm,
  setShowForm
}) => {
  const [formData, setFormData] = useState({});
  const inputRef = useRef(null);

  useEffect(() => {
    if (showForm) {
      inputRef.current.focus();
    }
  }, [showForm]);

  switch(type){
    
  }

  return (
    <>
      {showForm && (
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
            <Form.Control
              type='date'
              rows={2}
              className="mb-2"
              ref={inputRef}
              onChange={({ target }) =>
                setFormData({ ...formData, venc: target.value })
              }
              placeholder={
                type === 'list'
                  ? 'Prazo de vencimento...'
                  : 'Prazo de vencimento...'
              }
            />
            <Row className="gx-2">
              <Col>
                <Button
                  variant="primary"
                  size="sm"
                  className="d-block w-100"
                  type="submit"
                >
                  Add
                </Button>
              </Col>
              <Col>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="d-block w-100 border-400"
                  type="button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      )}
    </>
  );
};

EditForm.propTypes = {
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  showForm: PropTypes.bool,
  setShowForm: PropTypes.func
};

export default EditForm;
