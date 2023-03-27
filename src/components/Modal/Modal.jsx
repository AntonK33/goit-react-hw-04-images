import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Overlay, ModalStyle } from './Modal.Styled';
import { createPortal } from 'react-dom';
const modalRoot = document.querySelector('#modal-root');

const Modal = ({ articles, onClose }) => {
  const handleKeydown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeydown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeydown);
  // }

  const handleBackdrop = e => {
    if (e.currentTarget !== e.target) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdrop}>
      <ModalStyle>
        <img src={articles.largeImageURL} alt={articles.tags} />
      </ModalStyle>
    </Overlay>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  option: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};
