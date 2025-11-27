import { trpc } from "./client"
// import EcommerceHomepage from "./EcommerceHomePage"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CartPage from "./pages/CartPage"
import Form from "./pages/Form"
import ResetPasswordRequest from "./pages/ResetPasswordRequest"
import PasswordResetPage from "./pages/PasswordResetPage"



function App() {
  

const result =trpc.sayHi.query().then((res) => {
  console.log(res)
})

  return (
    <>
      {/* <EcommerceHomepage /> */}

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" Component={EcommerceHomepage} /> */}
          <Route path="/" Component={Form} />
          <Route path="/reset" Component={ResetPasswordRequest} />
          <Route path="/reset-password" Component={PasswordResetPage} />
          <Route path="/checkout/cart" Component={CartPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
