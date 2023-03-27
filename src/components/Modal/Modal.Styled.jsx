import styled from 'styled-components';

export const Overlay = styled.div`
   {
    position: fixed;
    height: 100vh;
    width: 100vw;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1200;
  }
`;
export const ModalStyle = styled.div`
   {
    top: 50%;
    left: 50%;
    min-height: 350px;
    max-width: 600px;
    width: 100%;
    background: grey;
    // max-width: calc(100vw - 148px);
    // max-height: calc(100vh - 124px);
  }
`;
