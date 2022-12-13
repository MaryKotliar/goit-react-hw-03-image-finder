import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';
export class GalleryItemContent extends Component {
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
    const { image, largeImage } = this.props;

    return (
      <>
        <img onClick={this.showModal} src={image} alt="" />
        {this.state.isOpen && (
          <Modal closeModal={this.closeModal} largeImage={largeImage}></Modal>
        )}
      </>
    );
  }
}
GalleryItemContent.propTypes = {
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,

  closeModal: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};
