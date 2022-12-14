import { GlobalStyle } from './GlobalStyles';
import { Searchbar } from './Searchbar/Searchbar';
import { Component } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from 'api';
import { Button } from './Button/Button';
import { Layout } from './Layout';
import { ImageSkeleton } from './Skeleton/Skeleton';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    searchName: '',
    images: [],
    currentPage: 1,
    error: null,
    isLoading: false,
    totalPages: null,
  };
  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.showImages();
    }
  }

  handleSubmit = searchName => {
    this.setState({
      searchName: searchName,
      images: [],
      currentPage: 1,
    });
  };
  showImages = async () => {
    try {
      const { currentPage, searchName } = this.state;
      this.setState({ isLoading: true, error: null });
      const { images, totalPages } = await fetchImages({
        searchName,
        currentPage,
      });

      this.setState(prevState => ({
        images: [...prevState.images, ...images],
      }));
      this.setState({
        totalPages,
      });
      if (images.length < 1) {
        toast.error('Sorry, we didn`t find images according to your request.');
      }
    } catch {
      this.setState({
        error: toast.error("This didn't work.Please try again later !"),
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const { images, isLoading, currentPage, totalPages } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.handleSubmit} />
        {images.length > 0 && <ImageGallery images={images} />}
        {isLoading && <ImageSkeleton />}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore} />
        )}

        <GlobalStyle />
        <Toaster position="top-right" />
      </Layout>
    );
  }
}
