
import { Circles } from 'react-loader-spinner';
import css from './Loader.module.css'



const Loader = () => {
  return (
    <div className={css.loaderStyle}>
      <Circles
        height="80"
        width="80"
        color="rgb(129, 97, 235)"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;


//  <MutatingDots
//    visible={true}
//    height="100"
//    width="100"
//    color="#4fa94d"
//    secondaryColor="#4fa94d"
//    radius="12.5"
//    ariaLabel="mutating-dots-loading"
//    wrapperStyle={{}}
//    wrapperClass=""
//  />;