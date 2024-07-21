import Modal from 'react-modal';
import css from './ImageModal.module.css'

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    padding: 0,
    border: "none",
    background: "black",
  },
};

export default function ImageModal({ isOpen, onRequestClose, image }) {
    return (
        <Modal
            className={css.modal}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
        >
            <div>
                <img className={css.imageModal} src={image.src} alt={image.alt} />
            </div>
        </Modal>
    );
}
