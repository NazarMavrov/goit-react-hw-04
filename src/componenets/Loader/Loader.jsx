import ClipLoader from 'react-spinners/ClipLoader';

const override = {
    display: 'block',
    margin: '0 auto',
    borderColor: 'red',
};

export default function Loader({ loading }) {
    return (
        <div className="loader">
            <ClipLoader
                color="#4fa94d"
                loading={loading}
                cssOverride={override}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>
    );
}
