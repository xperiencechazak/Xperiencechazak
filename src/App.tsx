/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
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
  Mic2,
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
  Loader2,
  Share2,
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
          <img src="/images/logo.png" alt="Chazak XP Logo" className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
        </Link>
        
        <div className="hidden lg:flex gap-6 xl:gap-8 font-medium text-white/80">
          {navLinks.map((link) => (
            link.href.startsWith('/#') ? (
              <a key={link.name} href={link.href} className="hover:text-amber transition-colors text-xs xl:text-sm uppercase tracking-widest whitespace-nowrap">
                {link.name}
              </a>
            ) : (
              <Link key={link.name} to={link.href} className="hover:text-amber transition-colors text-xs xl:text-sm uppercase tracking-widest whitespace-nowrap">
                {link.name}
              </Link>
            )
          ))}
        </div>

        <Link to="/booking" className="hidden xl:block bg-terracotta hover:bg-amber text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105 whitespace-nowrap">
          Book Chazak Xperience
        </Link>

        <button className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
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
            className="lg:hidden bg-earth border-t border-white/10 overflow-hidden"
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
          src="/images/HeroBackground.jpg" 
          alt="Chazak XP Team Sports and Leadership Training" 
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
                "Though one may be overpowered, two can defend themselves. A cord of three strands is not quickly broken."
              </p>
              <p className="text-amber font-bold mb-8 italic">Chazak: Hebrew for Strength.</p>
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-amber" />
                <span className="font-bold tracking-widest uppercase text-amber">Ecclesiastes 4:12</span>
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
      image: "/images/ChurchGroups.jpg"
    },
    {
      title: "Spiritual Corporate Bodies",
      desc: "Developing marketplace leaders who lead with 'Godly Strength,' integrity, and a servant’s heart.",
      icon: <Target className="w-8 h-8" />,
      image: "/images/CorporateGroups.jpg"
    },
    {
      title: "Institutions",
      desc: "Building cultures of excellence and resilience for schools, NGOs, and professional organizations.",
      icon: <BookOpen className="w-8 h-8" />,
      image: "/images/Institutions.jpg"
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

const QuotationWhatWeDo = () => (
  <div id="quotation-what-we-do" className="bg-white border-8 border-double border-sand p-12 rounded-[3rem] shadow-2xl text-earth">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-black text-earth mb-4 uppercase tracking-tighter">What We Do</h2>
      <p className="text-earth/60 max-w-2xl mx-auto text-sm">We facilitate transformative experiences that move teams from performance to purpose through sports-based methodology and biblical principles.</p>
    </div>

    <div className="grid grid-cols-3 gap-8 mb-12">
      <div className="space-y-3">
        <div className="w-12 h-12 bg-terracotta/10 rounded-xl flex items-center justify-center text-terracotta">
          <Target size={24} />
        </div>
        <h3 className="text-sm font-bold text-earth uppercase tracking-widest">Team Building</h3>
        <p className="text-[10px] text-earth/60">Customized field activities designed to reveal character, build trust, and enhance collaboration.</p>
      </div>
      <div className="space-y-3">
        <div className="w-12 h-12 bg-amber/10 rounded-xl flex items-center justify-center text-amber">
          <Users size={24} />
        </div>
        <h3 className="text-sm font-bold text-earth uppercase tracking-widest">Leadership</h3>
        <p className="text-[10px] text-earth/60">Workshops focused on developing leadership traits using our unique sports-based approach.</p>
      </div>
      <div className="space-y-3">
        <div className="w-12 h-12 bg-olive/10 rounded-xl flex items-center justify-center text-olive">
          <Heart size={24} />
        </div>
        <h3 className="text-sm font-bold text-earth uppercase tracking-widest">Character</h3>
        <p className="text-[10px] text-earth/60">Integrating biblical values into every activity to forge strength and unity.</p>
      </div>
    </div>

    <div>
      <h3 className="text-lg font-black text-earth mb-6 uppercase tracking-widest text-center">Our Services</h3>
      <div className="grid grid-cols-2 gap-4">
        {[
          "Corporate Team Building",
          "Church Ministry Retreats",
          "School & Institutional Camps",
          "Leadership Development",
          "Conflict Resolution Labs",
          "Youth & Teens Mentorship",
          "Sports Ministry Training",
          "Custom Event Facilitation"
        ].map((service, i) => (
          <div key={i} className="p-4 bg-cream rounded-xl border border-sand flex items-center gap-2">
            <CheckCircle2 size={16} className="text-terracotta shrink-0" />
            <span className="font-bold text-earth text-[10px]">{service}</span>
          </div>
        ))}
      </div>
    </div>

    <div className="text-center pt-12 mt-12 border-t border-sand">
      <p className="text-[10px] text-logo-orange uppercase tracking-widest mb-1">xperiencechazak.vercel.app</p>
      <p className="text-[10px] text-logo-orange uppercase tracking-widest">© 2026 Chazak XP • Page 2</p>
    </div>
  </div>
);

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4 uppercase tracking-tighter">What We Do</h2>
          <p className="text-earth/60 max-w-2xl mx-auto">We facilitate transformative experiences that move teams from performance to purpose through sports-based methodology and biblical principles.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mb-24">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-terracotta/10 rounded-2xl flex items-center justify-center text-terracotta">
              <Target size={32} />
            </div>
            <h3 className="text-xl font-bold text-earth uppercase tracking-widest">Team Building</h3>
            <p className="text-earth/60">Customized field activities designed to reveal character, build trust, and enhance collaboration within teams.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-amber/10 rounded-2xl flex items-center justify-center text-amber">
              <Users size={32} />
            </div>
            <h3 className="text-xl font-bold text-earth uppercase tracking-widest">Leadership Training</h3>
            <p className="text-earth/60">Workshops and practical sessions focused on developing leadership traits using our unique sports-based approach.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-olive/10 rounded-2xl flex items-center justify-center text-olive">
              <Heart size={32} />
            </div>
            <h3 className="text-xl font-bold text-earth uppercase tracking-widest">Character Development</h3>
            <p className="text-earth/60">Integrating biblical values into every activity to forge strength and unity in individuals and organizations.</p>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-2xl font-black text-earth mb-8 uppercase tracking-widest text-center">Our Services</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Corporate Team Building",
              "Church Ministry Retreats",
              "School & Institutional Camps",
              "Leadership Development Workshops",
              "Conflict Resolution Labs",
              "Youth & Teens Mentorship",
              "Sports Ministry Training",
              "Custom Event Facilitation"
            ].map((service, i) => (
              <div key={i} className="p-6 bg-cream rounded-2xl border border-sand flex items-center gap-3">
                <CheckCircle2 size={20} className="text-terracotta shrink-0" />
                <span className="font-bold text-earth text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const items = [
    { img: "/images/PortfolioAction.jpg" },
    { img: "/images/PortfolioHuddle.jpg" },
    { img: "/images/PortfolioBreakthrough.jpg" },
    { img: "/images/PortfolioChurch.jpg" },
    { img: "/images/PortfolioCorporate.jpg" },
    { img: "/images/PortfolioInstitutional.jpg" },
    { img: "/images/PortfolioYouth.jpg" },
    { img: "/images/PortfolioTeens.jpg" },
    { img: "/images/PortfolioMinistry.jpg" },
    { img: "/images/PortfolioStrategy.jpg" },
    { img: "/images/PortfolioVision.jpg" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-earth text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {items.map((item, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden group cursor-pointer bg-white/5"
            >
              <motion.img 
                src={item.img} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                whileHover={{ scale: 1.1 }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-earth/40 group-hover:bg-transparent transition-colors duration-500" />
              
              {/* Subtle border reveal on hover */}
              <div className="absolute inset-0 border-2 border-amber/0 group-hover:border-amber/30 transition-all duration-500 rounded-2xl pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Packages = () => {
  const mainPackages = [
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
    }
  ];

  const addOns = [
    {
      name: "Christian DJ Add-on",
      price: "15,000",
      desc: "Elevate your experience with professional Christian entertainment.",
      icon: <Music className="w-6 h-6" />
    },
    {
      name: "Photography Package",
      price: "10,000",
      desc: "Capture every breakthrough moment with professional event photography.",
      icon: <Camera className="w-6 h-6" />
    },
    {
      name: "Board Games Package",
      price: "5,000",
      desc: "Engage your team with curated board games designed for strategy and connection.",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    {
      name: "MCeeing Package",
      price: "10,000",
      desc: "Professional MC services for your event (exclusive of transport).",
      icon: <Mic2 className="w-6 h-6" />
    }
  ];

  return (
    <section id="packages" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-earth mb-4">Our Packages</h2>
          <p className="text-earth/60 text-lg">Invest in the eternal value of your team's leadership and unity.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch mb-20">
          {mainPackages.map((pkg, i) => (
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

        <div className="pt-12 border-t border-sand">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-black text-earth mb-2">Enhance Your Xperience</h3>
            <p className="text-earth/60">Optional add-ons available for any package</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {addOns.map((addon, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-3xl border border-sand shadow-sm flex items-center gap-6"
              >
                <div className="w-12 h-12 bg-amber/10 rounded-2xl flex items-center justify-center text-amber">
                  {addon.icon}
                </div>
                <div>
                  <h4 className="font-bold text-earth">{addon.name}</h4>
                  <div className="text-sm text-earth/60 mb-1">{addon.desc}</div>
                  <div className="text-terracotta font-black">KSh {addon.price}</div>
                </div>
              </motion.div>
            ))}
          </div>
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
                src="/images/AboutFounder.jpg" 
                alt="Lead Facilitators Denis Nzioka & Stefanie Wairimu" 
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
    mceeingAddon: false,
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
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const downloadAsPDF = async (elementIds: string | string[], fileName: string) => {
    const ids = Array.isArray(elementIds) ? elementIds : [elementIds];
    
    setIsDownloading(true);
    console.log('Starting PDF generation for:', ids);

    try {
      // Ensure we are at the top to avoid capture issues
      window.scrollTo(0, 0);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < ids.length; i++) {
        const element = document.getElementById(ids[i]);
        if (!element) {
          console.error(`Element with ID ${ids[i]} not found`);
          continue;
        }

        console.log(`Capturing element: ${ids[i]}`);
        if (i > 0) pdf.addPage();

        // Hide buttons during capture
        const buttons = element.querySelectorAll('.no-print');
        buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');

        try {
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: true,
            backgroundColor: '#ffffff',
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight,
            onclone: (clonedDoc) => {
              // Fix for html2canvas failing on modern CSS color functions like oklab/oklch
              const style = clonedDoc.createElement('style');
              style.innerHTML = `
                * {
                  color-scheme: light !important;
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              `;
              clonedDoc.head.appendChild(style);

              // Create a canvas to convert colors to RGBA
              const canvas = clonedDoc.createElement('canvas');
              canvas.width = 1;
              canvas.height = 1;
              const ctx = canvas.getContext('2d');

              const convertToRgba = (color: string) => {
                if (!color || (!color.includes('okl') && !color.includes('color-mix') && !color.includes('lab') && !color.includes('lch') && !color.includes('p3'))) return color;
                if (!ctx) return color;
                try {
                  ctx.clearRect(0, 0, 1, 1);
                  ctx.fillStyle = color;
                  ctx.fillRect(0, 0, 1, 1);
                  const data = ctx.getImageData(0, 0, 1, 1).data;
                  // Return as rgba which html2canvas understands
                  return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
                } catch (e) {
                  return color;
                }
              };

              // Force computed styles to standard RGBA inline styles to bypass html2canvas parser issues
              const allElements = clonedDoc.getElementsByTagName('*');
              for (let j = 0; j < allElements.length; j++) {
                const el = allElements[j] as HTMLElement;
                try {
                  const computed = window.getComputedStyle(el);
                  
                  // Check and convert color properties
                  if (computed.color) {
                    el.style.color = convertToRgba(computed.color);
                  }
                  if (computed.backgroundColor) {
                    el.style.backgroundColor = convertToRgba(computed.backgroundColor);
                  }
                  if (computed.borderColor) {
                    el.style.borderColor = convertToRgba(computed.borderColor);
                  }
                  if (computed.fill) {
                    el.style.fill = convertToRgba(computed.fill);
                  }
                  if (computed.stroke) {
                    el.style.stroke = convertToRgba(computed.stroke);
                  }
                } catch (e) {}
              }
            }
          });

          // Restore buttons
          buttons.forEach(btn => (btn as HTMLElement).style.display = '');

          const imgData = canvas.toDataURL('image/png');
          const imgProps = pdf.getImageProperties(imgData);
          const imgWidth = pdfWidth;
          const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

          // If image is taller than page, we might need multiple pages for this element
          // but for now let's just scale it to fit the width
          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        } catch (canvasError) {
          console.error(`Error capturing element ${ids[i]}:`, canvasError);
          buttons.forEach(btn => (btn as HTMLElement).style.display = '');
          throw canvasError;
        }
      }

      console.log('PDF generated, preparing for download/share');
      const pdfBlob = pdf.output('blob');
      const blobURL = URL.createObjectURL(pdfBlob);
      const pdfFile = new File([pdfBlob], `${fileName}.pdf`, { type: 'application/pdf' });

      // 1. Try Native Share (Best for Mobile/WhatsApp)
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        try {
          await navigator.share({
            files: [pdfFile],
            title: 'Chazak XP Document',
            text: `Official document from Chazak XP: ${fileName}`,
          });
          URL.revokeObjectURL(blobURL);
          console.log('Shared successfully');
          return;
        } catch (shareError) {
          console.log('Share cancelled or failed, falling back to download', shareError);
        }
      }

      // 2. Standard Download (Desktop/Mobile Fallback)
      console.log('Initiating standard download');
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = `${fileName}.pdf`;
      link.style.display = 'none';
      document.body.appendChild(link);
      
      try {
        link.click();
        setTimeout(() => {
          if (document.body.contains(link)) {
            document.body.removeChild(link);
          }
          URL.revokeObjectURL(blobURL);
        }, 1000);
      } catch (clickError) {
        console.error('Download click failed:', clickError);
        // 3. Final Fallback: Open in new tab
        window.open(blobURL, '_blank');
        setTimeout(() => URL.revokeObjectURL(blobURL), 2000);
      }
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsDownloading(false);
    }
  };

  const packagePrices: Record<string, number> = {
    'Nguzo Package': 15000,
    'Ngome Package': 25000,
    'Boma Package': 40000,
  };

  const djAddonPrice = 15000;
  const photographyAddonPrice = 10000;
  const boardGamesAddonPrice = 5000;
  const mceeingAddonPrice = 10000;

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
    if (formData.mceeingAddon && formData.package !== 'MCeeing Package') {
      total += mceeingAddonPrice;
    }
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (e) e.preventDefault();
    
    const total = calculateTotal();
    const deposit = total * 0.5;
    
    const message = `*New Booking Request - Chazak XP*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Organization:* ${formData.organization}%0A` +
      `*Group Size:* ${formData.groupSize}%0A` +
      `*Package:* ${formData.package} (KSh ${(packagePrices[formData.package] || 0).toLocaleString()})%0A` +
      `*DJ Add-on:* ${formData.djAddon ? `Yes (+KSh ${djAddonPrice.toLocaleString()})` : 'No'}%0A` +
      `*Photography:* ${formData.photographyAddon ? `Yes (+KSh ${photographyAddonPrice.toLocaleString()})` : 'No'}%0A` +
      `*Board Games:* ${formData.boardGamesAddon ? `Yes (+KSh ${boardGamesAddonPrice.toLocaleString()})` : 'No'}%0A` +
      `*MCeeing:* ${formData.mceeingAddon ? `Yes (+KSh ${mceeingAddonPrice.toLocaleString()})` : 'No'}%0A` +
      `*Preferred Date:* ${formData.date}%0A` +
      `*Challenge:* ${formData.challenge}%0A%0A` +
      `*--- Cost Summary ---*%0A` +
      `*Total Cost:* KSh ${total.toLocaleString()}%0A` +
      `*Deposit Required (50%):* KSh ${deposit.toLocaleString()}%0A` +
      `*Balance:* KSh ${deposit.toLocaleString()}`;
    
    window.open(`https://wa.me/254791624455?text=${message}`, '_blank');
    alert('Booking request details prepared! Redirecting to WhatsApp for confirmation.');
  };

  const handleRequestReceipt = () => {
    if (!receiptData.bookingName || !receiptData.bookingDate || !receiptData.amountPaid) {
      alert('Please fill in your name, booking date, and amount paid before requesting a code.');
      return;
    }

    const message = `*Receipt Request - Chazak XP*%0A%0A` +
      `*Client Name:* ${receiptData.bookingName}%0A` +
      `*Booking Date:* ${receiptData.bookingDate}%0A` +
      `*Amount Paid:* KSh ${Number(receiptData.amountPaid).toLocaleString()}%0A%0A` +
      `Hi Denis, I have completed my payment. Please provide the verification code to download my official receipt.`;
    
    window.open(`https://wa.me/254791624455?text=${message}`, '_blank');
    alert('Receipt request details prepared! Redirecting to WhatsApp. Denis will provide you with a verification code once payment is confirmed.');
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
                    <div className="flex items-center gap-3 p-4 bg-sand/20 border border-sand rounded-2xl">
                      <input 
                        type="checkbox" 
                        id="mceeingAddon"
                        className="w-5 h-5 accent-terracotta"
                        checked={formData.mceeingAddon}
                        onChange={(e) => setFormData({...formData, mceeingAddon: e.target.checked})}
                      />
                      <label htmlFor="mceeingAddon" className="text-sm font-bold text-earth cursor-pointer">
                        Add MCeeing (+KSh 10k)
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
                  {formData.mceeingAddon && formData.package !== 'MCeeing Package' && (
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-sand/60">MCeeing Add-on</span>
                      <span className="font-bold">KSh {mceeingAddonPrice.toLocaleString()}</span>
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
                    onClick={(e) => handleSubmit(e as any)}
                    disabled={isSubmitting}
                    className="w-full bg-terracotta text-white py-5 rounded-2xl font-bold text-lg hover:bg-amber hover:text-white transition-all shadow-xl shadow-earth/10 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    <WhatsApp size={20} /> Book via WhatsApp
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

                      <div className="pt-4">
                        <button 
                          onClick={() => handleRequestReceipt()}
                          disabled={isSubmitting}
                          className="w-full py-4 bg-white border-2 border-earth text-earth rounded-2xl font-bold hover:bg-cream transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          <WhatsApp size={18} /> Request Verification Code via WhatsApp
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
                  <div id="booking-receipt" className="receipt-container animate-in fade-in zoom-in duration-300">
                      <div className="border-4 border-double border-sand p-8 rounded-xl bg-white text-earth">
                    <div className="flex justify-between items-start mb-8 pb-8 border-b border-sand">
                      <div className="flex items-center gap-4">
                        <img src="/images/logo.png" alt="Chazak XP Logo" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
                        <div>
                          <p className="text-[10px] text-earth/60 uppercase tracking-widest font-bold">Official Booking Receipt</p>
                          <div className="mt-2 space-y-0.5">
                            <p className="text-[9px] text-earth/60 flex items-center gap-1"><Mail size={8} /> xperiencechazak@gmail.com</p>
                            <p className="text-[9px] text-earth/60 flex items-center gap-1"><Phone size={8} /> +254 791 624 455</p>
                          </div>
                        </div>
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
                          onClick={() => downloadAsPDF('booking-receipt', `Receipt_${receiptData.receiptNo}`)}
                          disabled={isDownloading}
                          className="py-4 bg-terracotta text-white rounded-2xl font-bold hover:bg-amber transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                          {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Share2 size={18} />} 
                          {isDownloading ? 'Downloading...' : 'Download & Share PDF'}
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
                <img src="/images/logo.png" alt="Chazak XP Logo" className="w-8 h-8 object-contain" referrerPolicy="no-referrer" />
                <span className="font-black text-2xl tracking-tighter uppercase">CHAZAK XP</span>
              </div>
              <p className="text-sand max-w-sm mb-8 leading-relaxed">
                Led by Denis Nzioka & Stefanie Wairimu, we use the "some value" of physical training to unlock the eternal value of godliness. Moving teams from performance to purpose.
              </p>
              <div className="mt-4 space-y-2">
                <p className="text-sand text-sm flex items-center gap-2"><Mail size={16} /> xperiencechazak@gmail.com</p>
                <p className="text-sand text-sm flex items-center gap-2"><Phone size={16} /> +254 791 624 455</p>
                <p className="text-sand text-sm flex items-center gap-2"><Globe size={16} /> xperiencechazak.vercel.app</p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
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
              <p className="text-sand text-sm mb-6">Nairobi, Kenya. Serving teams across the East African region with excellence and strength.</p>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-olive text-sm">
            <p className="text-logo-orange">© 2026 Chazak XP. All Rights Reserved.</p>
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
      img: "/images/YouthCamp.jpg"
    },
    {
      title: "Teens/Youth Week",
      desc: "A full week of intense character building, spiritual growth, and team dynamics for the next generation.",
      img: "/images/TeensWeek.jpg"
    },
    {
      title: "Ministry Leaders Retreat",
      desc: "Refreshing and aligning ministry teams in a natural environment through physical and spiritual exercise.",
      img: "/images/MinistryRetreat.jpg"
    },
    {
      title: "Outdoor Activities & Excursions",
      desc: "Group excursions and outdoor activities like hiking, designed to challenge the body and refresh the spirit.",
      img: "/images/OutdoorActivities.jpg"
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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
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
              <p className="font-bold text-earth">Last Updated: March 2026</p>
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
  const [adminTab, setAdminTab] = useState<'reports' | 'quotations'>('reports');
  const [showQuotation, setShowQuotation] = useState(false);
  const [quotationData, setQuotationData] = useState({
    clientName: '',
    date: '',
    services: [
      { name: 'Nguzo Package', price: 15000, selected: false },
      { name: 'Ngome Package', price: 25000, selected: false },
      { name: 'Boma Package', price: 40000, selected: false },
      { name: 'Christian DJ Add-on', price: 15000, selected: false },
      { name: 'Photography Package', price: 10000, selected: false },
      { name: 'Board Games Package', price: 5000, selected: false },
      { name: 'MCeeing Package', price: 10000, selected: false },
    ],
    customServices: [] as { name: string, price: number }[],
    validUntil: '',
    quotationNo: '',
    title: ''
  });
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [requestData, setRequestData] = useState({
    clientName: '',
    sessionDate: ''
  });

  const handleRequestReport = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `*Report Request - Chazak XP*%0A%0A` +
      `*Client:* ${requestData.clientName}%0A` +
      `*Session Date:* ${requestData.sessionDate}%0A%0A` +
      `Hi Denis, I would like to request the assessment report for our session. Please fill it on the website so I can download it.`;
    
    window.open(`https://wa.me/254791624455?text=${message}`, '_blank');
    alert('Report request details prepared! Redirecting to WhatsApp. Once the admin fills the report, it will be available for download here.');
  };
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadAsPDF = async (elementIds: string | string[], fileName: string) => {
    const ids = Array.isArray(elementIds) ? elementIds : [elementIds];
    setIsDownloading(true);
    console.log('Starting PDF generation for:', ids);

    try {
      // Ensure we are at the top to avoid capture issues
      window.scrollTo(0, 0);
      
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      for (let i = 0; i < ids.length; i++) {
        const element = document.getElementById(ids[i]);
        if (!element) {
          console.error(`Element with ID ${ids[i]} not found`);
          continue;
        }

        console.log(`Capturing element: ${ids[i]}`);
        if (i > 0) pdf.addPage();

        // Hide buttons during capture
        const buttons = element.querySelectorAll('.no-print');
        buttons.forEach(btn => (btn as HTMLElement).style.display = 'none');

        try {
          const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            allowTaint: true,
            logging: true,
            backgroundColor: '#ffffff',
            windowWidth: element.scrollWidth,
            windowHeight: element.scrollHeight,
            onclone: (clonedDoc) => {
              // Fix for html2canvas failing on modern CSS color functions like oklab/oklch
              const style = clonedDoc.createElement('style');
              style.innerHTML = `
                * {
                  color-scheme: light !important;
                  -webkit-print-color-adjust: exact !important;
                  print-color-adjust: exact !important;
                }
              `;
              clonedDoc.head.appendChild(style);

              // Create a canvas to convert colors to RGBA
              const canvas = clonedDoc.createElement('canvas');
              canvas.width = 1;
              canvas.height = 1;
              const ctx = canvas.getContext('2d');

              const convertToRgba = (color: string) => {
                if (!color || (!color.includes('okl') && !color.includes('color-mix') && !color.includes('lab') && !color.includes('lch') && !color.includes('p3'))) return color;
                if (!ctx) return color;
                try {
                  ctx.clearRect(0, 0, 1, 1);
                  ctx.fillStyle = color;
                  ctx.fillRect(0, 0, 1, 1);
                  const data = ctx.getImageData(0, 0, 1, 1).data;
                  // Return as rgba which html2canvas understands
                  return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;
                } catch (e) {
                  return color;
                }
              };

              // Force computed styles to standard RGBA inline styles to bypass html2canvas parser issues
              const allElements = clonedDoc.getElementsByTagName('*');
              for (let j = 0; j < allElements.length; j++) {
                const el = allElements[j] as HTMLElement;
                try {
                  const computed = window.getComputedStyle(el);
                  
                  // Check and convert color properties
                  if (computed.color) {
                    el.style.color = convertToRgba(computed.color);
                  }
                  if (computed.backgroundColor) {
                    el.style.backgroundColor = convertToRgba(computed.backgroundColor);
                  }
                  if (computed.borderColor) {
                    el.style.borderColor = convertToRgba(computed.borderColor);
                  }
                  if (computed.fill) {
                    el.style.fill = convertToRgba(computed.fill);
                  }
                  if (computed.stroke) {
                    el.style.stroke = convertToRgba(computed.stroke);
                  }
                } catch (e) {}
              }
            }
          });

          // Restore buttons
          buttons.forEach(btn => (btn as HTMLElement).style.display = '');

          const imgData = canvas.toDataURL('image/png');
          const imgProps = pdf.getImageProperties(imgData);
          const imgWidth = pdfWidth;
          const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

          pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        } catch (canvasError) {
          console.error(`Error capturing element ${ids[i]}:`, canvasError);
          buttons.forEach(btn => (btn as HTMLElement).style.display = '');
          throw canvasError;
        }
      }

      console.log('PDF generated, preparing for download/share');
      const pdfBlob = pdf.output('blob');
      const blobURL = URL.createObjectURL(pdfBlob);
      const pdfFile = new File([pdfBlob], `${fileName}.pdf`, { type: 'application/pdf' });

      // 1. Try Native Share (Best for Mobile/WhatsApp)
      if (navigator.share && navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
        try {
          await navigator.share({
            files: [pdfFile],
            title: 'Chazak XP Document',
            text: `Official document from Chazak XP: ${fileName}`,
          });
          URL.revokeObjectURL(blobURL);
          console.log('Shared successfully');
          return;
        } catch (shareError) {
          console.log('Share cancelled or failed, falling back to download', shareError);
        }
      }

      // 2. Standard Download (Desktop/Mobile Fallback)
      console.log('Initiating standard download');
      const link = document.createElement('a');
      link.href = blobURL;
      link.download = `${fileName}.pdf`;
      link.style.display = 'none';
      document.body.appendChild(link);
      
      try {
        link.click();
        setTimeout(() => {
          if (document.body.contains(link)) {
            document.body.removeChild(link);
          }
          URL.revokeObjectURL(blobURL);
        }, 1000);
      } catch (clickError) {
        console.error('Download click failed:', clickError);
        // 3. Final Fallback: Open in new tab
        window.open(blobURL, '_blank');
        setTimeout(() => URL.revokeObjectURL(blobURL), 2000);
      }
    } catch (error) {
      console.error('PDF Generation Error:', error);
      alert(`Failed to generate PDF: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsDownloading(false);
    }
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

  const handleGenerateQuotation = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuotationNo = `QUO-${Math.floor(Math.random() * 90000) + 10000}`;
    setQuotationData(prev => ({ ...prev, quotationNo: newQuotationNo }));
    setShowQuotation(true);
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
                  <WhatsApp className="text-olive" size={20} /> Request Your Report
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
                  <button 
                    type="submit"
                    className="w-full py-4 bg-olive text-white rounded-xl font-bold hover:bg-olive/90 transition-all shadow-lg shadow-olive/10 flex items-center justify-center gap-2"
                  >
                    <WhatsApp size={18} /> Request via WhatsApp
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
        ) : isAdmin && !showReport && !showQuotation ? (
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <h2 className="text-3xl font-black text-earth">Admin Portal</h2>
                <div className="flex gap-4 mt-4">
                  <button 
                    onClick={() => setAdminTab('reports')}
                    className={`px-6 py-2 rounded-xl font-bold transition-all ${adminTab === 'reports' ? 'bg-terracotta text-white' : 'bg-sand/20 text-earth/60 hover:bg-sand/40'}`}
                  >
                    Reports
                  </button>
                  <button 
                    onClick={() => setAdminTab('quotations')}
                    className={`px-6 py-2 rounded-xl font-bold transition-all ${adminTab === 'quotations' ? 'bg-terracotta text-white' : 'bg-sand/20 text-earth/60 hover:bg-sand/40'}`}
                  >
                    Quotations
                  </button>
                </div>
              </div>
              <button onClick={() => setIsAdmin(false)} className="text-earth/40 hover:text-earth/60 font-bold">Logout</button>
            </div>

            {adminTab === 'reports' ? (
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
            ) : (
              <form onSubmit={handleGenerateQuotation} className="space-y-8 bg-cream p-10 rounded-[3rem] border border-sand">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Quotation Title</label>
                    <input 
                      type="text" required
                      placeholder="e.g. Team Building for Sales Team"
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      onChange={(e) => setQuotationData({...quotationData, title: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Client Name</label>
                    <input 
                      type="text" required
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      onChange={(e) => setQuotationData({...quotationData, clientName: e.target.value})}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Quotation Date</label>
                    <input 
                      type="date" required
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      onChange={(e) => {
                        const selectedDate = e.target.value;
                        if (selectedDate) {
                          const date = new Date(selectedDate);
                          date.setDate(date.getDate() + 7);
                          const validUntil = date.toISOString().split('T')[0];
                          setQuotationData({...quotationData, date: selectedDate, validUntil});
                        } else {
                          setQuotationData({...quotationData, date: selectedDate});
                        }
                      }}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Valid Until</label>
                    <input 
                      type="date" required
                      className="w-full px-6 py-4 bg-white border border-sand rounded-2xl outline-none focus:ring-2 focus:ring-terracotta/50"
                      value={quotationData.validUntil}
                      onChange={(e) => setQuotationData({...quotationData, validUntil: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-xs font-bold uppercase tracking-widest text-earth/60">Select Services</label>
                  <div className="grid md:grid-cols-2 gap-4">
                    {quotationData.services.map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-4 bg-white border border-sand rounded-2xl">
                        <input 
                          type="checkbox" 
                          id={`quo-service-${idx}`}
                          className="w-5 h-5 accent-terracotta"
                          checked={service.selected}
                          onChange={(e) => {
                            const newServices = [...quotationData.services];
                            newServices[idx].selected = e.target.checked;
                            setQuotationData({...quotationData, services: newServices});
                          }}
                        />
                        <label htmlFor={`quo-service-${idx}`} className="text-sm font-bold text-earth cursor-pointer flex justify-between w-full">
                          <span>{service.name}</span>
                          <span className="text-earth/40">KSh {service.price.toLocaleString()}</span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <button type="submit" className="w-full py-5 bg-earth text-white rounded-2xl font-black text-lg hover:bg-amber transition-all shadow-xl">
                  Generate Official Quotation
                </button>
              </form>
            )}
          </div>
        ) : isAdmin && showQuotation ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <div id="service-quotation" className="bg-white border-8 border-double border-sand p-12 rounded-[3rem] shadow-2xl text-earth">
              <div className="flex justify-between items-start mb-12 pb-8 border-b border-sand">
                <div className="flex items-center gap-4">
                  <img src="/images/logo.png" alt="Chazak XP Logo" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                  <div>
                    <h1 className="text-xl font-bold text-earth uppercase tracking-widest">Official Service Quotation</h1>
                    {quotationData.title && (
                      <p className="text-terracotta font-black text-lg mt-1 uppercase tracking-tight">{quotationData.title}</p>
                    )}
                    <div className="mt-2 space-y-1">
                      <p className="text-xs text-earth/60 flex items-center gap-1"><Mail size={12} /> xperiencechazak@gmail.com</p>
                      <p className="text-xs text-earth/60 flex items-center gap-1"><Phone size={12} /> +254 791 624 455</p>
                      <p className="text-xs text-earth/60 flex items-center gap-1"><Globe size={12} /> xperiencechazak.vercel.app</p>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-earth/40 uppercase">Quotation No.</p>
                  <p className="font-mono text-lg">{quotationData.quotationNo}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Prepared For</p>
                  <p className="font-bold text-2xl">{quotationData.clientName}</p>
                </div>
                <div className="text-right">
                  <div className="mb-4">
                    <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Date Issued</p>
                    <p className="font-bold text-lg">{quotationData.date}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-earth/40 uppercase mb-1">Valid Until</p>
                    <p className="font-bold text-lg text-terracotta">{quotationData.validUntil}</p>
                  </div>
                </div>
              </div>

              <div className="mb-12">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-earth text-left">
                      <th className="py-4 font-black uppercase tracking-widest text-xs">Service Description</th>
                      <th className="py-4 font-black uppercase tracking-widest text-xs text-right">Amount (KSh)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {quotationData.services.filter(s => s.selected).map((service, idx) => (
                      <tr key={idx} className="border-b border-sand">
                        <td className="py-4 font-bold">{service.name}</td>
                        <td className="py-4 text-right font-mono">KSh {service.price.toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="py-8 font-black text-xl uppercase tracking-widest">Total Cost</td>
                      <td className="py-8 text-right font-black text-3xl text-terracotta">
                        KSh {quotationData.services.filter(s => s.selected).reduce((acc, s) => acc + s.price, 0).toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div className="p-8 bg-cream rounded-[2rem] mb-12">
                <h4 className="font-bold mb-4 uppercase tracking-widest text-xs text-amber">Terms & Conditions</h4>
                <ul className="text-xs text-earth/60 space-y-2 list-disc pl-4">
                  <li>A 50% deposit is required to secure the booking date.</li>
                  <li>Balance is payable on or before the day of the event.</li>
                  <li>Transport costs are exclusive and will be calculated based on location.</li>
                  <li>Cancellations made less than 7 days to the event attract a 20% administrative fee.</li>
                </ul>
                <div className="mt-6 pt-6 border-t border-sand/30">
                  <p className="text-[10px] font-bold text-earth/40 uppercase mb-2">Explore More</p>
                  <a 
                    href="https://xperiencechazak.vercel.app/packages"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-terracotta font-bold text-xs hover:underline flex items-center gap-1"
                  >
                    View our full range of packages on our website <ExternalLink size={10} />
                  </a>
                </div>
              </div>

              <div className="text-center pt-12 border-t border-sand">
                <p className="text-sm text-earth/60 italic mb-2">"Moving teams from performance to purpose."</p>
                <p className="text-[10px] text-logo-orange uppercase tracking-widest mb-1">xperiencechazak.vercel.app</p>
                <p className="text-[10px] text-logo-orange uppercase tracking-widest">© 2026 Chazak XP Official Quotation • Page 1</p>
              </div>
            </div>

            <div className="mt-8">
              <QuotationWhatWeDo />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 no-print">
              <button 
                onClick={() => setShowQuotation(false)}
                className="py-4 bg-cream text-earth/60 rounded-2xl font-bold hover:bg-sand transition-all"
              >
                Edit Quotation
              </button>
              <button 
                onClick={() => downloadAsPDF(['service-quotation', 'quotation-what-we-do'], `Quotation_${quotationData.clientName.replace(/\s+/g, '_')}`)}
                disabled={isDownloading}
                className="py-4 bg-terracotta text-white rounded-2xl font-bold hover:bg-amber transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isDownloading ? <Loader2 size={18} className="animate-spin" /> : <Share2 size={18} />} 
                {isDownloading ? 'Downloading...' : 'Download & Share PDF'}
              </button>
            </div>
          </div>
        ) : (
          <div className="animate-in fade-in zoom-in duration-500">
            <div id="assessment-report" className="bg-white border-8 border-double border-sand p-12 rounded-[3rem] shadow-2xl text-earth">
              <div className="flex justify-between items-start mb-12 pb-8 border-b border-sand">
                <div className="flex items-center gap-4">
                  <img src="/images/logo.png" alt="Chazak XP Logo" className="w-20 h-20 object-contain" referrerPolicy="no-referrer" />
                  <div>
                    <h1 className="text-xl font-bold text-earth uppercase tracking-widest">Team Building Assessment Report</h1>
                  </div>
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
                <p className="text-[10px] text-logo-orange uppercase tracking-widest">© 2026 Chazak XP Assessment System</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 no-print">
              <button 
                onClick={() => setShowReport(false)}
                className="py-5 bg-cream text-earth/60 rounded-2xl font-bold hover:bg-sand transition-all"
              >
                Back to Generator
              </button>
              <button 
                onClick={() => downloadAsPDF('assessment-report', `Assessment_Report_${reportData.clientName.replace(/\s+/g, '_')}`)}
                disabled={isDownloading}
                className="py-5 bg-terracotta text-white rounded-2xl font-bold hover:bg-amber transition-all flex items-center justify-center gap-2 shadow-xl disabled:opacity-50"
              >
                {isDownloading ? <Loader2 size={20} className="animate-spin" /> : <Share2 size={20} />} 
                {isDownloading ? 'Downloading...' : 'Download & Share PDF'}
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

const FeaturedHero = () => {
  return (
    <section className="relative py-24 bg-earth overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img 
          src="/images/FeaturedHero.jpg" 
          alt="Leadership in action" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Where <span className="text-amber italic font-serif">Strength</span> Meets <br />
              <span className="text-terracotta">Unity.</span>
            </h2>
            <p className="text-sand text-lg mb-8 leading-relaxed">
              We don't just facilitate games; we create environments where character is forged and leadership is tested. Our unique sports-based methodology reveals the heart of your team.
            </p>
            <div className="flex gap-4">
              <Link to="/serve" className="bg-amber text-earth px-8 py-3 rounded-full font-bold hover:bg-white transition-all">
                Explore Our Impact
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-video rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
              <img 
                src="/images/ActionShot.jpg" 
                alt="Team overcoming challenges" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HomePage = () => (
  <PageLayout>
    <Hero />
    <FeaturedHero />
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

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  return (
    <div className="font-sans text-earth selection:bg-amber/30 overflow-x-hidden">
      <Navbar />
      <AnimatePresence mode="wait">
        {/* @ts-ignore - key is required for AnimatePresence but not in RoutesProps */}
        <Routes location={location} key={location.pathname}>
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
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}
