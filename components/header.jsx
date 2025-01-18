export default function Header({message}){
    return(
        <div style={{backgroundColor:"rgb(214, 164, 55,0.8)",color:"rgb(54, 119, 13)",fontWeight:"400",idth:"100%",textAlign:"center",height:"10vh"}}>
            <nav style={{padding:"20px",fontSize:"35px"}}>
               {message}
            </nav>
        </div>
    )
}