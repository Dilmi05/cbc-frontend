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
                axios.get(import.meta.env.VITE_BACKEND_URL+"/api/products/"
                    +productId
                ).then(
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
        <tr> 
          <td><img src ={product?.image[0]} className="w-[90px] h-[90] object-cover"/></td>
            <td>{product?.productName}</td>
            <td>{productId}</td>
            <td>{qty}</td>
            <td>LKR.{product?.lastPrice.toFixed(2)}</td>
            <td className="text center">{(product?.lastPrice*qty).toFixed(2)}</td>
      </tr>
     )
}