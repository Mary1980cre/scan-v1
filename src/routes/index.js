import React from "react";
import Main from "../components/Main";
import {Navigate, Route,Routes} from "react-router-dom";
import Authorization from "../components/Authorization/Authorization";
import SearchPage from "../components/SearchPage/SearchPage";
import ResultPage from "../components/ResultPage/ResultPage";
import { useSelector } from "react-redux";
const AppRoutes = () => {
  let companyInfo = useSelector(state => state.profile.companyInfo)
  return companyInfo ? (
        <Routes> 
          <Route path="/" element={<Main />}/>
          <Route path="/search" element={<SearchPage/>}/>
          <Route path="/result" element={<ResultPage/>}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes> 
  ) : (
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/login" element={<Authorization/>} />
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}


export default AppRoutes
