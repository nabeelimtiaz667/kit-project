import { ConfigProvider } from "antd";
import "./App.css";
import Product from "./views/Product";
import Wishlist from "./views/Wishlist";

export default function App() {
  return (
    <ConfigProvider theme={{
      components: {
        Button: {
          defaultHoverBorderColor: "var(--red)",
          defaultHoverColor: "var(--red)",
          defaultActiveBg: "var(--red)",
          defaultActiveBorderColor: "var(--red)",
          defaultActiveColor: "var(--white)",
        }
      }
    }}>
      <Product />
    </ConfigProvider>
  );

}