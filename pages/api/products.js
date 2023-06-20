export default async function handler(req, res) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }