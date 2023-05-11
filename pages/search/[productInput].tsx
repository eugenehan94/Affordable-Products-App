import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductInput = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("/api/getFlippItems")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  const router = useRouter();
  console.log("ProductInput Router: ", router);
  return <div>PRODUCT INPUT HERE</div>;
};

export default ProductInput;
