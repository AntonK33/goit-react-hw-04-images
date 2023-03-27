import { useState } from 'react';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import { AppWrapper } from './App.Styled';

const App = () => {
  const [name, setName] = useState('');
  // state = {
  //   name: '',
  // };
  const newSearch = name => {
    setName(name);
  };

  // const { hits } = this.state;
  return (
    <AppWrapper>
      {<Searchbar onSubmit={newSearch} />}
      {<ImageGallery inputName={name} />}
    </AppWrapper>
  );
};

export default App;
