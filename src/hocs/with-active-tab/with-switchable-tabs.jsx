import {Tab} from "../../consts";

const withSwitchableTabs = (Component) => {
  return class WithSwitchableTabs extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: Tab.OVERVIEW
      };

      this._handleTabClick = this._handleTabClick.bind(this);
    }

    _handleTabClick(evt) {
      evt.preventDefault();
      const newActiveTab = evt.target.dataset.tab;
      this.setState({
        activeTab: newActiveTab
      });
    }
    render() {
      return <Component {...this.props} activeTab={this.state.activeTab} tabClickHandler={this._handleTabClick}/>;
    }
  };
};

export default withSwitchableTabs;
