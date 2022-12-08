import axios from "axios"

export const getdata=({limit,title})=>{

    return(
        axios.get(`https://myntra-db-server.onrender.com/${title}`,{
            params:{
                title:title,
                _limit:limit
            }
        })
    )

}
export const productdata=({title,style,sort,order})=>{

    return(
        axios.get(`https://myntra-db-server.onrender.com/clothing?category=Mens`,{
            params:{
                title:title,
                style:style,
                _sort:sort,
                _order:order
            }
        })
    )

}

export const dataforfilter=({title,style,sort,order})=>{

    return(
        axios.get(`https://myntra-db-server.onrender.com/clothing?category=Mens`,{
            params:{
                title:title,
                style:style,
                _sort:sort,
                _order:order
            }
        })
    )

}