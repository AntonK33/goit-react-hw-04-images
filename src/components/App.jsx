import { useState, useEffect } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { AppWrapper } from './App.Styled';
import fetchRequest from 'components/Api/API_request';
import Button from 'components/Button/Button';
import Loader from './Loader/Loader';
import { Notification } from './App.Styled';

const App = () => {
  const [hits, setHits] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState('idle');

  const [name, setName] = useState('');

  useEffect(() => {
    if (!name) {
      return;
    }
    setStatus('pending');

    fetchRequest(name, page)
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
  }, [name, page]);

  const loadMorePage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const newSearch = name => {
    setName(name);
    setHits([]);
  };

  // const { hits } = this.state;
  return (
    <AppWrapper>
      {<Searchbar onSubmit={newSearch} />}
      {<ImageGallery hits={hits} inputName={name} />}
      {status === 'pending' && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Loader></Loader>
        </div>
      )}
      {status === 'rejected' && (
        <Notification>Oopps...no images with this name</Notification>
      )}
      {total > hits.length && status === 'resolved' && (
        <Button onClick={loadMorePage} />
      )}
    </AppWrapper>
  );
};

export default App;
