import Skeleton from "react-loading-skeleton";

const CategoryPostSkeleton = () => {
  return <div className="grid-item col-lg-3 col-md-4 col-sm-6">
      <Skeleton height={'15rem'} width='100%'/>
      <Skeleton count={2} width='100%' height='1.5rem' className="mt-3"/>
      <Skeleton count={4} width='100%' className="mt-3"/>
  </div>
}

const NewPostBlogListSkeleton = () => {
  return <div className="col-12">
      <div className="row">
        <div className="col-lg-4">
          <Skeleton className="ratio ratio-4x3"/>
        </div>
        <div className="col-lg-8">
          <Skeleton height='1.5rem' width='40%'/>
          <Skeleton count={5} className='mt-3'/>
        </div>
    </div>
  </div>
}

const DetailPostSkeleton = () => {
  return <div className="mb-5">
    <Skeleton height='25rem'/>
    <Skeleton className='mt-4' width='30%'/>
    <Skeleton height='1.5rem' className="mt-4"/>
    <Skeleton height='1.5rem' className="mt-3"/>
    <Skeleton className="mt-4"/>
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
    <Skeleton />
  </div>            
}

const RelatedPostSkeleton = () => {
  return <div className="col-12 col-lg-3">
    <Skeleton className="ratio ratio-16x9" width='100%'/>
    <Skeleton/>
    <Skeleton/>
    <Skeleton width='30%'/>
  </div>
}

const PostCommentsSkeleton = () => {
  return <div className="d-flex mt-3">
    <div className="me-3">
      <Skeleton className="rounded-circle" height='4rem' width='4rem'/>
    </div>
    <div className="mt-1">
      <Skeleton width='10rem'/>
      <Skeleton width='10rem' className="mb-3"/>
      <Skeleton width='20rem' />
    </div>
    <hr/>
  </div>
}

const SideBarItemSkeleton = () => {
  return <div className="row mb-3">
    <div className="col-3">
      <Skeleton className="ratio ratio-4x3"/>
    </div>
    <div className="col-8">
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
      <Skeleton/>
    </div>
  </div>
}

const TeamMemberSkeleton = () => {
  return <div className="row">
    <div className="col-lg col-6">
      <Skeleton height={'15rem'}/>
      <Skeleton className="mt-2"/>
      <Skeleton/>
    </div>
    <div className="col-lg col-6">
      <Skeleton height={'15rem'}/>
      <Skeleton className="mt-2"/>
      <Skeleton/>
    </div>
    <div className="col-lg col-6">
      <Skeleton height={'15rem'}/>
      <Skeleton className="mt-2"/>
      <Skeleton/>
    </div>
    <div className="col-lg col-6">
      <Skeleton height={'15rem'}/>
      <Skeleton className="mt-2"/>
      <Skeleton/>
    </div>
    <div className="col-lg col-6">
      <Skeleton height={'15rem'}/>
      <Skeleton className="mt-2"/>
      <Skeleton/>
    </div>
  </div>
}

const TestimonialItemSkeleton = () => {
  return <div className="row">
    <div className="col-12 col-lg-4">
      <Skeleton className="ratio ratio-1x1"/>
    </div>
    <div className="col-12 col-lg-4">
      <Skeleton className="ratio ratio-1x1"/>
    </div>
    <div className="col-12 col-lg-4">
      <Skeleton className="ratio ratio-1x1"/>
    </div>
  </div>
}

export { 
  CategoryPostSkeleton, 
  NewPostBlogListSkeleton, 
  DetailPostSkeleton, 
  RelatedPostSkeleton, 
  PostCommentsSkeleton,
  SideBarItemSkeleton,
  TeamMemberSkeleton,
  TestimonialItemSkeleton
};