import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery ({ images, onImageClick }) {
    if (!images || images.length === 0) {
        return null;
    }

    return (
        <ul>
            {images.map((image) => (
                <li key={image.id}>
                    <ImageCard 
                        src={image.src} 
                        alt={image.alt} 
                        onClick={() => onImageClick(image)} 
                    />
                </li>
            ))}
        </ul>
    );
}