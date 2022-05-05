import { useRouter } from "next/router"

export default function Footer(){
    const router = useRouter()
    return(
        <>
        <h1>Footer</h1>
        <button onClick={()=>router.push('/')}>Home</button>
        </>
    )
}