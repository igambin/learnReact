import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: "m1",
      title: "Test",
      desc: "This is a first product - amazing!",
      price: 6,
      amount: 1,
    },
    {
      id: "m2",
      title: "Another Test",
      desc: "This is the 2nd product - well, not so much amazing!",
      price: 4,
      amount: 1,
    },
  ];

  const itemsContent = products.map((p) => (
    <ProductItem key={p.id} product={p} />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{itemsContent}</ul>
    </section>
  );
};

export default Products;
