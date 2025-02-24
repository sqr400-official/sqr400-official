import { useNavigate } from "react-router-dom";
import ErrorComponent from "../components/ErrorComponent";
import HeadNav from "../components/HeadNav";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/product/1");
  };
  return (
    <>
      <HeadNav />
      <main>
        <ErrorComponent
          onClick={handleRedirect}
          error="404"
          message="Sorry the page you are looking for does not exist"
          icon="cancel.svg"
          btnMsg="Move Back"
        />
      </main>
    </>
  );
};

export default ErrorPage;
