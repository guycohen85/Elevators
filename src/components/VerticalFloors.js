import React from 'react';
import { FloorsColumn } from './Styled';

function VerticalFloors({ children }) {
  return <FloorsColumn>{[children]}</FloorsColumn>;
}

export default VerticalFloors;
