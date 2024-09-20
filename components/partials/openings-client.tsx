"use client";

import { useState, useEffect } from "react";
import { Search, MapPin, Briefcase, Calendar, X } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MultiSelect } from "@/components/ui/multiselect";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { opening_enums } from "@/drizzle/schema";

export default function OpeningsClient({
  allOpenings,
}: {
  allOpenings: any[];
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilters, setTypeFilters] = useState<string[]>([]);
  const [departmentFilters, setDepartmentFilters] = useState<string[]>([]);
  const [selectedJob, setSelectedJob] = useState(allOpenings[0]);
  // const [selectedJob, setSelectedJob] = useState<Job | null>(jobOpenings[0] || null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filteredJobs = allOpenings.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (typeFilters.length === 0 || typeFilters.includes(job.option)) &&
      (departmentFilters.length === 0 || departmentFilters.includes(job.location)),
  );

  const handleJobSelect = (job: typeof selectedJob) => {
    setSelectedJob(job);
    if (isSmallScreen) {
      setIsModalOpen(true);
    }
  };

  const JobDetails = ({ job }: { job: typeof selectedJob }) => (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{job.title}</h2>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <Briefcase size={14} />
        <span>{job.department}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
        <MapPin size={14} />
        <span>{job.location}</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
        <Calendar size={14} />
        <span>Posted on {job.published.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
      </div>
      <Badge className="mb-4" variant="secondary">
        {job.option}
      </Badge>
      <p className="text-gray-600 mb-4">{job.description}</p>
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Salary Range</h3>
        <p>{job.salary}</p>
      </div>
      <Button className="w-full">Apply Now</Button>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Job Openings</h1>

      <div className="grid gap-6 md:grid-cols-[2fr_1fr_1fr_auto] mb-8">
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            className="pl-8"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <MultiSelect
          options={[...opening_enums.options]}
          placeholder="Job Option"
          selected={typeFilters}
          onChange={setTypeFilters}
        />
        <MultiSelect
          options={[...opening_enums.departments]}
          placeholder="Department"
          selected={departmentFilters}
          onChange={setDepartmentFilters}
        />
        <Button
          onClick={() => {
            setSearchTerm("");
            setTypeFilters([]);
            setDepartmentFilters([]);
          }}
        >
          Clear Filters
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {typeFilters.map((filter) => (
          <Badge key={filter} className="px-2 py-1" variant="secondary">
            {filter}
            <X
              className="ml-1 cursor-pointer"
              size={14}
              onClick={() =>
                setTypeFilters(typeFilters.filter((t) => t !== filter))
              }
            />
          </Badge>
        ))}
        {departmentFilters.map((filter) => (
          <Badge key={filter} className="px-2 py-1" variant="secondary">
            {filter}
            <X
              className="ml-1 cursor-pointer"
              size={14}
              onClick={() =>
                setDepartmentFilters(departmentFilters.filter((l) => l !== filter))
              }
            />
          </Badge>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
        <ScrollArea className="h-[calc(100vh-350px)] pr-4">
          {filteredJobs.map((job) => (
            <Card
              key={job.id}
              className={`mb-4 cursor-pointer transition-colors ${selectedJob.id === job.id ? "bg-accent" : "hover:bg-accent/50"}`}
              onClick={() => handleJobSelect(job)}
            >
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Briefcase size={14} />
                  <span>{job.department}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin size={14} />
                  <span>{job.location}</span>
                </div>
                <Badge variant="secondary">{job.option}</Badge>
              </CardContent>
            </Card>
          ))}
          {filteredJobs.length === 0 && (
            <p className="text-center text-gray-500 mt-8">
              No job openings match your criteria.
            </p>
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
  );
}
