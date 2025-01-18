import { useState } from "react";
import PetAdoptionData from "./PetAdoptionData";

export default function PetAdoptionForm(){
   
    const [value,setValue]=useState({
        petName:"",
        petType:"Dog",
        breed:"",
        yourName:"",
        Email:"",
        phone:"",
    });
    const [formData,setFormData]=useState([]);
    const[table,setTable]=useState(false);

    let{petName,petType,breed,yourName,Email,phone}=value;

    function onChange(event){
        let{name,value}=event.target;
        setValue((preValue)=>{
            return{...preValue,[name]:value}
        })
    }
 


function onSubmit(){
    setFormData((preData)=>{
        return [...preData,value];
    })
    setTable(!table);
    setValue({ petName:"",
        petType:"Dog",
        breed:"",
        yourName:"",
        Email:"",
        phone:"",
    });
}
function onBack(){
    setTable(!table);
}

    if(!table)
    return(

       
        <div style={{height:"90vh",display:"flex"}} >
            <div style={{margin:"0 auto",width:"45%",
               padding:"25px",marginTop:"15px",backgroundColor:"rgb(214, 164, 55,0.6)"
            }}>
                
                <label htmlFor="petname" style={{fontWeight:"750",color:"rgb(54, 119, 13)",display:"block",marginBottom:"11px",fontSize:"20px"}}>Pet Name</label>
                
                <input onChange={onChange} name="petName" value={petName} type="text" id="petname" style={{width:"98%",height:"30px",marginBottom:"11px"}} placeholder="Pet Name" />
                
                <label htmlFor="pettype" style={{fontWeight:"750",color:"rgb(54, 119, 13)",display:"block",fontSize:"20px",marginBottom:"11px"}}>Pet Type</label>
                
                <input onChange={onChange} name="petType" value={petType} type="text" id="pettype"  style={{width:"98%",height:"30px",marginBottom:"11px"}} placeholder="Dog" />

                <label htmlFor="breed" style={{fontWeight:"750",color:"rgb(54, 119, 13)",fontSize:"20px",display:"block",marginBottom:"11px"}}>Breed</label>
                
                <input  onChange={onChange} name="breed" value={breed} type="text" id="breed" style={{width:"98%",height:"30px",marginBottom:"11px"}} placeholder="Breed" />

                <label htmlFor="name" style={{fontWeight:"750",display:"block",color:"rgb(54, 119, 13)",fontSize:"20px",marginBottom:"11px"}}>Your Name</label>
                
                <input onChange={onChange}  name="yourName" value={yourName} type="text" id="name" style={{width:"98%",height:"30px",marginBottom:"11px"}} placeholder="Your Name" />

                <label htmlFor="email" style={{fontWeight:"750",display:"block",color:"rgb(54, 119, 13)",fontSize:"20px",marginBottom:"11px"}}>Email</label>
                
                <input onChange={onChange} name="Email" value={Email} type="text" id="email"  style={{width:"98%",height:"30px",marginBottom:"11px"}} placeholder="Email"/>

                <label htmlFor="phone" style={{fontWeight:"750",display:"block",color:"rgb(54, 119, 13)",fontSize:"20px",marginBottom:"11px"}}>Phone</label>
                
                <input onChange={onChange} name="phone" value={phone} type="text" id="phone" style={{width:"98%",height:"30px",marginBottom:"30px"}} placeholder="Phone" />

                <button  onClick={onSubmit} style={{width:"100%",height:"35px",backgroundColor:"rgb(54, 119, 13)",color:"white",marginBottom:"0px"}}>Submit</button>
                
               
               
            </div>
            
        </div>
    )



    if(table){
        return(
            <div>
<table
style={{
    border:"1",
    width:"80%",
    backgroundColor:"rgb(214, 164, 55)",
    marginTop:"20px",
    margin:"20px auto",
    borderCollapse:"collapse"


}}>
    <thead style={{border:"2px solid black"}}>
        <tr>
        <td style={{fontWeight:"700",color:"rgb(54, 119, 13)",border: "1px solid green",padding:"8px"}}>Pet Name</td>
        <td style={{fontWeight:"700",color:"rgb(54, 119, 13)",border: "1px solid green",padding:"8px"}}>Pet Type</td>
        <td style={{fontWeight:"700",color:"rgb(54, 119, 13)",border: "1px solid green",padding:"8px"}}>Breed</td>
        <td style={{fontWeight:"700",color:"rgb(54, 119, 13)",border: "1px solid green",padding:"8px"}}>Your Name</td>
        <td style={{fontWeight:"700",color:"rgb(54, 119, 13)",border: "1px solid green",padding:"8px"}}>Email</td>
        <td style={{fontWeight:"700",color:"rgb(54, 119, 13)",border: "1px solid green",padding:"8px"}}>Phone</td>
        </tr>
        
    </thead>
    
    <tbody>
    {formData.map(data=>
        <tr style={{border:"2px solid green"}}>
             <td style={{border: "1px solid green",padding:"8px"}}>{data.petName}</td>
             <td style={{border:" 1px solid green",padding:"8px"}}>{data.petType}</td>
             <td  style={{border:" 1px solid green",padding:"8px"}}>{data.breed}</td>
             <td  style={{border:" 1px solid green",padding:"8px"}}>{data.yourName}</td>
             <td  style={{border:" 1px solid green",padding:"8px"}}>{data.Email}</td>
             <td  style={{border:" 1px solid green",padding:"8px"}}>{data.phone}</td>
        </tr>
       
        )}
    </tbody>
      
       

</table>
<div style={{ marginTop: "20px", textAlign: "center" }}>
                    <button
                        onClick={onBack}
                        style={{
                            padding: "10px 20px", 
                            boxSizing: "border-box",
                            width: "auto", 
                            display: "inline-block" ,
                            backgroundColor:"rgb(54, 119, 13)",
                            color:"white"
                        }}
                    >
                        Go Back
                    </button>
                    </div>
            </div>
        )
    }
}