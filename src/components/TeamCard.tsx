import Image from 'next/image';
import Link from 'next/link';
import { TeamMember } from '@/data/team';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const displayName = member.preferredName || member.fullName;
  const fallbackImage = '/images/testimonials/Aakarshi_Srivastava.jpg';
  const photo = member.photoUrl || fallbackImage;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-56">
        <Image src={photo} alt={displayName} fill className="object-cover" />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0D5392] mb-1">{displayName}</h3>
        <p className="text-sm text-gray-600 mb-2">{member.currentRoleAtHub}</p>
        {member.projects?.length > 0 && (
          <p className="text-xs text-[#0D5392] mb-3">Projects: {member.projects.join(', ')}</p>
        )}
        <p className="text-gray-700 text-sm line-clamp-3 mb-4">{member.shortBio}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          {member.linkedIn && (
            <Link href={member.linkedIn} target="_blank" className="text-[#0D5392] hover:underline">LinkedIn</Link>
          )}
          {member.otherSocial && (
            <span className="text-gray-500">|</span>
          )}
          {member.otherSocial && (
            <span className="text-gray-600">{member.otherSocial}</span>
          )}
        </div>
      </div>
    </div>
  );
}


