import "./styles.css";
import { useContext } from "react";
import { ContextListCount } from "../../utils/context-listing";

export default function Header() {

  const { contextListCount } = useContext(ContextListCount);

  return (
    <header>
      <div className="ddf-container ddf-header-content">
        <h1>DSFilter</h1>
        <div className="ddf-header-products-quantity">{contextListCount} produto(s)</div>
      </div>
    </header>
  );
}
