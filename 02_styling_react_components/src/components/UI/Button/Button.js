import styled from 'styled-components';

import './Button.css';

const Button = styled.button`
    width: 100%;
    font: inherit;
    padding: 0.5rem 1.5rem;
    border: 1px solid navy;
    color: white;
    background: navy;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
    cursor: pointer;

  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: MediumBlue;
    border-color: MidnightBlue;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
  `;

// const Button = props => {
//   return (
//     <button type={props.type} className="button" onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

export default Button;
