
import TeamMember from './TeamMember';

/**
 * TeamSection-komponent
 * 
 * Viser seksjon med teammedlemmer.
 */
const TeamSection = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm opacity-0 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <h3 className="text-lg font-medium mb-4">Vårt team</h3>
      <TeamMember 
        name="Jonathan Campher"
        role="Grunnlegger & Webutvikler"
        imageSrc="/lovable-uploads/b7bb1f5a-cbd7-4885-9a85-2750d69cc2e7.png"
        initials="JC"
      />
    </div>
  );
};

export default TeamSection;
