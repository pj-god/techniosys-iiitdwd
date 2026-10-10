import { ClubMembers } from '@/components/ui/ClubMembers';
import Navbar from '@/components/ui/Navbar';

export default function TeamPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#07090e] pt-28">
      <Navbar />
      <ClubMembers />
    </main>
  );
}
