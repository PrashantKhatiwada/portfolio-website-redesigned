"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-20 bg-muted/50 dark:bg-muted/10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              Feel free to reach out to me through any of the following channels. I'm always open to discussing new
              projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col space-y-4 mt-8">
              <a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span>github.com/PrashantKhatiwada</span>
              </a>

              <a
                href="https://linkedin.com/in/prashantkhatiwada10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span>linkedin.com/in/prashantkhatiwada10</span>
              </a>

              <a
                href="mailto:pkhatiwada@caldwell.edu"
                className="flex items-center space-x-3 text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span>pkhatiwada@caldwell.edu</span>
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
