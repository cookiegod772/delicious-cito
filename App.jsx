
import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { useState } from "react";

export default function DeliciousCitosStore() { const [cart, setCart] = useState([]);

const products = [ { name: "Choco-Liciouscito", description: "Rich, gooey chocolate chip cookie made with devil’s food cake mix.", price: 3, image: "/images/choco-liciouscito.png", }, { name: "Macadamia Dreamcito", description: "White cake mix with macadamia nuts and white chocolate chips.", price: 3.5, image: "/images/macadamia-dreamcito.png", }, { name: "Lemoncito Pop", description: "Lemon cake mix cookie with a zesty pop and white glaze.", price: 3, image: "/images/lemoncito-pop.png", }, { name: "Strawberry Sugarcito", description: "Soft strawberry cake mix cookie with white chocolate chunks.", price: 3, image: "/images/strawberry-sugarcito.png", }, ];

const addToCart = (product) => { setCart([...cart, product]); };

return ( <div className="p-6"> <div className="flex justify-center mb-6"> <img src="/images/delicious-citos-banner.png" alt="Delicious Citos Logo" className="w-full max-w-lg rounded-xl shadow-lg" /> </div> <p className="mb-6 text-lg text-center">KC's underground cookie drop. Small batch. Face-free. Crave-heavy.</p> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> {products.map((product, index) => ( <Card key={index}> <CardContent className="p-4"> <img src={product.image} alt={product.name} className="rounded-lg mb-2" /> <h2 className="text-xl font-semibold">{product.name}</h2> <p className="text-sm text-muted-foreground mb-2">{product.description}</p> <p className="font-bold">${product.price.toFixed(2)}</p> <Button onClick={() => addToCart(product)} className="mt-2 w-full">Add to Cart</Button> </CardContent> </Card> ))} </div> </div> ); }

