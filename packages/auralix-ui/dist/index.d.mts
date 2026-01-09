import { ClassValue } from 'clsx';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React$1 from 'react';
import React__default, { ReactNode, ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import { DayPicker } from 'react-day-picker';
import * as input_otp from 'input-otp';
import { Group, Panel, Separator } from 'react-resizable-panels';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

declare function cn(...inputs: ClassValue[]): string;

interface AccordionItemProps {
    value: string;
    trigger: React$1.ReactNode;
    children: React$1.ReactNode;
    className?: string;
}
declare function Accordion({ children, className, variant, }: {
    children: React$1.ReactNode;
    className?: string;
    variant?: "simple" | "boxed" | "separated";
}): react_jsx_runtime.JSX.Element;
declare function AccordionItem({ value, trigger, children, className }: AccordionItemProps): react_jsx_runtime.JSX.Element;

interface AlertProps {
    children: React.ReactNode;
    variant?: "success" | "error" | "warning" | "info";
    design?: "standard" | "solid" | "left-accent";
    title?: string;
    icon?: boolean;
    className?: string;
}
declare function Alert({ children, variant, design, // Visual style
title, icon, className, }: AlertProps): react_jsx_runtime.JSX.Element;

interface AnimatedBeamProps {
    className?: string;
    containerRef: React.RefObject<HTMLElement>;
    fromRef: React.RefObject<HTMLElement>;
    toRef: React.RefObject<HTMLElement>;
    curvature?: number;
    reverse?: boolean;
    pathColor?: string;
    pathWidth?: number;
    pathOpacity?: number;
    gradientStartColor?: string;
    gradientStopColor?: string;
    delay?: number;
    duration?: number;
    startXOffset?: number;
    startYOffset?: number;
    endXOffset?: number;
    endYOffset?: number;
}
declare const AnimatedBeam: ({ className, containerRef, fromRef, toRef, curvature, reverse, duration, delay, pathColor, pathWidth, pathOpacity, gradientStartColor, gradientStopColor, startXOffset, startYOffset, endXOffset, endYOffset, }: AnimatedBeamProps) => react_jsx_runtime.JSX.Element;

interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare function AnimatedGradientText({ children, className, ...props }: AnimatedGradientTextProps): react_jsx_runtime.JSX.Element;

interface AuroraBackgroundProps extends React__default.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}
declare const AuroraBackground: ({ className, children, showRadialGradient, ...props }: AuroraBackgroundProps) => react_jsx_runtime.JSX.Element;

declare const Avatar: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<never>>;
declare const AvatarImage: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarImageProps & React$1.RefAttributes<HTMLImageElement>, "ref"> & React$1.RefAttributes<never>>;
declare const AvatarFallback: React$1.ForwardRefExoticComponent<Omit<AvatarPrimitive.AvatarFallbackProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<never>>;

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error" | "info";
    size?: "sm" | "md";
    className?: string;
    design?: "solid" | "soft" | "outline";
}
declare function Badge({ children, variant, size, className, design, }: BadgeProps): react_jsx_runtime.JSX.Element;

