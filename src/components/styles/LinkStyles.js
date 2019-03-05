import styled from 'styled-components'

const LinkStyles = styled.span`
  display: inline-block;
  position: relative;
  padding-top: 10px;
  margin: 5px 0 10px;
  text-transform: titlecase;
  color: ${({ theme }) => theme.black};
  transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
  &:hover {
    color: ${({ theme }) => theme.black};
  }
  &:before {
    left: 0;
    top: 0;
    content: '';
    display: block;
    width: 30%;
    height: 3px;
    background: ${({ theme }) => theme.rust};
    ${({ theme }) => theme.barTransition};
    position: absolute;
  }
  &:hover {
    &:before {
      width: 60%;
    }
  }
`
export default LinkStyles
