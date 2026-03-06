/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Target, 
  Heart,
  Shield,
  BookOpen, 
  Phone, 
  Mail, 
  Instagram, 
  Linkedin, 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2,
  Calendar,
  MessageSquare,
  ArrowRight,
  Quote,
  Download,
  Printer,
  FileText,
  Image as ImageIcon,
  FileCheck,
  ClipboardList,
  MapPin,
  Clock,
  Award,
  Zap,
  Star,
  Camera,
  Music,
  Gamepad2,
  Send,
  Check,
  AlertCircle,
  ExternalLink,
  Facebook,
  Twitter,
  Youtube,
  Globe,
  Briefcase,
  GraduationCap,
  Trophy,
  Coffee,
  Smile,
  Sun,
  Moon,
  Search,
  Filter,
  SortAsc,
  LayoutGrid,
  List,
  Settings,
  Bell,
  User,
  LogOut,
  Plus,
  Minus,
  Trash2,
  Edit2,
  Save,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Key,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Home,
  Info,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MoreHorizontal,
  MoreVertical,
  Share2,
  Heart as HeartIcon,
  MessageCircle,
  Repeat,
  Bookmark,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Mic,
  Video,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Watch,
  Wifi,
  Battery,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Droplets,
  Thermometer,
  Umbrella,
  Anchor,
  Compass,
  Map,
  Navigation,
  Flag,
  Mountain,
  Trees,
  Leaf,
  Flame,
  Zap as ZapIcon,
  Lightbulb,
  Beaker,
  FlaskConical,
  Atom,
  Dna,
  Microscope,
  Stethoscope,
  Activity,
  HeartPulse,
  Brain,
  GraduationCap as GradIcon,
  Library,
  Book,
  Pencil,
  Eraser,
  Palette,
  Brush,
  Scissors,
  Layers,
  Component,
  Box,
  Cpu,
  HardDrive,
  Database,
  Server,
  Network,
  Share,
  Link as LinkIcon,
  Code,
  Terminal,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  Euro,
  Bitcoin,
  Wallet,
  PieChart,
  BarChart,
  LineChart,
  TrendingUp,
  TrendingDown,
  Activity as ActivityIcon,
  Clock as ClockIcon,
  Calendar as CalendarIcon,
  Bell as BellIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Globe as GlobeIcon,
  Search as SearchIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Lock as LockIcon,
  Unlock as UnlockIcon,
  Eye as EyeIcon,
  EyeOff as EyeOffIcon,
  Trash2 as TrashIcon,
  Edit2 as EditIcon,
  Save as SaveIcon,
  Plus as PlusIcon,
  Minus as MinusIcon,
  Check as CheckIcon,
  X as XIcon,
  ChevronRight as ChevronRightIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  ArrowRight as ArrowRightIcon,
  ArrowLeft as ArrowLeftIcon,
  ArrowUp as ArrowUpIcon,
  ArrowDown as ArrowDownIcon,
  ExternalLink as ExternalLinkIcon,
  Download as DownloadIcon,
  Upload as UploadIcon,
  RefreshCw,
  RotateCcw,
  RotateCw,
  Play as PlayIcon,
  Pause as PauseIcon,
  StopCircle,
  FastForward,
  Rewind,
  Volume2 as VolumeIcon,
  VolumeX as VolumeMuteIcon,
  Mic as MicIcon,
  Video as VideoIcon,
  Camera as CameraIcon,
  Image as ImageIcon2,
  File as FileIcon,
  Folder as FolderIcon,
  FolderPlus,
  FolderMinus,
  FilePlus,
  FileMinus,
  Copy,
  Scissors as ScissorsIcon,
  Clipboard,
  Share2 as ShareIcon,
  MoreHorizontal as MoreHorizontalIcon,
  MoreVertical as MoreVerticalIcon,
  Menu as MenuIcon,
  X as XIcon2,
  Search as SearchIcon2,
  Filter as FilterIcon,
  SortAsc as SortAscIcon,
  LayoutGrid as LayoutGridIcon,
  List as ListIcon,
  Settings as SettingsIcon2,
  Bell as BellIcon2,
  User as UserIcon2,
  LogOut as LogOutIcon,
  Plus as PlusIcon2,
  Minus as MinusIcon2,
  Trash2 as TrashIcon2,
  Edit2 as EditIcon2,
  Save as SaveIcon2,
  Eye as EyeIcon2,
  EyeOff as EyeOffIcon2,
  Lock as LockIcon2,
  Unlock as UnlockIcon2,
  Key as KeyIcon,
  CreditCard as CreditCardIcon,
  ShoppingCart as ShoppingCartIcon,
  Package as PackageIcon,
  Truck as TruckIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  HelpCircle as HelpCircleIcon,
  ChevronDown as ChevronDownIcon2,
  ChevronUp as ChevronUpIcon2,
  MoreHorizontal as MoreHorizontalIcon2,
  MoreVertical as MoreVerticalIcon2,
  Share2 as ShareIcon2,
  Heart as HeartIcon2,
  MessageCircle as MessageCircleIcon,
  Repeat as RepeatIcon,
  Bookmark as BookmarkIcon,
  Play as PlayIcon2,
  Pause as PauseIcon2,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Volume2 as VolumeIcon2,
  VolumeX as VolumeMuteIcon2,
  Mic as MicIcon2,
  Video as VideoIcon2,
  Monitor as MonitorIcon,
  Smartphone as SmartphoneIcon,
  Tablet as TabletIcon,
  Laptop as LaptopIcon,
  Watch as WatchIcon,
  Wifi as WifiIcon,
  Battery as BatteryIcon,
  Cloud as CloudIcon,
  CloudRain as CloudRainIcon,
  CloudSnow as CloudSnowIcon,
  CloudLightning as CloudLightningIcon,
  Wind as WindIcon,
  Droplets as DropletsIcon,
  Thermometer as ThermometerIcon,
  Umbrella as UmbrellaIcon,
  Anchor as AnchorIcon,
  Compass as CompassIcon,
  Map as MapIcon,
  Navigation as NavigationIcon,
  Flag as FlagIcon,
  Mountain as MountainIcon,
  Trees as TreesIcon,
  Leaf as LeafIcon,
  Flame as FlameIcon,
  Zap as ZapIcon2,
  Lightbulb as LightbulbIcon,
  Beaker as BeakerIcon,
  FlaskConical as FlaskConicalIcon,
  Atom as AtomIcon,
  Dna as DnaIcon,
  Microscope as MicroscopeIcon,
  Stethoscope as StethoscopeIcon,
  Activity as ActivityIcon2,
  HeartPulse as HeartPulseIcon,
  Brain as BrainIcon,
  GraduationCap as GradIcon2,
  Library as LibraryIcon,
  Book as BookIcon,
  Pencil as PencilIcon,
  Eraser as EraserIcon,
  Palette as PaletteIcon,
  Brush as BrushIcon,
  Scissors as ScissorsIcon2,
  Layers as LayersIcon,
  Component as ComponentIcon,
  Box as BoxIcon,
  Cpu as CpuIcon,
  HardDrive as HardDriveIcon,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Network as NetworkIcon,
  Share as ShareIcon3,
  Link as LinkIcon2,
  Code as CodeIcon,
  Terminal as TerminalIcon,
  Hash as HashIcon,
  AtSign as AtSignIcon,
  Percent as PercentIcon,
  DollarSign as DollarSignIcon,
  Euro as EuroIcon,
  Bitcoin as BitcoinIcon,
  Wallet as WalletIcon,
  PieChart as PieChartIcon,
  BarChart as BarChartIcon,
  LineChart as LineChartIcon,
  TrendingUp as TrendingUpIcon,
  TrendingDown as TrendingDownIcon

} from 'lucide-react';

