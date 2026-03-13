import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, trim: true, unique: true },
    highlights: { type: [String], default: [] },
    technologies: { type: [String], default: [] },
    links: {
      github: { type: String, default: "" },
      demo: { type: String, default: "" }
    }
  },
  { timestamps: true },
);

export const Project = mongoose.models.Project || mongoose.model("Project", ProjectSchema);

