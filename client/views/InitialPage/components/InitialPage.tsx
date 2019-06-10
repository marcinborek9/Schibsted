import * as React from 'react';

import {SearchImages} from './SearchImages';
import {InitialPageWrapper} from './styled/InitialPageWrapper';

export class InitialPage extends React.PureComponent {
  render() {
    return(
      <InitialPageWrapper>
        <SearchImages/>
      </InitialPageWrapper>
    )
  }
}
