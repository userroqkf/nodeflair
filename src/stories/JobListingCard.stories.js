import JobListingCard from "../components/JobListingCard";

export default {
  component: JobListingCard,
}

const techStackListExample = ["Rest API", "API", "play", "Modular", "Node.js"]

export const Primary = {
  args: {
    compnayIconURL: "https://nodeflair.com/companies/240.png",
    companyName: "TikTok",
    positionName: "Backend",
    companyRating: "3.6",
    jobTitle: "Full Stack Engineer",
    timeAgo: "about 13 hours ago",
    location: "Singapore",
    salaryRange: "S$6,140 - S$11,960 / mth",
    techStackList: techStackListExample

  }
}