
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

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
  const isMobile = useIsMobile();

  return (
    <section className={`py-10 sm:py-12 md:py-16 lg:py-24 overflow-x-hidden ${className}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-3 sm:gap-4 text-center mb-8 md:mb-12">
          <Badge variant="outline" className="bg-background text-sm">{badge}</Badge>
          <h2 className="max-w-2xl text-2xl sm:text-3xl font-bold md:text-4xl px-4">
            {heading}
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm sm:text-base px-4">
            {description}
          </p>
        </div>
        
        {tabs.length > 0 && (
          <Tabs defaultValue={tabs[0].value} className="mt-6 md:mt-8">
            <TabsList className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-4 mx-auto max-w-full overflow-x-auto pb-1">
              {tabs.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap"
                >
                  {tab.icon} <span className="hidden xs:inline">{tab.label}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <div className={`mx-auto mt-6 sm:mt-8 max-w-6xl rounded-lg p-4 sm:p-6 md:p-8 lg:p-12 ${backgroundClass}`}>
              {tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="grid gap-6 lg:gap-8 lg:grid-cols-2 items-center"
                >
                  <div className="flex flex-col gap-3 sm:gap-5">
                    <Badge variant="outline" className="w-fit bg-background text-sm">
                      {tab.content.badge}
                    </Badge>
                    <h3 className="text-xl sm:text-2xl font-bold md:text-3xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">
                      {tab.content.description}
                    </p>
                    <Button asChild className="mt-2 w-full sm:w-fit gap-2" size="lg">
                      <a href={tab.content.buttonLink || "#"}>
                        {tab.content.buttonText}
                      </a>
                    </Button>
                  </div>
                  <div className="flex justify-center lg:justify-end order-first lg:order-last mb-4 lg:mb-0">
                    <img
                      src={tab.content.imageSrc}
                      alt={tab.content.imageAlt}
                      className="rounded-lg shadow-lg object-cover w-full max-w-sm h-auto aspect-video sm:aspect-[4/3]"
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
