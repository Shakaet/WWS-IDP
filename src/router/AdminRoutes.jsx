import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth/useAuth';
import useAdmin from '../Hooks/role/useAdmin';

const AdminRoutes = ({children}) => {
    let {user,loading}= useAuth()
    let [isAdmin,adminLoading]= useAdmin()


             let location= useLocation()

    if(loading || adminLoading){
        return <progress className="progress w-56"></progress>
    }


    if(user && isAdmin){
        return children
    }


    return <Navigate  to={"/signin"} state={{from:location}} replace></Navigate>



    

};

export default AdminRoutes;