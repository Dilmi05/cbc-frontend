import {useEffect,useState} from "react"
import { deleteItem } from "../utils/cartFunction"

export default function CartCard(props){
    const productId = props.productId
    const qty = props.qty

    const[product,setProduct] = useState(null)
    const[loarding,setLoading]=useState(true)


    useEffect(
        ()=>{
            if(!loarding){
                axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/products/${productId}`)
                 
                .then(
                    (response)=>{
                        if(response.data!=null){
                        setProduct(response.data)
                        console.log(response.data)
                        setLoaded(true)

                        }else{
                            deleteItem(productId)
                        }
                         
                    }
                ).catch(
                    (error)=>{
                        console.log(error)
                 } 
    )
            }
        },[]

    )

    return(
         <div>
            <img src={product?.image[0]} className="w-1/4 h-1/4"></img>
            <span>{product?.productName}</span>
            <span>{productId}</span>
            <span>X</span>
            <span>{qty}</span>

         </div>
     )
}