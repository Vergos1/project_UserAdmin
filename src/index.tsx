import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <React.StrictMode>
  //     <Router>
  //         <Routes>
  //             <Route path="/" element={<Dashboard />} />
  //             <Route path="/signIn" element={<SignIn />} />
  //             <Route path="/payments" element={<Payments />} />
  //         </Routes>
  //     </Router>
  // </React.StrictMode>,
)
