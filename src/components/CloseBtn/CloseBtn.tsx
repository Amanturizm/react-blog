import React from 'react';
import { Link } from "react-router-dom";

interface Props {
  to: string;
}

const CloseBtn: React.FC<Props> = ({ to }) => {
  return (
    <Link
      to={to}
      style={{ width: 30, height: 30, fontSize: '3rem', overflow: 'clip' }}
      className="
      btn
      position-absolute top-0 end-0
      m-3 p-0
      d-flex justify-content-center align-items-center"
    >
      ×
    </Link>
  );
};

export default CloseBtn;