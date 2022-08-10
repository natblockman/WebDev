import logo from './logo.svg';
import './App.css';
import React from 'react';
import Transaction from './component/Transaction';
import FormComponent from './component/FormComponent';
import { useState,useEffect,useReducer } from 'react';
import DataContext from './data/DataContext';
import ReportComponent from './component/ReportComponent';
// import { element } from 'prop-types';
import { BrowserRouter as Router,Route,Routes,Link } from 'react-router-dom'



//Nest component คือcomponentซ้อนcomponent
function App() {
  
const Title=()=><h1>แอพบัญชีรายรับ-รายจ่าย</h1>
const Description=()=><p>บันทึกข้อมูลบัญชีในแต่ละวัน</p>

const design={color:'red',textAlign:'center',fontSize:'1.5rem'}
const initData=[
  {id:1,title:"ค่ารักษาพยาบาล",amount:-2000},
  {id:2,title:"ค่ารถ" ,amount:-100},
   {id:3,title:"ค่าอาหาร", amount:-80},
   {id:4,title:"เงินเดือน" ,amount:20000},
   {id:5,title:"จ่ายค่าประกัน" ,amount:-300},
   {id:6,title:"ค่าห้องพัก", amount:-5000}
]
const [items,setItems]=useState(initData)
// const initState=[
//   {id:1,title:"ค่าเช่าบ้าน",amount:-2000},
//   {id:2,title:"เงินเดือน",amount:12000},
//   {id:3,title:"ค่าเดินทาง",amount:-800},
//   {id:4,title:"ขายของ",amount:2000}
// ]
// const [items,setItems]=useState([])
// const [items,setItems]=useState(initState)
const [reportIncome,setReportIncome]=useState(0)
const [reportExpense,setReportExpense]=useState(0)
const onAddNewItem=(newItem)=>{
  // console.log("ข้อมูลที่ส่งมาจาก Form Component =",newItem)
  setItems((prevItem)=>{
    return[newItem,...prevItem]
  })
}
useEffect(()=>{
  const amounts=items.map(items=>items.amount)
  const income=amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
  const expense=amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0)
  
  setReportIncome(income.toFixed(2))
  setReportExpense(expense.toFixed(2))
  console.log("รายได้ =",income)
  console.log("รายจ่าย =",expense)
},[items,reportIncome,reportExpense])

// reducer state
const [showReport,setShowReport]=useState(false)
// const reducer=(state,action)=>{
//   switch(action.type){
//     case "SHOW":
//       return setShowReport(true)
//     case "HIDE":
//       return setShowReport(false)
//     case "CLEAR":
//       return 0
//   }

// }
// const [result,dispath]=useReducer(reducer,showReport)

  return (
    
    <DataContext.Provider value={
      {
        income:reportIncome,
        expense:-reportExpense
      }
    }>
      <div className='container'>
      <h1 style={design}><Title/></h1>
      <Router>
      <div>
        <ul className='horizontal-menu'>
          <li>
            {/* path/ คือหน้าแรกของแอพ */}
            <Link to="/">ข้อมูลบัญชี</Link>
          </li>
          <li>
             {/* path/insert คือหน้าแรกของแอพ */}
          <Link to="/insert">บันทึกข้อมูล</Link>
          </li>
        </ul>
        <Routes>
            <Route path='/' element={<ReportComponent/>}></Route>
            <Route path='/insert' element={<><FormComponent onAddItem={onAddNewItem}/> <Transaction items={items}/> </>}></Route>
          </Routes>
      </div>
      </Router>
      
      {/* {showReport&&<ReportComponent/>} */}
      {/* <ReportComponent/> */}
      {/* <Description/> */}
      {/* <FormComponent onAddItem={onAddNewItem} /> */}
      {/* <Transaction items={initData}/> */}
      {/* <Transaction items={items}/>  */}
      
      {/* <h1>{showReport}</h1>
    <button onClick={()=>dispath({type:"SHOW"})}>แสดง</button>
    <button onClick={()=>dispath({type:"HIDE"})}>ซ่อน</button> */}
    {/* <button onClick={()=>dispath({type:"CLEAR"})}>ล้าง</button> */}

    

    </div>
    </DataContext.Provider>
   
    
    
  
      
    
  );
}

export default App;
