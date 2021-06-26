import React from 'react';

const validationModal = ({
  firstName,
  lastName,
  points,
  handleCancel,
  validate,
}) => {
  return (
    <div id="myModallogin" className="modalValidation">
      <div className="modal-content" style={{ height: '200px' }}>
        <div className="modal-body">
          <span className="close" onClick={handleCancel}>
            &times;
          </span>
          {!validate ? (
            <form className="" action="" method="">
              Validate points for{' '}
              <span className="user-value">
                {firstName} {lastName}
              </span>
              ? This person has <span className="user-value">{points}</span>{' '}
              points.
              <br />
              <br />
              <br />
              <div className="form-group">
                <input
                  className="btn-green-gradient"
                  type="submit"
                  name=""
                  value="Validate points"
                />
              </div>
            </form>
          ) : (
            <div className="user-value">
              {firstName} {lastName} has all points validated. :){' '}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default validationModal;
