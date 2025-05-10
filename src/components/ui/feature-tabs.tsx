
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TabContent {
  badge: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
}

interface Tab {
  value: string;
  icon: React.ReactNode;
  label: string;
  content: TabContent;
}

interface FeatureTabsProps {
  badge?: string;
  heading?: string;
  description?: string;
  tabs?: Tab[];
  className?: string;
  backgroundClass?: string;
}

const FeatureTabs = ({
  badge = "Features",
  heading = "Our Features",
  description = "Explore our key features",
  tabs = [],
  className = "",
  backgroundClass = "bg-muted/70"
}: FeatureTabsProps) => {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <Badge variant="outline" className="bg-background">{badge}</Badge>
          <h2 className="max-w-2xl text-3xl font-bold md:text-4xl">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            {description}
          </p>
        </div>
        
        {tabs.length > 0 && (
          <Tabs defaultValue={tabs[0].value} className="mt-8">
            <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium"
                >
                  {tab.icon} {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div className={`mx-auto mt-8 max-w-6xl rounded-lg p-6 lg:p-12 ${backgroundClass}`}>
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center"
                >
                  <div className="flex flex-col gap-5">
                    <Badge variant="outline" className="w-fit bg-background">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-2xl font-bold md:text-3xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {tab.content.description}
                    </p>
                    <Button asChild className="mt-2 w-fit gap-2" size="lg">
                      <a href={tab.content.buttonLink || "#"}>
                        {tab.content.buttonText}
                      </a>
                    </Button>
                  </div>
                  <div className="flex justify-center lg:justify-end">
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="rounded-lg shadow-lg object-cover w-full max-w-md h-auto"
                    />
                  </div>
                </TabsContent>
              ))}
            </div>
          </Tabs>
        )}
      </div>
    </section>
  );
};

export { FeatureTabs };
