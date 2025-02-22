import { useNavigate, useParams } from "react-router-dom";
import HeadNav from "../components/HeadNav";
import ErrorComponent from "../components/ErrorComponent";

const VerificationPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleTryAgain = () => {
    navigate(`/product/${id}/check-out`);
  };
  return (
    <>
      <HeadNav />
      <ErrorComponent
        onClick={handleTryAgain}
        error="Verification Failed"
        message="Sorry we are unable to verify your payment"
        icon="cancel.svg"
        btnMsg="Try again"
      />
    </>
  );
};

export default VerificationPage;