declare const BentoGrid: ({ className, children, }: {
    className?: string;
    children?: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const BentoGridItem: ({ className, title, description, header, icon, }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;

interface BlurTextProps {
    text: string;
    className?: string;
    delay?: number;
    wordDelay?: number;
}
declare function BlurText({ text, className, delay, wordDelay, }: BlurTextProps): react_jsx_runtime.JSX.Element;

interface BorderBeamProps {
    className?: string;
    size?: number;
    duration?: number;
    borderWidth?: number;
    anchor?: number;
    colorFrom?: string;
    colorTo?: string;
    delay?: number;
}
declare function BorderBeam({ className, size, duration, anchor, borderWidth, colorFrom, colorTo, delay, }: BorderBeamProps): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    separator?: "chevron" | "slash" | "dot";
    className?: string;
}
declare const Breadcrumb: React__default.FC<BreadcrumbProps>;

declare const buttonVariants: (props?: ({
    variant?: "link" | "outline" | "soft" | "primary" | "secondary" | "ghost" | "destructive" | "gradient" | "neon" | null | undefined;
    size?: "icon" | "default" | "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

type CalendarProps = React$1.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
    variant?: "simple" | "glass" | "neon";
}
declare function Card({ children, className, hoverable, variant }: CardProps): react_jsx_runtime.JSX.Element;
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardHeader({ children, className }: CardHeaderProps): react_jsx_runtime.JSX.Element;
interface CardTitleProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardTitle({ children, className }: CardTitleProps): react_jsx_runtime.JSX.Element;
interface CardDescriptionProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardDescription({ children, className }: CardDescriptionProps): react_jsx_runtime.JSX.Element;
interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardContent({ children, className }: CardContentProps): react_jsx_runtime.JSX.Element;
interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}
declare function CardFooter({ children, className }: CardFooterProps): react_jsx_runtime.JSX.Element;

interface CarouselProps extends React__default.HTMLAttributes<HTMLDivElement> {
    items: React__default.ReactNode[];
    showControls?: boolean;
    showIndicators?: boolean;
    autoPlay?: boolean;
    interval?: number;
}
declare function Carousel({ items, showControls, showIndicators, autoPlay, interval, className, ...props }: CarouselProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    label?: string;
    description?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
    id?: string;
}
declare const Checkbox: React__default.ForwardRefExoticComponent<CheckboxProps & React__default.RefAttributes<HTMLInputElement>>;

interface CircularProgressProps {
    value: number;
    max?: number;
    size?: number;
    strokeWidth?: number;
    circleColor?: string;
    progressColor?: string;
    className?: string;
    showValue?: boolean;
}
declare function CircularProgress({ value, max, size, strokeWidth, circleColor, progressColor, className, showValue, }: CircularProgressProps): react_jsx_runtime.JSX.Element;

interface ComboboxProps {
    options: {
        value: string;
        label: string;
    }[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    className?: string;
}
declare function Combobox({ options, value, onChange, placeholder, className, }: ComboboxProps): react_jsx_runtime.JSX.Element;

interface CommandItem {
    category: string;
    name: string;
    href?: string;
    icon?: React__default.ReactNode;
    onSelect?: () => void;
}
interface CommandMenuProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    items?: CommandItem[];
    placeholder?: string;
}
declare function CommandMenu({ open, onOpenChange, items, placeholder }: CommandMenuProps): react_jsx_runtime.JSX.Element | null;

interface ConfettiProps {
    active?: boolean;
    duration?: number;
    particleCount?: number;
    className?: string;
}
declare const Confetti: React__default.FC<ConfettiProps>;
declare const useConfetti: () => {
    active: boolean;
    fire: () => void;
};

interface CopyCommandProps {
    command: string;
    className?: string;
    variant?: "simple" | "boxed" | "minimal";
}
declare function CopyCommand({ command, className, variant }: CopyCommandProps): react_jsx_runtime.JSX.Element;

declare function DatePicker({ date, setDate, className, }: {
    date?: Date;
    setDate: (date?: Date) => void;
    className?: string;
}): react_jsx_runtime.JSX.Element;

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    className?: string;
    variant?: "standard" | "sheet" | "fullscreen";
}
declare function Dialog({ isOpen, onClose, title, description, children, footer, className, variant, }: DialogProps): react_jsx_runtime.JSX.Element | null;
declare function DialogButton({ className, variant, ...props }: React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
}): react_jsx_runtime.JSX.Element;

interface DividerProps {
    orientation?: "horizontal" | "vertical";
    variant?: "solid" | "dashed" | "dotted";
    label?: string;
    className?: string;
}
declare const Divider: React__default.FC<DividerProps>;

interface DockProps {
    className?: string;
    magnification?: number;
    distance?: number;
    direction?: "top" | "middle" | "bottom";
    children: React__default.ReactNode;
    variant?: "mac" | "windows" | "material";
}
declare function Dock({ className, direction: _direction, children, magnification, distance, variant, }: DockProps): react_jsx_runtime.JSX.Element;
interface DockIconProps extends React__default.HTMLAttributes<HTMLDivElement> {
    size?: number;
    magnification?: number;
    distance?: number;
    children?: React__default.ReactNode;
}
declare function DockIcon({ size, magnification: propMagnification, distance: propDistance, className, children, ...props }: DockIconProps): react_jsx_runtime.JSX.Element;

interface DotPatternProps {
    size?: number;
    radius?: number;
    className?: string;
    fade?: boolean;
}
declare const DotPattern: React__default.FC<DotPatternProps>;
interface AnimatedDotPatternProps {
    size?: number;
    radius?: number;
    className?: string;
}
declare const AnimatedDotPattern: React__default.FC<AnimatedDotPatternProps>;

interface DropdownProps {
    trigger: React__default.ReactNode;
    children: React__default.ReactNode;
    align?: "start" | "center" | "end";
    className?: string;
}
declare const Dropdown: React__default.FC<DropdownProps>;
interface DropdownItemProps {
    children: React__default.ReactNode;
    icon?: React__default.ReactNode;
    shortcut?: string;
    disabled?: boolean;
    destructive?: boolean;
    onClick?: () => void;
    className?: string;
}
declare const DropdownItem: React__default.FC<DropdownItemProps>;
declare const DropdownSeparator: React__default.FC;
interface DropdownLabelProps {
    children: React__default.ReactNode;
}
declare const DropdownLabel: React__default.FC<DropdownLabelProps>;

interface EmptyStateProps {
    icon?: React__default.ReactNode;
    title: string;
    description?: string;
    action?: React__default.ReactNode;
    className?: string;
}
declare const EmptyState: React__default.FC<EmptyStateProps>;
interface NoDataProps {
    title?: string;
    description?: string;
    action?: React__default.ReactNode;
}
declare const NoData: React__default.FC<NoDataProps>;
declare const NoSearchResults: React__default.FC<NoDataProps>;
declare const ErrorState: React__default.FC<NoDataProps>;

interface ExpandableCardProps {
    title: string;
    description?: string;
    children: React__default.ReactNode;
    className?: string;
    defaultExpanded?: boolean;
}
declare const ExpandableCard: React__default.FC<ExpandableCardProps>;

interface FileTreeNode {
    name: string;
    type: "file" | "folder";
    children?: FileTreeNode[];
    icon?: React__default.ReactNode;
}
interface FileTreeProps {
    data: FileTreeNode[];
    className?: string;
    onSelect?: (node: FileTreeNode) => void;
}
declare const FileTree: React__default.FC<FileTreeProps>;

interface FlipCardProps {
    front: React__default.ReactNode;
    back: React__default.ReactNode;
    flipOnHover?: boolean;
    flipOnClick?: boolean;
    className?: string;
}
declare const FlipCard: React__default.FC<FlipCardProps>;

interface FlipWordsProps {
    words: string[];
    duration?: number;
    className?: string;
}
declare const FlipWords: React__default.FC<FlipWordsProps>;
interface FlipWords3DProps {
    words: string[];
    duration?: number;
    className?: string;
}
declare const FlipWords3D: React__default.FC<FlipWords3DProps>;

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    children: React.ReactNode;
    className?: string;
}
declare function Form({ children, className, ...props }: FormProps): react_jsx_runtime.JSX.Element;
interface FormFieldProps {
    children: React.ReactNode;
    className?: string;
}
declare function FormField({ children, className }: FormFieldProps): react_jsx_runtime.JSX.Element;
interface FormLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
    children: React.ReactNode;
    required?: boolean;
    className?: string;
}
declare function FormLabel({ children, required, className, ...props }: FormLabelProps): react_jsx_runtime.JSX.Element;
interface FormDescriptionProps {
    children: React.ReactNode;
    className?: string;
}
declare function FormDescription({ children, className }: FormDescriptionProps): react_jsx_runtime.JSX.Element;
interface FormErrorProps {
    children: React.ReactNode;
    className?: string;
}
declare function FormError({ children, className }: FormErrorProps): react_jsx_runtime.JSX.Element;

