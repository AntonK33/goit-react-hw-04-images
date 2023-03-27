import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, ItemImage } from './ImageGalleryItem.Styled';

const ImageGalleryItem = ({ articles }) => {
  const [modalShow, setModalShow] = useState(false);
  // state = {
  //   modalShow: false,
  // };
  const toggleModal = () => {
    setModalShow(prevState => !prevState);
  };

  return (
    <GalleryItem onClick={toggleModal}>
      <ItemImage src={articles.webformatURL} alt={articles.tags} />
      {modalShow && <Modal articles={articles} onClose={toggleModal} />}
    </GalleryItem>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  articles: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
  }),
};
