import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useShopContext }  from "../shopContext/shopContext";



const CartWidget = () => {

  const { numProducts } = useShopContext();

  return (
    <>
      <card>
        <Link to="/cart">
          <Badge count={numProducts}>
            <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
          </Badge>
        </Link>
      </card>
    </>
  );
};

export default CartWidget;
