import './Item.css'
import PropTypes from 'prop-types';
// import DataContext from '../data/DataContext';
// import { useContext } from 'react';

// const Item=()=>{

//     const name="พักโรงแรม"
//     const amount=5000
//     return (
     
//       <li>{name} <span>-{amount}</span></li>
     
     
//     )
//   }

const Item=(props)=>{
  // return (
  //   <li>{props.title} <span>{props.amount}</span></li>
  // )
  const {title,amount}=props
  const status=amount<0? "expense":"income"
  const symbol=amount<0? "-":"+"
  const formatNumber=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')
  }
  // const name=useContext(DataContext)
  return (
    <li className={status}>
      {title} <span>{symbol}{formatNumber(Math.abs(amount))}</span>
      {/* <DataContext>
      {value=><p>{value}</p>}
      </DataContext> */}
      {/* {name} */}
      </li>
  )


}

// const Item=({title,amount})=>{
//   return (
//     <li>{title} <span>{amount}</span></li>
//   )
// }

// บังคับtitleต้องเป็นstring amountต้องเป็นnumber
Item.propTypes={
  // isRequiredต้องป้อนทุกครั้ง
  title:PropTypes.string.isRequired,
  amount:PropTypes.number.isRequired
}
  export default Item