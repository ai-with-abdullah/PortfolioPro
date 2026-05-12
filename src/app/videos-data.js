// Central video demo data — add new videos here
// Simply add a new entry and it will automatically appear on the homepage and case studies page.
//
// How to add a new video:
// 1. Put the .mov or .mp4 file in the project root
// 2. It will be auto-converted to MP4 and placed in public/videos/
//    (or manually convert with: ffmpeg -i "Your Video.mov" -c:v libx264 -preset slow -crf 26 -c:a aac -movflags +faststart -vf "scale=1280:-2" public/videos/your-video.mp4)
// 3. Add an entry below with the src path pointing to /videos/your-filename.mp4

export const videos = [
  {
    id: "kuwait-real-estate",
    title: "AI Sales Agent — Kuwait Real Estate",
    description: "Watch the AI agent qualify a lead, match properties, and book a viewing — all on WhatsApp, in under 60 seconds.",
    src: "/videos/kuwait-real-estate-demo.mp4",
    tag: "Live Demo",
    client: "Best Homes Kuwait",
    flag: "🇰🇼",
  },
  {
    id: "timeline-workflow",
    title: "AI Agent Workflow — Full Pipeline",
    description: "A complete walkthrough of the multi-agent system architecture, from trigger to deal closure.",
    src: "/videos/timeline-1-demo.mp4",
    tag: "Workflow Demo",
    client: "System Architecture",
    flag: "⚙️",
  },
];
