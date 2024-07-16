import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        border: 'none',
        borderRadius: '10px',
        padding: '20px',
        maxWidth: '90%',
        maxHeight: '90%',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};

export default function ImageModal({ isOpen, onRequestClose, image }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel="Image Modal"
            ariaHideApp={false}
        >
            <div className="image-modal">
                <img src={image.src} alt={image.alt} className="modal-image" />
            </div>
        </Modal>
    );
}
