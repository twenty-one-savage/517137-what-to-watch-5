const withHover = (Component) => {
  class WithHover extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isLoading: true,
        isPlaying: true
      };
      this._forwardedRef = this.props;
      this._timeoutId = null;
      this._handleVideoMouseOver = this._handleVideoMouseOver.bind(this);
      this._handleVideoMouseOut = this._handleVideoMouseOut.bind(this);
    }

    componentDidMount() {
      const video = this._forwardedRef.current;
      video.muted = true;

      video.oncanplaythrough = () => this.setState({
        isLoading: false
      });

      video.onplay = () => this.setState({
        isPlaying: true
      });
      video.onload = () => this.setState({
        isPlaying: false
      });
    }

    componentWillUnmount() {
      const video = this._forwardedRef.current;

      video.oncanplaythrough = null;
      video.onplay = null;
      video.onload = null;
      clearTimeout(this._timeoutId);
    }

    componentDidUpdate() {
      const video = this._forwardedRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }

    _handleVideoMouseOver() {
      this._timeoutId = setTimeout(() => {
        this.setState({
          isPlaying: true
        });
      }, 1000);
    }

    _handleVideoMouseOut() {
      clearTimeout(this._timeoutId);
      this.setState({
        isPlaying: false
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          isPlaying={this.state.isPlaying}
          onMouseOver={this._handleVideoMouseOver}
          onMouseOut={this._handleVideoMouseOut}/>
      );
    }
  }

  return React.forwardRef((props, ref) => {
    return <WithHover {...props} forwardedRef={ref}/>;
  });
};

export default withHover;
