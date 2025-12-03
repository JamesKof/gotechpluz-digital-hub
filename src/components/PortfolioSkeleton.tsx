import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const PortfolioSkeleton = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        <Card className="overflow-hidden border-border animate-fade-in">
          {/* Hero Image Skeleton */}
          <Skeleton className="w-full h-80" />
          
          {/* Header Skeleton */}
          <div className="p-8 md:p-12 space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <Skeleton className="w-16 h-16 rounded-2xl" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-6 w-32" />
                <Skeleton className="h-8 w-3/4" />
              </div>
            </div>
            
            <Skeleton className="h-20 w-full" />
            
            {/* Challenge & Solution Skeleton */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
              <div className="space-y-4">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
            
            {/* Results Skeleton */}
            <div className="mt-12">
              <Skeleton className="h-8 w-64 mx-auto mb-6" />
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="text-center p-6 bg-muted/50 rounded-2xl space-y-2">
                    <Skeleton className="h-10 w-24 mx-auto" />
                    <Skeleton className="h-4 w-32 mx-auto" />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technologies Skeleton */}
            <div className="mt-12 space-y-4">
              <Skeleton className="h-6 w-48" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Skeleton key={i} className="h-10 w-28" />
                ))}
              </div>
            </div>
            
            {/* Testimonial Skeleton */}
            <div className="mt-12 p-8 bg-muted/50 rounded-2xl space-y-4">
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-5 w-5" />
                ))}
              </div>
              <Skeleton className="h-20 w-full" />
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-3 w-24" />
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PortfolioSkeleton;
