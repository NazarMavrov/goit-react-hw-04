import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css'

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
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit} >
                <input
                    className={css.input}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.button} type="submit">Search</button>
            </form>
            <Toaster />
        </header>
    );
}


