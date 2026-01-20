import { Instagram, Twitter, Youtube } from "lucide-react";

interface ProfileHeaderProps {
  name: string;
  bio: string;
  avatarUrl: string;
  socials?: {
    instagram?: string;
    twitter?: string;
    youtube?: string;
  };
}

const ProfileHeader = ({ name, bio, avatarUrl, socials }: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4">
      {/* Avatar */}
      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden ring-2 ring-border">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="text-xl md:text-2xl font-bold text-foreground">{name}</h1>

      {/* Bio */}
      <p className="text-muted-foreground text-sm md:text-base max-w-xs">
        {bio}
      </p>

      {/* Social Icons */}
      {socials && (
        <div className="flex items-center gap-4">
          {socials.instagram && (
            <a
              href={socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {socials.twitter && (
            <a
              href={socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
          )}
          {socials.youtube && (
            <a
              href={socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Youtube className="w-5 h-5" />
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileHeader;