interface GlassCardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    intensity?: "low" | "medium" | "high";
    children: React__default.ReactNode;
}
declare const GlassCard: React__default.ForwardRefExoticComponent<GlassCardProps & React__default.RefAttributes<HTMLDivElement>>;

interface GlobeProps {
    className?: string;
    globeConfig?: any;
    data?: any[];
}
declare function Globe({ className, globeConfig, data, }: GlobeProps): react_jsx_runtime.JSX.Element;

interface GridPatternProps {
    size?: number;
    className?: string;
    strokeDasharray?: string;
    squares?: [number, number][];
    fade?: boolean;
}
declare const GridPattern: React__default.FC<GridPatternProps>;

interface HoverCardProps {
    trigger: React__default.ReactNode;
    children: React__default.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    openDelay?: number;
    closeDelay?: number;
    className?: string;
}
declare const HoverCard: React__default.FC<HoverCardProps>;
interface HoverCardContentProps {
    avatar?: string;
    title: string;
    subtitle?: string;
    description?: string;
    stats?: {
        label: string;
        value: string | number;
    }[];
}
declare const HoverCardContent: React__default.FC<HoverCardContentProps>;

interface iPhoneMockupProps {
    children: React__default.ReactNode;
    variant?: "silver" | "space-gray" | "gold";
    showNotch?: boolean;
    showStatusBar?: boolean;
    className?: string;
}
declare const IPhoneMockup: React__default.FC<iPhoneMockupProps>;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    inputSize?: "sm" | "md" | "lg";
    variant?: "line" | "box" | "floating";
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

