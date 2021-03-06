import React from 'react';
import { localization } from '../../lib/localization';
import './new-concept-button.scss';

export const NewConceptButton = ({ parentOnClick }): JSX.Element | null => (
  <div className="row">
    <button
      type="button"
      aria-haspopup="true"
      aria-expanded="false"
      className="fdk-button fdk-button-add-concept btn btn-primary mb-4"
      onClick={parentOnClick}
    >
      <svg className="fdk-icon-add mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
        <defs />
        <title>icon-add-cicle-sm</title>
        <g id="outline">
          <circle className="circle" cx="8" cy="8" r="7" />
          <path className="path" d="M11,7H9V5A1,1,0,0,0,7,5V7H5A1,1,0,0,0,5,9H7v2a1,1,0,0,0,2,0V9h2a1,1,0,0,0,0-2Z" />
        </g>
      </svg>
      {localization.addNewConcept}
    </button>
  </div>
);

export default NewConceptButton;
