import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery ({ images, onImageClick }) {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <ul>
        {images.map(image => (
            <li key={image.id} onClick={() => onImageClick(image)}>
                <div>
                    <img src={image.src} alt={image.alt} />
                </div>
            </li>
        ))}
    </ul>
    );
}