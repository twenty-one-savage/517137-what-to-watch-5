import {TabsType} from "../../consts";

const withActiveTab = (Component) => {
  return class WithActiveTabs extends React.PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeTab: TabsType.OVERVIEW
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
      return <Component
        {...this.props}
        activeTab={this.state.activeTab}
        tabClickHandler={this._handleTabClick}
      />;
    }
  };
};

export default withActiveTab;
