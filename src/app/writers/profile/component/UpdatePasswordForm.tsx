

'use client'

import { useState } from 'react'

const UpdatePasswordForm = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors: { [key: string]: string } = {}

    if (!oldPassword) newErrors.oldPassword = 'Old password is required.'
    if (!newPassword) newErrors.newPassword = 'New password is required.'
    if (newPassword.length < 6) newErrors.newPassword = 'New password must be at least 6 characters.'
    if (newPassword !== confirmPassword) newErrors.confirmPassword = 'Passwords do not match.'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      console.log({ oldPassword, newPassword })
      setSuccess(true)
    } else {
      setSuccess(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Update Password</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Old Password</label>
        <input
          type="password"
          placeholder="Enter Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.oldPassword && <p className="text-sm text-red-500 mt-1">{errors.oldPassword}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.newPassword && <p className="text-sm text-red-500 mt-1">{errors.newPassword}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>
          )}
        </div>
      </div>

      {success && (
        <div className="mb-4 text-green-600 font-medium">
          Password updated successfully!
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-4">
        <button
          type="button"
          onClick={() => {
            setOldPassword('')
            setNewPassword('')
            setConfirmPassword('')
            setErrors({})
            setSuccess(false)
          }}
          className="flex-1 bg-blue-50 text-blue-800 py-3 rounded-md text-sm font-medium hover:bg-blue-100"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-3 rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Save Change
        </button>
      </div>
    </form>
  )
}

export default UpdatePasswordForm
