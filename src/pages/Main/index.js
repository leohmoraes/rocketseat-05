import React from 'react';

import { Title } from "./styles";

export default function Main() {
  return (
    <Title error={false} active>
      Main
      <small>menor</small>
    </Title>
  );
}
