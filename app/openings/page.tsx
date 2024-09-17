'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, MapPin, Briefcase, Calendar, X } from 'lucide-react'
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

// Dummy data for job openings
const jobOpenings = [
  { id: 1, title: "Frontend Developer", type: "Full-time", location: "New York", description: "We are looking for a skilled Frontend Developer to join our team.", company: "TechCorp", postedDate: "2023-05-15", salary: "$80,000 - $120,000" },
  { id: 2, title: "Backend Engineer", type: "Full-time", location: "San Francisco", description: "Seeking an experienced Backend Engineer to build scalable systems.", company: "DataSystems Inc.", postedDate: "2023-05-14", salary: "$90,000 - $140,000" },
  { id: 3, title: "UX Designer", type: "Part-time", location: "Remote", description: "Join our design team to create intuitive user experiences.", company: "DesignHub", postedDate: "2023-05-13", salary: "$60,000 - $80,000" },
  { id: 4, title: "DevOps Specialist", type: "Contract", location: "London", description: "Help us streamline our development and deployment processes.", company: "CloudOps Ltd.", postedDate: "2023-05-12", salary: "£500 - £700 per day" },
  { id: 5, title: "Data Scientist", type: "Full-time", location: "Berlin", description: "Analyze complex data sets and drive insights for our products.", company: "AI Innovations GmbH", postedDate: "2023-05-11", salary: "€70,000 - €110,000" },
]

const jobTypes = ["Full-time", "Part-time", "Contract"]
const locations = ["New York", "San Francisco", "Remote", "London", "Berlin"]

type MultiSelectProps = {
  options: string[]
  selected: string[]
  onChange: (selected: string[]) => void
  placeholder: string
}

const MultiSelect = ({ options, selected, onChange, placeholder }: MultiSelectProps) => {
  return (
    <Select
      onValueChange={(value) => {
        if (selected.includes(value)) {
          onChange(selected.filter(item => item !== value))
        } else {
          onChange([...selected, value])
        }
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder={placeholder}>
          {selected.length > 0 ? `${selected.length} selected` : placeholder}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option} value={option}>
            <div className="flex items-center space-x-2">
              <Checkbox checked={selected.includes(option)} />
              <span>{option}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default function JobOpenings() {
  const [searchTerm, setSearchTerm] = useState('')
  const [typeFilters, setTypeFilters] = useState<string[]>([])
  const [locationFilters, setLocationFilters] = useState<string[]>([])
  const [selectedJob, setSelectedJob] = useState(jobOpenings[0])
  const [isSmallScreen, setIsSmallScreen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const filteredJobs = jobOpenings.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (typeFilters.length === 0 || typeFilters.includes(job.type)) &&
    (locationFilters.length === 0 || locationFilters.includes(job.location))
  )

  const handleJobSelect = (job: typeof selectedJob) => {
    setSelectedJob(job)
    if (isSmallScreen) {
      setIsModalOpen(true)
    }
  }

  const JobDetails = ({ job }: { job: typeof selectedJob }) => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <Briefcase size={14} />
        <span>{job.company}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <MapPin size={14} />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Calendar size={14} />
        <span>Posted on {job.postedDate}</span>
      </div>
      <Badge variant="secondary" className="mb-4">{job.type}</Badge>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Salary Range</h3>
        <p>{job.salary}</p>
      </div>
      <Button className="w-full">Apply Now</Button>
    </div>
  )

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Openings</h1>
      
      <div className="grid gap-6 md:grid-cols-[2fr_1fr_1fr_auto] mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
        <MultiSelect
          options={jobTypes}
          selected={typeFilters}
          onChange={setTypeFilters}
          placeholder="Job Type"
        />
        <MultiSelect
          options={locations}
          selected={locationFilters}
          onChange={setLocationFilters}
          placeholder="Location"
        />
        <Button onClick={() => { setSearchTerm(''); setTypeFilters([]); setLocationFilters([]); }}>
          Clear Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {typeFilters.map(filter => (
          <Badge key={filter} variant="secondary" className="px-2 py-1">
            {filter}
            <X
              size={14}
              className="ml-1 cursor-pointer"
              onClick={() => setTypeFilters(typeFilters.filter(t => t !== filter))}
            />
          </Badge>
        ))}
        {locationFilters.map(filter => (
          <Badge key={filter} variant="secondary" className="px-2 py-1">
            {filter}
            <X
              size={14}
              className="ml-1 cursor-pointer"
              onClick={() => setLocationFilters(locationFilters.filter(l => l !== filter))}
            />
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <ScrollArea className="h-[calc(100vh-350px)] pr-4">
          {filteredJobs.map(job => (
            <Card 
              key={job.id} 
              className={`mb-4 cursor-pointer transition-colors ${selectedJob.id === job.id ? 'bg-accent' : 'hover:bg-accent/50'}`}
              onClick={() => handleJobSelect(job)}
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Briefcase size={14} />
                  <span>{job.company}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
                <Badge variant="secondary">{job.type}</Badge>
              </CardContent>
            </Card>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-500 mt-8">No job openings match your criteria.</p>
          )}
        </ScrollArea>

        {!isSmallScreen && (
          <Card className="h-[calc(100vh-350px)] overflow-auto">
            <JobDetails job={selectedJob} />
          </Card>
        )}
      </div>

      {isSmallScreen && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Job Details</DialogTitle>
            </DialogHeader>
            <JobDetails job={selectedJob} />
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
