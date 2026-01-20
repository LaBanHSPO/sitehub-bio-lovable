import ProfileHeader from "./ProfileHeader";
import CategoryBadge from "./CategoryBadge";
import ProductCard from "./ProductCard";

// Demo data matching Dan Koe's store
const profileData = {
  name: "Dan Koe",
  bio: "Mind, body, spirit, business.",
  avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  socials: {
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com",
  },
};

const products = {
  education: [
    {
      imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=200&h=200&fit=crop",
      title: "The 2 Hour Writer",
      description: "Learn a high-income skill and build a following from zero (with digital writing).",
      price: "$150",
      buttonText: "See What's Inside",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=200&h=200&fit=crop",
      title: "Mental Monetization",
      description: "Monetize your creative work with a knowledge product.",
      price: "$225",
      buttonText: "Enroll Now",
    },
  ],
  newsletter: [
    {
      imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&h=200&fit=crop",
      title: "Eden – AI Canvas & Drive",
      description: "Upload files, YouTube links, and more to a better drive that can always find what you need.",
      buttonText: "Join The Waitlist",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=200&fit=crop",
      title: "One-Person Business Launchpad",
      description: "Full beginner course and access to the full paid library of premium strategies on my substack.",
      buttonText: "Take The Course",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=200&h=200&fit=crop",
      title: "The Art Of Focus",
      description: "My first book to find meaning, reinvent yourself, and create your ideal future.",
      buttonText: "Read Now",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=200&h=200&fit=crop",
      title: "Letters On Reaching Your Potential",
      description: "My personal content creation, marketing, and AI systems updated 2-4x per month.",
      buttonText: "Subscribe to Future-Proof",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=200&h=200&fit=crop",
      title: "Purpose & Profit",
      description: "My latest book. Free PDF or get the paperback on Amazon.",
      buttonText: "Read Now",
    },
  ],
  pastChallenges: [
    {
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&h=200&fit=crop",
      title: "Build A Profitable Personal Brand In 30 Days",
      description: "7 Day challenge replay. Implement your personalized skill stack, minimum viable offer, and distribution system.",
      buttonText: "Watch For Free",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=200&h=200&fit=crop",
      title: "Your First Digital Product In 7 Days",
      description: "7 Day challenge replay. Discover profitable ideas, validate them, build it, and launch it.",
      buttonText: "Watch For Free",
    },
  ],
};

const BioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-lg mx-auto px-4 py-8 md:py-12">
        {/* Profile Header */}
        <ProfileHeader
          name={profileData.name}
          bio={profileData.bio}
          avatarUrl={profileData.avatarUrl}
          socials={profileData.socials}
        />

        {/* Products Section */}
        <div className="mt-8 space-y-3">
          {/* Education Category */}
          <CategoryBadge label="Education" />
          {products.education.map((product, index) => (
            <ProductCard key={`education-${index}`} {...product} />
          ))}

          {/* Newsletter Category */}
          <CategoryBadge label="Newsletter, Eden, and My Books" />
          {products.newsletter.map((product, index) => (
            <ProductCard key={`newsletter-${index}`} {...product} />
          ))}

          {/* Past Challenges Category */}
          <CategoryBadge label="Past Challenges" />
          {products.pastChallenges.map((product, index) => (
            <ProductCard key={`challenges-${index}`} {...product} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-xs">
            Powered by Stan
          </p>
        </div>
      </div>
    </div>
  );
};

export default BioPage;
