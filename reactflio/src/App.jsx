import Item from './components/Item'
import ItemDate from './components/ItemDate'
import Cards from './components/Cards'
function App() {
  const response = [
    {
      itemName:"Nirma",
      itemDate: "30",
      itemMonth: "june",
      itemyear: "1988"
    },
    {
      itemName:"555",
      itemDate: "21",
      itemMonth: "june",
      itemyear: "1998"
    },
    {
      itemName:"surfxel",
      itemDate: "10",
      itemMonth: "nov",
      itemyear: "1978"
    },
    
  ]
 return (
    <> 
    <Cards>
      <Item name={response[0].itemName}>dipak</Item>
        <ItemDate day={response[0].itemDate} month={response[0].itemMonth} year={response[0].itemyear}></ItemDate>

        <Item name={response[1].itemName}></Item>  
        <ItemDate day={response[1].itemDate} month={response[1].itemMonth} year={response[1].itemyear}></ItemDate>

        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDate} month={response[2].itemMonth} year={response[2].itemyear}></ItemDate>

    </Cards>

    </>
  )
}
 
export default App
