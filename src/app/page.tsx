import { Hero } from '@/components/landing/hero';
import { Solutions } from '@/components/landing/solutions';
import { Projects } from '@/components/landing/projects';
import { Consultation } from '@/components/landing/consultation';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Solutions />
      <Separator className="my-16" />
      <Projects />
      <Consultation />
    </div>
  );
}
