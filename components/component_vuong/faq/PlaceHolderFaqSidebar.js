import React from "react";
import Skeleton from "react-loading-skeleton";

function PlaceHolderFaqSidebar() {
   return (
      <div>
         <Skeleton className="my-3" height={24} width={300} />
         <Skeleton className="my-3" height={24} width={200} />
         <Skeleton className="my-3" height={24} width={280} />
         <Skeleton className="my-3" height={24} width={250} />
         <Skeleton className="my-3" height={24} width={350} />
         <Skeleton className="my-3" height={24} width={200} />
         <Skeleton className="my-3" height={24} width={190} />
      </div>
   );
}

export default PlaceHolderFaqSidebar;
