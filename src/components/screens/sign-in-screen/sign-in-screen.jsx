import Header from "../../commons/sections/header/header";
import Footer from "../../commons/sections/footer/footer";
import {HeaderClasses, HeaderTitles} from "../../../consts";
import signInScreenProp from "./sign-in-screen.prop";

class SignInScreen extends React.PureComponent {
  constructor(props) {
    super(props);
    this._inputEmailRef = React.createRef();
    this._inputPassRef = React.createRef();

    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _handleFormSubmit(evt) {
    const {onSubmit} = this.props;
    evt.preventDefault();

    onSubmit({
      login: this._inputEmailRef.current.value,
      password: this._inputPassRef.current.value
    });
  }

  render() {
    return (
      <div className="user-page">
        <Header className={HeaderClasses.USER_PAGE_HEAD} title={HeaderTitles.SIGN_IN}/>
        <div className="sign-in user-page__content">
          <form action="#" className="sign-in__form" onSubmit={this._handleFormSubmit}>
            <div className="sign-in__fields">
              <div className="sign-in__field">
                <input className="sign-in__input" type="email" placeholder="Email address" name="user-email"
                  id="user-email" ref={this._inputEmailRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
              </div>
              <div className="sign-in__field">
                <input className="sign-in__input" type="password" placeholder="Password" name="user-password"
                  id="user-password" ref={this._inputPassRef}/>
                <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
              </div>
            </div>
            <div className="sign-in__submit">
              <button className="sign-in__btn" type="submit">Sign in</button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}

SignInScreen.propTypes = signInScreenProp;


export default SignInScreen;
