import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


export default function SearchBar({ onSubmit }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') {
            toast.error('Please enter a text to search for images.');
            return;
        }
        onSubmit(inputValue);
        setInputValue('');
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
            <Toaster />
        </header>
    );
}


