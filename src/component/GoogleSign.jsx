import { useLocation, useNavigate } from 'react-router-dom'
// import { Context } from '../AuthProvider/Provider'
import { toast } from 'react-toastify'
import useAuth from '../Hooks/useAuth/useAuth'

const GoogleSign = () => {

  //      const handleGoogleLogin = () => {
  //     alert('Google login clicked')
  //   }

  //  let {googleSign}= useContext(Context)
  let { googleSign } = useAuth()
  let navigate = useNavigate()
  let location = useLocation()
  const redirectPath = location.state?.from || "/";

  const handleGoogle = () => {
    googleSign()
      .then(() => {
        toast.success("Google Sign in successfully!");
        navigate(redirectPath);

      })
      .catch((error) => {
        toast.error(error.message || "Failed to create account.");
      });
  };
  return (
    <button type="button" onClick={handleGoogle} className="mt-3 w-full px-3 py-2 rounded-lg border border-slate-300 bg-white flex items-center justify-center gap-2 hover:bg-slate-50">
      <img alt="Google" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-[18px] h-[18px]" />
      <span>Continue with Google</span>
    </button>
  )
}

export default GoogleSign