const WhatsApp = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.299-.771.966-.944 1.165-.173.199-.347.223-.647.075-.3-.15-1.265-.465-2.403-1.485-.888-.79-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.525.149-.18.198-.3.299-.495.101-.195.051-.375-.025-.525-.075-.15-.672-1.62-.922-2.205-.244-.595-.493-.513-.673-.522-.175-.01-.376-.01-.577-.01-.202 0-.527.075-.802.375-.276.3-1.052 1.035-1.052 2.52 0 1.485 1.078 2.925 1.227 3.12.15.195 2.126 3.23 5.136 4.53 2.513 1.083 3.426.868 4.023.81.597-.058 1.766-.72 2.015-1.41.25-.69.25-1.275.174-1.41-.075-.135-.275-.21-.575-.36zm-5.491 7.618c-1.933 0-3.824-.519-5.484-1.503l-.393-.233-4.077 1.07 1.088-3.975-.255-.406C1.845 15.251 1.25 13.158 1.25 11c0-5.926 4.823-10.75 10.75-10.75 5.927 0 10.75 4.824 10.75 10.75 0 5.926-4.823 10.75-10.75 10.75z"/>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Philosophy', href: '/philosophy' },
    { name: 'Who We Serve', href: '/serve' },
    { name: 'Packages', href: '/packages' },
    { name: 'Camps', href: '/camps' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Lead Facilitators', href: '/about' },
    { name: 'Reports', href: '/reports' },
    { name: 'Booking', href: '/booking' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || !isHome ? 'bg-earth/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Users className="text-amber w-8 h-8" />
          <span className="font-black text-2xl tracking-tighter text-white uppercase">CHAZAK XP</span>
        </Link>
        
        <div className="hidden md:flex gap-8 font-medium text-white/80">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} className="hover:text-amber transition-colors text-sm uppercase tracking-widest">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-amber transition-colors text-sm uppercase tracking-widest">
                {link.name}
              </Link>
            )
          ))}
        </div>

        <Link to="/booking" className="hidden md:block bg-terracotta hover:bg-amber text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105">
          Book Chazak Xperience
        </Link>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-earth border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.href.startsWith('/#') ? (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-amber text-lg font-medium"
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link 
                    key={link.name} 
                    to={link.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-amber text-lg font-medium"
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <Link 
                to="/booking" 
                onClick={() => setIsOpen(false)}
                className="bg-terracotta text-white px-6 py-3 rounded-xl font-bold text-center"
              >
                Book Experience
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-earth">
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-earth/70 via-earth/40 to-earth z-10" />
        <img 
          src="https://picsum.photos/seed/sports-team/1920/1080?blur=2" 
          alt="Team sports background" 
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-amber font-bold tracking-[0.3em] uppercase mb-4 block text-sm md:text-base">
            Eternity Begins Here
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 font-serif italic">
            Experiencing <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta via-amber to-terracotta">People</span> for Better.
          </h1>
          <p className="text-lg md:text-xl text-sand mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Leveraging the “some value” of physical training to unlock the eternal value of godliness, leadership, and unity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                to="/portfolio"
                className="block w-full text-center bg-terracotta hover:bg-amber text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-terracotta/20"
              >
                View Our Portfolio
              </Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto"
            >
              <Link 
                to="/booking"
                className="block w-full text-center bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold text-lg transition-all"
              >
                Book your team a Chazak Xperience
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/30"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-amber rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

const Mission = () => {
  return (
    <section id="mission" className="py-24 bg-cream overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-amber/10 rounded-full blur-3xl" />
            <div className="relative z-10 p-8 md:p-12 bg-earth rounded-3xl shadow-2xl text-white">
              <Quote className="text-amber w-12 h-12 mb-6 opacity-50" />
              <p className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-8">
                "For physical training is of some value, but godliness has value for all things, holding promise for both the present life and the life to come."
              </p>
              <p className="text-amber font-bold mb-8 italic">Chazak: Hebrew for Strength.</p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-amber" />
                <span className="font-bold tracking-widest uppercase text-amber">1 Timothy 4:8</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber/20 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-earth mb-6 tracking-tight">
              The 1 Tim 4:8 <span className="text-terracotta">Philosophy</span>
            </h2>
            <div className="space-y-6 text-earth/80 text-lg leading-relaxed">
              <p>
                At Chazak XP, we believe the field is a mirror. On the field, there is no place to hide. True character is revealed in competition; leadership is tested under pressure; and team dynamics are exposed during physical exertion.
              </p>
              <p className="font-bold text-earth">
                The Goal: We don't just build better athletes; we develop Christ-centered leaders for the Church, the Marketplace, and the Institution.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div className="p-6 bg-sand/20 rounded-2xl border border-sand">
                <div className="text-3xl font-black text-terracotta mb-2">100%</div>
                <div className="text-sm font-bold uppercase tracking-wider text-earth/60">Faith Integrated</div>
              </div>
              <div className="p-6 bg-sand/20 rounded-2xl border border-sand">
                <div className="text-3xl font-black text-terracotta mb-2">Experiential</div>
                <div className="text-sm font-bold uppercase tracking-wider text-earth/60">Learning Model</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const WhoWeServe = () => {
  const groups = [
    {
      title: "Church Groups",
      desc: "Moving from staff meetings to 'striving together as one body.' Alignment for Ministry teams and youth groups.",
      icon: <Users className="w-8 h-8" />,
      image: "https://picsum.photos/seed/faith-prayer/800/600"
    },
    {
      title: "Spiritual Corporate Bodies",
      desc: "Developing marketplace leaders who lead with 'Godly Grit,' integrity, and a servant’s heart.",
      icon: <Target className="w-8 h-8" />,
      image: "https://picsum.photos/seed/corporate-business/800/600"
    },
    {
      title: "Institutions",
      desc: "Building cultures of excellence and resilience for schools, NGOs, and professional organizations.",
      icon: <BookOpen className="w-8 h-8" />,
      image: "https://picsum.photos/seed/education-building/800/600"
    }
  ];

  return (
    <section id="serve" className="py-24 bg-sand/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">Who We Serve</h2>
          <p className="text-earth/60 text-lg max-w-2xl mx-auto">Tailored leadership experiences for organizations that value both excellence and eternal purpose.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {groups.map((group, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-sand/50"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={group.image} 
                  alt={group.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-earth/20 group-hover:bg-earth/0 transition-colors" />
              </div>
              <div className="p-8">
                <div className="w-14 h-14 bg-amber/10 rounded-2xl flex items-center justify-center text-amber mb-6 group-hover:bg-amber group-hover:text-white transition-colors">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-bold text-earth mb-4">{group.title}</h3>
                <p className="text-earth/70 leading-relaxed">{group.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    { title: "The Action", desc: "Teams navigating sports-based strategy drills.", img: "https://picsum.photos/seed/sports-action/800/800" },
    { title: "The Huddle", desc: "Denis Nzioka leading a 'Sideline Session' with an open Bible.", img: "https://picsum.photos/seed/bible-study/800/800" },
    { title: "The Breakthrough", desc: "Leaders embracing after a difficult challenge.", img: "https://picsum.photos/seed/team-breakthrough/800/800" },
    { title: "Church Retreat", desc: "Pastoral Staff Alignment Retreat.", img: "https://picsum.photos/seed/church-retreat/800/800" },
    { title: "Corporate Lab", desc: "Executive Leadership 'Pressure Lab'.", img: "https://picsum.photos/seed/corporate-lab/800/800" },
    { title: "Institutional Workshop", desc: "Faculty Culture & Unity Workshop.", img: "https://picsum.photos/seed/faculty-workshop/800/800" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-earth text-white overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-amber font-bold tracking-widest uppercase text-sm mb-4 block">Evidence of Impact</span>
            <h2 className="text-4xl md:text-5xl font-black font-serif italic">Visual Portfolio</h2>
          </div>
          <p className="text-sand max-w-md">A glimpse into the transformative experiences we facilitate across Kenya and beyond.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img 
                src={item.img} 
                alt={item.title} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                <h4 className="text-xl font-bold text-amber mb-2">{item.title}</h4>
                <p className="text-sm text-sand opacity-0 group-hover:opacity-100 transition-opacity">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Packages = () => {
  const packages = [
    {
      name: "Nguzo Package",
      price: "15,000",
      desc: "Perfect for departmental alignment and quick character assessments.",
      features: ["3.5 Hours on the field", "Personality insight session", "Scripture-based reflection", "Digital summary report"],
      cta: "Book Now"
    },
    {
      name: "Ngome Package",
      price: "25,000",
      desc: "Our most popular corporate alignment experience for leadership teams.",
      features: ["Full Day (7 Hours)", "Conflict & Communication labs", "Biblical Leadership workshop"],
      featured: true,
      cta: "Reserve Your Date"
    },
    {
      name: "Boma Package",
      price: "40,000",
      desc: "Total organizational transformation through deep immersion and vision building.",
      features: ["Camp style of team building details", "Group excursions & hikes", "Leadership Under Pressure labs", "Vision & Unity building", "Dance and Hype sessions", "Customized curriculum"],
      cta: "Request Booking"
    },
    {
      name: "Christian DJ Add-on",
      price: "15,000",
      desc: "Elevate your experience with professional Christian entertainment.",
      features: ["Professional Sound System", "Curated Christian Playlist", "Live DJ Performance", "Available for any package"],
      cta: "Add to Package"
    },
    {
      name: "Photography Package",
      price: "10,000",
      desc: "Capture every breakthrough moment with professional event photography.",
      features: ["High-resolution digital photos", "Quick turnaround time", "Available for any package"],
      cta: "Add to Package"
    },
    {
      name: "Board Games Package",
      price: "5,000",
      desc: "Engage your team with curated board games designed for strategy and connection.",
      features: ["Curated strategy games", "Facilitated game sessions", "Available for any package"],
      cta: "Add to Package"
    }
  ];

  return (
    <section id="packages" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">Our Packages</h2>
          <p className="text-earth/60 text-lg">Invest in the eternal value of your team's leadership and unity.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col p-8 rounded-[2.5rem] border ${pkg.featured ? 'border-amber bg-earth text-white ring-8 ring-amber/5' : 'border-sand bg-white text-earth'} shadow-xl relative overflow-hidden`}
            >
              {pkg.featured && (
                <div className="absolute top-6 right-6 bg-amber text-white px-4 py-1 rounded-full font-bold text-xs uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-4 pr-12">{pkg.name}</h3>
              <p className={`${pkg.featured ? 'text-sand' : 'text-earth/60'} mb-8 text-sm`}>{pkg.desc}</p>
              
              <div className="mb-8">
                <span className="text-sm font-bold opacity-50 uppercase tracking-widest">KSh</span>
                <span className="text-5xl font-black ml-2">{pkg.price}</span>
              </div>

              <div className="h-px w-full bg-current opacity-10 mb-8" />

              <ul className="space-y-4 mb-10 flex-grow">
                {pkg.features.map((feat, index) => (
                  <li key={index} className="flex gap-3 text-sm items-start">
                    <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${pkg.featured ? 'text-amber' : 'text-amber'}`} />
                    <span className={pkg.featured ? 'text-sand' : 'text-earth/70'}>{feat}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to={`/booking?package=${encodeURIComponent(pkg.name)}`}
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all transform hover:scale-[1.02] ${pkg.featured ? 'bg-terracotta text-white hover:bg-amber hover:text-white' : 'bg-earth text-white hover:bg-terracotta hover:text-white'}`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Engage", desc: "Participate in structured sports-based challenges designed to test limits.", icon: <Users /> },
    { title: "Observe", desc: "Our facilitators monitor team dynamics and leadership patterns in real-time.", icon: <Target /> },
    { title: "Facilitate", desc: "'The Sideline Huddle'—guided faith-based reflection and Scripture study.", icon: <BookOpen /> },
    { title: "Connect", desc: "Translating field victories into workplace and ministry application.", icon: <ChevronRight /> },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-sand/10">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">How It Works</h2>
          <p className="text-earth/60 text-lg">The 4-Step Process to Team Transformation</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-sand -translate-y-1/2 z-0" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-amber shadow-lg mb-6 border-4 border-cream">
                {React.cloneElement(step.icon as React.ReactElement, { size: 32 })}
              </div>
              <div className="bg-terracotta text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mb-4">
                {i + 1}
              </div>
              <h3 className="text-xl font-bold text-earth mb-2">{step.title}</h3>
              <p className="text-earth/60 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const Founder = () => {
  return (
    <section id="about" className="py-24 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/facilitators/800/1000" 
                alt="Denis Nzioka & Stefanie Wairimu" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/60 to-transparent" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="text-amber font-bold tracking-widest uppercase text-sm mb-2">Lead Facilitators</div>
                <h3 className="text-4xl font-black">Denis Nzioka & Stefanie Wairimu</h3>
              </div>
            </div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber/10 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-earth/5 rounded-full blur-3xl -z-0" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-amber font-bold tracking-widest uppercase text-sm mb-4 block">About the Lead Facilitators</span>
            <h2 className="text-4xl md:text-5xl font-black text-earth mb-8 leading-tight">
              Moving Teams from <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-terracotta to-amber italic font-serif">Performance to Purpose.</span>
            </h2>
            <div className="space-y-6 text-earth/80 text-lg leading-relaxed">
              <p>
                Denis Nzioka and Stefanie Wairimu are full time missionaries committed to spreading the Gospel in the continent of Africa. They serve together as full time missionaries.
              </p>
              <p>
                All proceeds from this go towards supporting mission work and activities to further the gospel to young people in africa.
              </p>
              <p>
                He uses sports as a microcosm of life to reveal the heart of a team and anchor their growth in the eternal truths of Scripture.
              </p>
            </div>

            <div className="mt-12">
              <div className="p-6 bg-white rounded-3xl border border-sand group hover:border-amber/30 transition-all inline-block">
                <div className="text-amber font-black text-3xl mb-1">4 Years</div>
                <div className="text-earth/40 text-xs uppercase font-bold tracking-widest">In the Mission Field</div>
              </div>
            </div>
            
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="https://www.instagram.com/nziokss?igsh=MWF2d3dqeWhncml3" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-sand/20 rounded-full text-earth/60 hover:bg-amber hover:text-white transition-all text-sm font-bold">
                <Instagram size={20} />
                <span>Denis</span>
              </a>
              <a href="https://www.instagram.com/stephanie_nzioka?igsh=MXRkOHN6NGM0b2d0cA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-sand/20 rounded-full text-earth/60 hover:bg-amber hover:text-white transition-all text-sm font-bold">
                <Instagram size={20} />
                <span>Stefanie</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LeadFacilitatorDetails = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-4">
          <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center text-amber">
            <Target size={24} />
          </div>
          <h4 className="text-xl font-bold text-earth">Our Vision</h4>
          <p className="text-earth/60">To see a generation of young people in Africa anchored in the Gospel through the discipline of physical training.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center text-amber">
            <Heart size={24} />
          </div>
          <h4 className="text-xl font-bold text-earth">Our Mission</h4>
          <p className="text-earth/60">Using sports and physical activities as a tool for discipleship, leadership development, and team building.</p>
        </div>
        <div className="space-y-4">
          <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center text-amber">
            <Shield size={24} />
          </div>
          <h4 className="text-xl font-bold text-earth">Our Values</h4>
          <p className="text-earth/60">Integrity, Excellence, and Christ-centeredness in every experience we facilitate.</p>
        </div>
      </div>
    </div>
  </section>
);

const FacilitatorExpertise = () => {
  const expertise = [
    { title: "Team Building", desc: "Crafting experiences that break down silos and build authentic community.", icon: <Users size={24} /> },
    { title: "Leadership Development", desc: "Identifying and nurturing the next generation of leaders through challenge.", icon: <Award size={24} /> },
    { title: "Spiritual Discipleship", desc: "Anchoring every physical lesson in the eternal truths of the Gospel.", icon: <BookOpen size={24} /> },
    { title: "Physical Training", desc: "Using high-intensity activities to build mental and physical resilience.", icon: <Zap size={24} /> },
  ];

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-earth mb-4 uppercase tracking-tighter">Areas of Expertise</h2>
          <div className="w-20 h-1.5 bg-terracotta mx-auto rounded-full" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertise.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-sand bg-white hover:border-amber/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-amber mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-earth mb-3">{item.title}</h4>
              <p className="text-earth/60 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  const [searchParams] = useSearchParams();
  const initialPackage = searchParams.get('package') || 'Ngome Package';
  const initialTab = (searchParams.get('tab') as 'form' | 'receipt') || 'form';
  const [activeTab, setActiveTab] = useState<'form' | 'receipt'>(initialTab);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'receipt' || tab === 'form') {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    groupSize: '',
    package: initialPackage,
    djAddon: false,
    photographyAddon: false,
    boardGamesAddon: false,
    date: '',
    challenge: ''
  });

  const [receiptData, setReceiptData] = useState({
    bookingName: '',
    bookingDate: '',
    amountPaid: '',
    verificationCode: '',
    receiptNo: ''
  });

  const [showReceipt, setShowReceipt] = useState(false);

  const packagePrices: Record<string, number> = {
    'Nguzo Package': 15000,
    'Ngome Package': 25000,
    'Boma Package': 40000,
    'Christian DJ Add-on': 15000,
    'Photography Package': 10000,
    'Board Games Package': 5000,
  };

  const djAddonPrice = 15000;
  const photographyAddonPrice = 10000;
  const boardGamesAddonPrice = 5000;

  const calculateTotal = () => {
    let total = packagePrices[formData.package] || 0;
    if (formData.djAddon && formData.package !== 'Christian DJ Add-on') {
      total += djAddonPrice;
    }
    if (formData.photographyAddon && formData.package !== 'Photography Package') {
      total += photographyAddonPrice;
    }
    if (formData.boardGamesAddon && formData.package !== 'Board Games Package') {
      total += boardGamesAddonPrice;
    }
    return total;
  };

  const handleSubmit = (e: React.FormEvent, method: 'whatsapp' | 'email' = 'whatsapp') => {
    if (e) e.preventDefault();
    
    const total = calculateTotal();
    const deposit = total * 0.5;
    
    if (method === 'whatsapp') {
      const message = `*New Booking Request - Chazak XP*%0A%0A` +
        `*Name:* ${formData.name}%0A` +
        `*Organization:* ${formData.organization}%0A` +
        `*Group Size:* ${formData.groupSize}%0A` +
        `*Package:* ${formData.package} (KSh ${(packagePrices[formData.package] || 0).toLocaleString()})%0A` +
        `*DJ Add-on:* ${formData.djAddon ? `Yes (+KSh ${djAddonPrice.toLocaleString()})` : 'No'}%0A` +
        `*Photography:* ${formData.photographyAddon ? `Yes (+KSh ${photographyAddonPrice.toLocaleString()})` : 'No'}%0A` +
        `*Board Games:* ${formData.boardGamesAddon ? `Yes (+KSh ${boardGamesAddonPrice.toLocaleString()})` : 'No'}%0A` +
        `*Preferred Date:* ${formData.date}%0A` +
        `*Challenge:* ${formData.challenge}%0A%0A` +
        `*--- Cost Summary ---*%0A` +
        `*Total Cost:* KSh ${total.toLocaleString()}%0A` +
        `*Deposit Required (50%):* KSh ${deposit.toLocaleString()}%0A` +
        `*Balance:* KSh ${deposit.toLocaleString()}`;
      
      window.open(`https://wa.me/254791624455?text=${message}`, '_blank');
      alert('Booking request details prepared! Redirecting to WhatsApp for confirmation.');
    } else {
      const subject = `New Booking Request - Chazak XP`;
      const body = `New Booking Request - Chazak XP\n\n` +
        `Name: ${formData.name}\n` +
        `Organization: ${formData.organization}\n` +
        `Group Size: ${formData.groupSize}\n` +
        `Package: ${formData.package} (KSh ${(packagePrices[formData.package] || 0).toLocaleString()})\n` +
        `DJ Add-on: ${formData.djAddon ? `Yes` : 'No'}\n` +
        `Photography: ${formData.photographyAddon ? `Yes` : 'No'}\n` +
        `Board Games: ${formData.boardGamesAddon ? `Yes` : 'No'}\n` +
        `Preferred Date: ${formData.date}\n` +
        `Challenge: ${formData.challenge}\n\n` +
        `--- Cost Summary ---\n` +
        `Total Cost: KSh ${total.toLocaleString()}\n` +
        `Deposit Required (50%): KSh ${deposit.toLocaleString()}\n` +
        `Balance: KSh ${deposit.toLocaleString()}`;
      
      window.location.href = `mailto:xperiencechazak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      alert('Booking request details prepared! Opening your email client.');
    }
  };

  const handleRequestReceipt = (method: 'whatsapp' | 'email' = 'whatsapp') => {
    if (!receiptData.bookingName || !receiptData.bookingDate || !receiptData.amountPaid) {
      alert('Please fill in your name, booking date, and amount paid before requesting a code.');
      return;
    }

    if (method === 'whatsapp') {
      const message = `*Receipt Request - Chazak XP*%0A%0A` +
        `*Client Name:* ${receiptData.bookingName}%0A` +
        `*Booking Date:* ${receiptData.bookingDate}%0A` +
        `*Amount Paid:* KSh ${Number(receiptData.amountPaid).toLocaleString()}%0A%0A` +
        `Hi Denis, I have completed my payment. Please provide the verification code to download my official receipt.`;
      
      window.open(`https://wa.me/254791624455?text=${message}`, '_blank');
      alert('Receipt request details prepared! Redirecting to WhatsApp. Denis will provide you with a verification code once payment is confirmed.');
    } else {
      const subject = `Receipt Request - Chazak XP`;
      const body = `Receipt Request - Chazak XP\n\n` +
        `Client Name: ${receiptData.bookingName}\n` +
        `Booking Date: ${receiptData.bookingDate}\n` +
        `Amount Paid: KSh ${Number(receiptData.amountPaid).toLocaleString()}\n\n` +
        `Hi Denis, I have completed my payment. Please provide the verification code to download my official receipt.`;
      
      window.location.href = `mailto:xperiencechazak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      alert('Receipt request details prepared! Opening your email client.');
    }
  };

  const handleGenerateReceipt = () => {
    if (!receiptData.bookingName || !receiptData.bookingDate || !receiptData.amountPaid) {
      alert('Please fill in all booking details (Name, Date, and Amount) before generating the receipt.');
      return;
    }

    if (receiptData.verificationCode.toUpperCase() === 'CHAZAK_PAID') {
      const newReceiptNo = `CXP-${Math.floor(Math.random() * 90000) + 10000}`;
      setReceiptData(prev => ({ ...prev, receiptNo: newReceiptNo }));
      setShowReceipt(true);
      
      // Scroll to top of receipt
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      alert('Invalid verification code. Please contact Denis via WhatsApp to get your code after payment confirmation.');
    }
  };

  const printReceipt = () => {
    window.print();
  };

  return (
    <section id="booking" className="py-24 bg-earth text-white relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Book Your <br /><span className="text-amber italic font-serif">Chazak Xperience</span></h2>
            <p className="text-sand text-lg mb-12 max-w-md">
              Ready to transform your team? Fill out the form below or request your official receipt if you've already completed your payment.
            </p>
            
            <div className="flex gap-4 mb-12">
              <button 
                onClick={() => setActiveTab('form')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'form' ? 'bg-terracotta text-white shadow-lg' : 'bg-white/5 text-sand hover:bg-white/10'}`}
              >
                <Calendar size={20} /> New Booking
              </button>
              <button 
                onClick={() => setActiveTab('receipt')}
                className={`px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${activeTab === 'receipt' ? 'bg-terracotta text-white shadow-lg' : 'bg-white/5 text-sand hover:bg-white/10'}`}
              >
                <FileText size={20} /> Download Receipt
              </button>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-amber border border-white/10">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-olive mb-1">Direct Call</div>
                  <a href="tel:+254791624455" className="text-xl font-bold hover:text-amber transition-colors">+254 791 624 455</a>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-amber border border-white/10">
                  <WhatsApp size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-olive mb-1">WhatsApp</div>
                  <a href="https://wa.me/254791624455" target="_blank" rel="noopener noreferrer" className="text-xl font-bold hover:text-amber transition-colors">Chat with us</a>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-amber border border-white/10">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-olive mb-1">Email Us</div>
                  <a href="mailto:xperiencechazak@gmail.com" className="text-xl font-bold hover:text-amber transition-colors">xperiencechazak@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 glass rounded-[2rem] border-amber/20">
              <h4 className="text-amber font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 size={20} /> Secure Booking & Payments
              </h4>
              <div className="space-y-4 text-sm text-sand">
                <p>
                  <span className="font-bold text-white block mb-1">Deposit Requirement:</span>
                  A 50% deposit of the package fee is required to secure your booking date.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="font-bold text-amber block mb-1">M-Pesa</span>
                    0711 771 320<br />(Denis Nzioka)
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <span className="font-bold text-amber block mb-1">Bank Transfer</span>
                    <a 
                      href="https://wa.me/254791624455?text=Hi%20Chazak%20XP%2C%20I%20would%20like%20to%20request%20bank%20transfer%20details%20for%20my%20booking." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-amber transition-colors underline decoration-amber/30 underline-offset-4"
                    >
                      Click here to request bank details via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-cream rounded-[2.5rem] p-8 md:p-12 text-earth shadow-2xl"
          >
            {activeTab === 'form' ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                      placeholder="John Doe"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Organization</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                      placeholder="Company or Church Name"
                      onChange={(e) => setFormData({...formData, organization: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Group Size</label>
                    <input 
                      type="number" 
                      required
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                      placeholder="e.g. 25"
                      onChange={(e) => setFormData({...formData, groupSize: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Preferred Package</label>
                    <select 
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all appearance-none"
                      onChange={(e) => setFormData({...formData, package: e.target.value})}
                      value={formData.package}
                    >
                      <option value="Nguzo Package">Nguzo Package (KSh 15k)</option>
                      <option value="Ngome Package">Ngome Package (KSh 25k)</option>
                      <option value="Boma Package">Boma Package (KSh 40k)</option>
                      <option value="Christian DJ Add-on">Christian DJ Add-on (KSh 15k)</option>
                      <option value="Photography Package">Photography Package (KSh 10k)</option>
                      <option value="Board Games Package">Board Games Package (KSh 5k)</option>
                    </select>
                  </div>
                </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-sand/20 border border-sand rounded-2xl">
                      <input 
                        type="checkbox" 
                        id="djAddon"
                        className="w-5 h-5 accent-terracotta"
                        checked={formData.djAddon}
                        onChange={(e) => setFormData({...formData, djAddon: e.target.checked})}
                      />
                      <label htmlFor="djAddon" className="text-sm font-bold text-earth cursor-pointer">
                        Add Christian DJ (+KSh 15k)
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-sand/20 border border-sand rounded-2xl">
                      <input 
                        type="checkbox" 
                        id="photoAddon"
                        className="w-5 h-5 accent-terracotta"
                        checked={formData.photographyAddon}
                        onChange={(e) => setFormData({...formData, photographyAddon: e.target.checked})}
                      />
                      <label htmlFor="photoAddon" className="text-sm font-bold text-earth cursor-pointer">
                        Add Photography (+KSh 10k)
                      </label>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-sand/20 border border-sand rounded-2xl">
                      <input 
                        type="checkbox" 
                        id="boardGamesAddon"
                        className="w-5 h-5 accent-terracotta"
                        checked={formData.boardGamesAddon}
                        onChange={(e) => setFormData({...formData, boardGamesAddon: e.target.checked})}
                      />
                      <label htmlFor="boardGamesAddon" className="text-sm font-bold text-earth cursor-pointer">
                        Add Board Games (+KSh 5k)
                      </label>
                    </div>
                  </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Your Team's Greatest Challenge?</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all resize-none"
                    placeholder="Tell us what you're facing..."
                    onChange={(e) => setFormData({...formData, challenge: e.target.value})}
                  />
                </div>

                <div className="p-6 bg-earth text-white rounded-2xl space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-sand/60">Selected Package</span>
                    <span className="font-bold">KSh {(packagePrices[formData.package] || 0).toLocaleString()}</span>
                  </div>
                  {formData.djAddon && formData.package !== 'Christian DJ Add-on' && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-sand/60">DJ Add-on</span>
                      <span className="font-bold">KSh {djAddonPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {formData.photographyAddon && formData.package !== 'Photography Package' && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-sand/60">Photography Package</span>
                      <span className="font-bold">KSh {photographyAddonPrice.toLocaleString()}</span>
                    </div>
                  )}
                  {formData.boardGamesAddon && formData.package !== 'Board Games Package' && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-sand/60">Board Games Package</span>
                      <span className="font-bold">KSh {boardGamesAddonPrice.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="pt-3 border-t border-white/10 flex justify-between items-center">
                    <span className="text-amber font-bold uppercase tracking-widest text-xs">Total Estimate</span>
                    <span className="text-2xl font-black">KSh {calculateTotal().toLocaleString()}</span>
                  </div>
                  <div className="text-[10px] text-sand/50 uppercase tracking-widest text-center">
                    50% Deposit (KSh {(calculateTotal() * 0.5).toLocaleString()}) required to secure date
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button 
                    type="button"
                    onClick={(e) => handleSubmit(e as any, 'whatsapp')}
                    className="w-full bg-terracotta text-white py-5 rounded-2xl font-bold text-lg hover:bg-amber hover:text-white transition-all shadow-xl shadow-earth/10 flex items-center justify-center gap-3"
                  >
                    <WhatsApp size={20} /> Book via WhatsApp
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => handleSubmit(e as any, 'email')}
                    className="w-full bg-white border-2 border-earth text-earth py-5 rounded-2xl font-bold text-lg hover:bg-cream transition-all flex items-center justify-center gap-3"
                  >
                    <Mail size={20} /> Book via Email
                  </button>
                </div>
              </form>
            ) : (
              <div className="space-y-8">
                {!showReceipt ? (
                  <>
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h3 className="text-2xl font-black mb-2">Receipt Generator</h3>
                        <p className="text-earth/60">Enter your booking details to generate your official receipt.</p>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Full Name</label>
                          <input 
                            type="text" 
                            className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                            placeholder="Name used during booking"
                            onChange={(e) => setReceiptData({...receiptData, bookingName: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Booking Date</label>
                          <input 
                            type="date" 
                            className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                            onChange={(e) => setReceiptData({...receiptData, bookingDate: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Amount Paid (KSh)</label>
                          <input 
                            type="number" 
                            className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                            placeholder="e.g. 12500"
                            onChange={(e) => setReceiptData({...receiptData, amountPaid: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Verification Code</label>
                          <input 
                            type="text" 
                            className="w-full px-6 py-4 bg-white border border-sand rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 transition-all"
                            placeholder="Enter code provided by Denis"
                            onChange={(e) => setReceiptData({...receiptData, verificationCode: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                        <button 
                          onClick={() => handleRequestReceipt('whatsapp')}
                          className="w-full py-4 bg-white border-2 border-earth text-earth rounded-2xl font-bold hover:bg-cream transition-all flex items-center justify-center gap-2"
                        >
                          <WhatsApp size={18} /> Via WhatsApp
                        </button>
                        <button 
                          onClick={() => handleRequestReceipt('email')}
                          className="w-full py-4 bg-white border-2 border-sand text-earth/60 rounded-2xl font-bold hover:bg-cream transition-all flex items-center justify-center gap-2"
                        >
                          <Mail size={18} /> Via Email
                        </button>
                      </div>
                      <button 
                        onClick={handleGenerateReceipt}
                        className="w-full py-4 bg-earth text-white rounded-2xl font-bold hover:bg-amber transition-all flex items-center justify-center gap-2"
                      >
                        <Download size={18} /> Generate Receipt
                      </button>
                    </div>
                    <p className="text-[10px] text-center text-earth/40 uppercase tracking-widest">
                      * Verification code is provided after payment confirmation
                    </p>
                  </>
                ) : (
                  <div className="receipt-container animate-in fade-in zoom-in duration-300">
                      <div className="border-4 border-double border-sand p-8 rounded-xl bg-white text-earth">
                        <div className="flex justify-between items-start mb-8 pb-8 border-b border-sand">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Users className="text-amber w-6 h-6" />
                              <span className="font-black text-xl tracking-tighter uppercase">CHAZAK XP</span>
                            </div>
                            <p className="text-xs text-earth/60 uppercase tracking-widest">Official Booking Receipt</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-bold text-earth/40 uppercase">Receipt No.</p>
                            <p className="font-mono text-sm">{receiptData.receiptNo}</p>
                          </div>
                        </div>

                        <div className="space-y-6 mb-12">
                          <div className="grid grid-cols-2 gap-8">
                            <div>
                              <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Billed To</p>
                              <p className="font-bold text-lg">{receiptData.bookingName}</p>
                            </div>
                            <div>
                              <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Booking Date</p>
                              <p className="font-bold text-lg">{receiptData.bookingDate}</p>
                            </div>
                          </div>

                          <div className="pt-6 border-t border-sand">
                            <div className="flex justify-between items-center mb-4">
                              <p className="text-earth/60">Service Description</p>
                              <p className="font-bold">Team Building Xperience</p>
                            </div>
                            <div className="flex justify-between items-center py-4 border-y border-sand">
                              <p className="text-earth/60 font-bold">Total Amount Paid</p>
                              <p className="text-2xl font-black text-terracotta">KSh {Number(receiptData.amountPaid).toLocaleString()}</p>
                            </div>
                          </div>
                        </div>

                        <div className="text-center space-y-4">
                          <div className="inline-block px-4 py-2 bg-amber/10 text-amber rounded-full text-xs font-bold uppercase tracking-widest">
                            Payment Confirmed
                          </div>
                          <p className="text-[10px] text-earth/40 leading-relaxed">
                            This is a computer-generated receipt. For any queries, please contact us at xperiencechazak@gmail.com or via WhatsApp at +254 711 771 320.
                          </p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 no-print">
                        <button 
                          onClick={() => setShowReceipt(false)}
                          className="py-4 bg-cream text-earth/60 rounded-2xl font-bold hover:bg-sand transition-all"
                        >
                          Back
                        </button>
                        <button 
                          onClick={() => {
                            const message = `*Official Receipt Generated - Chazak XP*%0A%0A` +
                              `*Receipt No:* ${receiptData.receiptNo}%0A` +
                              `*Client:* ${receiptData.bookingName}%0A` +
                              `*Date:* ${receiptData.bookingDate}%0A` +
                              `*Amount:* KSh ${Number(receiptData.amountPaid).toLocaleString()}%0A%0A` +
                              `The client has generated their official receipt.`;
                            window.open(`https://wa.me/254791624455?text=${message}`, '_blank');
                          }}
                          className="py-4 bg-olive text-white rounded-2xl font-bold hover:bg-olive/90 transition-all flex items-center justify-center gap-2"
                        >
                          <WhatsApp size={18} /> Notify WhatsApp
                        </button>
                        <button 
                          onClick={printReceipt}
                          className="py-4 bg-terracotta text-white rounded-2xl font-bold hover:bg-amber transition-all flex items-center justify-center gap-2"
                        >
                          <Printer size={18} /> Print / Save PDF
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  };

  const Footer = () => {
    return (
      <footer className="bg-earth text-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Users className="text-amber w-8 h-8" />
                <span className="font-black text-2xl tracking-tighter uppercase">CHAZAK XP</span>
              </div>
              <p className="text-sand max-w-sm mb-8 leading-relaxed">
                Led by Denis Nzioka & Stefanie Wairimu, we use the "some value" of physical training to unlock the eternal value of godliness. Moving teams from performance to purpose.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/254791624455" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber hover:text-white transition-all" title="WhatsApp">
                  <WhatsApp size={20} />
                </a>
                <a href="https://www.instagram.com/nziokss?igsh=MWF2d3dqeWhncml3" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber hover:text-white transition-all" title="Denis Instagram">
                  <Instagram size={20} />
                </a>
                <a href="https://www.instagram.com/stephanie_nzioka?igsh=MXRkOHN6NGM0b2d0cA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-amber hover:text-white transition-all" title="Stefanie Instagram">
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-amber text-sm">Quick Links</h4>
              <ul className="space-y-4 text-sand">
                <li><Link to="/philosophy" className="hover:text-white transition-colors">Statement of Faith</Link></li>
                <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link to="/reports" className="hover:text-white transition-colors">Assessment Reports</Link></li>
                <li><Link to="/booking?tab=receipt" className="hover:text-white transition-colors">Download Receipt</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-8 uppercase tracking-widest text-amber text-sm">Location</h4>
              <p className="text-sand text-sm mb-6">Nairobi, Kenya. Serving teams across the East African region with excellence and grit.</p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-olive text-sm">
            <p>© 2024 Chazak XP. All Rights Reserved.</p>
            <div className="flex gap-8">
              <span>Kenya Office: Nairobi</span>
            </div>
          </div>
        </div>
      </footer>
    );
};

const Camps = () => {
  const camps = [
    {
      title: "Youth Camp",
      desc: "A one-day immersive experience for teenagers to build resilience, leadership, and faith through sports.",
      img: "https://picsum.photos/seed/youth-camp/800/600"
    },
    {
      title: "Teens/Youth Week",
      desc: "A full week of intense character building, spiritual growth, and team dynamics for the next generation.",
      img: "https://picsum.photos/seed/teens-week/800/600"
    },
    {
      title: "Ministry Leaders Retreat",
      desc: "Refreshing and aligning ministry teams in a natural environment through physical and spiritual exercise.",
      img: "https://picsum.photos/seed/ministry-retreat/800/600"
    },
    {
      title: "Outdoor Activities & Excursions",
      desc: "Group excursions and outdoor activities like hiking, designed to challenge the body and refresh the spirit.",
      img: "https://picsum.photos/seed/hiking/800/600"
    }
  ];

  return (
    <section id="camps" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">Camps & Retreats</h2>
          <p className="text-earth/60 text-lg">Immersive experiences in the heart of nature.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {camps.map((camp, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] overflow-hidden group aspect-video"
            >
              <img src={camp.img} alt={camp.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{camp.title}</h3>
                <p className="text-sand/80">{camp.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Layout Wrapper for Orientation Handling ---
const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen pt-20 md:pt-0"
    >
      {children}
    </motion.div>
  );
};

const PrivacyPolicy = () => {
  return (
    <PageLayout>
      <div className="pt-32 pb-24 bg-cream min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-12 rounded-[3rem] shadow-xl border border-sand"
          >
            <h1 className="text-4xl font-black text-earth mb-8">Privacy Policy</h1>
            <div className="space-y-6 text-earth/70 leading-relaxed">
              <p className="font-bold text-earth">Last Updated: March 2024</p>
              <p>
                At Chazak XP, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This policy outlines how we collect, use, and protect your data.
              </p>
              
              <h2 className="text-2xl font-bold text-earth mt-8">1. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us when you book a session, sign up for our newsletter, or contact us. This may include your name, organization, email address, phone number, and any other details relevant to your booking.
              </p>

              <h2 className="text-2xl font-bold text-earth mt-8">2. How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process and confirm your bookings.</li>
                <li>Communicate with you regarding your "Chazak Xperience".</li>
                <li>Send you relevant updates and promotional materials (with your consent).</li>
                <li>Improve our services and customer experience.</li>
              </ul>

              <h2 className="text-2xl font-bold text-earth mt-8">3. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. Your data is stored on secure servers and is only accessible by authorized personnel.
              </p>

              <h2 className="text-2xl font-bold text-earth mt-8">4. Third-Party Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>

              <h2 className="text-2xl font-bold text-earth mt-8">5. Your Consent</h2>
              <p>
                By using our site, you consent to our privacy policy.
              </p>

              <div className="mt-12 p-6 bg-olive/10 rounded-2xl border border-olive/20">
                <p className="text-earth font-medium">
                  If you have any questions regarding this privacy policy, you may contact us at <a href="mailto:xperiencechazak@gmail.com" className="font-bold underline">xperiencechazak@gmail.com</a>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageLayout>
  );
};

const Reports = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState('');
  const [reportData, setReportData] = useState({
    clientName: '',
    sessionDate: '',
    teamBuilding: '',
    leadership: '',
    teamwork: '',
    conflicts: '',
    strengths: '',
    development: ''
  });
  const [showReport, setShowReport] = useState(false);
  const [requestData, setRequestData] = useState({
    clientName: '',
    sessionDate: '',
    email: ''
  });

  const handleRequestReport = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Report Request: ${requestData.clientName}`;
    const body = `Hi Denis,%0A%0AI would like to request the assessment report for our session on ${requestData.sessionDate}.%0A%0AClient: ${requestData.clientName}%0AEmail: ${requestData.email}%0A%0APlease fill the report on the website so I can download it.`;
    window.open(`mailto:xperiencechazak@gmail.com?subject=${subject}&body=${body}`);
    alert('Report request sent! Once the admin fills the report, it will be available for download here.');
  };

  const handleAdminLogin = () => {
    if (adminCode.toUpperCase() === 'CHAZAK_ADMIN') {
      setIsAdmin(true);
    } else {
      alert('Invalid admin code.');
    }
  };

  const handleGenerateReport = (e: React.FormEvent) => {
    e.preventDefault();
    setShowReport(true);
  };

  const printReport = () => {
    window.print();
  };

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {!isAdmin && !showReport ? (
          <div className="space-y-16">
            <div className="text-center">
              <ClipboardList className="w-16 h-16 text-amber mx-auto mb-6" />
              <h2 className="text-4xl font-black text-earth mb-4">Assessment Reports</h2>
              <p className="text-earth/60 max-w-2xl mx-auto">
                Post-session assessment reports are generated by our facilitators. 
                If your session is complete, request your report below. 
                Once processed, you can download it using the admin portal or by coordinating with your facilitator.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Client Request Form */}
              <div className="p-8 bg-cream rounded-[2.5rem] border border-sand shadow-sm">
                <h3 className="text-xl font-bold text-earth mb-6 flex items-center gap-2">
                  <Mail className="text-amber" size={20} /> Request Your Report
                </h3>
                <form onSubmit={handleRequestReport} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-earth/40">Organization Name</label>
                    <input 
                      type="text" required
                      className="w-full px-5 py-3 bg-white border border-sand rounded-xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      placeholder="e.g. St. Peters Church"
                      onChange={(e) => setRequestData({...requestData, clientName: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-earth/40">Session Date</label>
                    <input 
                      type="date" required
                      className="w-full px-5 py-3 bg-white border border-sand rounded-xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      onChange={(e) => setRequestData({...requestData, sessionDate: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-earth/40">Your Email</label>
                    <input 
                      type="email" required
                      className="w-full px-5 py-3 bg-white border border-sand rounded-xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      placeholder="john@example.com"
                      onChange={(e) => setRequestData({...requestData, email: e.target.value})}
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-4 bg-terracotta text-white rounded-xl font-bold hover:bg-amber transition-all shadow-lg shadow-terracotta/10"
                  >
                    Send Request to Admin
                  </button>
                </form>
              </div>

              {/* Admin Access */}
              <div className="p-8 bg-earth text-white rounded-[2.5rem] shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Lock className="text-amber" size={20} /> Admin Portal
                  </h3>
                  <p className="text-sand text-sm mb-8">Facilitators only. Enter your access code to generate or edit assessment reports.</p>
                  
                  <div className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-olive">Access Code</label>
                      <input 
                        type="password" 
                        className="w-full px-5 py-3 bg-white/10 border border-white/10 rounded-xl outline-none focus:ring-2 focus:ring-terracotta/50 text-white"
                        placeholder="••••••••"
                        value={adminCode}
                        onChange={(e) => setAdminCode(e.target.value)}
                      />
                    </div>
                    <button 
                      onClick={handleAdminLogin}
                      className="w-full py-4 bg-white text-earth rounded-xl font-bold hover:bg-amber hover:text-white transition-all"
                    >
                      Login to Generator
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-amber/10 rounded-full blur-3xl" />
              </div>
            </div>
          </div>
        ) : isAdmin && !showReport ? (
          <div className="space-y-12">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-black text-earth">Generate Assessment Report</h2>
              <button onClick={() => setIsAdmin(false)} className="text-earth/40 hover:text-earth/60 font-bold">Logout</button>
            </div>

            <form onSubmit={handleGenerateReport} className="space-y-8 bg-cream p-10 rounded-[3rem] border border-sand">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Client/Organization Name</label>
                  <input 
                    type="text" required
                    className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    onChange={(e) => setReportData({...reportData, clientName: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Session Date</label>
                  <input 
                    type="date" required
                    className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    onChange={(e) => setReportData({...reportData, sessionDate: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Team Building Assessment</label>
                  <textarea rows={3} required className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    placeholder="How did the team engage in building activities?"
                    onChange={(e) => setReportData({...reportData, teamBuilding: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Leadership Observations</label>
                  <textarea rows={3} required className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    placeholder="Key leadership traits observed during the session."
                    onChange={(e) => setReportData({...reportData, leadership: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Teamwork & Synergy</label>
                  <textarea rows={3} required className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    placeholder="Observations on collaboration and communication."
                    onChange={(e) => setReportData({...reportData, teamwork: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Conflicts & Resolution</label>
                  <textarea rows={3} required className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    placeholder="How were challenges and conflicts handled?"
                    onChange={(e) => setReportData({...reportData, conflicts: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Key Strengths</label>
                  <textarea rows={3} required className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    placeholder="What are the team's greatest assets?"
                    onChange={(e) => setReportData({...reportData, strengths: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Areas for Personal Development</label>
                  <textarea rows={3} required className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                    placeholder="Recommended areas for future growth."
                    onChange={(e) => setReportData({...reportData, development: e.target.value})}
                  />
                </div>
              </div>

              <button type="submit" className="w-full py-5 bg-earth text-white rounded-2xl font-black text-lg hover:bg-amber transition-all shadow-xl">
                Generate Official Report
              </button>
            </form>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="bg-white border-8 border-double border-sand p-12 rounded-[3rem] shadow-2xl text-earth">
              <div className="flex justify-between items-start mb-12 pb-8 border-b border-sand">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Users className="text-amber w-8 h-8" />
                    <span className="font-black text-3xl tracking-tighter uppercase">CHAZAK XP</span>
                  </div>
                  <h1 className="text-xl font-bold text-earth uppercase tracking-widest">Team Building Assessment Report</h1>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-earth/40 uppercase">Report ID</p>
                  <p className="font-mono text-sm">REP-{Math.floor(Math.random() * 90000) + 10000}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Organization</p>
                  <p className="font-bold text-2xl">{reportData.clientName}</p>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Session Date</p>
                  <p className="font-bold text-2xl">{reportData.sessionDate}</p>
                </div>
              </div>

              <div className="space-y-10 mb-16">
                <div className="p-8 bg-cream rounded-[2rem]">
                  <h3 className="text-amber font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                    <Target size={18} /> Team Building Assessment
                  </h3>
                  <p className="text-earth/80 leading-relaxed">{reportData.teamBuilding}</p>
                </div>

                <div className="p-8 bg-cream rounded-[2rem]">
                  <h3 className="text-amber font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                    <Users size={18} /> Leadership Observations
                  </h3>
                  <p className="text-earth/80 leading-relaxed">{reportData.leadership}</p>
                </div>

                <div className="p-8 bg-cream rounded-[2rem]">
                  <h3 className="text-amber font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                    <CheckCircle2 size={18} /> Teamwork & Synergy
                  </h3>
                  <p className="text-earth/80 leading-relaxed">{reportData.teamwork}</p>
                </div>

                <div className="p-8 bg-cream rounded-[2rem]">
                  <h3 className="text-amber font-bold uppercase tracking-widest text-sm mb-4 flex items-center gap-2">
                    <MessageSquare size={18} /> Conflicts & Resolution
                  </h3>
                  <p className="text-earth/80 leading-relaxed">{reportData.conflicts}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="p-8 bg-olive/10 rounded-[2rem] border border-olive/20">
                    <h3 className="text-olive font-bold uppercase tracking-widest text-sm mb-4">Key Strengths</h3>
                    <p className="text-earth leading-relaxed">{reportData.strengths}</p>
                  </div>
                  <div className="p-8 bg-amber/5 rounded-[2rem] border border-amber/10">
                    <h3 className="text-amber font-bold uppercase tracking-widest text-sm mb-4">Areas for Development</h3>
                    <p className="text-earth/80 leading-relaxed">{reportData.development}</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-12 border-t border-sand">
                <p className="text-sm text-earth/60 italic mb-2">"Moving teams from performance to purpose."</p>
                <p className="text-[10px] text-earth/40 uppercase tracking-widest">© 2024 Chazak XP Assessment System</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-12 no-print">
              <button 
                onClick={() => setShowReport(false)}
                className="py-5 bg-cream text-earth/60 rounded-2xl font-bold hover:bg-sand transition-all"
              >
                Back to Generator
              </button>
              <button 
                onClick={printReport}
                className="py-5 bg-terracotta text-white rounded-2xl font-bold hover:bg-amber transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                <Printer size={20} /> Download Report (PDF)
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const ReportsPage = () => (
  <PageLayout>
    <div className="pt-24 bg-white min-h-screen">
      <Reports />
    </div>
  </PageLayout>
);

const HomePage = () => (
  <PageLayout>
    <Mission />
    <WhoWeServe />
    <HowItWorks />
    <Portfolio />
    <Booking />
  </PageLayout>
);

const PhilosophyPage = () => (
  <PageLayout>
    <div className="pt-24 bg-white min-h-screen">
      <Mission />
    </div>
  </PageLayout>
);

const WhoWeServePage = () => (
  <PageLayout>
    <div className="pt-24 bg-cream min-h-screen">
      <WhoWeServe />
    </div>
  </PageLayout>
);

const PackagesPage = () => (
  <PageLayout>
    <div className="pt-24 bg-cream min-h-screen">
      <Packages />
    </div>
  </PageLayout>
);

const CampsPage = () => (
  <PageLayout>
    <div className="pt-24 bg-white min-h-screen">
      <Camps />
    </div>
  </PageLayout>
);

const PortfolioPage = () => (
  <PageLayout>
    <div className="pt-24 bg-earth min-h-screen">
      <Portfolio />
    </div>
  </PageLayout>
);

const AboutPage = () => (
  <PageLayout>
    <div className="pt-24 min-h-screen">
      <Founder />
      <LeadFacilitatorDetails />
      <FacilitatorExpertise />
    </div>
  </PageLayout>
);

const BookingPage = () => (
  <PageLayout>
    <div className="pt-24 bg-earth min-h-screen">
      <Booking />
    </div>
  </PageLayout>
);

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="font-sans text-earth selection:bg-amber/30 overflow-x-hidden">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/philosophy" element={<PhilosophyPage />} />
          <Route path="/serve" element={<WhoWeServePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/camps" element={<CampsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
