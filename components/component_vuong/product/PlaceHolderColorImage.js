import React from 'react'
import Skeleton from 'react-loading-skeleton'

function PlaceHolderColorImage() {
  return (
    <div className="d-flex flex-row">
    <Skeleton className="me-2" width={70} height={80} />
    <Skeleton className="me-2" width={70} height={80} />
    <Skeleton className="me-2" width={70} height={80} />
    <Skeleton className="me-2" width={70} height={80} />
 </div>
  )
}

export default PlaceHolderColorImage