import React from 'react';
import Skeleton from 'react-loading-skeleton';

function PlaceHolderReviewPage() {
    return (
        <>
            {Array(12)
                .fill(0)
                .map((item, key) => (
                    <div key={key} className="col-lg-4 col-sm-6 my-3">
                        <Skeleton className=" m-2" height={150} />
                    </div>
                ))}
        </>
    );
}

export default PlaceHolderReviewPage;
