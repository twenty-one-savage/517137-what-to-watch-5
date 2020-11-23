import btnShowMoreProp from "./btn-show-more.prop.js";

const BtnShowMore = (props) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={props.onClick}>Show more</button>
    </div>
  );
};

BtnShowMore.propTypes = btnShowMoreProp;

export default BtnShowMore;
