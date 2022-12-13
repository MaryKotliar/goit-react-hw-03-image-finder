import PropTypes from 'prop-types';
import { Gallery, GalleryItem } from './ImageGallery.styled';
import { GalleryItemContent } from 'components/ImageGalleryItem/ImageGalleryItem';
export const ImageGallery = ({ images }) => {
  return (
    <>
      <Gallery id="gallery">
        {images.map(image => (
          <GalleryItem key={image.id}>
            <GalleryItemContent
              image={image.webformatURL}
              largeImage={image.largeImageURL}
            ></GalleryItemContent>
          </GalleryItem>
        ))}
      </Gallery>
    </>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  key: PropTypes.string.isRequired,
};
