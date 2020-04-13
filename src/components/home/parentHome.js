import React from 'react';
import ChildHome from './childHome';
import { useSelector, useDispatch} from 'react-redux';



//  class ParentHomeComponent extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             count: 0
//         }
//         this.onLogoutClick = this.onLogoutClick.bind(this);
//         this.incrementCount = this.incrementCount.bind(this);
//         this.decrementCount = this.decrementCount.bind(this);
//     }

//     incrementCount() {
//         // this.setState( {
//         //     count : this.state.count + 1
//         // })
//     }

//     decrementCount() {
//         if(this.state.count !== 0) {
//             // this.setState({
//             //     count : this.state.count -1
//             // })
//         }
        
//     }

//     onLogoutClick(event) {
//         localStorage.clear();
//         this.props.history.push('/login');
//     }

//     render(){ 
//         return (
//             <div>
//                 <h1>Parent Component</h1>
//                 <button onClick = {() => dispatch(this.incrementCount)}>Increment Count</button>
//                 <button onClick = {() => dispatch(this.decrementCount)}>Decrement Count</button>
//                 <h1>Count = { counter }</h1>
//                 <p>******************************************************************</p>
//                 <ChildHome count = { counter }/>
//                 <button onClick = {this.onLogoutClick}>Logout</button>
//             </div>
//         )
//     }
  
// }


function ParentHomeComponent(props) {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

   

    const incrementCount = () => {
        return {
            type : 'INCREMENT'
        };
    }

    const decrementCount = () => {
        return {
            type : 'DECREMENT'
        };
    }

    // const onLogoutClick = (event) => {
    //     localStorage.clear();
    //     props.history.push('/login');
    // }

    return (
        <div>
            <h1>Parent Component</h1>
            <button onClick = {() => dispatch(incrementCount())}>Increment Count</button>
            <button onClick = {() => dispatch(decrementCount())}>Decrement Count</button>
            <h1>Count = { counter }</h1>
            <p>******************************************************************</p>
            <ChildHome count = { counter }/>
            {/* <button onClick = {onLogoutClick()}>Logout</button> */}
        </div>
    )
}





export default ParentHomeComponent