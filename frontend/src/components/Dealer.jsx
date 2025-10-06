import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Loading from "./common/loading";
import Error from "./common/error";

function Dealer() {

    const { id } = useParams();

    const { user } = useAuth();

    const navigate = useNavigate();

    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [dealer, setDealer] = useState({});
    const [reviews, setReviews] = useState([]);
    const [reviewsCount, setReviewsCount] = useState(0);

    const sentiment_icon = {
        "positive": <span className="material-symbols-outlined text-green-500 text-3xl mr-4">sentiment_very_satisfied</span>,
        "neutral": <span className="material-symbols-outlined text-yellow-500 text-3xl mr-4">sentiment_neutral</span>,
        "negative": <span className="material-symbols-outlined text-green-500 text-3xl mr-4">sentiment_very_satisfied</span>
    }

    useEffect(() => {
        try {
            Promise.all([fetchDealer(), fetchReviews()])
                .then(() => setIsLoading(false));
        } catch (error) {
            setError(error);
            console.log(error);
        }
    }, []);

    const fetchDealer = async () => {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/get_dealer_details/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (response.status === 200) {
            setDealer(data.dealership);
            setError(null);
        } else {
            setError(data.error);
        }

    };

    const fetchReviews = async () => {
        setIsLoading(true);
        const response = await fetch("http://localhost:8000/get_dealer_reviews/" + id, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await response.json();

        if (response.status === 200) {
            setReviews(data.reviews);
            setReviewsCount(data.reviews.length);
            setError(null);
        } else {
            setError(data.error);
        }
    };

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : error ? (
                <Error error={error} />
            ) : (
                <main className="flex-1">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{dealer.full_name}</h1>
                                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Explore the details and reviews for this dealership.</p>
                            </div>
                            <div className="mb-8 space-y-2 text-gray-600 dark:text-gray-400">
                                <div className="flex items-center">
                                    <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                    <p className="ml-2 text-base text-gray-700 dark:text-gray-300"><span className="text-gray-500 dark:text-gray-400">({reviewsCount})</span></p>
                                </div>
                                <p>{dealer.address}</p>
                            </div>
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Customer Reviews</h2>
                                {
                                    user && <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                                        onClick={() => navigate('/postreview/' + id)}>
                                        Create a Review
                                    </button>
                                }
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {
                                    reviews.map((review, index) => {
                                        return (
                                            <div key={index} className="bg-background-light dark:bg-background-dark/50 rounded-xl p-6 shadow-md border border-primary/10 dark:border-primary/20">
                                                <div className="flex items-start">
                                                    {sentiment_icon[review.sentiment]}
                                                    <div className="flex-1">
                                                        <p className="text-gray-600 dark:text-gray-400">{review.review}</p>
                                                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">{review.name} - {review.car_make} {review.car_model} {review.car_year}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </main>
            )}
        </>
    )
}

export default Dealer