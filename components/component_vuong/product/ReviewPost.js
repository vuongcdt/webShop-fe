import React, { useState } from "react";
import { useSelector } from "react-redux";
import { fetchApiPostReviewProduct } from "../../../src/api/Api_vuong/fetchApi";
import RatingChange from "../../Product/RatingChange";
import { convertObjectToParams } from "../Common";

function ReviewPost({ id, listReviews, setListReviews }) {
   const [isPostReviews, setIsPostReviews] = useState(false);
   const [require, setRequire] = useState({ rating: 1, review: 1, reviewer: 1, reviewer_email: 1 });
   const userSelector = useSelector((state) => state.auth.user);

   const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
         product_id: id,
         review: e.target[3].value.trim(),
         rating: e.target[0].value.trim(),
         reviewer: e.target[1].value.trim() || userSelector.username,
         reviewer_email: e.target[2].value.trim() || userSelector.email,
      };
      const url = convertObjectToParams(data);
      const listForm = [...e.target];
      setRequire(data);
      if (!validateEmail(data.reviewer_email) && data.reviewer_email) {
         data.emailValidate = "Email invalidate";
      }
      if (!Object.values(data).includes(null || "") && validateEmail(data.reviewer_email)) {
         setIsPostReviews(true);
         const res = await fetchApiPostReviewProduct(url, id);
         if (res[0]) {
            setListReviews([res[0], ...listReviews]);
            let element = document.getElementsByClassName("customer-section");
            element.length > 0 && [...element][0].classList.add("bg-light");
            setTimeout(() => [...element][0].classList.remove("bg-light"), 300);
            listForm.map((item) => (item.value = ""));
         }
         setIsPostReviews(false);
      }
   };
   return (
      <div className="col-lg-8">
         <div className="review-box">
            <form className="row g-4" onSubmit={(e) => handleSubmit(e)}>
               <div className="d-inline-block me-2">
                  Rating <RatingChange disabled={isPostReviews} />
                  <p hidden={require.rating} className=" text-danger">
                     Please select a rating.
                  </p>
               </div>

               <div className="col-12 col-md-6">
                  <label className="mb-1" htmlFor="name">
                     Name
                  </label>
                  <input
                     type="text"
                     disabled={isPostReviews || userSelector.username}
                     className="form-control"
                     id="name"
                     placeholder={userSelector.username || "Enter your name"}
                  />
                  <p hidden={require.reviewer} className=" text-danger">
                     Name cannot be empty.
                  </p>
               </div>

               <div className="col-12 col-md-6">
                  <label className="mb-1" htmlFor="id">
                     Email Address
                  </label>
                  <input
                     type="email"
                     disabled={isPostReviews || userSelector.email}
                     className="form-control"
                     id="email"
                     placeholder={userSelector.email || "Email Address"}
                  />
                  <p hidden={require.reviewer_email} className=" text-danger">
                     Email cannot be empty.
                  </p>
                  <p hidden={!require.emailValidate} className=" text-danger">
                     {require.emailValidate}
                  </p>
               </div>

               <div className="col-12">
                  <label className="mb-1" htmlFor="comments">
                     Comments
                  </label>
                  <textarea
                     disabled={isPostReviews}
                     className="form-control"
                     placeholder="Leave a comment here"
                     id="comments"
                     style={{ height: 100 }}
                  ></textarea>
                  <p hidden={require.review} className=" text-danger">
                     Content cannot be empty.
                  </p>
               </div>

               <div className="col-12">
                  <button type="submit" disabled={isPostReviews} className="btn default-light-theme default-theme default-theme-2">
                     {isPostReviews && (
                        <div className="spinner-border m-0 p-0" style={{ width: "20px", height: "20px" }} role="status">
                           <span className="sr-only">Loading...</span>
                        </div>
                     )}{" "}
                     Submit
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
}

export default ReviewPost;

const validateEmail = (email) => {
   return String(email)
      .toLowerCase()
      .match(
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};
