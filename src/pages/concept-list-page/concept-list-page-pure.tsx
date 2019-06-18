import React, { FunctionComponent } from 'react';
import _ from 'lodash';
import { getTranslateText } from '../../lib/translateText';
import { ConceptList } from './concept-list/concept-list.component';
import { ConceptTitle } from './concept-title/concept-title.component';

interface Props {
  concepts: object;
  publisher: object;
}

export const ConceptListPagePure = ({ concepts, publisher }: Props): JSX.Element => {
  return (
    <div className="container">
      <div className="row mb-2">
        <ConceptTitle title={getTranslateText(_.get(publisher, 'prefLabel'))} />
      </div>
      <div className="mb-2">
        <ConceptList items={_.get(concepts, 'concepts')} />
      </div>
    </div>
  );
};
