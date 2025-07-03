import HeadNav from "../components/HeadNav";
import ErrorComponent from "../components/ErrorComponent";

const VerificationPage = () => {
  const handleTryAgain = () => {
    // Redirect to the payment page
    window.open("https://wa.me/+13134875056", "_blank");
  };

  return (
    <>
      <HeadNav />
      <ErrorComponent
        onClick={handleTryAgain}
        error="Verification Failed"
        message="Sorry we are unable to verify your payment"
        icon="cancel.svg"
        btnMsg="Contact Support"
      />
    </>
  );
};

export default VerificationPage;
