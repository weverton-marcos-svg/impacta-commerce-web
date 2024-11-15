import { useRouter } from "next/router";

import Layout from "../components/Layout";
import Cart from "../components/ShoppingCart/Cart";
import { closeOrder } from "../Libs/api";
const FIXED_CART_CODE = "fixed-cart-code";

export default function ShoppingCartPage() {
  const router = useRouter();

  function close() {
    closeOrder(FIXED_CART_CODE);
    router.push("/orders");
  }
  return (
    <Layout>
      <h1 className="text-center mt-5">Carrinho de Compras</h1>

      <Cart />

      <button onClick={close} className="btn btn-primary">
        Fechar pedido
      </button>
    </Layout>
  );
}