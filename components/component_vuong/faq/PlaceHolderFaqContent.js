import React from "react";
import Skeleton from "react-loading-skeleton";

function PlaceHolderFaqContent() {
   return (
      <div>
         <Skeleton className="my-3" height={24} width={300} />
         <Skeleton className="" height={20} count={5} />
         <Skeleton className="" height={20} width={500} />
         <Skeleton className="my-3" height={24} width={200} />
         <Skeleton className="" height={20} count={3} />
         <Skeleton className="" height={20} width={500} />
         <Skeleton className="my-3" height={24} width={280} />
         <Skeleton className="" height={20} count={4} />
         <Skeleton className="" height={20} width={500} />
         <Skeleton className="my-3" height={24} width={250} />
         <Skeleton className="" height={20} count={1} />
         <Skeleton className="" height={20} width={500} />
         <Skeleton className="my-3" height={24} width={350} />
         <Skeleton className="" height={20} count={3} />
         <Skeleton className="" height={20} width={500} />
         <Skeleton className="my-3" height={24} width={200} />
         <Skeleton className="" height={20} count={4} />
         <Skeleton className="" height={20} width={500} />
         <Skeleton className="my-3" height={24} width={190} />
      </div>
   );
}

export default PlaceHolderFaqContent;
