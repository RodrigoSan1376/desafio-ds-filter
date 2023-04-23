import { ProductDTO } from "../../../models/product";
import "./styles.css";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products }: Props) {
  return (
    <main className="ddf-container ddf-pb20">
      <section className="ddf-listing-section">
        {products.map((item) => (
          <div key={item.id} className="dff-listing-item">
            <div className="ddf-item-name">{item.name}</div>
            <div className="ddf-item-price">{item.price.toFixed(2)}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
