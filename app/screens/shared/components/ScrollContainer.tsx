import { headerHeight } from '~config/constants';
import useDimentions from '~hooks/useDimentions';
import Loader from './Loader';

type ScrollContainerType = {
  children: any;
  loadMore: any;
  loading: boolean;
};

function ScrollContainer({ children, loadMore, loading }: ScrollContainerType) {
  const { height } = useDimentions();

  const handleOnScroll = (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event?.target;

    const sum = scrollTop + clientHeight;
    if (sum >= scrollHeight - 10 && !loading) loadMore();
  };

  return (
    <div
      style={{
        border: '0px solid red',
        height: height - headerHeight,
        minHeight: height - headerHeight,
        overflowY: 'scroll',
      }}
      id="content-page"
      className="content-page scroll-div"
      onScroll={handleOnScroll}
    >
      {children}
      {loading && <Loader />}
    </div>
  );
}

export default ScrollContainer;
