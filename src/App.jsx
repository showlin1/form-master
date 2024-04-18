
import './App.css'
import GrandPa from './Components/GrandPa/GrandPa'
// import ReusableForm from './Components/ReusableForm/ReusableForm'
// import HoockForm from './Components/HoockForm/HoockForm'
// import RefForm from './Components/RefForm/RefForm'
// import StateFullForm from './Components/StateFullForm/StateFullForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  // const handleSignUpSubmit = data => {
  //  console.log('Sign up data',data);
  // }
  // const handleUpdateProfile = data => {
  //   console.log('update profile',data);
  // }

  return (
    <>
      <h1>Form Master</h1>
      <GrandPa></GrandPa>
      {/* <SimpleForm></SimpleForm> */}
      {/* <StateFullForm></StateFullForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HoockForm></HoockForm> */}
      {/* <ReusableForm
        formTitle={'Sign Up'}
        handleSubmit={handleSignUpSubmit}>
          <div>
            <h2>Sign Up</h2>
            <p>Please Sign up right now</p>
          </div>
      </ReusableForm>
      <ReusableForm
        formTitle={'Profile Update'}
        handleSubmit={handleUpdateProfile}
        submitBtnText='Update'>
          <div>
            <h2>Update Profile</h2>
            <p>Always keep your profile updated</p>
          </div>
        </ReusableForm> */}

    </>
  )
}

export default App
