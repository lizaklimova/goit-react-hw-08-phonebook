import { LoaderBackdrop } from "./Loader.styled";
import LoaderDots from "./LoaderConfigs";

const Loader = () => {
  return (
    <LoaderBackdrop>
      <LoaderDots />
    </LoaderBackdrop>
  );
};

export default Loader;
