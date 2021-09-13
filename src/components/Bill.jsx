import React, {Component, useState} from 'react'
import { render } from 'react-dom'
import S from '../components/Bill.module.css'


export default function Bill(){

    const [bill,setBill]=useState(0)
    const [tip,setTip]=useState(0)
    const [people,setPeople]=useState(1)
    const [clas,setClas]=useState(0)



    function reset(){
        setBill(0)
        setTip(0)
        setPeople(1)
        setClas(1)
        console.log(bill)
        console.log(tip)
        console.log(people)
    }

    
        
    return(
        
    <div className= {S.container}>
        
     <div>
        <div >
           
            
            <label>BILL</label>
            <input className={S.inputs} type='number' placeholder={bill} onChange= {e=>setBill(e.target.value)}/>

        </div>
          
        <div className={S.botones}>
        <label>SELECT TIP %</label>
          <button className={clas?S.tipbutton:S.tipbutton2} onClick={()=>setTip(0.05)} value={tip}>5%</button>
          <button className={S.tipbutton} onClick={()=>setTip(0.1)} value={tip}>10%</button>
          <button className={S.tipbutton} onClick={()=>setTip(0.15)} value={tip}>15%</button>
          <button className={S.tipbutton} onClick={()=>setTip(0.25)} value={tip}>25%</button>
          <button className={S.tipbutton} onClick={()=>setTip(0.5)} value={tip}>50%</button>
          <input className={S.inputcust} type="number" placeholder='Custom'  onChange={e=>setTip(e.target.value/100)}/>
        </div>
        
      <div>
            <label>N° OF PEOPLE</label>
            
            <input  className={S.inputs} type="number"  placeholder='0'  onChange={e=>setPeople(e.target.value)} />
        </div>
    </div>
        <div className={S.results}>
            <div >
            Tip Amount
            /person
            <div>{Number(bill)*Number(tip)/Number(people)}</div>
            </div>

            <div>
                Total
                /person
                <div>{((Number(bill)*Number(tip)+Number(bill))/Number(people))}</div>
            </div>
            <button className={S.reset} onClick={reset}>Reset</button>
        </div>
    </div>
    )
} 