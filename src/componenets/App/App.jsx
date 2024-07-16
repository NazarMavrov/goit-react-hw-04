import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'; // Замініть це на ваш реальний Access Key

export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleSearchSubmit = async (searchQuery) => {
        setQuery(searchQuery);
        setPage(1);
        setImages([]);
        await fetchImages(searchQuery, 1);
    };

    const fetchImages = async (searchQuery, page) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`https://api.unsplash.com/search/photos?query=${searchQuery}&page=${page}&client_id=${ACCESS_KEY}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (data.results.length === 0) {
                setError('No images found. Please try a different search term.');
            } else {
                setImages(prevImages => [...prevImages, ...data.results.map(img => ({
                    id: img.id,
                    src: img.urls.small,
                    alt: img.description || 'Image'
                }))]);
            }
        } catch (error) {
            setError('Failed to fetch images. Please try again later.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLoadMore = async () => {
        const nextPage = page + 1;
        setPage(nextPage);
        await fetchImages(query, nextPage);
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSearchSubmit} />
            {error ? (
                <ErrorMessage message={error} />
            ) : (
                <>
                    <ImageGallery images={images} onImageClick={openModal} />
                    {images.length > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
                </>
            )}
            {isLoading && <Loader loading={isLoading} />}
            {selectedImage && (
                <ImageModal
                    isOpen={isModalOpen}
                    onRequestClose={closeModal}
                    image={selectedImage}
                />
            )}
        </div>
    );
}
