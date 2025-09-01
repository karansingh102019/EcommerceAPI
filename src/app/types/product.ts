interface rating {
  rate: number;
  count: number;
}

interface Userapi {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: rating;
}

export default Userapi;


export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
};