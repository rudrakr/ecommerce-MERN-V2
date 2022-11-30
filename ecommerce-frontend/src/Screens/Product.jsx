import { useParams } from "react-router-dom";

const ProductScreen = ()=>{
    const routeParam = useParams();
    console.log(routeParam);
    return <div><h1>{routeParam.slug}</h1></div>
}
export default ProductScreen;