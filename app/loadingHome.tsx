// app/(route)/loading.tsx
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import NavBarSkeleton from './components/NavBar/NavBarSkeleton';
import FooterSkeleton from './components/Footer/FooterSkeleton';

const loading = () => {
  return (
    <SkeletonTheme highlightColor="#444">
<NavBarSkeleton/>
      <div className="container mx-auto px-4 py-8">
        <Skeleton height={40} width={300} />
        <Skeleton height={20} count={5} />
        <div className="mt-4 flex flex-wrap gap-4">
          <Skeleton height={50} width={50} />
          <Skeleton height={50} width={50} />
          <Skeleton height={50} width={50} />
        </div>
        <div className="mt-4">
          <Skeleton height={40} width={150} />
        </div>
      </div>
<FooterSkeleton/>
    </SkeletonTheme>
  );
};

export default loading;
