import React from "react";
import { Target, Lightbulb } from "lucide-react";

const MissionVision = () => {
  return (
    <div className="bg-muted py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-12">
          Our Mission & <span className="text-primary">Vision</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="bg-background shadow-md rounded-lg p-8">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-primary/20 p-4 rounded-full">
                <Target className="text-primary h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-muted-foreground">
              To be the leader in the industry in assisting businesses with
              business setup and company formation in UAE, along with other
              value-added services to help them achieve their business goals.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-background shadow-md rounded-lg p-8">
            <div className="flex justify-center md:justify-start mb-4">
              <div className="bg-secondary/20 p-4 rounded-full">
                <Lightbulb className="text-secondary h-8 w-8" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most preferred business consultant in UAE, helping
              entrepreneurs and business professionals in setting up business in
              Dubai, UAE, and assisting them in company formation as well as
              other business development guidance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
