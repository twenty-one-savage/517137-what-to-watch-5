const BtnShowMore = (props) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.onClick}>Show more</button>
    </div>
  );
};

BtnShowMore.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default BtnShowMore;
