/*

 React Spinners: https://github.com/davidhu2000/react-spinners
 These react Spinners are using emotion library: https://github.com/emotion-js/emotion

 */

import React from 'react';
import { css } from '@emotion/react';
import CircleLoader from 'react-spinners/CircleLoader';

// color for Spinner
const color = '#6CC57C';

const override = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  margin: auto;
`;

const Spinner = (props) => {
  return (
    <CircleLoader
      color={color}
      loading={props.loading}
      size={100}
      css={override}
    />
  );
};

export default Spinner;
