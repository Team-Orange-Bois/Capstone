// import React from 'react'
// import firebase from 'firebase/app'
// import fireApp from './firebaseConfig'
// import {useAuthState} from 'react-firebase-hooks/auth'

// export default function TestGoogleAuth() {
//   const [user, loading, error] = useAuthState(fireApp.auth())

//   let provider = new firebase.auth.GoogleAuthProvider()

//   const handleClick = () => {
//     fireApp
//       .auth()
//       .signInWithPopup(provider)
//       .then(function(result) {
//         // This gives you a Google Access Token. You can use it to access the Google API.
//         let token = result.credential.accessToken
//         // The signed-in user info.
//         let GoogleUser = result.user
//       })
//       .catch(function(error) {
//         // Handle Errors here.
//         let errorCode = error.code
//         let errorMessage = error.message
//         // The email of the user's account used.
//         let email = error.email
//         // The firebase.auth.AuthCredential type that was used.
//         let credential = error.credential
//         // ...
//       })
//   }

//   const logout = () => {
//     fireApp.auth().signOut()
//   }

//   if (loading) {
//     return (
//       <div className="outercontainer">
//         <p style={{color: '#FE1BCB'}}>Initialising User...</p>
//       </div>
//     )
//   }
//   if (error) {
//     return (
//       <div className="outercontainer">
//         <p style={{color: '#FE1BCB'}}>Error: {error}</p>
//       </div>
//     )
//   }

//   return (
//     <div className="outercontainer">
//       {user ? (
//         <div>
//           <h1 style={{color: '#FE1BCB'}}>Hello {user.displayName}</h1>
//           <button type="button" onClick={logout}>
//             Log Out
//           </button>
//         </div>
//       ) : (
//         <button type="button" onClick={() => handleClick()}>
//           Sign In With Google
//         </button>
//       )}
//     </div>
//   )
// }
