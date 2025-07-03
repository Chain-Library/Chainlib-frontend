"use client"

import { useState } from "react"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function PrivacySettingsPage() {
  const router = useRouter()
  const [settings, setSettings] = useState({
    profileVisibility: "public",
    showReadingActivity: true,
    allowFollowRequests: true,
    showFollowingList: true,
    dataSharing: false,
    emailNotifications: true,
    pushNotifications: true,
  })

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: !prev[setting],
    }))
  }

  const handleRadioChange = (setting: keyof typeof settings, value: string) => {
    setSettings((prev) => ({
      ...prev,
      [setting]: value,
    }))
  }

  const handleSave = () => {
    console.log("Saving privacy settings:", settings)
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Mobile Header */}
      <div className="lg:hidden bg-gray-50 p-4 flex items-center gap-3">
        <button onClick={() => router.back()} className="p-1">
          <ArrowLeft size={20} className="text-gray-600" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Privacy Settings</h1>
      </div>

      <div className="p-6 max-w-4xl mx-auto">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-start gap-3 mb-10">
         
          <h1 className="text-xl font-semibold text-gray-800">Privacy Settings</h1>
        </div>

        <div className="space-y-8">
          {/* Profile Visibility */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Profile Visibility</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="profileVisibility"
                  value="public"
                  checked={settings.profileVisibility === "public"}
                  onChange={(e) => handleRadioChange("profileVisibility", e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <div>
                  <div className="font-medium text-gray-900">Public</div>
                  <div className="text-sm text-gray-500">Anyone can see your profile and reading activity</div>
                </div>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="profileVisibility"
                  value="followers"
                  checked={settings.profileVisibility === "followers"}
                  onChange={(e) => handleRadioChange("profileVisibility", e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <div>
                  <div className="font-medium text-gray-900">Followers Only</div>
                  <div className="text-sm text-gray-500">Only people you follow can see your profile</div>
                </div>
              </label>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="profileVisibility"
                  value="private"
                  checked={settings.profileVisibility === "private"}
                  onChange={(e) => handleRadioChange("profileVisibility", e.target.value)}
                  className="w-4 h-4 text-blue-600"
                />
                <div>
                  <div className="font-medium text-gray-900">Private</div>
                  <div className="text-sm text-gray-500">Only you can see your profile</div>
                </div>
              </label>
            </div>
          </div>

          {/* Activity Settings */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Activity Settings</h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Show Reading Activity</div>
                  <div className="text-sm text-gray-500">Let others see what you're currently reading</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.showReadingActivity}
                  onChange={() => handleToggle("showReadingActivity")}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Show Following List</div>
                  <div className="text-sm text-gray-500">Allow others to see who you follow</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.showFollowingList}
                  onChange={() => handleToggle("showFollowingList")}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Allow Follow Requests</div>
                  <div className="text-sm text-gray-500">Let others send you follow requests</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.allowFollowRequests}
                  onChange={() => handleToggle("allowFollowRequests")}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
            </div>
          </div>

          {/* Data & Notifications */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900">Data & Notifications</h3>
            <div className="space-y-4">
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Data Sharing</div>
                  <div className="text-sm text-gray-500">Share anonymized reading data for recommendations</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.dataSharing}
                  onChange={() => handleToggle("dataSharing")}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Email Notifications</div>
                  <div className="text-sm text-gray-500">Receive updates and recommendations via email</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle("emailNotifications")}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
              <label className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Push Notifications</div>
                  <div className="text-sm text-gray-500">Get notified about new books and updates</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={() => handleToggle("pushNotifications")}
                  className="w-4 h-4 text-blue-600 rounded"
                />
              </label>
            </div>
          </div>

          {/* Save Button */}
          <div className="pt-6">
            <button
              onClick={handleSave}
              className="w-full lg:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
