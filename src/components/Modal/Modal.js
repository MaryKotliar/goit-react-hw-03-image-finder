import { Overlay, ModalImage } from './Modal.styled';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      console.log('Нажали ESC, нужно закрыть модалку');

      this.props.closeModal();
    }
  };

  handleBackdropCloseModal = event => {
    if (event.currentTarget === event.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImage } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropCloseModal}>
        <ModalImage>
          <img src={largeImage} alt="" />
        </ModalImage>
      </Overlay>,
      modalRoot
    );
  }
}
