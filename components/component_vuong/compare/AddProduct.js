import React from "react";

function AddProduct({ bottom }) {
   const handleOpenModal = () => {
      const elementCompareBottom = document.getElementById("compare-bottom");
      $(".open-input-search-modal").click();
      elementCompareBottom && elementCompareBottom.setAttribute("hidden", true);
   };

   return bottom ? (
      <div className="compare-button-card">
         <div className="d-flex justify-content-center ">
            <div type="button" className="btn rounded-pill px-3  border position-absolute top-50" onClick={() => handleOpenModal()}>
               <i className="fas fa-solid fa-plus  fs-5"></i>
            </div>
         </div>
      </div>
   ) : (
      <div style={{ minHeight: "300px" }} className="position-relative">
         <div className="d-flex justify-content-center ">
            <button type="button" className="btn btn-primary  position-absolute top-50" onClick={() => handleOpenModal()}>
               Add Product
            </button>
         </div>
      </div>
   );
}

export default AddProduct;
