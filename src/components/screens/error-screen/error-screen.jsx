import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";

const ErrorScreen = () => {
  return (
    <>
      <Header/>
      <div className="sign-in user-page__content">
        <div className="sign-in__message">
          <p>Sorry, something went wrong!</p>
          <p>Please, try again later</p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ErrorScreen;