declare const InputOTP: React$1.ForwardRefExoticComponent<(Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "textAlign" | "maxLength" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
} & {
    render: (props: input_otp.RenderProps) => React$1.ReactNode;
    children?: never;
} & React$1.RefAttributes<HTMLInputElement>, "ref"> | Omit<Omit<React$1.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "textAlign" | "maxLength" | "onComplete" | "pushPasswordManagerStrategy" | "pasteTransformer" | "containerClassName" | "noScriptCSSFallback"> & {
    value?: string;
    onChange?: (newValue: string) => unknown;
    maxLength: number;
    textAlign?: "left" | "center" | "right";
    onComplete?: (...args: any[]) => unknown;
    pushPasswordManagerStrategy?: "increase-width" | "none";
    pasteTransformer?: (pasted: string) => string;
    containerClassName?: string;
    noScriptCSSFallback?: string | null;
} & {
    render?: never;
    children: React$1.ReactNode;
} & React$1.RefAttributes<HTMLInputElement>, "ref">) & React$1.RefAttributes<never>>;
declare const InputOTPGroup: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const InputOTPSlot: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    index: number;
} & React$1.RefAttributes<HTMLDivElement>>;
declare const InputOTPSeparator: React$1.ForwardRefExoticComponent<Omit<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

interface KbdProps {
    children: React__default.ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare const Kbd: React__default.FC<KbdProps>;
interface ShortcutProps {
    keys: string[];
    separator?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare const Shortcut: React__default.FC<ShortcutProps>;

interface MacBookMockupProps {
    children: React__default.ReactNode;
    variant?: "silver" | "space-gray";
    className?: string;
}
declare const MacBookMockup: React__default.FC<MacBookMockupProps>;

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
}
declare function MagicCard({ children, className, gradientSize, gradientColor, gradientOpacity, ...props }: MagicCardProps): react_jsx_runtime.JSX.Element;

interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: any;
}
declare function Marquee({ className, reverse, pauseOnHover, children, vertical, repeat, ...props }: MarqueeProps): react_jsx_runtime.JSX.Element;

interface MeteorsProps {
    number?: number;
}
declare const Meteors: ({ number }: MeteorsProps) => react_jsx_runtime.JSX.Element;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    closeOnBackdrop?: boolean;
    className?: string;
    variant?: "default" | "bottom-sheet" | "drawer";
}
declare function Modal({ isOpen, onClose, children, size, closeOnBackdrop, className, variant, }: ModalProps): react_jsx_runtime.JSX.Element | null;
interface ModalHeaderProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalHeader({ children, className }: ModalHeaderProps): react_jsx_runtime.JSX.Element;
interface ModalTitleProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalTitle({ children, className }: ModalTitleProps): react_jsx_runtime.JSX.Element;
interface ModalBodyProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalBody({ children, className }: ModalBodyProps): react_jsx_runtime.JSX.Element;
interface ModalFooterProps {
    children: React.ReactNode;
    className?: string;
}
declare function ModalFooter({ children, className }: ModalFooterProps): react_jsx_runtime.JSX.Element;

