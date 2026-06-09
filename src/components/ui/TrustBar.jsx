import { ShieldCheck, Award, Clock, Star, Users } from 'lucide-react';

const items = [
  { icon: ShieldCheck, label: 'GST Registered' },
  { icon: Award,       label: 'Licensed Operator' },
  { icon: Clock,       label: '24/7 Support' },
  { icon: Star,        label: '4.9/5 on Google' },
  { icon: Users,       label: '500+ Satisfied Clients' },
];

export default function TrustBar() {
  return (
    <div className="bg-white border-b border-black/[0.06] py-3 px-4">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-1.5 text-pt-muted text-xs">
            <Icon size={13} className="text-pt-gold" />
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}
