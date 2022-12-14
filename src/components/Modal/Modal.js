import PropTypes from 'prop-types';
import { Overlay, ModalImage } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static propTypes = {
    largeImage: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  };
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropCloseModal = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImage, tags } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropCloseModal}>
        <ModalImage>
          <img src={largeImage} alt={tags} />
        </ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}
