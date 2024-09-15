import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact() {
  return (
    <div className="container mx-auto py-10 max-w-7xl px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription className="text-balance">We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" name="first_name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" name="last_name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" placeholder="john@example.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea className="min-h-[100px]" id="message" name="message" placeholder="Enter your message here" />
              </div>
              <Button className="w-full" type="submit">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div className="text-3xl font-bold">Get in Touch</div>
          <p className="text-muted-foreground">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span>123 Main Street, New York City, NY 12345</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <span>contact@example.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Monday - Friday: 9am - 5pm</span>
            </div>
          </div>
          <div className="pt-6">
            <div className="text-xl font-semibold mb-2">Follow Us</div>
            <div className="flex space-x-4">
              <Button variant="outline" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.882 18.266c-.29.66-.716 1.243-1.256 1.755a5.225 5.225 0 01-1.977 1.184c-.758.285-1.602.446-2.509.446-1.304 0-2.492-.313-3.563-.94a6.696 6.696 0 01-2.489-2.488c-.627-1.071-.94-2.259-.94-3.563 0-1.304.313-2.492.94-3.563a6.696 6.696 0 012.489-2.489c1.071-.627 2.259-.94 3.563-.94.957 0 1.842.148 2.654.446.812.297 1.517.716 2.116 1.256.598.54 1.067 1.168 1.407 1.884.339.716.509 1.48.509 2.292 0 .917-.173 1.745-.52 2.483-.346.738-.87 1.333-1.57 1.785-.701.452-1.558.678-2.57.678-.627 0-1.184-.096-1.672-.289a3.022 3.022 0 01-1.256-.94c-.34-.418-.51-.929-.51-1.534h-.96c0 .806.244 1.517.73 2.134.486.616 1.138 1.1 1.957 1.449.82.35 1.722.525 2.709.525 1.304 0 2.487-.303 3.551-.908 1.064-.605 1.898-1.43 2.502-2.475.605-1.044.908-2.226.908-3.551 0-1.264-.3-2.415-.9-3.454a6.726 6.726 0 00-2.489-2.473c-1.064-.605-2.247-.908-3.551-.908-1.304 0-2.492.313-3.563.94a6.696 6.696 0 00-2.489 2.489c-.627 1.071-.94 2.259-.94 3.563 0 1.304.313 2.492.94 3.563a6.696 6.696 0 002.489 2.489c1.071.627 2.259.94 3.563.94 1.12 0 2.163-.21 3.13-.631.966-.42 1.785-1.042 2.456-1.865l.774.721z" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-16">
        <div className="w-full">
          <h2 className="text-3xl font-bold">
            Come visit!
          </h2>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold">Corporate HQ</h3>
          <p className="text-balance">525 Corporate Drive, Suite 203 Stafford, VA 22554</p>
        </div>
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-xl font-semibold">Europe</h3>
          <p className="text-balance">25, Place De La Madeleine 75008 Paris 08, France</p>
        </div>
        <div className="flex-1 min-w-[250px] max-w-sm">
          <h3 className="text-xl font-semibold">Africa</h3>
          <p className="text-balance">25, Place De La Madeleine 75008 Paris 08, France</p>
        </div>
      </div>
    </div>
  )
}
