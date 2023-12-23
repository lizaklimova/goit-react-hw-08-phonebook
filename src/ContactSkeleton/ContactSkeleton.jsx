import ContentLoader from "react-content-loader";

const ContactSkeleton = () => {
  return (
    <ContentLoader
      speed={2}
      width={500}
      height={73}
      viewBox="0 0 476 124"
      backgroundColor="#8f8f8f"
      foregroundColor="#ebeaea"
    >
      <rect x="22" y="16" rx="13" ry="13" width="430" height="73" />
      <rect x="216" y="33" rx="0" ry="0" width="63" height="0" />
    </ContentLoader>
  );
};

export default ContactSkeleton;