interface NavItem {
    name: string;
    href: string;
}
interface NavbarProps {
    logo?: React__default.ReactNode;
    items?: NavItem[];
    rightAction?: React__default.ReactNode;
    className?: string;
    mobileMenuOpen?: boolean;
    onMobileMenuToggle?: (isOpen: boolean) => void;
    /**
     * Optional custom Link component (e.g. Next.js Link, React Router Link)
     * Defaults to standard <a> tag
     */
    LinkComponent?: React__default.ElementType;
}
declare function Navbar({ logo, items, rightAction, className, mobileMenuOpen: controlledMobileMenuOpen, onMobileMenuToggle, LinkComponent, }: NavbarProps): react_jsx_runtime.JSX.Element;

interface NeonButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "cyan" | "magenta" | "lime" | "violet";
    neonSize?: "sm" | "md" | "lg";
    children: React__default.ReactNode;
}
declare const NeonButton: React__default.ForwardRefExoticComponent<NeonButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface NumberFieldProps {
    value?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
    showControls?: boolean;
    label?: string;
}
declare const NumberField: React__default.ForwardRefExoticComponent<NumberFieldProps & React__default.RefAttributes<HTMLInputElement>>;

declare function NumberTicker({ value, direction, delay, className, }: {
    value: number;
    direction?: "up" | "down";
    className?: string;
    delay?: number;
}): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showFirstLast?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare const Pagination: React__default.FC<PaginationProps>;

interface ParticlesProps {
    quantity?: number;
    size?: {
        min: number;
        max: number;
    };
    speed?: {
        min: number;
        max: number;
    };
    color?: string;
    className?: string;
}
declare const Particles: React__default.FC<ParticlesProps>;
interface GlowingParticlesProps {
    quantity?: number;
    color?: string;
    className?: string;
}
declare const GlowingParticles: React__default.FC<GlowingParticlesProps>;

interface PopoverProps {
    trigger: React__default.ReactNode;
    children: React__default.ReactNode;
    side?: "top" | "bottom" | "left" | "right";
    align?: "start" | "center" | "end";
    className?: string;
    triggerClassName?: string;
}
declare const Popover: React__default.FC<PopoverProps>;

interface ProgressProps {
    value: number;
    max?: number;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "gradient" | "striped";
    showValue?: boolean;
    animated?: boolean;
    className?: string;
    label?: string;
}
declare const Progress: React__default.FC<ProgressProps>;

interface RadioOption {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
}
interface RadioGroupProps {
    options: RadioOption[];
    value?: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    name: string;
    orientation?: "horizontal" | "vertical";
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare const RadioGroup: React__default.FC<RadioGroupProps>;
interface RadioProps {
    option: RadioOption;
    name: string;
    size: "sm" | "md" | "lg";
    checked: boolean;
    onSelect: (value: string) => void;
}
declare const Radio: React__default.FC<RadioProps>;

declare const ResizablePanelGroup: ({ className, ...props }: React.ComponentProps<typeof Group> & {
    direction: "horizontal" | "vertical";
}) => react_jsx_runtime.JSX.Element;
declare const ResizablePanel: typeof Panel;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof Separator> & {
    withHandle?: boolean;
}) => react_jsx_runtime.JSX.Element;

interface RippleProps {
    className?: string;
    color?: string;
    duration?: number;
}
declare const Ripple: React__default.FC<RippleProps>;
interface RippleButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React__default.ReactNode;
    rippleColor?: string;
    className?: string;
}
declare const RippleButton: React__default.FC<RippleButtonProps>;

interface SafariMockupProps {
    url?: string;
    children: React__default.ReactNode;
    className?: string;
}
declare const SafariMockup: React__default.FC<SafariMockupProps>;

