import "./Transaction.css"
import Item from "./Item"
// import DataContext from "../data/DataContext"
// import { useContext } from 'react';

const Transaction=(props)=>{
  // const data=[
  //   // {id:1,title:"ค่ารักษาพยาบาล",amount:-2000},

  //   {title:"ค่ารักษาพยาบาล",amount:-2000},
  //   {title:"ค่ารถ" ,amount:-100},
  //    {title:"ค่าอาหาร", amount:-80},
  //    {title:"เงินเดือน" ,amount:20000},
  //    {title:"จ่ายค่าประกัน" ,amount:-300},
  //    {title:"ค่าห้องพัก", amount:-5000}
  // ]
  const {items}=props
  // const {income,expense}=useContext(DataContext)
    return (
      <div>
        <ul className='item-list'>
      {/* <Item title="ค่ารักษาพยาบาล" amount="2000" /> */}

      {/* <Item title={data[0].title} amount={data[0].amount} /> 
      <Item title={data[1].title} amount={data[1].amount} /> 
      <Item title={data[2].title} amount={data[2].amount} /> 
      <Item title={data[3].title} amount={data[3].amount} /> 
      <Item title={data[4].title} amount={data[4].amount} />  */}

      {items.map((element)=>{
       // return <Item title={element.title} amount={element.amount} />

       // return <Item {...element} key={element.id}/>
       return <Item title={element.title} amount={element.amount} key={element.id}/>
      })}
     </ul>
      {/* <p>รายรับ : {income}</p>
      <p>รายจ่าย : {expense}</p> */}
     
      {/* <DataContext.Consumer>
        {value=><p>{value}</p>}
      </DataContext.Consumer> */}
    {/* {name} */}
     </div>
      
    )
  }
  

  export default Transaction