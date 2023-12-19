import { ThreeDots } from "react-loader-spinner";

const LoaderDots = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#000000"
      ariaLabel="three-dots-loading"
      wrapperStyle={{
        position: "absolute",
        top: "25%",
        left: "50%",
        transform: "translateX(-50%)",
      }}
      visible={true}
    />
  );
};

export default LoaderDots;
