import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import Swal from 'sweetalert2'

const enquirySchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().min(1, 'Email is required').email('Enter a valid email'),
  phone: z
    .string()
    .min(1, 'Mobile number is required')
    .regex(/^[0-9+\-()\s]{7,20}$/i, 'Enter a valid phone number'),
  destination: z.string().min(1, 'Please select a destination'),
  startWhen: z.string().min(1, 'Please select a start time'),
  counsellingMode: z.string().min(1, 'Please select a counselling mode'),
  funding: z.string().min(1, 'Please select a funding option'),
  studyLevel: z.string().min(1, 'Please select a study level'),
  nearestOffice: z.string().min(1, 'Please select the nearest office'),
  agreeTerms: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the terms and privacy policy' })
  }),
  contactConsent: z.literal(true, {
    errorMap: () => ({ message: 'Consent is required to contact you' })
  }),
  marketingOptIn: z.boolean().optional().default(false)
})

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')
  const [submitSuccess, setSubmitSuccess] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      destination: '',
      startWhen: '',
      counsellingMode: '',
      funding: '',
      studyLevel: '',
      nearestOffice: '',
      agreeTerms: true,
      contactConsent: true,
      marketingOptIn: false,
      status: 'pending'
    }
  })

  const onSubmit = async (values) => {
    setIsSubmitting(true);

    try {
      // Add status to the values before sending
      const dataToSubmit = {
        ...values,
        status: 'pending'
      };
      
      console.log(dataToSubmit);
      await axios.post('http://localhost:3000/help-from-wws', dataToSubmit);

      // Show success SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Enquiry Submitted',
        text: 'Your enquiry has been submitted successfully!',
        confirmButtonColor: '#3085d6',
      });

      reset(); // Clear the form
    } catch (err) {
      console.error(err);

      // Show error SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Submission Failed',
        text: err?.response?.data?.message || 'Please try again later.',
        confirmButtonColor: '#d33',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>

      {/* Alerts */}
      {submitSuccess ? (
        <div className="mt-4 rounded-md bg-green-50 px-4 py-3 text-green-800">
          {submitSuccess}
        </div>
      ) : null}
      {submitError ? (
        <div className="mt-4 rounded-md bg-red-50 px-4 py-3 text-red-800">
          {submitError}
        </div>
      ) : null}


      {/* Form */}
      <form className="mt-6" onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">First name*</label>
            <input type="text" className="mt-1 w-full rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="" {...register('firstName')} />
            {errors.firstName ? (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Last name*</label>
            <input type="text" className="mt-1 w-full rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="" {...register('lastName')} />
            {errors.lastName ? (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            ) : null}
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Email address*</label>
            <input type="email" className="mt-1 w-full rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="" {...register('email')} />
            {errors.email ? (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            ) : null}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Mobile number*</label>
            <div className="mt-1 flex gap-2">
              {/* <input
                      type="text"
                      defaultValue={"+880"}
                      className="w-24 rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    /> */}
              <input
                type="tel"
                className="flex-1 rounded-md border-1 border-slate-500 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                {...register('phone')}
              />
            </div>
            {errors.phone ? (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            ) : null}
          </div>

          {/* Selects Row 1 */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Your preferred study destination*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('destination')}>
              <option value="">Select</option>
              <option>USA</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Canada</option>
            </select>
            {errors.destination ? (
              <p className="mt-1 text-sm text-red-600">{errors.destination.message}</p>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">When would you like to start?*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('startWhen')}>
              <option value="">Select</option>
              <option>Within 3 months</option>
              <option>3-6 months</option>
              <option>6-12 months</option>
            </select>
            {errors.startWhen ? (
              <p className="mt-1 text-sm text-red-600">{errors.startWhen.message}</p>
            ) : null}
          </div>

          {/* Selects Row 2 */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Preferred mode of counselling*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('counsellingMode')}>
              <option value="">Select</option>
              <option>In person</option>
              <option>Online</option>
            </select>
            {errors.counsellingMode ? (
              <p className="mt-1 text-sm text-red-600">{errors.counsellingMode.message}</p>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">How would you fund your education?*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('funding')}>
              <option value="">Select</option>
              <option>Self-funded</option>
              <option>Family support</option>
              <option>Scholarship/Loan</option>
            </select>
            {errors.funding ? (
              <p className="mt-1 text-sm text-red-600">{errors.funding.message}</p>
            ) : null}
          </div>

          {/* Selects Row 3 */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Preferred study level*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('studyLevel')}>
              <option value="">Select</option>
              <option>Undergraduate</option>
              <option>Postgraduate</option>
              <option>PhD</option>
            </select>
            {errors.studyLevel ? (
              <p className="mt-1 text-sm text-red-600">{errors.studyLevel.message}</p>
            ) : null}
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Nearest IDP Office*</label>
            <select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-600" {...register('nearestOffice')}>
              <option value="">Select</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
              <option>Sylhet</option>
            </select>
            {errors.nearestOffice ? (
              <p className="mt-1 text-sm text-red-600">{errors.nearestOffice.message}</p>
            ) : null}
          </div>

          {/* Checkboxes */}
          <div className="sm:col-span-2 space-y-3 mt-1">
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register('agreeTerms')} />
              <span className="text-sm text-slate-700">I agree to IDP Terms and privacy policy *</span>
            </label>
            {errors.agreeTerms ? (
              <p className="-mt-2 text-sm text-red-600">{errors.agreeTerms.message}</p>
            ) : null}
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register('contactConsent')} />
              <span className="text-sm text-slate-700">Please contact me by phone, email or SMS to assist with my enquiry*</span>
            </label>
            {errors.contactConsent ? (
              <p className="-mt-2 text-sm text-red-600">{errors.contactConsent.message}</p>
            ) : null}
            <label className="flex items-start gap-3">
              <input type="checkbox" className="mt-1 h-4 w-4 rounded border-slate-300" {...register('marketingOptIn')} />
              <span className="text-sm text-slate-700">I would like to receive updates and offers from IDP</span>
            </label>
          </div>

          {/* Submit */}
          <div className="sm:col-span-2">
            <button type="submit" disabled={isSubmitting} className="inline-flex items-center rounded-full bg-[#11AD00] px-6 py-3 text-white hover:bg-[#4CADFF] disabled:opacity-60 disabled:cursor-not-allowed">
              {isSubmitting ? 'Submitting...' : 'Enquire now'}
            </button>
          </div>
        </div>
      </form>
    </>
  )
}

export default ContactForm