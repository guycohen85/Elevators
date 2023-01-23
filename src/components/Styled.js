import styled from '@emotion/styled';

export const Row = styled.div`
  display: flex;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  // align-items: center;
  margin: ${({ margin }) => (margin ? margin : '0')};
  & > * {
    flex-grow: ${({ grow }) => (grow ? grow : 'initial')};
  }
`;
export const FloorsColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  position: relative;
  &:last-child:not(:last-child) > .elevator-floor {
    border-right: 2px solid #eee;
  }
`;
export const FloorBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : 'center')};
  width: 120px;
  height: 60px;
  font-weight: bold;
  font-size: 14px;
  padding: 13px;
  box-sizing: border-box;
  &.elevator-floor {
    background: #fff;
    border-top: 2px solid #eee;
    border-left: 2px solid #eee;
    &:first-of-type:not(:last-child) {
      border-bottom: 2px solid #eee;
    }
  }
`;
