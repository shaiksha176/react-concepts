import React, { useState, useMemo } from "react";

const expensiveCalculation = (num) => {
  //   console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
};

function ProductList({ products }) {
  //   const totalPrice = useMemo(() => {
  //     console.log("Calculating total price...");
  //     return products.reduce((acc, product) => acc + product.price, 0);
  //   }, [products]);
  console.log("calculating total price");
  const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
}

const ProductListWithuseMemo = ({ products }) => {
  console.log("Component re-rendered");

  const totalPrice = useMemo(() => {
    console.log("Calculating total price...");

    return products.reduce((acc, product) => acc + product.price, 0);
  }, [products]);
  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
      <div>Total Price: ${totalPrice}</div>
    </div>
  );
};

const MemoizedProductList = React.memo(ProductList, (prevProps, nextProps) => {
  // If products are the same, don't re-render
  return prevProps.products === nextProps.products;
});

const MemoizeValues = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    // ... more products
  ]);

  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };
  const addProduct = () => {
    setProducts((products) => [
      ...products,
      { id: Math.floor(Math.random() * 1000), name: "Tab", price: 5665 },
    ]);
  };

  return (
    <div className="container">
      <h2 style={{ marginBottom: "10px" }}>Memoize values</h2>
      <div className="inner__container" style={{ padding: "20px" }}>
        {/* <ProductList products={products} /> */}
        {/* <MemoizedProductList products={products} /> */}
        <ProductListWithuseMemo products={products} />
        <div>
          <h2>My Todos</h2>
          {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
          })}
          <button onClick={addTodo}>Add Todo</button>
          <button onClick={addProduct}>Add Product</button>
        </div>
        <hr />
        <div>
          Count: {count}
          <button onClick={increment}>+</button>
          <h2>Expensive Calculation</h2>
          {calculation}
        </div>
      </div>
    </div>
  );
};

export default MemoizeValues;
