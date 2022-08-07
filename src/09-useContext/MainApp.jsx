import { Navigate, Route, Routes,  } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"


export const MainApp = () => {

  return (
    <>
    <h1>MainApp</h1>
    <hr />
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="about" element={<AboutPage/>}/>
      {/* las rutas no especificadas se redirigen abajo */}
      <Route path="*" element={<Navigate to="/about"/>}/>

    </Routes>
    </>
  )
}