import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "./ui/link-preview";

const ResumeComponents = ({ name = "Download Resume" }) => {
  return (
    <LinkPreview
      url="https://drive.google.com/file/d/1zPCf-qVfUCxdRSvwQQ_S2f7vyrD-MElb/view?usp=sharing"
      className="font-bold"
    >
      <Button size="lg" className="group">
        {name}
      </Button>
    </LinkPreview>
  );
};

export default ResumeComponents;

{
  /* <a
        className="flex gap-2 items-center"
        href="https://drive.google.com/file/d/1zPCf-qVfUCxdRSvwQQ_S2f7vyrD-MElb/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FileText className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
        {name}
      </a> */
}
