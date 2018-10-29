import React from 'react';

import DefaultInput from '../../components/UI/DefaultInput'

const InputArea = props => (
  <DefaultInput
      placeholder="Place Name"
      value={props.placeName}
      onChangeText={props.onChangeText}
  />
);

export default InputArea;
