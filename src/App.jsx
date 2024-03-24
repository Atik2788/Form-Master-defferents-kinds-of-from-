
import { Form } from 'react-router-dom'
import './App.css'
import SimpleForm from './components/SimpleForm/SimpleForm'
import StatefulForm from './components/StatefulForm/StatefulForm'
import RefForm from './components/RefForm/RefForm'
import HookForm from './components/HookForm/HookForm'
import ResuableForm from './components/ReusableForm/ResuableForm'


function App() {

  const handleSignUpSubmit = data => {
    console.log('sign up data:', data);

  }

  return (
    <>
      <h1>Vite + React</h1>
      {/* <SimpleForm></SimpleForm>? */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      <ResuableForm 
      handleSubmit={handleSignUpSubmit} 
      formTitle={'Sign Up'} 
      btnText={'Sign Up'}
      >
        <div>
          <h3>this is from app.jsx by "children" props</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque alias quisquam reiciendis tenetur, magnam iure aspernatur laudantium similique reprehenderit. Corporis eveniet fugiat delectus ab pariatur sequi obcaecati labore. Cumque omnis possimus, eligendi nesciunt officiis beatae.</p>
        </div>
      </ResuableForm>
      <ResuableForm formTitle={'Create Account'} btnText={'Create Acoount'}></ResuableForm>
    </>
  )
}

export default App
