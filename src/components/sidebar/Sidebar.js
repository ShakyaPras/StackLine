import "./Sidebar.css";
import { useSelector } from "react-redux";
import ProductTag from "../product-tag/ProductTag";

const Sidebar = () => {
  const { title, image, subtitle, tags } = useSelector((state) => state.data);

  return (
    <div className="sidebar">
      <div className="product-info">
        <img className="sidebar-image" src={image} alt={title}></img>
        <div className="sidebar-title">{title}</div>
        <div className="sidebar-subtitle">{subtitle}</div>
      </div>
      <div className="sidebar-tags">
        <ProductTag tags={tags} />
      </div>
    </div>
  );
};

export default Sidebar;
