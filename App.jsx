
import './App.css';

function App() {
  const products = [
    {
      name: "Choco-Liciouscito",
      description: "Rich, gooey chocolate chip cookie made with devil’s food cake mix.",
      price: 3,
      image: "/images/choco-liciouscito.png",
    },
    {
      name: "Macadamia Dreamcito",
      description: "White cake mix with macadamia nuts and white chocolate chips.",
      price: 3.5,
      image: "/images/macadamia-dreamcito.png",
    },
    {
      name: "Lemoncito Pop",
      description: "Lemon cake mix cookie with a zesty pop and white glaze.",
      price: 3,
      image: "/images/lemoncito-pop.png",
    },
    {
      name: "Strawberry Sugarcito",
      description: "Soft strawberry cake mix cookie with white chocolate chunks.",
      price: 3,
      image: "/images/strawberry-sugarcito.png",
    },
  ];

  return (
    <div className="App" style={{ padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <img src="/images/delicious-citos-banner.png" alt="Delicious Citos Logo" style={{ width: '300px' }} />
      </div>
      <h1 style={{ textAlign: 'center' }}>Delicious-Citos Cookie Drop</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        {products.map((product, idx) => (
          <div key={idx} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '10px', width: '200px' }}>
            <img src={product.image} alt={product.name} style={{ width: '100%', borderRadius: '10px' }} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><strong>${product.price.toFixed(2)}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
