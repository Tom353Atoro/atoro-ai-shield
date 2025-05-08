
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { AlertTriangle } from 'lucide-react';

interface CategoryTabsProps {
  currentCategory: string;
  setCurrentCategory: (category: string) => void;
  categories: any[];
  children: React.ReactNode;
  hasError: boolean;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({
  currentCategory,
  setCurrentCategory,
  categories,
  children,
  hasError
}) => {
  return (
    <Tabs value={currentCategory} onValueChange={setCurrentCategory} className="mb-12">
      <div className="flex justify-center">
        <TabsList className="grid grid-cols-auto-fit-md w-fit">
          <TabsTrigger value="all">All Topics</TabsTrigger>
          {categories.map((category: any) => (
            <TabsTrigger key={category._id} value={category._id}>{category.title}</TabsTrigger>
          ))}
        </TabsList>
      </div>

      {hasError && (
        <Alert variant="destructive" className="mb-6 mt-6">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle>Error Loading Blog Content</AlertTitle>
          <AlertDescription>
            There was a problem loading blog content from Sanity. Please check your console for more details.
          </AlertDescription>
        </Alert>
      )}

      <TabsContent value={currentCategory} className="mt-8">
        {children}
      </TabsContent>
    </Tabs>
  );
};

export default CategoryTabs;
