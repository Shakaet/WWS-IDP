import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'
import banner from '../assets/banner.jpg'

export const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dialCode: '+880',
    mobile: '',
    email: '',
    password: '',
    agreeTerms: false,
    allowContact: false,
    allowMarketing: false,
  })

  const [errors, setErrors] = useState({})
  const [submittedData, setSubmittedData] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const validate = () => {
    const newErrors = {}
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required'
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required'
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required'
    if (!/^\d{6,15}$/.test(formData.mobile.trim())) newErrors.mobile = 'Enter a valid mobile number'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address'
    if (!formData.password) newErrors.password = 'Password is required'
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters'
    if (!formData.agreeTerms) newErrors.agreeTerms = 'You must agree to the Terms and privacy policy'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    const dataToSubmit = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      dialCode: formData.dialCode,
      mobile: formData.mobile.trim(),
      email: formData.email.trim().toLowerCase(),
      password: formData.password,
      agreeTerms: formData.agreeTerms,
      allowContact: formData.allowContact,
      allowMarketing: formData.allowMarketing,
    }
    setSubmittedData(dataToSubmit)
    // For now, just log. Integrate API call here.
    console.log('Sign up submit:', dataToSubmit)
    alert('Account details captured. Check console for submitted data.')
  }

  const handleGoogleLogin = () => {
    alert('Google login clicked')
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '24px', padding: '32px', alignItems: 'stretch' }}>
      <Motion.aside
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ background: '#fff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 14px rgba(0,0,0,0.08)' }}
      >
        <div style={{ position: 'relative', height: 260, background: '#f6f7fb' }}>
          <img src={banner} alt="Create account" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.0) 20%, rgba(0,0,0,0.45) 100%)' }}></div>
          <div style={{ position: 'absolute', left: 20, bottom: 18, color: '#fff' }}>
            <div style={{ fontSize: 22, fontWeight: 700 }}>Create your IDP account</div>
            <div style={{ opacity: 0.9 }}>One account for all your study needs</div>
          </div>
        </div>
        <div style={{ padding: '22px 22px 26px 22px' }}>
          <ul style={{ margin: 0, paddingLeft: 0, listStyle: 'none', display: 'grid', gap: 12 }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, background: '#4CAF50', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12 }}>✓</span>
              <span>Access your personalised dashboard</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, background: '#4CAF50', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12 }}>✓</span>
              <span>Shortlist and save your favourite courses</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 18, height: 18, borderRadius: 999, background: '#4CAF50', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12 }}>✓</span>
              <span>Same account for website and mobile app</span>
            </li>
          </ul>
          <div style={{ marginTop: 14, fontSize: 12, color: '#555' }}>
            <strong>Note:</strong> We’ll only contact you after you submit a successful enquiry form.
          </div>
        </div>
      </Motion.aside>

      <Motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={{ width: '100%', maxWidth: '540px', background: '#fff', padding: '24px', borderRadius: '12px', boxShadow: '0 2px 14px rgba(0,0,0,0.08)', justifySelf: 'center' }}
      >
        <h2 style={{ marginBottom: '16px' }}>Create your account</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>First name *</label>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First name" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            {errors.firstName && <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>{errors.firstName}</div>}
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Last name *</label>
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last name" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            {errors.lastName && <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>{errors.lastName}</div>}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '140px 1fr', gap: '12px', marginTop: '12px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Dial code</label>
            <select name="dialCode" value={formData.dialCode} onChange={handleChange} style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc' }}>
              <option value="+880">+880</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
              <option value="+61">+61</option>
              <option value="+91">+91</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Mobile number *</label>
            <input name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Mobile number" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc' }} />
            {errors.mobile && <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>{errors.mobile}</div>}
          </div>
        </div>

        <div style={{ marginTop: '12px' }}>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Email *</label>
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc' }} />
          {errors.email && <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>{errors.email}</div>}
        </div>

        <div style={{ marginTop: '12px' }}>
          <label style={{ display: 'block', fontSize: '14px', marginBottom: '6px' }}>Create a password *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #ccc' }} />
          {errors.password && <div style={{ color: '#d32f2f', fontSize: '12px', marginTop: '4px' }}>{errors.password}</div>}
        </div>

        <div style={{ marginTop: '12px', display: 'grid', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} />
            <span>I agree to Terms and privacy policy *</span>
          </label>
          {errors.agreeTerms && <div style={{ color: '#d32f2f', fontSize: '12px' }}>{errors.agreeTerms}</div>}

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input type="checkbox" name="allowContact" checked={formData.allowContact} onChange={handleChange} />
            <span>Please contact me by phone, email or SMS to assist with my enquiry</span>
          </label>

          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
            <input type="checkbox" name="allowMarketing" checked={formData.allowMarketing} onChange={handleChange} />
            <span>I agree to receive occasional communications about courses, offers and other information</span>
          </label>
        </div>

        <button type="submit" style={{ marginTop: '16px', width: '100%', padding: '12px', borderRadius: '999px', background: '#74a7f7', color: '#fff', fontWeight: 600, border: 'none', cursor: 'pointer' }}>
          Create an account
        </button>

        <div style={{ marginTop: '12px', textAlign: 'center' }}>Already have an account? <a href="/signin">Sign in</a></div>

        <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ height: '1px', background: '#e0e0e0', flex: 1 }}></div>
          <div style={{ color: '#888', fontSize: '14px' }}>or</div>
          <div style={{ height: '1px', background: '#e0e0e0', flex: 1 }}></div>
        </div>

        <button type="button" onClick={handleGoogleLogin} style={{ marginTop: '12px', width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
          <img alt="Google" src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" style={{ width: '18px', height: '18px' }} />
          <span>Continue with Google</span>
        </button>

        {submittedData && (
          <pre style={{ marginTop: '16px', background: '#f7f7f7', padding: '12px', borderRadius: '8px', overflow: 'auto' }}>
{JSON.stringify(submittedData, null, 2)}
          </pre>
        )}
      </Motion.form>
    </div>
  )
}
