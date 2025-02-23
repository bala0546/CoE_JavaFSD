// Submit user review
function submitReview() {
    const reviewInput = document.getElementById("review-input");
    const reviewText = reviewInput.value.trim();

    if (reviewText === "") {
        alert("Please write a review before submitting.");
        return;
    }

    const reviewsList = document.getElementById("reviews-list");
    const reviewElement = document.createElement("p");
    reviewElement.textContent = reviewText;
    reviewsList.appendChild(reviewElement);

    reviewInput.value = ""; // Clear input after submission
}
