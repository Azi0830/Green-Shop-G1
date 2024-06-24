import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryModal } from "../../../../../redux/generec-slices/modals";
import Categories from "../../../sidenav/categories";
import PricRange from "../../../sidenav/price-range";
import SortSelect from "../../header/select";

const Category = () => {
  const dispatch = useDispatch();
  const { categoryModal } = useSelector(({ modal }) => modal);

  return (
    <Modal
      onOk={() => dispatch(setCategoryModal())}
      onCancel={() => dispatch(setCategoryModal())}
      open={categoryModal}
      title="Dashboard"
    >
      <Categories />
      <PricRange />
      <SortSelect />
    </Modal>
  );
};

export default Category;
