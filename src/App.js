import React from 'react';
import PropTypes from 'prop-types'

// class App extends Component {
//   render() {
//     return (
//     <div>
//       <label htmlFor="bar">bar</label>
//        <input type="text" onChange={() => {console.log("I am clicked")}}/>
//     </div>
//     )
//   }
// }

const App = () => {
  const profiles = [
    { name: "taro", age: 10},
    { name: "mako", age: 20},
    { name: "noName", age: 5}
  ]

  return (
  <div>
    {
      profiles.map((profile, index) => {
        return <User name={profile.name} age={profile.age} key={index}/> 
      })
    }
  </div>
  )
}

const User = (props) => {
return <div>My name is {props.name} and my age is {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
