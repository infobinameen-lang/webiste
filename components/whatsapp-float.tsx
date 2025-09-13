"use client"

import { Button } from "@/components/ui/button"

const MessageCircleIcon = () => (
  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    />
  </svg>
)

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2347030363774" // Updated to use the correct WhatsApp number
    const message = encodeURIComponent("Hello! I would like to learn more about your consulting services.")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
      size="icon"
    >
      <MessageCircleIcon />
      <span className="sr-only">Contact us on WhatsApp</span>
    </Button>
  )
}
