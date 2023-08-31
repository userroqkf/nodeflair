import JobListingCardContainer from "../components/JobListingCardContainer";

const techStackListExample = ["Rest API", "API", "play", "Modular", "Node.js"];

const jobListing = {
  compnayIconURL: "https://nodeflair.com/companies/240.png",
  companyName: "TikTok",
  positionName: "Backend",
  companyRating: "3.6",
  jobTitle: "Full Stack Engineer",
  timeAgo: "about 13 hours ago",
  location: "Singapore",
  salaryRange: "S$6,140 - S$11,960 / mth",
  techStackList: techStackListExample
};

export default {
  component: JobListingCardContainer,
};

const jobListings = Array(10).fill(jobListing);

export const Primary = {
  args: {
    jobListingList: jobListings
  }
};