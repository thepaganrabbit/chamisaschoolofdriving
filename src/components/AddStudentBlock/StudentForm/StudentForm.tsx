import React from 'react';
import ShortUniqueId from 'short-unique-id';
import DatePicker from 'react-date-picker';

import './StudentForm.scss';
import ToolTip from '../../ToolTip/ToolTip';
import { Value } from '../../../types';
import { _calculateAge } from '../../../utils';

const StudentForm = (): React.ReactElement => {
  const [id, setId] = React.useState<string>('');
  const [dob, setDob] = React.useState<Value>(new Date());
  const [age, setAge] = React.useState<number>(0);
  React.useEffect(() => {
    const uid = new ShortUniqueId({ length: 8 });
    setId(String(uid.rnd()));
  }, []);
  return (
    <form>
      <h2>Students Info:</h2>
      <div className="cs-block">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Students Name
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Students DOB
          </span>
          <DatePicker onChange={(date: Value) => {
            const age = _calculateAge(date as Date);
            setAge(age);
            setDob(date);
          }} value={dob} />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Students Age
          </span>
          <input
            type="number"
            value={age}
            disabled
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <select
          className="form-select form-select-sm"
          aria-label="Default select example"
        >
          <option selected disabled>
            Select Location
          </option>
          <option value="Santa Fe">Santa Fe</option>
          <option value="Espanola">Espanola</option>
        </select>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Students ID
          </span>
          <h5 style={{ marginLeft: '1rem' }}>{id}</h5>
        </div>
      </div>
      <h2>Contact Info:</h2>
      <div className="cs-block">
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Students Mobile Phone:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Parents/Guardians Phone:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            Address:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
          <ToolTip>
            Example: <br /> Street, City, State, Zipcode
          </ToolTip>
        </div>
        <div className="input-group input-group-sm mb-3">
          <span className="input-group-text" id="inputGroup-sizing-sm">
            email:
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
      </div>
      <div className="checkboxes">
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Is Adult
          </label>
        </div>
      </div>
      <h2 style={{ marginBottom: '1rem', marginTop: '1rem' }}>Action</h2>
      <div className="payments-block">
        <div>
          <button
            className="btn btn-warning"
            style={{
              marginTop: '1rem',
            }}
          >
            Pay With Card
          </button>
        </div>
        <div className="paid-by">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Paid with check
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Paid with Money Order
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Paid with cash
            </label>
          </div>
        </div>
        <div className="two-fer">
          <h2>Balance</h2>
          <div className="input-group mb-3">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              aria-label="Amount (to the nearest dollar)"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default StudentForm;
