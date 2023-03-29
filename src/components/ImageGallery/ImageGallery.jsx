//import { useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryItemList } from './ImageGallery.Styled';
import React from 'react';

const ImageGallery = ({ inputName, hits }) => {
  return (
    <div>
      <GalleryItemList>
        {hits.map(articles => (
          <ImageGalleryItem key={articles.id} articles={articles} />
        ))}
      </GalleryItemList>
    </div>
  );
  //}
};

export default ImageGallery;

ImageGallery.propTypes = {
  inputName: PropTypes.string.isRequired,
};
