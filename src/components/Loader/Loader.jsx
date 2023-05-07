import { TailSpin } from 'react-loader-spinner';
import { SpinnerContainer } from './Loader.styled';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <TailSpin
        height="80"
        width="80"
        color="#3f53a1"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </SpinnerContainer>
  );
};

export default Spinner;
