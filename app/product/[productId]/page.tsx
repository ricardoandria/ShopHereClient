import Container from "@/app/Container";
import ProductDetails from "./ProductDetails";
import { product } from "@/app/utils/product";

interface IParams {
  productId?: string;
}

const Product = ({ params }: { params: IParams }) => {
  console.log(params);

  return (
    <div>
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;
