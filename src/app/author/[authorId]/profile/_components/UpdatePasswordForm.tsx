'use client'

import PageDetail from '@/app/_components/PageDetail';
import type { ReactElement } from 'react';
import { useState } from 'react';

export default function UpdatePassword(): ReactElement {
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
    <>
      <PageDetail title='Update Password' />
      <form onSubmit={handleSubmit} className=" justify-start items-center px-4 w-full mx-auto flex gap-y-10 flex-col">
        <h2 className="text-title-large text-neutral-600 text-start w-full font-semibold mb-4">Update Password</h2>

        <PasswordInput value={oldPassword} setter={setOldPassword} errors={errors} label='Old Password' />

        <div className='w-full'>
          <label className="block text-label-large font-medium text-neutral-600">New Password</label>
          <input
            type="password"
            placeholder="Enter New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-400"
          />
          {errors.newPassword && <p className="text-body-medium text-red-500 mt-1">{errors.newPassword}</p>}
        </div>

        <div className='w-full'>
          <label className="block text-label-large font-medium text-neutral-600">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-400"
          />
          {errors.confirmPassword && (
            <p className="text-body-medium text-red-500 mt-1">{errors.confirmPassword}</p>
          )}
        </div>

        {success && (
          <div className="mb-4 text-green-600 font-medium">
            Password updated successfully!
          </div>
        )}

        <div className="flex w-full flex-col md:flex-row gap-4">
          <button
            type="button"
            onClick={() => {
              setOldPassword('')
              setNewPassword('')
              setConfirmPassword('')
              setErrors({})
              setSuccess(false)
            }}
            className="flex-1 bg-blue-50 text-blue-800 py-3 rounded-md text-body-medium font-medium hover:bg-blue-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 bg-blue-600 text-white py-3 rounded-md text-body-medium font-medium hover:bg-blue-700"
          >
            Save Change
          </button>
        </div>
      </form>
    </>
  )
}

interface PasswordInputProps {
  setter: (e: string) => void;
  label: string;
  value: string;
  errors: { [key: string]: string };
}

function PasswordInput({ setter, label, value, errors }: PasswordInputProps) {
  return (
    <div className="w-full">
      <label className="block text-lg font-medium text-gray-700 mb-3">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <input
          type="password"
          placeholder="Enter Old Password"
          value={value}
          onChange={(e) => setter(e.target.value)}
          className="w-full pl-12 pr-4 py-4 text-gray-600 placeholder-gray-400 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />
      </div>
      {errors.oldPassword && (
        <p className="text-sm text-red-500 mt-2">{errors.oldPassword}</p>
      )}
    </div>
  )
}


