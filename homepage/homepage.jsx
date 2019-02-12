import React, {Component} from 'react';
import '.homepage.css';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}
  
const user = {
    firstName: 'Rebecca',
    lastName: 'Tucker',
};

class homepage extends Component{
    render(){
        return(<div className="homepage">
            <p>Welcome {formatName(user)}</p>;    
        </div>
        );
    }
}


// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};
  
//       this.handleClick = this.handleClick.bind(this);
//     }
  
//     handleClick() {
//       this.setState(prevState => ({
//         isToggleOn: !prevState.isToggleOn
//       }));
//     }
  
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'Find Available Times' : 'Clicked'}
//         </button>
//       );
//     }
//   }
  
//   ReactDOM.render(
//     <Toggle />,
//     document.getElementById('root')
//   );