import { useRouter } from "next/router";

const ProductInput = () => {
    const router = useRouter();
    console.log("ProductInput Router: ", router)
    return(<div>PRODUCT INPUT HERE</div>)
}

export default ProductInput;