import React from "react";

function Liked() {
  const { likedImages } = JSON.parse(localStorage.getItem("unsplashData"));
  console.log(likedImages);
  return (
    <div>
      <h1>What you liked:</h1>
      <hr />
      <ul>
        {likedImages &&
          likedImages.map((likedImage) => {
            return (
              <li key={likedImage.id}>
                <img
                  className="likedImages"
                  src={likedImage.urls.regular}
                  alt={likedImage.alt_description}
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Liked;
