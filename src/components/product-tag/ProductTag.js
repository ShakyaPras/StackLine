import "./ProductTag.css";

const ProductTag = ({ tags }) => {
  const itemtags = tags.map((tag, index) => (
    <div className="tag" key={index}>
      {tag}
    </div>
  ));

  return <div className="product-tags">{itemtags}</div>;
};

export default ProductTag;
