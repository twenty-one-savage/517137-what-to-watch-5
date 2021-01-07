// const withHover = (Component) => {
//   class WithHover extends React.PureComponent {
//     constructor(props) {
//       super(props);
//       this.state = {
//         isPlaying: false
//       };
//       this._timeoutId = null;
//       this._handleVideoMouseOver = this._handleVideoMouseOver.bind(this);
//       this._handleVideoMouseOut = this._handleVideoMouseOut.bind(this);
//     }
//
//     componentWillUnmount() {
//       clearTimeout(this._timeoutId);
//     }
//
//     _handleVideoMouseOver() {
//       this._timeoutId = setTimeout(() => {
//         this.setState({
//           isPlaying: true
//         });
//       }, 1000);
//     }
//
//     _handleVideoMouseOut() {
//       clearTimeout(this._timeoutId);
//       this.setState({
//         isPlaying: false
//       });
//     }
//
//     render() {
//       return (
//         <Component
//           {...this.props}
//           isPlaying={this.state.isPlaying}
//           onMouseOver={this._handleVideoMouseOver}
//           onMouseOut={this._handleVideoMouseOut}/>
//       );
//     }
//   }
//
//   return WithHover;
// };
//


const withHover = (Component) => (props) => {
  const [isPlaying, setPlaying] = React.useState(false);
  let timeoutId = null;

  React.useEffect(() => clearTimeout(timeoutId));

  const handleVideoMouseOver = () => {
    timeoutId = setTimeout(() => {
      setPlaying(true);
    }, 1000);
  };

  const handleVideoMouseOut = () => {
    setPlaying(false);
  };


  return (
    <Component
      {...props}
      isPlaying={isPlaying}
      onMouseOver={handleVideoMouseOver}
      onMouseOut={handleVideoMouseOut}
    />
  );
};

export default withHover;