interface ScrollAnimationProps {
    children: React.ReactNode;
    animation?: "fade-up" | "scale" | "fade-in";
    className?: string;
    delay?: number;
}
declare function ScrollAnimation({ children, animation, className, delay }: ScrollAnimationProps): react_jsx_runtime.JSX.Element;

interface SearchFieldProps extends Omit<React__default.InputHTMLAttributes<HTMLInputElement>, "onChange" | "size"> {
    value?: string;
    onChange?: (value: string) => void;
    onSearch?: (value: string) => void;
    placeholder?: string;
    size?: "sm" | "md" | "lg";
    showClearButton?: boolean;
    loading?: boolean;
    className?: string;
}
declare const SearchField: React__default.ForwardRefExoticComponent<SearchFieldProps & React__default.RefAttributes<HTMLInputElement>>;

interface SegmentedControlProps {
    options: string[];
    selected: string;
    onChange: (option: string) => void;
    className?: string;
}
declare function SegmentedControl({ options, selected, onChange, className, }: SegmentedControlProps): react_jsx_runtime.JSX.Element;

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
    options: SelectOption[];
    placeholder?: string;
    error?: boolean;
    selectSize?: "sm" | "md" | "lg";
    variant?: "standard" | "minimal" | "combobox";
}
declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLSelectElement>>;

