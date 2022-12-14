import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
export class GalleryItemContent extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };
  state = {
    isOpen: false,
  };
  showModal = () => {
    this.setState({ isOpen: true });
  };
  closeModal = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { image, largeImage, tags } = this.props;

    return (
      <>
        <img onClick={this.showModal} src={image} alt={tags} />
        {this.state.isOpen && (
          <Modal
            closeModal={this.closeModal}
            largeImage={largeImage}
            tags={tags}
          ></Modal>
        )}
      </>
    );
  }
}
