import React from 'react'
import { Navigate } from "react-router-dom";
export default function Profile() {
    if(localStorage.getItem('userLogin')){
        return (
            <div>Profile</div>
          )
    }
    else{
        alert("Vui Lòng Đăng Nhập Để Vào Trang Này")
        return <Navigate to={'/login'} />
    }
}
