import { useLocalStorage } from "@/hooks/useLocalStorage"
import { CartIcon } from "./cart-icon"
import styled from "styled-components"

const CartCount = styled.span`
    font-size:18px;
    font-weight: 700px

}
`

export function CartControl (){
    const{value} = useLocalStorage('cart-cont', [])
    
    return(
        <div>
            <CartIcon />
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </div>
    )
}