declare const Sheet: React$1.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React$1.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React$1.FC<DialogPrimitive.DialogPortalProps>;
declare const SheetOverlay: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<never>>;
declare const sheetVariants: (props?: ({
    side?: "bottom" | "left" | "right" | "top" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React$1.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>, VariantProps<typeof sheetVariants> {
}
declare const SheetContent: React$1.ForwardRefExoticComponent<SheetContentProps & React$1.RefAttributes<never>>;
declare const SheetHeader: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetFooter: {
    ({ className, ...props }: React$1.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SheetTitle: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & React$1.RefAttributes<HTMLHeadingElement>, "ref"> & React$1.RefAttributes<never>>;
declare const SheetDescription: React$1.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & React$1.RefAttributes<HTMLParagraphElement>, "ref"> & React$1.RefAttributes<never>>;

interface ShinyTextProps {
    children: string;
    shimmerWidth?: number;
    duration?: number;
    className?: string;
}
declare const ShinyText: React__default.FC<ShinyTextProps>;
interface GlowingTextProps {
    children: string;
    color?: string;
    className?: string;
}
declare const GlowingText: React__default.FC<GlowingTextProps>;
interface GradientTextProps {
    children: string;
    colors?: string[];
    duration?: number;
    className?: string;
}
declare const GradientText: React__default.FC<GradientTextProps>;

declare function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;

declare const Slider: React$1.ForwardRefExoticComponent<Omit<SliderPrimitive.SliderProps & React$1.RefAttributes<HTMLSpanElement>, "ref"> & React$1.RefAttributes<never>>;

interface SpinnerProps {
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    color?: "default" | "primary" | "white";
    className?: string;
}
declare const Spinner: React__default.FC<SpinnerProps>;
interface ActivityIndicatorProps {
    size?: "sm" | "md" | "lg";
    color?: "default" | "primary" | "white";
    className?: string;
}
declare const ActivityIndicator: React__default.FC<ActivityIndicatorProps>;

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    spotlightColor?: string;
}
declare function SpotlightCard({ children, className, spotlightColor, // Violet-ish
...props }: SpotlightCardProps): react_jsx_runtime.JSX.Element;

interface SpringButtonProps extends ButtonProps {
    springConfig?: {
        tension: number;
        friction: number;
    };
}
declare function SpringButton({ children, springConfig, className, ...props }: SpringButtonProps): react_jsx_runtime.JSX.Element;

interface StatusDotProps {
    status: "online" | "offline" | "away" | "busy" | "default";
    size?: "sm" | "md" | "lg";
    pulse?: boolean;
    className?: string;
}
declare const StatusDot: React__default.FC<StatusDotProps>;
interface StatusBadgeProps {
    status: "online" | "offline" | "away" | "busy";
    label?: string;
    size?: "sm" | "md";
    className?: string;
}
declare const StatusBadge: React__default.FC<StatusBadgeProps>;

interface SwitchProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    variant?: "ios" | "material" | "cyber";
}
declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps & React$1.RefAttributes<HTMLButtonElement>>;

declare function Table({ className, variant, ...props }: React$1.HTMLAttributes<HTMLTableElement> & {
    variant?: "simple" | "striped" | "bordered";
}): react_jsx_runtime.JSX.Element;
declare namespace Table {
    var displayName: string;
}
declare const TableHeader: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableBody: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableFooter: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableSectionElement> & React$1.RefAttributes<HTMLTableSectionElement>>;
declare const TableRow: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableRowElement> & React$1.RefAttributes<HTMLTableRowElement>>;
declare const TableHead: React$1.ForwardRefExoticComponent<React$1.ThHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCell: React$1.ForwardRefExoticComponent<React$1.TdHTMLAttributes<HTMLTableCellElement> & React$1.RefAttributes<HTMLTableCellElement>>;
declare const TableCaption: React$1.ForwardRefExoticComponent<React$1.HTMLAttributes<HTMLTableCaptionElement> & React$1.RefAttributes<HTMLTableCaptionElement>>;

declare function Tabs({ defaultValue, className, children, variant, }: {
    defaultValue: string;
    className?: string;
    children: React$1.ReactNode;
    variant?: "pill" | "line" | "segmented";
}): react_jsx_runtime.JSX.Element;
declare function TabsList({ className, children, }: {
    className?: string;
    children: React$1.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ value, className, children, }: {
    value: string;
    className?: string;
    children: React$1.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function TabsContent({ value, className, children, }: {
    value: string;
    className?: string;
    children: React$1.ReactNode;
}): react_jsx_runtime.JSX.Element | null;

interface TagProps {
    children: React__default.ReactNode;
    variant?: "default" | "primary" | "success" | "warning" | "error";
    size?: "sm" | "md" | "lg";
    removable?: boolean;
    onRemove?: () => void;
    className?: string;
}
declare const Tag: React__default.FC<TagProps>;
interface TagGroupProps {
    children: React__default.ReactNode;
    className?: string;
}
declare const TagGroup: React__default.FC<TagGroupProps>;

interface TerminalMockupProps {
    children: React__default.ReactNode;
    title?: string;
    className?: string;
}
declare const TerminalMockup: React__default.FC<TerminalMockupProps>;
interface TerminalLineProps {
    prompt?: string;
    command?: string;
    output?: string;
    className?: string;
}
declare const TerminalLine: React__default.FC<TerminalLineProps>;
interface AnimatedTerminalProps {
    lines: {
        prompt?: string;
        command?: string;
        output?: string;
        delay?: number;
    }[];
    className?: string;
}
declare const AnimatedTerminal: React__default.FC<AnimatedTerminalProps>;

interface TextRevealProps {
    children: string;
    className?: string;
}
declare const TextReveal: React__default.FC<TextRevealProps>;
interface CharRevealProps {
    children: string;
    staggerDelay?: number;
    className?: string;
}
declare const CharReveal: React__default.FC<CharRevealProps>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
    variant?: "default" | "ghost" | "terminal";
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

interface TiltCardProps {
    children: React__default.ReactNode;
    className?: string;
    maxTilt?: number;
    scale?: number;
    speed?: number;
    glare?: boolean;
    glareMaxOpacity?: number;
}
declare const TiltCard: React__default.FC<TiltCardProps>;

type ToastType = "success" | "error" | "info" | "warning" | "default";
interface ToastContextType {
    toast: (message: string, type?: ToastType, duration?: number) => void;
}
declare function ToastProvider({ children }: {
    children: React__default.ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function useToast(): ToastContextType;

declare const toggleVariants: (props?: ({
    variant?: "outline" | "default" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ToggleProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof toggleVariants> {
    pressed?: boolean;
    onPressedChange?: (pressed: boolean) => void;
}
declare const Toggle: React$1.ForwardRefExoticComponent<ToggleProps & React$1.RefAttributes<HTMLButtonElement>>;

declare const ToggleGroup: React$1.ForwardRefExoticComponent<((Omit<ToggleGroupPrimitive.ToggleGroupSingleProps & React$1.RefAttributes<HTMLDivElement>, "ref"> | Omit<ToggleGroupPrimitive.ToggleGroupMultipleProps & React$1.RefAttributes<HTMLDivElement>, "ref">) & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
}) & React$1.RefAttributes<never>>;
declare const ToggleGroupItem: React$1.ForwardRefExoticComponent<Omit<ToggleGroupPrimitive.ToggleGroupItemProps & React$1.RefAttributes<HTMLButtonElement>, "ref"> & {
    variant?: "default" | "outline";
    size?: "default" | "sm" | "lg";
} & React$1.RefAttributes<never>>;

declare const TooltipProvider: React$1.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: React$1.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: React$1.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & React$1.RefAttributes<HTMLButtonElement>>;
declare const TooltipContent: React$1.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & {
    variant?: "simple" | "rich" | "arrow";
} & React$1.RefAttributes<never>>;

interface TrueFocusProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    focusColor?: string;
}
declare function TrueFocus({ className, label, focusColor, // Violet-500
...props }: TrueFocusProps): react_jsx_runtime.JSX.Element;

interface TypingAnimationProps {
    text: string;
    duration?: number;
    delay?: number;
    cursor?: boolean;
    className?: string;
    onComplete?: () => void;
}
declare const TypingAnimation: React__default.FC<TypingAnimationProps>;

declare const TracingBeam: ({ children, className, }: {
    children: React__default.ReactNode;
    className?: string;
}) => react_jsx_runtime.JSX.Element;

export { Accordion, AccordionItem, ActivityIndicator, Alert, type AlertProps, AnimatedBeam, type AnimatedBeamProps, AnimatedDotPattern, AnimatedGradientText, type AnimatedGradientTextProps, AnimatedTerminal, AuroraBackground, Avatar, AvatarFallback, AvatarImage, Badge, type BadgeProps, BentoGrid, BentoGridItem, BlurText, type BlurTextProps, BorderBeam, Breadcrumb, Button, type ButtonProps, Calendar, type CalendarProps, Card, CardContent, type CardContentProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, Carousel, CharReveal, Checkbox, CircularProgress, Combobox, type CommandItem, CommandMenu, type CommandMenuProps, Confetti, CopyCommand, DatePicker, Dialog, DialogButton, type DialogProps, Divider, Dock, DockIcon, type DockIconProps, type DockProps, DotPattern, Dropdown, DropdownItem, DropdownLabel, DropdownSeparator, EmptyState, ErrorState, ExpandableCard, FileTree, FlipCard, FlipWords, FlipWords3D, Form, FormDescription, type FormDescriptionProps, FormError, type FormErrorProps, FormField, type FormFieldProps, FormLabel, type FormLabelProps, type FormProps, GlassCard, type GlassCardProps, Globe, GlowingParticles, GlowingText, GradientText, GridPattern, HoverCard, HoverCardContent, IPhoneMockup, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, type InputProps, Kbd, MacBookMockup, MagicCard, Marquee, Meteors, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, ModalTitle, type ModalTitleProps, type NavItem, Navbar, type NavbarProps, NeonButton, type NeonButtonProps, NoData, NoSearchResults, NumberField, NumberTicker, Pagination, Particles, Popover, Progress, Radio, RadioGroup, ResizableHandle, ResizablePanel, ResizablePanelGroup, Ripple, RippleButton, SafariMockup, ScrollAnimation, SearchField, SegmentedControl, Select, type SelectOption, type SelectProps, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, ShinyText, Shortcut, Skeleton, Slider, Spinner, SpotlightCard, type SpotlightCardProps, SpringButton, StatusBadge, StatusDot, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Tag, TagGroup, TerminalLine, TerminalMockup, TextReveal, Textarea, type TextareaProps, TiltCard, ToastProvider, Toggle, ToggleGroup, ToggleGroupItem, type ToggleProps, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TracingBeam, TrueFocus, type TrueFocusProps, TypingAnimation, buttonVariants, cn, toggleVariants, useConfetti, useToast };
