import './App.css';
import HighComp from './HighComp.js'

function App() {
  return (
    <div className="App">
     <HighComp cardCount={3}/>
    </div>
  );
}

export default App;

// //create card component 
// //<cards amount={4} />
// //<table>

//  <tbody>
//      <tr>
//          <td> down </td>
//          <td> down </td>
//          <td> down </td>
//          <td> down </td>
//      </tr>
//  </tbody>
// </table>

// 1. Card component accept 4 value 
// 2. Card as to render inside table 
// 3. Each card is clickable text as to face up and down 
// 4. A/C only onward as to face upwards 
