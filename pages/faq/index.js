import { Fragment, useEffect } from "react";
import { useQuery } from "react-query";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { errorModal, functionJquery } from "../../components/component_vuong/Common";
import PlaceHolderFaqContent from "../../components/component_vuong/faq/PlaceHolderFaqContent";
import PlaceHolderFaqSidebar from "../../components/component_vuong/faq/PlaceHolderFaqSidebar";
import { fetchApiFaq } from "../../src/api/Api_vuong/fetchApi";

function Faq() {
   const { isLoading, data, error, isError, isFetching } = useQuery("faq", fetchApiFaq);
   useEffect(() => {
      functionJquery();
   }, [data]);
   useEffect(() => {
      errorModal(isError, error);
   }, [error, isError]);

   return (
      <>
         <Breadcrumb title={"How can we help you?"} />
         {/* FAQ Section Start */}
         <section className="faq-section mt-0">
            <div className="container">
               <div className="row g-lg-5 g-4">
                  <div className="col-md-4 zi-1">
                     <div className="faq-contain">
                        <div className="faq-image">
                           <img src="/images/inner-page/faq/guides.png" className="img-fluid blur-up lazyload" alt="" />
                        </div>
                        <h2>Guides</h2>
                        <h5>Guides related to buying products, latest trends, upcoming products.</h5>
                     </div>
                  </div>

                  <div className="col-md-4 zi-1">
                     <div className="faq-contain">
                        <div className="faq-image">
                           <img src="/images/inner-page/faq/faq.png" className="img-fluid blur-up lazyload" alt="" />
                        </div>
                        <h2>FAQ</h2>
                        <h5>Need some help with your order or gor a question that you need answered.</h5>
                     </div>
                  </div>

                  <div className="col-md-4 zi-1">
                     <div className="faq-contain">
                        <div className="faq-image">
                           <img src="/images/inner-page/faq/community.png" className="img-fluid blur-up lazyload" alt="" />
                        </div>
                        <h2>Community</h2>
                        <h5>Join our large community who will help you in any query.</h5>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         {/* FAQ Section End */}

         <section className="faq-details section-b-space">
            <div className="container">
               <div className="row g-4">
                  <div className="col-md-4">
                     <div className="faq-link-box">
                        <ul>
                           {isError || isFetching || isLoading ? (
                              <PlaceHolderFaqSidebar />
                           ) : (
                              data.map(({ question, answer }, key) => (
                                 <li key={key} role="button">
                                    <a href={`#${key + 1}`}>
                                       <h4>{key + 1}.</h4>
                                       <h5>{question}</h5>
                                    </a>
                                 </li>
                              ))
                           )}
                        </ul>
                     </div>
                  </div>
                  <div className="col-lg-7 col-md-8">
                     {isError || isFetching || isLoading ? (
                        <PlaceHolderFaqContent />
                     ) : (
                        data.map(({ question, answer }, key) => (
                           <div className="faq-heading " id={key + 1} key={key}>
                              <i data-feather="help-circle" className="theme-color"></i>
                              <div className="faq-option">
                                 <h3>{question}</h3>
                                 <h6 className="font-light">{answer}</h6>
                              </div>
                           </div>
                        ))
                     )}
                  </div>
               </div>
            </div>
         </section>
         <SubscribeBox />
      </>
   );
}

export default Faq;
