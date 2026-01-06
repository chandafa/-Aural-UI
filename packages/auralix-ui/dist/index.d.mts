import * as React$1 from 'react';
import React__default, { ButtonHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ClassValue } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "destructive";
    size?: "sm" | "md" | "lg";
}
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "success" | "warning" | "error" | "info";
    size?: "sm" | "md";
    className?: string;
}
declare function Badge({ children, variant, size, className, }: BadgeProps): react_jsx_runtime.JSX.Element;

interface AlertProps {
    children: React.ReactNode;
    variant?: "success" | "error" | "warning" | "info";
    title?: string;
    icon?: boolean;
    className?: string;
}
declare function Alert({ children, variant, title, icon, className, }: AlertProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
}
declare function Card({ children, className, hoverable }: CardProps): react_jsx_runtime.JSX.Element;
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

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    inputSize?: "sm" | "md" | "lg";
}
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    size?: "sm" | "md" | "lg" | "xl";
    closeOnBackdrop?: boolean;
    className?: string;
}
declare function Modal({ isOpen, onClose, children, size, closeOnBackdrop, className, }: ModalProps): react_jsx_runtime.JSX.Element | null;
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
}
declare const Select: React$1.ForwardRefExoticComponent<SelectProps & React$1.RefAttributes<HTMLSelectElement>>;

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}
declare const Textarea: React$1.ForwardRefExoticComponent<TextareaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: "top" | "bottom" | "left" | "right";
    className?: string;
}
declare function Tooltip({ children, content, position, className, }: TooltipProps): react_jsx_runtime.JSX.Element;

interface TableProps {
    children: React.ReactNode;
    className?: string;
    striped?: boolean;
    hoverable?: boolean;
}
declare function Table({ children, className, striped, hoverable }: TableProps): react_jsx_runtime.JSX.Element;
interface TableHeaderProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableHeader({ children, className }: TableHeaderProps): react_jsx_runtime.JSX.Element;
interface TableBodyProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableBody({ children, className }: TableBodyProps): react_jsx_runtime.JSX.Element;
interface TableRowProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableRow({ children, className }: TableRowProps): react_jsx_runtime.JSX.Element;
interface TableHeadProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableHead({ children, className }: TableHeadProps): react_jsx_runtime.JSX.Element;
interface TableCellProps {
    children: React.ReactNode;
    className?: string;
}
declare function TableCell({ children, className }: TableCellProps): react_jsx_runtime.JSX.Element;

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

interface NeonButtonProps extends React__default.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "cyan" | "magenta" | "lime" | "violet";
    neonSize?: "sm" | "md" | "lg";
    children: React__default.ReactNode;
}
declare const NeonButton: React__default.ForwardRefExoticComponent<NeonButtonProps & React__default.RefAttributes<HTMLButtonElement>>;

interface GlassCardProps extends React__default.HTMLAttributes<HTMLDivElement> {
    intensity?: "low" | "medium" | "high";
    children: React__default.ReactNode;
}
declare const GlassCard: React__default.ForwardRefExoticComponent<GlassCardProps & React__default.RefAttributes<HTMLDivElement>>;

interface BlurTextProps {
    text: string;
    className?: string;
    delay?: number;
    wordDelay?: number;
}
declare function BlurText({ text, className, delay, wordDelay, }: BlurTextProps): react_jsx_runtime.JSX.Element;

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    spotlightColor?: string;
}
declare function SpotlightCard({ children, className, spotlightColor, // Violet-ish
...props }: SpotlightCardProps): react_jsx_runtime.JSX.Element;

interface TrueFocusProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    focusColor?: string;
}
declare function TrueFocus({ className, label, focusColor, // Violet-500
...props }: TrueFocusProps): react_jsx_runtime.JSX.Element;

interface AnimatedGradientTextProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
declare function AnimatedGradientText({ children, className, ...props }: AnimatedGradientTextProps): react_jsx_runtime.JSX.Element;

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

interface DockProps {
    className?: string;
    magnification?: number;
    distance?: number;
    direction?: "top" | "middle" | "bottom";
    children: React__default.ReactNode;
}
declare function Dock({ className, direction: _direction, children, magnification, distance, }: DockProps): react_jsx_runtime.JSX.Element;
interface DockIconProps extends React__default.HTMLAttributes<HTMLDivElement> {
    size?: number;
    magnification?: number;
    distance?: number;
    children?: React__default.ReactNode;
}
declare function DockIcon({ size, magnification, distance, className, children, ...props }: DockIconProps): react_jsx_runtime.JSX.Element;

interface MeteorsProps {
    number?: number;
    className?: string;
}
declare const Meteors: ({ number, className }: MeteorsProps) => react_jsx_runtime.JSX.Element;

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientSize?: number;
    gradientColor?: string;
    gradientOpacity?: number;
}
declare function MagicCard({ children, className, gradientSize, gradientColor, gradientOpacity, ...props }: MagicCardProps): react_jsx_runtime.JSX.Element;

interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    children?: React$1.ReactNode;
    footer?: React$1.ReactNode;
    className?: string;
}
declare function Dialog({ isOpen, onClose, title, description, children, footer, className, }: DialogProps): react_jsx_runtime.JSX.Element | null;
declare function DialogButton({ className, variant, ...props }: React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "secondary";
}): react_jsx_runtime.JSX.Element;

interface SwitchProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
}
declare const Switch: React$1.ForwardRefExoticComponent<SwitchProps & React$1.RefAttributes<HTMLButtonElement>>;

interface SliderProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    value?: number;
    min?: number;
    max?: number;
    onValueChange?: (value: number) => void;
}
declare const Slider: React$1.ForwardRefExoticComponent<SliderProps & React$1.RefAttributes<HTMLInputElement>>;

declare function Tabs({ defaultValue, className, children, }: {
    defaultValue: string;
    className?: string;
    children: React$1.ReactNode;
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

interface AccordionItemProps {
    value: string;
    trigger: React$1.ReactNode;
    children: React$1.ReactNode;
    className?: string;
}
declare function Accordion({ children, className, }: {
    children: React$1.ReactNode;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare function AccordionItem({ value, trigger, children, className }: AccordionItemProps): react_jsx_runtime.JSX.Element;

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

declare function cn(...inputs: ClassValue[]): string;

export { Accordion, AccordionItem, Alert, type AlertProps, AnimatedGradientText, Badge, type BadgeProps, BlurText, type BlurTextProps, BorderBeam, Button, type ButtonProps, Card, CardContent, type CardContentProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, type CardProps, CardTitle, type CardTitleProps, type CommandItem, CommandMenu, type CommandMenuProps, Dialog, DialogButton, type DialogProps, Dock, DockIcon, Form, FormDescription, FormError, FormField, FormLabel, GlassCard, type GlassCardProps, Input, type InputProps, MagicCard, Meteors, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, ModalTitle, type ModalTitleProps, type NavItem, Navbar, type NavbarProps, NeonButton, type NeonButtonProps, Select, type SelectOption, type SelectProps, Slider, SpotlightCard, type SpotlightCardProps, Switch, Table, TableBody, type TableBodyProps, TableCell, type TableCellProps, TableHead, type TableHeadProps, TableHeader, type TableHeaderProps, type TableProps, TableRow, type TableRowProps, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, type TextareaProps, Tooltip, type TooltipProps, TrueFocus, type TrueFocusProps, cn };
