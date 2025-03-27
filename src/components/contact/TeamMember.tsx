
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  imageSrc: string;
  initials: string;
}

/**
 * TeamMember-komponent
 * 
 * Viser informasjon om et teammedlem med avatar, navn og rolle.
 */
const TeamMember = ({ name, role, imageSrc, initials }: TeamMemberProps) => {
  return (
    <div className="flex gap-4 items-center">
      <Avatar className="h-16 w-16 border-2 border-campher-blue">
        <AvatarImage 
          src={imageSrc} 
          alt={name} 
          className="object-cover object-top" 
          loading="lazy" 
          width="100"
          height="100"
        />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div>
        <h4 className="font-medium">{name}</h4>
        <p className="text-campher-gray text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamMember;
