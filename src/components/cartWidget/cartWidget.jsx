import { Avatar, Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <card>
        <Link to={"/cart"} >
          <Badge count={1}>
            <Avatar shape="square" size="large" icon={<ShoppingCartOutlined />} />
          </Badge>        
        </Link>
      </card>
    </>
  );
};

export default CartWidget;