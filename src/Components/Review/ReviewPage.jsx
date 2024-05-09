import React, { useState } from "react";
import "./ReviewPage.css";
// import imageCompression from "browser-image-compression";

function ReviewPage() {
    // State to hold reviews
    const [reviews, setReviews] = useState([]);

    // State for the review form
    const [form, setForm] = useState({
        name: "",
        rating:"",
        comment: "",
        photo: null, // State for the photo file
    });

    // Compression options
    const compressionOptions = {
        maxSizeMB: 1, // Maximum file size in MB (adjust as needed)
        maxWidthOrHeight: 800, // Maximum width or height (adjust as needed)
        useWebWorker: true, // Use web worker for better performance
    };

    // Handler to submit the form
    const handleSubmit = (event) => {
        event.preventDefault();

        // Add new review to the list
        setReviews([...reviews, form]);

        // Reset form fields
        setForm({
            name: "",
            rating:"",
            comment: "",
            photo: null,
        });
    };

    // Async handler to update form fields
    const handleChange = async (event) => {
        const { name, value, files } = event.target;

        if (name === "photo" && files.length > 0) {
            try {
                // const compressedFile = await imageCompression(files[0], compressionOptions);
                // Update form state with compressed photo
                setForm({ ...form, photo: compressedFile });
            } catch (error) {
                console.error("Error compressing the image:", error);
            }
        } else {
  
            setForm({ ...form, [name]: value });
        }
    };

    return (
        <div className="review-page">
            <h1>Write your review</h1>
            <p>
                Customer delight is our focus at OptiLook. To ensure we are always listening to you and improving with your feedback, we have our own platform where customers can share their reviews with us.
            </p>
            <form onSubmit={handleSubmit} className="review-form">
                <div>
                    <label htmlFor="name">Enter your name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="rating">Rate us:</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        min="1"
                        max="5"
                        value={form.rating}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="comment">Write your review here:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={form.comment}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="photo">Upload a photo of the product:</label>
                    <input
                        type="file"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit Review</button>
            </form>

            <div className="reviews-list">
                <h2>Reviews:</h2>
                {reviews.length === 0 ? (
                    <p>No reviews yet.</p>
                ) : 
                  (
                    reviews.map((review, index) => (
                        <div key={index} className="review">
                            <div className="review-content">
                                <p><strong>Name:</strong> {review.name}</p>
                                <p><strong>Rating:</strong> {review.rating}</p>
                                <p><strong>Comment:</strong> {review.comment}</p>
                            </div>
                            {review.photo && (
                                <div
                                className="review-photo-container"
                                style={{
                                    backgroundImage: `url(${URL.createObjectURL(review.photo)})`,
                                }}
                            ></div>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default ReviewPage;
