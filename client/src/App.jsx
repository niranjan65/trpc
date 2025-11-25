import { trpc } from "./client"
// import EcommerceHomepage from "./EcommerceHomePage"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CartPage from "./pages/CartPage"
import Form from "./pages/Form"



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
          <Route path="/checkout/cart" Component={CartPage} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
