import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Home,
  HandCoins,
  Heart,
  MessageSquare,
  Bell,
  CalendarDays,
  Hammer,
  Building2,
  FileText,
  BriefcaseBusiness,
  Landmark,
  Shield,
  Users,
  Settings,
  LogOut,
  Star,
  ChevronRight,
  Mail as MailIcon,
  Phone,
  User,
  Trash2,
  ShieldCheck,
} from "lucide-react";

/**
 * DealZone Dashboard – Lighter Theme (Luxury / Clean / Pro)
 * --------------------------------------------------------
 * Single-file React component you can drop into: src/pages/dashboard/Dashboard.tsx
 * Tailwind + Framer Motion + Lucide icons. No external UI libs required.
 *
 * This version brightens the page background and cards while keeping the dark header/footer.
 * - Softer dark base (#121813) with subtle radial lights and gold haze
 * - Brighter cards (bg-white/[0.06]) + stronger borders
 * - Higher contrast inputs
 */

// ---------- THEME TOKENS ---------- //
const goldFrom = "#b38e4f"; // deep gold
const goldTo = "#d4b369"; // light gold
const pageBase = "#121813"; // slightly lighter than previous
const cardBg = "bg-white/[0.06]"; // brighter than 0.03
const cardBorder = "border border-white/15"; // stronger than /10
const ringFocus = "focus:ring-2 focus:ring-offset-0 focus:ring-[#d4b369]/60";
const textMuted = "text-white/70";
const textSoft = "text-white/85";

// ---------- HELPERS ---------- //
const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="mb-6">
    <h2 className="text-xl md:text-2xl font-semibold text-white flex items-center gap-2">
      <span
        className="inline-block h-2 w-2 rounded-full"
        style={{ background: `linear-gradient(135deg, ${goldFrom}, ${goldTo})` }}
      />
      {title}
    </h2>
    {subtitle && <p className={`mt-1 ${textMuted}`}>{subtitle}</p>}
  </div>
);

