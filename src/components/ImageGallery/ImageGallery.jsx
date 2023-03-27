import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryItemList, Notification } from './ImageGallery.Styled';
import fetchRequest from 'components/Api/API_request';
import Button from 'components/Button/Button';
import Loader from '../Loader/Loader';

const ImageGallery = ({ inputName }) => {
  const [hits, setHits] = useState([]);

  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');
  // state = {
  //   hits: null,
  //   error: null,
  //   total: 0,
  //   page: 1,
  //   status: 'idle',
  // };

  useEffect(() => {
    if (!inputName) {
      return;
    }
    setStatus('pending');
    // setPage(1);
    fetchRequest(inputName, page)
      .then(response => {
        if (response.hits.length === 0) {
          setStatus('rejected');
          return;
        }
        setHits(hits => (hits = [...hits, ...response.hits]));
        setTotal(response.total);
        setStatus('resolved');
      })
      .catch(error => {
        console.log(error);
        setStatus('rejected');
      });
  }, [inputName, page]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.inputName !== this.props.inputName) {
  //     this.setState({ status: 'pending', page: 1 });

  //     fetchRequest(this.props.inputName, this.state.page)
  //       .then(response => {
  //         if (response.hits.length === 0) {
  //           this.setState({ status: 'rejected' });
  //           return;
  //         }
  //         this.setState({
  //           hits: [...response.hits],
  //           total: response.total,
  //           status: 'resolved',
  //         });
  //       })

  //       .catch(error => this.setState({ error, status: 'rejected' }));
  //   }
  // }
  const loadMorePage = () => {
    //const newPage = page + 1;
    setPage(prevPage => prevPage + 1);
    // fetchRequest(inputName, setPage)
    //   .then(response => {
    //     setHits([...hits, ...response.hits]);
    //     setTotal(response.total);
    //     setStatus('resolved');
    //   })

    //   .catch(error => {
    //     setError(error);
    //     setStatus('rejected');
    //   });
  };

  if (status === 'idle') {
    return <Notification>Please, type something to the search</Notification>;
  }

  if (status === 'pending') {
    return <Loader />;
  }

  if (status === 'rejected') {
    return <Notification>Oopps...no images with this name</Notification>;
  }
  if (status === 'resolved') {
    return (
      <div>
        <GalleryItemList>
          {hits.map(articles => (
            <ImageGalleryItem key={articles.id} articles={articles} />
          ))}
        </GalleryItemList>
        {total > hits.length && <Button onClick={loadMorePage} />}
      </div>
    );
  }
};

export default ImageGallery;

ImageGallery.propTypes = {
  inputName: PropTypes.string.isRequired,
  // articles: PropTypes.shape({
  //   id: PropTypes.string.isRequired,
  // }),
};