const StatCard = ({ icon: Icon, label, value }: { icon: any; label: string; value: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className={`${cardBg} ${cardBorder} rounded-2xl p-5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-md`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className={`text-xs ${textMuted}`}>{label}</p>
        <p className="text-2xl mt-1 font-semibold text-white">{value}</p>
      </div>
      <div
        className="p-3 rounded-xl text-black"
        style={{ background: `linear-gradient(135deg, ${goldFrom}, ${goldTo})` }}
      >
        <Icon className="h-6 w-6" />
      </div>
    </div>
  </motion.div>
);

// ---------- MOCK CONTENT (replace later) ---------- //
const mockOffers = [
  { id: "OF-9234", address: "123 Ocean Dr, Miami, FL", amount: 420000, status: "Pending" },
  { id: "OF-9235", address: "77 Palm Ave, Miami Beach, FL", amount: 1250000, status: "Countered" },
];

const mockForSale = [
  { id: "PR-1201", title: "Sunny Isles Condo", price: 680000 },
  { id: "PR-1188", title: "Fort Lauderdale Duplex", price: 540000 },
];

const mockMessages = [
  { id: "MSG-11", from: "R. Alvarez", preview: "Is the inspection report available?", time: "2h" },
  { id: "MSG-12", from: "M. Carter", preview: "Can we schedule a call tomorrow?", time: "1d" },
];

const mockNotifications = [
  { id: "NTF-88", text: "Your offer OF-9235 received a counter.", time: "30m" },
  { id: "NTF-77", text: "2 new favorites viewed your listing.", time: "5h" },
];

// ---------- MAIN COMPONENT ---------- //
export default function Dashboard() {
  type Section =
    | "overview"
    | "myOffers"
    | "forSale"
    | "favorites"
    | "messages"
    | "notifications"
    | "calendar"
    | "inspector"
    | "broker"
    | "contractor"
    | "titleCompany"
    | "propertyManager"
    | "loanBroker"
    | "dealButler"
    | "insurance"
    | "documents"
    | "accountSettings"
    | "signOut";

  const [section, setSection] = useState<Section>("accountSettings");

  return (
    <div
      className="min-h-screen w-full relative mt-20"
      style={{
        background:
          `radial-gradient(1200px_600px_at_20%_-10%, rgba(255,255,255,0.07), transparent),` +
          `radial-gradient(900px_450px_at_110%_0%, rgba(212,179,105,0.10), transparent),` +
          `${pageBase}`,
      }}
    >
      {/* Soft top spacing if header is dark and sticky */}
      <div className="h-6 md:h-8" />

      <div className="mx-auto max-w-[120rem] px-4 md:px-8">
        {/* Page title */}
        <div className="mb-6 flex items-center gap-3">
          <div
            className="grid h-10 w-10 place-items-center rounded-xl text-black shadow-[0_6px_16px_rgba(212,179,105,0.35)]"
            style={{ background: `linear-gradient(135deg, ${goldFrom}, ${goldTo})` }}
          >
            <LayoutDashboard className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-white text-2xl md:text-3xl font-semibold leading-tight">Dashboard</h1>
            <p className={`${textMuted} text-sm`}>Manage properties, appointments, inbox, documents & account.</p>
          </div>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="lg:sticky lg:top-6 h-max">
            <nav className={`${cardBg} ${cardBorder} rounded-2xl p-4 md:p-5 backdrop-blur-md`}>              
              <SidebarGroup title="Manage Properties">
                <SidebarItem icon={HandCoins} label="My Offers" active={section === "myOffers"} onClick={() => setSection("myOffers")} />
                <SidebarItem icon={Home} label="For Sale" active={section === "forSale"} onClick={() => setSection("forSale")} />
                <SidebarItem icon={Heart} label="My Favorites" active={section === "favorites"} onClick={() => setSection("favorites")} />
              </SidebarGroup>

              <SidebarGroup title="Appointment">
                <SidebarItem icon={CalendarDays} label="Calendar" active={section === "calendar"} onClick={() => setSection("calendar")} />
                <SidebarItem icon={ShieldCheck} label="Inspector" active={section === "inspector"} onClick={() => setSection("inspector")} />
                <SidebarItem icon={Building2} label="Real Estate Broker" active={section === "broker"} onClick={() => setSection("broker")} />
                <SidebarItem icon={Hammer} label="General Contractor" active={section === "contractor"} onClick={() => setSection("contractor")} />
                <SidebarItem icon={Gavel} label="Title Company / Attorney" active={section === "titleCompany"} onClick={() => setSection("titleCompany")} />
                <SidebarItem icon={Users} label="Property Manager" active={section === "propertyManager"} onClick={() => setSection("propertyManager")} />
                <SidebarItem icon={Landmark} label="Loan Broker / Bank (Soon)" active={section === "loanBroker"} onClick={() => setSection("loanBroker")} />
                <SidebarItem icon={BriefcaseBusiness} label="The Deal Butler" active={section === "dealButler"} onClick={() => setSection("dealButler")} />
                <SidebarItem icon={Shield} label="Insurance Broker" active={section === "insurance"} onClick={() => setSection("insurance")} />
              </SidebarGroup>

              <SidebarGroup title="Inbox">
                <SidebarItem icon={MessageSquare} label="Messages" active={section === "messages"} onClick={() => setSection("messages")} />
                <SidebarItem icon={Bell} label="Notifications" active={section === "notifications"} onClick={() => setSection("notifications")} />
              </SidebarGroup>

              <SidebarGroup title="Documents">
                <SidebarItem icon={FileText} label="View My Documents" active={section === "documents"} onClick={() => setSection("documents")} />
              </SidebarGroup>

              <SidebarGroup title="Account">
                <SidebarItem icon={Settings} label="Account Settings" active={section === "accountSettings"} onClick={() => setSection("accountSettings")} />
                <SidebarItem icon={LogOut} label="Sign Out" active={section === "signOut"} onClick={() => setSection("signOut")} />
              </SidebarGroup>
            </nav>
          </aside>

          {/* Content area */}
          <main className="min-w-0">
            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <StatCard icon={HandCoins} label="My Offers" value={12} />
              <StatCard icon={Home} label="For Sale" value={3} />
              <StatCard icon={Heart} label="Favorites" value={9} />
              <StatCard icon={MessageSquare} label="Unread" value={4} />
            </div>

            {/* Section router */}
            <div className="space-y-6">
              {section === "accountSettings" && <AccountSettingsCard />}
              {section === "myOffers" && <MyOffersCard />}
              {section === "forSale" && <ForSaleCard />}
              {section === "favorites" && <FavoritesCard />}
              {section === "messages" && <MessagesCard />}
              {section === "notifications" && <NotificationsCard />}
              {section === "calendar" && <CalendarCard />}
              {section === "documents" && <DocumentsCard />}

              {/* Placeholders for pro-provider sections */}
              {section === "inspector" && <ProviderComingSoon title="Inspector" />}
              {section === "broker" && <ProviderComingSoon title="Real Estate Broker" />}
              {section === "contractor" && <ProviderComingSoon title="General Contractor" />}
              {section === "titleCompany" && <ProviderComingSoon title="Title Company / Attorney" />}
              {section === "propertyManager" && <ProviderComingSoon title="Property Manager" />}
              {section === "loanBroker" && <ProviderComingSoon title="Loan Broker / Bank" />}
              {section === "dealButler" && <ProviderComingSoon title="The Deal Butler" />}
              {section === "insurance" && <ProviderComingSoon title="Insurance Broker" />}
            </div>
          </main>
        </div>
      </div>

      <div className="h-10" />
    </div>
  );
}

// ---------- SIDEBAR SUBCOMPONENTS ---------- //
function SidebarGroup({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <p className={`px-2 pb-2 text-xs uppercase tracking-wider ${textMuted}`}>{title}</p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function SidebarItem({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: any;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors ${
        active ? "bg-white/12 text-white" : `text-white/85 hover:bg-white/8 hover:text-white`
      }`}
    >
      <span className="flex items-center gap-2">
        <Icon className="h-[18px] w-[18px]" />
        {label}
      </span>
      <ChevronRight className="h-4 w-4 opacity-50" />
    </button>
  );
}

// ---------- CONTENT CARDS ---------- //
function ShellCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className={`${cardBg} ${cardBorder} rounded-2xl p-5 md:p-6 backdrop-blur-md ${className}`}
    >
      {children}
    </motion.div>
  );
}

function AccountSettingsCard() {
  return (
    <div className="space-y-6">
      <ShellCard>
        <SectionHeader title="Information" subtitle="Update your profile details." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="First Name" icon={User} placeholder="First name" defaultValue="Chakib" />
          <Field label="Last Name" icon={User} placeholder="Last name" defaultValue="Hocine" />
          <Field label="Email" icon={MailIcon} placeholder="email@example.com" defaultValue="chaikbhocine724@gmail.com" />
          <Field label="Phone" icon={Phone} placeholder="Enter phone number" />
        </div>
        <div className="mt-5">
          <PrimaryButton>Save changes</PrimaryButton>
        </div>
      </ShellCard>

      <ShellCard>
        <SectionHeader title="Change password" subtitle="Secure your account with a strong password." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field type="password" label="Current password" placeholder="Enter current password" />
          <div />
          <Field type="password" label="New password" placeholder="Enter new password" />
          <Field type="password" label="Confirm new password" placeholder="Confirm new password" />
        </div>
        <div className="mt-5">
          <PrimaryButton>Update password</PrimaryButton>
        </div>
      </ShellCard>

      <ShellCard>
        <SectionHeader title="Delete account" subtitle="This will permanently remove all your data. Action cannot be undone." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <Field type="password" label="Enter your password to confirm" placeholder="Your password" />
          <div className="md:col-span-2 flex md:justify-end">
            <DangerButton icon={Trash2}>Delete My Account</DangerButton>
          </div>
        </div>
      </ShellCard>
    </div>
  );
}

function MyOffersCard() {
  return (
    <ShellCard>
      <SectionHeader title="My Offers" subtitle="Track submitted offers and their status." />
      <div className="overflow-hidden rounded-xl border border-white/12">
        <table className="w-full text-left text-sm">
          <thead className="bg-white/[0.06] text-white/80">
            <tr>
              <th className="px-4 py-3 font-medium">Offer #</th>
              <th className="px-4 py-3 font-medium">Property</th>
              <th className="px-4 py-3 font-medium">Amount</th>
              <th className="px-4 py-3 font-medium">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockOffers.map((o) => (
              <tr key={o.id} className="border-t border-white/10 text-white/90">
                <td className="px-4 py-3">{o.id}</td>
                <td className="px-4 py-3">{o.address}</td>
                <td className="px-4 py-3">${o.amount.toLocaleString()}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/8 px-3 py-1 text-xs">
                    <Star className="h-3.5 w-3.5 opacity-70" /> {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ShellCard>
  );
}

function ForSaleCard() {
  return (
    <ShellCard>
      <SectionHeader title="For Sale" subtitle="Properties you listed on DealZone." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockForSale.map((p) => (
          <div key={p.id} className={`${cardBg} ${cardBorder} rounded-xl p-4 text-white/90 hover:shadow-lg transition-shadow`}>
            <p className="text-sm text-white/60">{p.id}</p>
            <p className="mt-1 text-base font-medium">{p.title}</p>
            <p className="mt-2 text-lg font-semibold">${p.price.toLocaleString()}</p>
            <div className="mt-3">
              <SecondaryButton>Manage</SecondaryButton>
            </div>
          </div>
        ))}
      </div>
    </ShellCard>
  );
}

function FavoritesCard() {
  return (
    <ShellCard>
      <SectionHeader title="My Favorites" subtitle="Quick access to saved properties." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className={`${cardBg} ${cardBorder} rounded-xl p-4 text-white/90`}>
            <div className="flex items-center justify-between">
              <p className="text-base font-medium">Premium Villa #{i}</p>
              <Heart className="h-5 w-5 opacity-70" />
            </div>
            <p className={`mt-1 text-sm ${textMuted}`}>Miami, FL</p>
            <p className="mt-2 text-lg font-semibold">$1,250,000</p>
          </div>
        ))}
      </div>
    </ShellCard>
  );
}

function MessagesCard() {
  return (
    <ShellCard>
      <SectionHeader title="Messages" subtitle="Conversations with buyers, sellers and pros." />
      <div className="divide-y divide-white/12">
        {mockMessages.map((m) => (
          <div key={m.id} className="py-4 flex items-start gap-3">
            <div className="h-10 w-10 rounded-full bg-white/10 grid place-items-center text-white/80">{m.from[0]}</div>
            <div className="min-w-0">
              <p className="text-white/90 font-medium">{m.from}</p>
              <p className={`truncate ${textMuted}`}>{m.preview}</p>
            </div>
            <span className={`ml-auto text-xs ${textMuted}`}>{m.time}</span>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <SecondaryButton>Open Inbox</SecondaryButton>
      </div>
    </ShellCard>
  );
}

function NotificationsCard() {
  return (
    <ShellCard>
      <SectionHeader title="Notifications" subtitle="Latest updates across your account." />
      <ul className="space-y-3">
        {mockNotifications.map((n) => (
          <li key={n.id} className="flex items-start gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 grid place-items-center">
              <Bell className="h-4 w-4 text-white/80" />
            </div>
            <div className="min-w-0">
              <p className="text-white/90">{n.text}</p>
              <p className={`text-xs ${textMuted}`}>{n.time} ago</p>
            </div>
          </li>
        ))}
      </ul>
    </ShellCard>
  );
}

function CalendarCard() {
  return (
    <ShellCard>
      <SectionHeader title="Calendar" subtitle="Plan visits, inspections and meetings." />
      <div className="rounded-xl border border-white/12 p-6 text-center text-white/80 bg-white/[0.03]">
        <p className="mb-2">Embed your calendar here (FullCalendar / Google Calendar / custom UI).</p>
        <SecondaryButton>Connect Calendar</SecondaryButton>
      </div>
    </ShellCard>
  );
}

function DocumentsCard() {
  return (
    <ShellCard>
      <SectionHeader title="Documents" subtitle="Contracts, proofs, appraisal reports and more." />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {["Purchase_Agreement.pdf", "Inspection_Report.pdf", "Proof_of_Funds.pdf"].map((name) => (
          <div key={name} className={`${cardBg} ${cardBorder} rounded-xl p-4 text-white/90`}>
            <p className="font-medium">{name}</p>
            <p className={`mt-1 text-xs ${textMuted}`}>Updated 3 days ago</p>
            <div className="mt-3 flex gap-2">
              <SecondaryButton>View</SecondaryButton>
              <SecondaryButton>Download</SecondaryButton>
            </div>
          </div>
        ))}
      </div>
    </ShellCard>
  );
}

function ProviderComingSoon({ title }: { title: string }) {
  return (
    <ShellCard>
      <SectionHeader title={title} subtitle="This module will be available soon." />
    </ShellCard>
  );
}

// ---------- UI PRIMITIVES ---------- //
function Field({
  label,
  icon: Icon,
  type = "text",
  placeholder,
  defaultValue,
}: {
  label: string;
  icon?: any;
  type?: string;
  placeholder?: string;
  defaultValue?: string;
}) {
  const paddingClass = Icon ? "pl-9" : "pl-3.5"; // explicit classes so Tailwind can see both
  return (
    <label className="block">
      <span className={`mb-1 block text-xs font-medium ${textSoft}`}>{label}</span>
      <div className="relative">
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/55" />}
        <input
          type={type}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={`w-full rounded-xl bg-white/[0.08] ${cardBorder} px-3.5 py-2.5 ${paddingClass} text-sm text-white placeholder-white/45 outline-none ${ringFocus}`}
        />
      </div>
    </label>
  );
}

function PrimaryButton({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <button
      className="inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-black shadow-[0_6px_16px_rgba(212,179,105,0.35)] transition-transform active:translate-y-[1px]"
      style={{ background: `linear-gradient(135deg, ${goldFrom}, ${goldTo})` }}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={`inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/[0.06] px-4 py-2 text-sm text-white/90 hover:bg-white/[0.10] transition-colors ${ringFocus}`}>
      {children}
    </button>
  );
}

function DangerButton({ children, icon: Icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <button className="inline-flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-600/90 px-4 py-2 text-sm text-white hover:bg-red-600 transition-colors">
      {Icon && <Icon className="h-4 w-4" />}
      {children}
    </button>
  );
}

// Missing icon import for Gavel (used above)
function Gavel(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
      <path d="M2 21h8v-2H2v2zm19-6.59l-1.41-1.41-4.58 4.59-1.42-1.42 4.59-4.58L16 9l-5 5 2 2-7 7h2l7-7 2 2 5-5z" />
    </svg>
  );
}
