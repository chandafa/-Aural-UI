"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Code,
  Copy,
  Terminal,
  ChevronRight,
  Sun,
  Moon,
  Laptop,
  Check,
  Zap,
  Layout,
  Type,
  Maximize2,
  MousePointer,
  Grid,
  CreditCard,
  CreditCard as IconCard,
  Image as ImageIcon,
  AlertCircle
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/Tooltip";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { Dialog, DialogButton } from "@/components/ui/Dialog";
import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/Modal";
import { Dock, DockIcon } from "@/components/ui/Dock";
import { Switch } from "@/components/ui/Switch";
import { Slider } from "@/components/ui/Slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";
import { CopyCommand } from "@/components/ui/CopyCommand";
import { Combobox } from "@/components/ui/Combobox";
import { Calendar } from "@/components/ui/Calendar";
import { DatePicker } from "@/components/ui/DatePicker";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/InputOTP";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/Resizable";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { Meteors } from "@/components/ui/Meteors";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Globe } from "@/components/ui/Globe";
import { BorderBeam } from "@/components/ui/BorderBeam";

// New iOS-style components
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioGroup } from "@/components/ui/Radio";
import { SearchField } from "@/components/ui/SearchField";
import { NumberField } from "@/components/ui/NumberField";
import { Spinner, ActivityIndicator } from "@/components/ui/Spinner";
import { Progress, CircularProgress } from "@/components/ui/Progress";
import { Breadcrumb } from "@/components/ui/Breadcrumb";
import { Pagination } from "@/components/ui/Pagination";
import { Popover } from "@/components/ui/Popover";
import { Divider } from "@/components/ui/Divider";
import { Tag, TagGroup } from "@/components/ui/Tag";
import { Kbd, Shortcut } from "@/components/ui/Kbd";
import { TypingAnimation } from "@/components/ui/TypingAnimation";
import { FlipWords } from "@/components/ui/FlipWords";
import { ShinyText, GradientText } from "@/components/ui/ShinyText";
import { ExpandableCard } from "@/components/ui/ExpandableCard";
import { FlipCard } from "@/components/ui/FlipCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { GridPattern } from "@/components/ui/GridPattern";
import { DotPattern } from "@/components/ui/DotPattern";
import { RippleButton } from "@/components/ui/Ripple";
import { Particles } from "@/components/ui/Particles";
import { IPhoneMockup } from "@/components/ui/IPhoneMockup";
import { SafariMockup } from "@/components/ui/SafariMockup";
import { TerminalMockup, TerminalLine } from "@/components/ui/TerminalMockup";
import { NoData, NoSearchResults, ErrorState } from "@/components/ui/EmptyState";
import { FileTree } from "@/components/ui/FileTree";
import { Dropdown, DropdownItem, DropdownSeparator, DropdownLabel } from "@/components/ui/Dropdown";
import { StatusDot, StatusBadge } from "@/components/ui/StatusDot";

// Missing Essential Components
import { Skeleton } from "@/components/ui/Skeleton";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/Sheet";
import { Carousel } from "@/components/ui/Carousel";
import { Toggle } from "@/components/ui/Toggle";

const AnimatedBeamDemo = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <div ref={div1Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
             A
          </div>
          <div ref={div2Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
             B
          </div>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div2Ref as React.RefObject<HTMLElement>}
      />
    </div>
  );
};

const AnimatedBeamBiDirectional = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <div ref={div1Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
             A
          </div>
          <div ref={div2Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
             B
          </div>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div2Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div2Ref as React.RefObject<HTMLElement>}
        reverse
      />
    </div>
  );
};

const AnimatedBeamMultiple = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const div1Ref = React.useRef<HTMLDivElement>(null);
  const div2Ref = React.useRef<HTMLDivElement>(null);
  const div3Ref = React.useRef<HTMLDivElement>(null);

  return (
    <div
      className="relative flex w-full max-w-[500px] items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex h-full w-full flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row justify-between">
          <div ref={div1Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
             Hub
          </div>
          <div className="flex flex-col gap-8">
            <div ref={div2Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
               1
            </div>
             <div ref={div3Ref} className="z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)] dark:text-black">
               2
            </div>
          </div>
        </div>
      </div>
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div2Ref as React.RefObject<HTMLElement>}
      />
      <AnimatedBeam
        containerRef={containerRef as React.RefObject<HTMLElement>}
        fromRef={div1Ref as React.RefObject<HTMLElement>}
        toRef={div3Ref as React.RefObject<HTMLElement>}
      />
    </div>
  );
};

const GlobeDemo = () => {
    return (
        <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60 md:shadow-xl">
             <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                Globe
             </span>
             <Globe className="top-28" />
             <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
    );
};

// Helper for interactive variants (Dialog/Modal/Sheet)
function DialogVariantItem({ variant, label }: { variant: "standard" | "sheet" | "fullscreen", label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2">
      <Button variant="outline" onClick={() => setIsOpen(true)}>{label}</Button>
      <Dialog
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        variant={variant}
        title={label}
        description={`This is the ${variant} variant of the Dialog component.`}
        footer={
          <DialogButton onClick={() => setIsOpen(false)}>Close</DialogButton>
        }
      >
        <div className="h-24 flex items-center justify-center border border-dashed border-white/20 rounded-lg">
           Content Area
        </div>
      </Dialog>
    </div>
  );
}

function ModalVariantItem({ variant, label }: { variant: "default" | "bottom-sheet" | "drawer", label: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col items-center gap-2">
      <Button variant="outline" onClick={() => setIsOpen(true)}>{label}</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        variant={variant}
      >
        <ModalHeader>
          <ModalTitle>{label}</ModalTitle>
        </ModalHeader>
        <ModalBody>
          This is the {variant} variant of the Modal component.
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

// Wrapper for Preview and Code Tabs
function VariantWrapper({ children, code, title }: { children: React.ReactNode, code: string, title: string }) {
  const [hasCopied, setHasCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setHasCopied(true);
    setTimeout(() => setHasCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center justify-between">
             <span className="text-sm font-medium text-muted-foreground">{title}</span>
        </div>
        <Tabs defaultValue="preview" className="w-full">
            <div className="flex items-center justify-between mb-2">
                 <TabsList className="w-fit">
                    <TabsTrigger value="preview" className="px-3 py-1 text-xs">Preview</TabsTrigger>
                    <TabsTrigger value="code" className="px-3 py-1 text-xs">Code</TabsTrigger>
                </TabsList>
                 <Button variant="ghost" size="sm" className="h-7 w-7 p-0" onClick={copyToClipboard}>
                    {hasCopied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3 text-muted-foreground" />}
                </Button>
            </div>
            <TabsContent value="preview" className="mt-0 rounded-xl border border-border bg-background/50 p-6 flex items-center justify-center min-h-[150px]">
                {children}
            </TabsContent>
            <TabsContent value="code" className="mt-0">
                <pre className="rounded-xl border border-border bg-black/80 p-4 overflow-x-auto">
                    <code className="text-xs font-mono text-zinc-300">
                        {code}
                    </code>
                </pre>
            </TabsContent>
        </Tabs>
    </div>
  );
}

export function ComponentVariants({ slug }: { slug: string }) {
  switch (slug) {
    case "button":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper 
            title="Gradient" 
            code='<Button variant="gradient">Gradient Button</Button>'>
            <Button variant="gradient">Gradient Button</Button>
          </VariantWrapper>
          <VariantWrapper 
            title="Neon" 
            code='<Button variant="neon">Neon Button</Button>'>
            <Button variant="neon">Neon Button</Button>
          </VariantWrapper>
           <VariantWrapper 
            title="Soft" 
            code='<Button variant="soft">Soft Button</Button>'>
            <Button variant="soft">Soft Button</Button>
          </VariantWrapper>
        </div>
      );

    case "badge":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <VariantWrapper title="Solid (Default)" code={`<Badge design="solid" variant="success">Solid</Badge>`}>
             <div className="flex gap-2">
                <Badge design="solid" variant="success">Solid</Badge>
                <Badge design="solid" variant="error">Badge</Badge>
            </div>
           </VariantWrapper>
           <VariantWrapper title="Soft" code={`<Badge design="soft" variant="success">Soft</Badge>`}>
             <div className="flex gap-2">
                <Badge design="soft" variant="success">Soft</Badge>
                <Badge design="soft" variant="error">Badge</Badge>
            </div>
           </VariantWrapper>
           <VariantWrapper title="Outline" code={`<Badge design="outline" variant="success">Outline</Badge>`}>
             <div className="flex gap-2">
                <Badge design="outline" variant="success">Outline</Badge>
                <Badge design="outline" variant="error">Badge</Badge>
            </div>
           </VariantWrapper>
        </div>
      );

    case "alert":
      return (
        <div className="grid grid-cols-1 gap-8 w-full">
            <VariantWrapper title="Standard" code={`<Alert design="standard" variant="info" title="Standard">Standard Alert</Alert>`}>
               <Alert design="standard" variant="info" title="Standard Alert">This is a standard alert design.</Alert>
            </VariantWrapper>
            <VariantWrapper title="Solid" code={`<Alert design="solid" variant="success" title="Solid">Solid Alert</Alert>`}>
               <Alert design="solid" variant="success" title="Solid Alert">This is a solid filled alert design.</Alert>
            </VariantWrapper>
            <VariantWrapper title="Left Accent" code={`<Alert design="left-accent" variant="warning" title="Left Accent">Left Accent Alert</Alert>`}>
               <Alert design="left-accent" variant="warning" title="Left Accent">This alert features a prominently colored left border.</Alert>
            </VariantWrapper>
        </div>
      );

    case "input":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <VariantWrapper title="Box (Default)" code='<Input variant="box" placeholder="Boxed input" />'>
             <Input variant="box" placeholder="Boxed input" />
           </VariantWrapper>
           <VariantWrapper title="Line" code='<Input variant="line" placeholder="Line input" />'>
             <Input variant="line" placeholder="Line input" />
           </VariantWrapper>
           <VariantWrapper title="Floating" code='<Input variant="floating" placeholder="Floating Label" />'>
             <Input variant="floating" placeholder="Floating Label" />
           </VariantWrapper>
        </div>
      );

    case "textarea":
       return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <VariantWrapper title="Default" code='<Textarea variant="default" placeholder="Default textarea" />'>
             <Textarea variant="default" placeholder="Default textarea" />
           </VariantWrapper>
           <VariantWrapper title="Ghost" code='<Textarea variant="ghost" placeholder="Ghost textarea" />'>
             <Textarea variant="ghost" placeholder="Ghost textarea" />
           </VariantWrapper>
           <VariantWrapper title="Terminal" code='<Textarea variant="terminal" placeholder="> Terminal style input..." />'>
             <Textarea variant="terminal" placeholder="> Terminal style input..." />
           </VariantWrapper>
        </div>
      );

    case "select":
       return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <VariantWrapper title="Standard" code='<Select variant="standard" options={...} />'>
             <Select variant="standard" placeholder="Standard" options={[{value:"1", label:"Option 1"}]} />
           </VariantWrapper>
           <VariantWrapper title="Minimal" code='<Select variant="minimal" options={...} />'>
             <Select variant="minimal" placeholder="Minimal" options={[{value:"1", label:"Option 1"}]} />
           </VariantWrapper>
           <VariantWrapper title="Combobox" code='<Select variant="combobox" options={...} />'>
             <Select variant="combobox" placeholder="Combobox" options={[{value:"1", label:"Option 1"}]} />
           </VariantWrapper>
        </div>
      );

    case "card":
       return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <VariantWrapper title="Simple" code='<Card variant="simple">Simple Content</Card>'>
             <Card variant="simple" className="h-40 flex items-center justify-center">
                <span className="font-semibold">Simple Variant</span>
             </Card>
           </VariantWrapper>
           <VariantWrapper title="Glass" code='<Card variant="glass">Glass Content</Card>'>
             <Card variant="glass" className="h-40 flex items-center justify-center">
                <span className="font-semibold">Glass Variant</span>
             </Card>
           </VariantWrapper>
           <VariantWrapper title="Neon" code='<Card variant="neon">Neon Content</Card>'>
             <Card variant="neon" className="h-40 flex items-center justify-center">
                <span className="font-semibold text-violet-400">Neon Variant</span>
             </Card>
           </VariantWrapper>
        </div>
      );

    case "dialog":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Standard" code='<Dialog variant="standard" ... />'>
                <DialogVariantItem variant="standard" label="Standard Dialog" />
            </VariantWrapper>
            <VariantWrapper title="Sheet" code='<Dialog variant="sheet" ... />'>
                <DialogVariantItem variant="sheet" label="Sheet Dialog" />
            </VariantWrapper>
            <VariantWrapper title="Fullscreen" code='<Dialog variant="fullscreen" ... />'>
                <DialogVariantItem variant="fullscreen" label="Fullscreen Dialog" />
            </VariantWrapper>
        </div>
      );

    case "modal":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Default" code='<Modal variant="default" ... />'>
                <ModalVariantItem variant="default" label="Default Modal" />
            </VariantWrapper>
            <VariantWrapper title="Bottom Sheet" code='<Modal variant="bottom-sheet" ... />'>
                <ModalVariantItem variant="bottom-sheet" label="Bottom Sheet" />
            </VariantWrapper>
            <VariantWrapper title="Drawer" code='<Modal variant="drawer" ... />'>
                <ModalVariantItem variant="drawer" label="Drawer Modal" />
            </VariantWrapper>
        </div>
      );

    case "dock":
       return (
        <div className="flex flex-col gap-12 w-full">
            <VariantWrapper title="Mac (Magnification)" code={`<Dock variant="mac">\n  <DockIcon>🍎</DockIcon>\n  <DockIcon>🖥️</DockIcon>\n</Dock>`}>
                <Dock variant="mac">
                    <DockIcon className="bg-white/10 text-xl">🍎</DockIcon>
                    <DockIcon className="bg-white/10 text-xl">🖥️</DockIcon>
                    <DockIcon className="bg-white/10 text-xl">📧</DockIcon>
                </Dock>
            </VariantWrapper>

             <VariantWrapper title="Windows (Taskbar)" code={`<Dock variant="windows">\n  <DockIcon>🪟</DockIcon>\n  <DockIcon>📁</DockIcon>\n</Dock>`}>
                <div className="relative h-20 w-full border border-dashed border-white/10 rounded-lg overflow-hidden flex items-end justify-center pb-2 bg-zinc-950">
                    <Dock variant="windows" className="static transform-none mb-0">
                        <DockIcon className="bg-transparent hover:bg-white/10 rounded-sm">🪟</DockIcon>
                        <DockIcon className="bg-transparent hover:bg-white/10 rounded-sm">📁</DockIcon>
                    </Dock>
                </div>
            </VariantWrapper>

             <VariantWrapper title="Material (Floating Pill)" code={`<Dock variant="material">\n  <DockIcon>M</DockIcon>\n  <DockIcon>T</DockIcon>\n</Dock>`}>
                <Dock variant="material">
                    <DockIcon className="rounded-full bg-blue-400/20 text-blue-300">M</DockIcon>
                    <DockIcon className="rounded-full bg-green-400/20 text-green-300">T</DockIcon>
                </Dock>
            </VariantWrapper>
        </div>
      );

    case "accordion":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
             <VariantWrapper title="Simple" code={`<Accordion variant="simple">\n  <AccordionItem value="1" trigger="Item 1">Content</AccordionItem>\n</Accordion>`}>
                 <Accordion variant="simple" className="w-full">
                    <AccordionItem value="1" trigger="Item 1">Content 1</AccordionItem>
                    <AccordionItem value="2" trigger="Item 2">Content 2</AccordionItem>
                </Accordion>
             </VariantWrapper>
             <VariantWrapper title="Boxed" code={`<Accordion variant="boxed">\n  <AccordionItem value="1" trigger="Item 1">Content</AccordionItem>\n</Accordion>`}>
                 <Accordion variant="boxed" className="w-full">
                    <AccordionItem value="1" trigger="Item 1">Content 1</AccordionItem>
                    <AccordionItem value="2" trigger="Item 2">Content 2</AccordionItem>
                </Accordion>
             </VariantWrapper>
             <VariantWrapper title="Separated" code={`<Accordion variant="separated">\n  <AccordionItem value="1" trigger="Item 1">Content</AccordionItem>\n</Accordion>`}>
                 <Accordion variant="separated" className="w-full">
                    <AccordionItem value="1" trigger="Item 1">Content 1</AccordionItem>
                    <AccordionItem value="2" trigger="Item 2">Content 2</AccordionItem>
                </Accordion>
             </VariantWrapper>
        </div>
      );

    case "tabs":
      return (
        <div className="grid grid-cols-1 gap-8 w-full max-w-lg mx-auto">
            <VariantWrapper title="Pill" code={`<Tabs variant="pill" ... />`}>
                <Tabs variant="pill" defaultValue="1">
                    <TabsList className="w-full">
                        <TabsTrigger value="1" className="flex-1">Tab 1</TabsTrigger>
                        <TabsTrigger value="2" className="flex-1">Tab 2</TabsTrigger>
                    </TabsList>
                </Tabs>
            </VariantWrapper>
            <VariantWrapper title="Line" code={`<Tabs variant="line" ... />`}>
                <Tabs variant="line" defaultValue="1">
                    <TabsList className="w-full">
                        <TabsTrigger value="1" className="flex-1">Tab 1</TabsTrigger>
                        <TabsTrigger value="2" className="flex-1">Tab 2</TabsTrigger>
                    </TabsList>
                </Tabs>
            </VariantWrapper>
            <VariantWrapper title="Segmented" code={`<Tabs variant="segmented" ... />`}>
                <Tabs variant="segmented" defaultValue="1">
                    <TabsList className="w-full">
                        <TabsTrigger value="1" className="flex-1">Tab 1</TabsTrigger>
                        <TabsTrigger value="2" className="flex-1">Tab 2</TabsTrigger>
                    </TabsList>
                </Tabs>
            </VariantWrapper>
        </div>
      );
    
    case "switch":
        return (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <VariantWrapper title="iOS" code='<Switch variant="ios" />'>
                    <div className="flex justify-center"><Switch variant="ios" /></div>
                </VariantWrapper>
                 <VariantWrapper title="Material" code='<Switch variant="material" />'>
                    <div className="flex justify-center"><Switch variant="material" /></div>
                </VariantWrapper>
                 <VariantWrapper title="Cyber" code='<Switch variant="cyber" />'>
                    <div className="flex justify-center"><Switch variant="cyber" /></div>
                </VariantWrapper>
             </div>
        );
    


    case "tooltip":
        return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <VariantWrapper title="Simple" code='<TooltipContent variant="simple">...</TooltipContent>'>
                     <div className="flex justify-center">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild><Button variant="outline">Hover Me</Button></TooltipTrigger>
                                <TooltipContent variant="simple">Simple Tooltip</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                     </div>
                 </VariantWrapper>
                 <VariantWrapper title="Rich" code='<TooltipContent variant="rich">...</TooltipContent>'>
                     <div className="flex justify-center">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild><Button variant="outline">Hover Me</Button></TooltipTrigger>
                                <TooltipContent variant="rich">
                                    <div className="font-semibold">Rich Tooltip</div>
                                    <div className="text-xs opacity-70">With more detail</div>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                     </div>
                 </VariantWrapper>
                 <VariantWrapper title="Arrow" code='<TooltipContent variant="arrow">...</TooltipContent>'>
                     <div className="flex justify-center">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild><Button variant="outline">Hover Me</Button></TooltipTrigger>
                                <TooltipContent variant="arrow">Tooltip with Arrow</TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                     </div>
                 </VariantWrapper>
            </div>
        );
    
    case "table":
        return (
            <div className="flex flex-col gap-8 w-full">
                 <VariantWrapper title="Simple" code='<Table variant="simple">...</Table>'>
                    <Table variant="simple">
                        <TableHeader><TableRow><TableHead>Head</TableHead><TableHead>Head</TableHead></TableRow></TableHeader>
                        <TableBody><TableRow><TableCell>Cell</TableCell><TableCell>Cell</TableCell></TableRow></TableBody>
                    </Table>
                </VariantWrapper>
                <VariantWrapper title="Striped" code='<Table variant="striped">...</Table>'>
                    <Table variant="striped">
                       <TableHeader><TableRow><TableHead>Head</TableHead><TableHead>Head</TableHead></TableRow></TableHeader>
                        <TableBody>
                            <TableRow><TableCell>Row 1</TableCell><TableCell>Data</TableCell></TableRow>
                            <TableRow><TableCell>Row 2</TableCell><TableCell>Data</TableCell></TableRow>
                        </TableBody>
                    </Table>
                </VariantWrapper>
                <VariantWrapper title="Bordered" code='<Table variant="bordered">...</Table>'>
                     <Table variant="bordered">
                        <TableHeader><TableRow><TableHead>Head</TableHead><TableHead>Head</TableHead></TableRow></TableHeader>
                        <TableBody><TableRow><TableCell>Cell</TableCell><TableCell>Cell</TableCell></TableRow></TableBody>
                    </Table>
                </VariantWrapper>
            </div>
        );

    case "copy-command":
        return (
            <div className="flex flex-col gap-6 w-full max-w-lg mx-auto">
                 <VariantWrapper title="Boxed" code='<CopyCommand variant="boxed" command="..." />'>
                    <CopyCommand variant="boxed" command="npm install auralix-ui" />
                </VariantWrapper>
                 <VariantWrapper title="Simple" code='<CopyCommand variant="simple" command="..." />'>
                    <CopyCommand variant="simple" command="npx auralix-ui init" />
                </VariantWrapper>
                 <VariantWrapper title="Minimal" code='<CopyCommand variant="minimal" command="..." />'>
                    <CopyCommand variant="minimal" command="git clone repo" />
                </VariantWrapper>
            </div>
        );

    // ============ NEW iOS-STYLE COMPONENT VARIANTS ============
    case "checkbox":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Sizes" code='<Checkbox size="sm" label="Small" />\n<Checkbox size="md" label="Medium" />\n<Checkbox size="lg" label="Large" />'>
            <div className="space-y-3">
              <Checkbox size="sm" label="Small checkbox" />
              <Checkbox size="md" label="Medium checkbox" />
              <Checkbox size="lg" label="Large checkbox" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="With Description" code='<Checkbox label="Option" description="Description text" />'>
            <Checkbox label="Enable notifications" description="Receive updates about new features" />
          </VariantWrapper>
          <VariantWrapper title="Disabled" code='<Checkbox label="Disabled" disabled />'>
            <Checkbox label="Disabled option" disabled />
          </VariantWrapper>
        </div>
      );

    case "radio":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Vertical (Default)" code='<RadioGroup orientation="vertical" ... />'>
            <RadioGroup
              name="radio-v"
              orientation="vertical"
              options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }]}
              value="1"
              onChange={() => {}}
            />
          </VariantWrapper>
          <VariantWrapper title="Horizontal" code='<RadioGroup orientation="horizontal" ... />'>
            <RadioGroup
              name="radio-h"
              orientation="horizontal"
              options={[{ value: "1", label: "Yes" }, { value: "2", label: "No" }]}
              value="1"
              onChange={() => {}}
            />
          </VariantWrapper>
        </div>
      );

    case "search-field":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Sizes" code='<SearchField size="sm" />\n<SearchField size="md" />\n<SearchField size="lg" />'>
            <div className="w-full space-y-3">
              <SearchField size="sm" placeholder="Small search" />
              <SearchField size="md" placeholder="Medium search" />
              <SearchField size="lg" placeholder="Large search" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Loading State" code='<SearchField loading />'>
            <SearchField loading placeholder="Searching..." />
          </VariantWrapper>
        </div>
      );

    case "number-field":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Sizes" code='<NumberField size="sm" />\n<NumberField size="md" />\n<NumberField size="lg" />'>
            <div className="space-y-3">
              <NumberField size="sm" label="Small" value={1} onChange={() => {}} />
              <NumberField size="md" label="Medium" value={5} onChange={() => {}} />
              <NumberField size="lg" label="Large" value={10} onChange={() => {}} />
            </div>
          </VariantWrapper>
          <VariantWrapper title="With Min/Max" code='<NumberField min={0} max={10} value={5} />'>
            <NumberField label="Quantity (0-10)" min={0} max={10} value={5} onChange={() => {}} />
          </VariantWrapper>
        </div>
      );

    case "spinner":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Sizes" code='<Spinner size="xs" />\n<Spinner size="sm" />\n<Spinner size="md" />\n<Spinner size="lg" />'>
            <div className="flex items-center gap-4">
              <Spinner size="xs" />
              <Spinner size="sm" />
              <Spinner size="md" />
              <Spinner size="lg" />
              <Spinner size="xl" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Activity Indicator (iOS)" code='<ActivityIndicator size="md" />'>
            <div className="flex items-center gap-4">
              <ActivityIndicator size="sm" />
              <ActivityIndicator size="md" />
              <ActivityIndicator size="lg" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Colors" code='<Spinner color="primary" />\n<Spinner color="white" />'>
            <div className="flex items-center gap-4">
              <Spinner color="default" />
              <Spinner color="primary" />
              <div className="bg-zinc-800 p-3 rounded-lg">
                <Spinner color="white" />
              </div>
            </div>
          </VariantWrapper>
        </div>
      );

    case "progress":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Variants" code='<Progress variant="default" />\n<Progress variant="gradient" />\n<Progress variant="striped" />'>
            <div className="w-full space-y-4">
              <Progress value={60} />
              <Progress value={75} variant="gradient" />
              <Progress value={45} variant="striped" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Sizes" code='<Progress size="sm" />\n<Progress size="md" />\n<Progress size="lg" />'>
            <div className="w-full space-y-4">
              <Progress value={50} size="sm" />
              <Progress value={50} size="md" />
              <Progress value={50} size="lg" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="With Label" code='<Progress label="Loading" showValue value={75} />'>
            <Progress label="Uploading..." showValue value={75} />
          </VariantWrapper>
          <VariantWrapper title="Circular Progress" code='<CircularProgress value={75} showValue />'>
            <div className="flex items-center gap-6">
              <CircularProgress value={25} size={48} />
              <CircularProgress value={50} size={64} showValue />
              <CircularProgress value={75} size={80} variant="gradient" showValue />
            </div>
          </VariantWrapper>
        </div>
      );

    case "breadcrumb":
      return (
        <div className="grid grid-cols-1 gap-8">
          <VariantWrapper title="Chevron Separator (Default)" code='<Breadcrumb separator="chevron" items={...} />'>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Details" }]} />
          </VariantWrapper>
          <VariantWrapper title="Slash Separator" code='<Breadcrumb separator="slash" items={...} />'>
            <Breadcrumb separator="slash" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Details" }]} />
          </VariantWrapper>
          <VariantWrapper title="Dot Separator" code='<Breadcrumb separator="dot" items={...} />'>
            <Breadcrumb separator="dot" items={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: "Details" }]} />
          </VariantWrapper>
        </div>
      );

    case "pagination":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Sizes" code='<Pagination size="sm" />\n<Pagination size="md" />\n<Pagination size="lg" />'>
            <div className="space-y-4">
              <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="sm" />
              <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="md" />
              <Pagination currentPage={3} totalPages={10} onPageChange={() => {}} size="lg" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Few Pages" code='<Pagination totalPages={5} currentPage={2} />'>
            <Pagination currentPage={2} totalPages={5} onPageChange={() => {}} />
          </VariantWrapper>
        </div>
      );

    case "divider":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Variants" code='<Divider variant="solid" />\n<Divider variant="dashed" />\n<Divider variant="dotted" />'>
            <div className="w-full space-y-6">
              <Divider variant="solid" />
              <Divider variant="dashed" />
              <Divider variant="dotted" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="With Label" code='<Divider label="OR" />'>
            <div className="w-full space-y-6">
              <Divider label="OR" />
              <Divider label="Continue with" />
            </div>
          </VariantWrapper>
        </div>
      );

    case "tag":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Variants" code='<Tag variant="default" />\n<Tag variant="primary" />\n<Tag variant="success" />'>
            <TagGroup>
              <Tag variant="default">Default</Tag>
              <Tag variant="primary">Primary</Tag>
              <Tag variant="success">Success</Tag>
              <Tag variant="warning">Warning</Tag>
              <Tag variant="error">Error</Tag>
            </TagGroup>
          </VariantWrapper>
          <VariantWrapper title="Sizes" code='<Tag size="sm" />\n<Tag size="md" />\n<Tag size="lg" />'>
            <TagGroup>
              <Tag size="sm">Small</Tag>
              <Tag size="md">Medium</Tag>
              <Tag size="lg">Large</Tag>
            </TagGroup>
          </VariantWrapper>
          <VariantWrapper title="Removable" code='<Tag removable onRemove={() => {}} />'>
            <TagGroup>
              <Tag variant="primary" removable onRemove={() => {}}>React</Tag>
              <Tag variant="success" removable onRemove={() => {}}>TypeScript</Tag>
            </TagGroup>
          </VariantWrapper>
        </div>
      );

    case "kbd":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Single Keys" code='<Kbd>⌘</Kbd>\n<Kbd>K</Kbd>'>
            <div className="flex items-center gap-2">
              <Kbd>⌘</Kbd>
              <Kbd>K</Kbd>
              <Kbd>Enter</Kbd>
              <Kbd>Esc</Kbd>
            </div>
          </VariantWrapper>
          <VariantWrapper title="Shortcuts" code='<Shortcut keys={["cmd", "shift", "p"]} />'>
            <div className="space-y-3">
              <Shortcut keys={["cmd", "k"]} />
              <Shortcut keys={["cmd", "shift", "p"]} />
              <Shortcut keys={["ctrl", "alt", "delete"]} />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Sizes" code='<Kbd size="sm" />\n<Kbd size="md" />\n<Kbd size="lg" />'>
            <div className="flex items-center gap-4">
              <Kbd size="sm">⌘</Kbd>
              <Kbd size="md">⌘</Kbd>
              <Kbd size="lg">⌘</Kbd>
            </div>
          </VariantWrapper>
        </div>
      );

    case "typing-animation":
      return (
        <div className="grid grid-cols-1 gap-8">
          <VariantWrapper title="Normal Speed" code='<TypingAnimation text="Hello World" duration={100} />'>
            <TypingAnimation text="Hello, welcome to AuralUI!" duration={100} />
          </VariantWrapper>
          <VariantWrapper title="Fast Speed" code='<TypingAnimation text="Hello World" duration={50} />'>
            <TypingAnimation text="This types really fast!" duration={50} />
          </VariantWrapper>
          <VariantWrapper title="Without Cursor" code='<TypingAnimation cursor={false} />'>
            <TypingAnimation text="No cursor here" cursor={false} />
          </VariantWrapper>
        </div>
      );

    case "flip-words":
      return (
        <div className="grid grid-cols-1 gap-8">
          <VariantWrapper title="Default" code='<FlipWords words={["amazing", "beautiful"]} />'>
            <div className="text-2xl font-semibold">
              Build <FlipWords words={["amazing", "beautiful", "modern"]} /> apps
            </div>
          </VariantWrapper>
          <VariantWrapper title="Fast Duration" code='<FlipWords duration={1500} words={...} />'>
            <div className="text-2xl font-semibold">
              We make <FlipWords words={["design", "code", "magic"]} duration={1500} /> simple
            </div>
          </VariantWrapper>
        </div>
      );

    case "shiny-text":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Shimmer Effect" code='<ShinyText>Premium</ShinyText>'>
            <div className="text-3xl font-bold">
              <ShinyText>Premium Feature</ShinyText>
            </div>
          </VariantWrapper>
          <VariantWrapper title="Gradient Text" code='<GradientText>Magic</GradientText>'>
            <div className="text-3xl font-bold">
              <GradientText>Magic Gradient</GradientText>
            </div>
          </VariantWrapper>
        </div>
      );

    case "expandable-card":
      return (
        <div className="grid grid-cols-1 gap-8 w-full max-w-md mx-auto">
          <VariantWrapper title="Collapsed (Default)" code='<ExpandableCard title="Title">Content</ExpandableCard>'>
            <ExpandableCard title="Click to expand" description="Hidden content below">
              <p className="text-muted-foreground">This is the expanded content area.</p>
            </ExpandableCard>
          </VariantWrapper>
          <VariantWrapper title="Default Expanded" code='<ExpandableCard defaultExpanded>...</ExpandableCard>'>
            <ExpandableCard title="Already Open" defaultExpanded>
              <p className="text-muted-foreground">This card starts expanded.</p>
            </ExpandableCard>
          </VariantWrapper>
        </div>
      );

    case "flip-card":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Flip on Hover" code='<FlipCard flipOnHover front={...} back={...} />'>
            <FlipCard
              className="w-48 h-32"
              front={<div className="flex items-center justify-center h-full font-bold">Hover Me</div>}
              back={<div className="flex items-center justify-center h-full font-bold bg-primary text-primary-foreground">Back!</div>}
            />
          </VariantWrapper>
          <VariantWrapper title="Flip on Click" code='<FlipCard flipOnClick flipOnHover={false} ... />'>
            <FlipCard
              className="w-48 h-32"
              flipOnHover={false}
              flipOnClick
              front={<div className="flex items-center justify-center h-full font-bold">Click Me</div>}
              back={<div className="flex items-center justify-center h-full font-bold bg-primary text-primary-foreground">Clicked!</div>}
            />
          </VariantWrapper>
        </div>
      );

    case "tilt-card":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="With Glare" code='<TiltCard glare>Content</TiltCard>'>
            <TiltCard className="w-48 h-32 p-4" glare>
              <h3 className="font-bold">Tilt + Glare</h3>
              <p className="text-sm text-muted-foreground">Move mouse over me</p>
            </TiltCard>
          </VariantWrapper>
          <VariantWrapper title="No Glare" code='<TiltCard glare={false}>Content</TiltCard>'>
            <TiltCard className="w-48 h-32 p-4" glare={false}>
              <h3 className="font-bold">Tilt Only</h3>
              <p className="text-sm text-muted-foreground">No glare effect</p>
            </TiltCard>
          </VariantWrapper>
        </div>
      );

    case "grid-pattern":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Default" code='<GridPattern />'>
            <div className="relative w-full h-40 rounded-lg border overflow-hidden">
              <GridPattern />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Custom Size" code='<GridPattern size={20} />'>
            <div className="relative w-full h-40 rounded-lg border overflow-hidden">
              <GridPattern size={20} />
            </div>
          </VariantWrapper>
        </div>
      );

    case "dot-pattern":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Default" code='<DotPattern />'>
            <div className="relative w-full h-40 rounded-lg border overflow-hidden">
              <DotPattern />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Dense" code='<DotPattern size={16} radius={1.5} />'>
            <div className="relative w-full h-40 rounded-lg border overflow-hidden">
              <DotPattern size={16} radius={1.5} />
            </div>
          </VariantWrapper>
        </div>
      );

    case "ripple":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Default Color" code='<RippleButton>Click</RippleButton>'>
            <RippleButton>Click for Ripple</RippleButton>
          </VariantWrapper>
          <VariantWrapper title="Custom Colors" code='<RippleButton rippleColor="rgba(...)">...</RippleButton>'>
            <div className="flex gap-4">
              <RippleButton rippleColor="rgba(147, 51, 234, 0.4)">Purple</RippleButton>
              <RippleButton rippleColor="rgba(239, 68, 68, 0.4)">Red</RippleButton>
            </div>
          </VariantWrapper>
        </div>
      );

    case "particles":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Default" code='<Particles quantity={30} />'>
            <div className="relative w-full h-40 rounded-lg bg-zinc-900 overflow-hidden">
              <Particles quantity={20} color="#007AFF" />
            </div>
          </VariantWrapper>
          <VariantWrapper title="Custom Color" code='<Particles color="#AF52DE" />'>
            <div className="relative w-full h-40 rounded-lg bg-zinc-900 overflow-hidden">
              <Particles quantity={20} color="#AF52DE" />
            </div>
          </VariantWrapper>
        </div>
      );

    case "iphone-mockup":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Space Gray" code='<IPhoneMockup variant="space-gray">...</IPhoneMockup>'>
            <IPhoneMockup variant="space-gray">
              <div className="h-full bg-gradient-to-br from-violet-500 to-purple-600" />
            </IPhoneMockup>
          </VariantWrapper>
          <VariantWrapper title="Silver" code='<IPhoneMockup variant="silver">...</IPhoneMockup>'>
            <IPhoneMockup variant="silver">
              <div className="h-full bg-gradient-to-br from-blue-500 to-cyan-600" />
            </IPhoneMockup>
          </VariantWrapper>
        </div>
      );

    case "safari-mockup":
      return (
        <div className="grid grid-cols-1 gap-8">
          <VariantWrapper title="With URL" code='<SafariMockup url="example.com">...</SafariMockup>'>
            <SafariMockup url="auralix-ui.dev">
              <div className="h-32 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900" />
            </SafariMockup>
          </VariantWrapper>
        </div>
      );

    case "terminal-mockup":
      return (
        <div className="grid grid-cols-1 gap-8">
          <VariantWrapper title="Commands & Output" code='<TerminalMockup>\n  <TerminalLine command="npm install" />\n  <TerminalLine output="Done" />\n</TerminalMockup>'>
            <TerminalMockup>
              <TerminalLine command="npm install auralix-ui" />
              <TerminalLine output="+ auralix-ui@1.0.0" />
              <TerminalLine command="npx auralix-ui init" />
              <TerminalLine output="✓ Configuration complete" />
            </TerminalMockup>
          </VariantWrapper>
        </div>
      );

    case "empty-state":
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <VariantWrapper title="No Data" code='<NoData />'>
            <NoData />
          </VariantWrapper>
          <VariantWrapper title="No Search Results" code='<NoSearchResults />'>
            <NoSearchResults />
          </VariantWrapper>
          <VariantWrapper title="Error State" code='<ErrorState action={<Button>Retry</Button>} />'>
            <ErrorState action={<Button size="sm">Retry</Button>} />
          </VariantWrapper>
        </div>
      );

    case "file-tree":
      return (
        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
          <VariantWrapper title="File Tree" code='<FileTree data={[...]} />'>
            <FileTree
              data={[
                { name: "src", type: "folder", children: [
                  { name: "components", type: "folder", children: [
                    { name: "Button.tsx", type: "file" },
                  ]},
                  { name: "index.ts", type: "file" },
                ]},
                { name: "package.json", type: "file" },
              ]}
            />
          </VariantWrapper>
        </div>
      );

    case "dropdown":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Basic Menu" code='<Dropdown trigger={...}>\n  <DropdownItem>Edit</DropdownItem>\n  <DropdownSeparator />\n  <DropdownItem destructive>Delete</DropdownItem>\n</Dropdown>'>
            <Dropdown trigger={<Button variant="outline">Options</Button>}>
              <DropdownItem>Edit</DropdownItem>
              <DropdownItem>Duplicate</DropdownItem>
              <DropdownSeparator />
              <DropdownItem destructive>Delete</DropdownItem>
            </Dropdown>
          </VariantWrapper>
          <VariantWrapper title="With Labels" code='<Dropdown>\n  <DropdownLabel>Actions</DropdownLabel>\n  ...\n</Dropdown>'>
            <Dropdown trigger={<Button variant="outline">Actions</Button>}>
              <DropdownLabel>File</DropdownLabel>
              <DropdownItem>New</DropdownItem>
              <DropdownItem>Open</DropdownItem>
              <DropdownSeparator />
              <DropdownLabel>Danger</DropdownLabel>
              <DropdownItem destructive>Delete</DropdownItem>
            </Dropdown>
          </VariantWrapper>
        </div>
      );

    case "status-dot":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Status Types" code='<StatusDot status="online" />\n<StatusDot status="away" />\n<StatusDot status="busy" />'>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2"><StatusDot status="online" /><span>Online</span></div>
              <div className="flex items-center gap-2"><StatusDot status="away" /><span>Away</span></div>
              <div className="flex items-center gap-2"><StatusDot status="busy" /><span>Busy</span></div>
              <div className="flex items-center gap-2"><StatusDot status="offline" /><span>Offline</span></div>
            </div>
          </VariantWrapper>
          <VariantWrapper title="Pulse Animation" code='<StatusDot status="online" pulse />'>
            <div className="flex items-center gap-4">
              <StatusDot status="online" pulse />
              <span>Pulsing indicator</span>
            </div>
          </VariantWrapper>
          <VariantWrapper title="Status Badge" code='<StatusBadge status="online" />'>
            <div className="flex items-center gap-4">
              <StatusBadge status="online" />
              <StatusBadge status="away" />
              <StatusBadge status="busy" />
            </div>
          </VariantWrapper>
        </div>
      );

    case "skeleton":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Shapes" code='<Skeleton className="rounded-full" />'>
            <div className="flex items-center gap-4">
               <Skeleton className="h-12 w-12 rounded-full" />
               <div className="space-y-2">
                 <Skeleton className="h-4 w-[250px]" />
                 <Skeleton className="h-4 w-[200px]" />
               </div>
            </div>
          </VariantWrapper>
          <VariantWrapper title="Cards" code='<Skeleton className="h-[125px] w-[250px] rounded-xl" />'>
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          </VariantWrapper>
           <VariantWrapper title="Text Block" code='<Skeleton className="h-4 w-[250px]" />'>
             <div className="space-y-2">
               <Skeleton className="h-4 w-[250px]" />
               <Skeleton className="h-4 w-[200px]" />
               <Skeleton className="h-4 w-[225px]" />
             </div>
           </VariantWrapper>
        </div>
      );

    case "toast":
      // Note: Toast requires interactivity, simplified for variants
      return (
        <div className="grid grid-cols-1 gap-8">
             <VariantWrapper title="Toast Types" code='toast("Message", "success")'>
                <div className="flex flex-col gap-4">
                     <div className="bg-green-500/10 border border-green-500/20 text-green-600 p-4 rounded-xl flex items-center gap-3 w-fit">
                        <Check className="w-4 h-4" /> <span>Success Message</span>
                     </div>
                     <div className="bg-red-500/10 border border-red-500/20 text-red-600 p-4 rounded-xl flex items-center gap-3 w-fit">
                        <AlertCircle className="w-4 h-4" /> <span>Error Message</span>
                     </div>
                </div>
            </VariantWrapper>
        </div>
      );

    case "sheet":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <VariantWrapper title="Sides" code='<Sheet side="right">...</Sheet>'>
             <div className="flex gap-4 flex-wrap">
               <Sheet>
                 <SheetTrigger asChild><Button variant="outline">Right (Default)</Button></SheetTrigger>
                 <SheetContent side="right"><SheetHeader><SheetTitle>Right Sheet</SheetTitle></SheetHeader></SheetContent>
               </Sheet>
               <Sheet>
                 <SheetTrigger asChild><Button variant="outline">Left</Button></SheetTrigger>
                 <SheetContent side="left"><SheetHeader><SheetTitle>Left Sheet</SheetTitle></SheetHeader></SheetContent>
               </Sheet>
                <Sheet>
                 <SheetTrigger asChild><Button variant="outline">Top</Button></SheetTrigger>
                 <SheetContent side="top"><SheetHeader><SheetTitle>Top Sheet</SheetTitle></SheetHeader></SheetContent>
               </Sheet>
                <Sheet>
                 <SheetTrigger asChild><Button variant="outline">Bottom</Button></SheetTrigger>
                 <SheetContent side="bottom"><SheetHeader><SheetTitle>Bottom Sheet</SheetTitle></SheetHeader></SheetContent>
               </Sheet>
             </div>
          </VariantWrapper>
           <VariantWrapper title="Custom Size" code='<SheetContent className="min-w-[400px] sm:w-[540px]">...</SheetContent>'>
             <Sheet>
               <SheetTrigger asChild><Button variant="outline">Wide Sheet</Button></SheetTrigger>
               <SheetContent side="right" className="min-w-[400px] sm:w-[540px]">
                    <SheetHeader><SheetTitle>Custom Width</SheetTitle></SheetHeader>
                    <div className="mt-4">This sheet is wider than default.</div>
               </SheetContent>
             </Sheet>
            </VariantWrapper>
        </div>
      );

    case "carousel":
      return (
        <div className="grid grid-cols-1 gap-8">
            <VariantWrapper title="Default" code='<Carousel items={[...]} />'>
                 <Carousel
                    className="max-w-xs"
                    items={[
                      <div key="1" className="h-32 w-full bg-zinc-100 dark:bg-zinc-800 rounded-xl flex items-center justify-center">1</div>,
                      <div key="2" className="h-32 w-full bg-zinc-200 dark:bg-zinc-700 rounded-xl flex items-center justify-center">2</div>,
                    ]}
                  />
            </VariantWrapper>
             <VariantWrapper title="Auto Play" code='<Carousel autoPlay items={[...]} />'>
                 <Carousel
                    autoPlay
                    interval={2000}
                    className="max-w-xs"
                    items={[
                      <div key="1" className="h-32 w-full bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">Auto 1</div>,
                      <div key="2" className="h-32 w-full bg-blue-200 dark:bg-blue-800 rounded-xl flex items-center justify-center">Auto 2</div>,
                    ]}
                  />
            </VariantWrapper>
             <VariantWrapper title="Minimal" code='<Carousel showControls={false} showIndicators={false} ... />'>
                 <Carousel
                    showControls={false}
                    showIndicators={false}
                    className="max-w-xs"
                    items={[
                      <div key="1" className="h-32 w-full bg-emerald-100 dark:bg-emerald-900 rounded-xl flex items-center justify-center">1</div>,
                      <div key="2" className="h-32 w-full bg-emerald-200 dark:bg-emerald-800 rounded-xl flex items-center justify-center">2</div>,
                    ]}
                  />
            </VariantWrapper>
        </div>
      );

    case "toggle":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <VariantWrapper title="Variants" code='<Toggle>Default</Toggle>\n<Toggle variant="outline">Outline</Toggle>'>
                 <div className="flex gap-4">
                    <Toggle aria-label="Toggle">Default</Toggle>
                    <Toggle variant="outline" aria-label="Toggle outline">Outline</Toggle>
                 </div>
            </VariantWrapper>
             <VariantWrapper title="Sizes" code='<Toggle size="sm">S</Toggle>\n<Toggle size="lg">L</Toggle>'>
                 <div className="flex items-center gap-4">
                    <Toggle size="sm" aria-label="Toggle small">Small</Toggle>
                    <Toggle size="default" aria-label="Toggle default">Default</Toggle>
                    <Toggle size="lg" aria-label="Toggle large">Large</Toggle>
                 </div>
            </VariantWrapper>
        </div>
      );


    case "combobox":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
           <VariantWrapper title="Standard" code='<Combobox options={...} />'>
             <Combobox options={[{value: "next", label: "Next.js"}, {value: "react", label: "React"}]} placeholder="Select framework..." />
           </VariantWrapper>
           <VariantWrapper title="With Label" code='<label>...</label><Combobox ... />'>
             <div className="flex flex-col gap-2">
                 <label className="text-sm font-medium">Framework</label>
                 <Combobox options={[{value: "next", label: "Next.js"}, {value: "react", label: "React"}]} placeholder="Select..." />
             </div>
           </VariantWrapper>
            <VariantWrapper title="Large List" code='<Combobox options={[...20 items]} ... />'>
             <Combobox 
                options={[
                    {value: "1", label: "Item 1"}, {value: "2", label: "Item 2"}, {value: "3", label: "Item 3"},
                    {value: "4", label: "Item 4"}, {value: "5", label: "Item 5"}, {value: "6", label: "Item 6"}
                ]} 
                placeholder="Scroll to see more..." 
             />
           </VariantWrapper>
        </div>
      );
    case "calendar":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Single Date" code='<Calendar mode="single" />'>
                <Calendar mode="single" className="border rounded-md w-fit" />
            </VariantWrapper>
             <VariantWrapper title="Multiple Selection" code='<Calendar mode="multiple" />'>
                <Calendar mode="multiple" className="border rounded-md w-fit" />
            </VariantWrapper>
             <VariantWrapper title="Range Selection" code='<Calendar mode="range" />'>
                <Calendar mode="range" className="border rounded-md w-fit" selected={{ from: new Date(), to: new Date(new Date().setDate(new Date().getDate() + 5)) }} />
            </VariantWrapper>
        </div>
      );
    case "date-picker":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Standard" code='<DatePicker />'>
               <DatePicker setDate={() => {}} />
            </VariantWrapper>
            <VariantWrapper title="With Label" code='<div ...><label>Pick a date</label><DatePicker /></div>'>
               <div className="flex flex-col gap-2">
                   <span className="text-sm font-medium">Pick a date</span>
                   <DatePicker setDate={() => {}} />
               </div>
            </VariantWrapper>
             <VariantWrapper title="Preselected" code='<DatePicker date={new Date()} />'>
               <DatePicker date={new Date()} setDate={() => {}} />
            </VariantWrapper>
        </div>
      );
    case "input-otp":
      return (
        <div className="flex flex-col gap-8 w-full max-w-lg">
            <VariantWrapper title="Numeric (6-digit)" code='<InputOTP maxLength={6}>...</InputOTP>'>
               <InputOTP maxLength={6}>
                 <InputOTPGroup>
                   {[0,1,2,3,4,5].map(i => <InputOTPSlot key={i} index={i} />)}
                 </InputOTPGroup>
               </InputOTP>
            </VariantWrapper>
             <VariantWrapper title="Short (4-digit)" code='<InputOTP maxLength={4}>...</InputOTP>'>
               <InputOTP maxLength={4}>
                 <InputOTPGroup>
                   {[0,1,2,3].map(i => <InputOTPSlot key={i} index={i} />)}
                 </InputOTPGroup>
               </InputOTP>
            </VariantWrapper>
             <VariantWrapper title="With Separator" code='<InputOTP>...<Separator />...</InputOTP>'>
                <InputOTP maxLength={6}>
                 <InputOTPGroup>
                   <InputOTPSlot index={0} />
                   <InputOTPSlot index={1} />
                   <InputOTPSlot index={2} />
                 </InputOTPGroup>
                 <div className="flex items-center justify-center mx-2">-</div>
                  <InputOTPGroup>
                   <InputOTPSlot index={3} />
                   <InputOTPSlot index={4} />
                   <InputOTPSlot index={5} />
                 </InputOTPGroup>
               </InputOTP>
            </VariantWrapper>
        </div>
      );
    case "slider":
      return (
         <div className="flex flex-col gap-8 w-full max-w-sm">
             <VariantWrapper title="Default" code='<Slider defaultValue={[50]} />'>
                <Slider defaultValue={[50]} max={100} step={1} />
             </VariantWrapper>
             <VariantWrapper title="Range (2 Thumbs)" code='<Slider defaultValue={[25, 75]} />'>
                <Slider defaultValue={[25, 75]} max={100} step={1} />
             </VariantWrapper>
              <VariantWrapper title="Stepped" code='<Slider step={10} />'>
                <Slider defaultValue={[50]} max={100} step={10} />
             </VariantWrapper>
         </div>
      );
    case "toggle-group":
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Single Selection" code='<ToggleGroup type="single">...</ToggleGroup>'>
                <ToggleGroup type="single">
                     <ToggleGroupItem value="a">A</ToggleGroupItem>
                     <ToggleGroupItem value="b">B</ToggleGroupItem>
                     <ToggleGroupItem value="c">C</ToggleGroupItem>
                </ToggleGroup>
            </VariantWrapper>
             <VariantWrapper title="Multiple Selection" code='<ToggleGroup type="multiple">...</ToggleGroup>'>
                <ToggleGroup type="multiple">
                     <ToggleGroupItem value="bold"><Type className="h-4 w-4" /></ToggleGroupItem>
                     <ToggleGroupItem value="italic"><MousePointer className="h-4 w-4" /></ToggleGroupItem>
                     <ToggleGroupItem value="underline"><Maximize2 className="h-4 w-4" /></ToggleGroupItem>
                </ToggleGroup>
            </VariantWrapper>
             <VariantWrapper title="Outline" code='<ToggleGroup variant="outline">...</ToggleGroup>'>
                <ToggleGroup type="single" variant="outline">
                     <ToggleGroupItem value="1">1</ToggleGroupItem>
                     <ToggleGroupItem value="2">2</ToggleGroupItem>
                     <ToggleGroupItem value="3">3</ToggleGroupItem>
                </ToggleGroup>
            </VariantWrapper>
        </div>
      );
    case "resizable":
      return (
            <div className="flex flex-col gap-8 w-full">
                 <VariantWrapper title="Horizontal" code='<ResizablePanelGroup direction="horizontal">...</ResizablePanelGroup>'>
                    <div className="h-[200px] w-full border rounded-lg overflow-hidden">
                         <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 bg-muted/20">One</div></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 bg-muted/40">Two</div></ResizablePanel>
                         </ResizablePanelGroup>
                    </div>
                </VariantWrapper>
                 <VariantWrapper title="Vertical" code='<ResizablePanelGroup direction="vertical">...</ResizablePanelGroup>'>
                    <div className="h-[250px] w-full border rounded-lg overflow-hidden">
                         <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={25}><div className="flex h-full items-center justify-center p-6 bg-muted/20">Header</div></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={75}><div className="flex h-full items-center justify-center p-6 bg-muted/40">Content</div></ResizablePanel>
                         </ResizablePanelGroup>
                    </div>
                </VariantWrapper>
                 <VariantWrapper title="Nested" code='<ResizablePanelGroup>...<ResizablePanelGroup>...</ResizablePanelGroup>...</ResizablePanelGroup>'>
                    <div className="h-[250px] w-full border rounded-lg overflow-hidden">
                         <ResizablePanelGroup direction="horizontal">
                            <ResizablePanel defaultSize={30}><div className="flex h-full items-center justify-center p-6 bg-muted/20">Sidebar</div></ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={70}>
                                <ResizablePanelGroup direction="vertical">
                                     <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 bg-muted/30">Top</div></ResizablePanel>
                                     <ResizableHandle withHandle />
                                     <ResizablePanel defaultSize={50}><div className="flex h-full items-center justify-center p-6 bg-muted/50">Bottom</div></ResizablePanel>
                                </ResizablePanelGroup>
                            </ResizablePanel>
                         </ResizablePanelGroup>
                    </div>
                </VariantWrapper>
            </div>
      );

    case "marquee":
      return (
         <div className="flex flex-col gap-8 w-full">
            <VariantWrapper title="Horizontal (Default)" code='<Marquee>...</Marquee>'>
               <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <Marquee pauseOnHover className="[--duration:20s]">
                    {["Next.js", "React", "Vue", "Nuxt", "Svelte"].map((item) => (
                        <div key={item} className="mx-4 font-semibold">{item}</div>
                    ))}
                  </Marquee>
               </div>
            </VariantWrapper>
            <VariantWrapper title="Vertical" code='<Marquee vertical>...</Marquee>'>
               <div className="relative flex h-[300px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <Marquee pauseOnHover vertical className="[--duration:20s]">
                     {["Aural", "UI", "Is", "Awesome", "For", "Web"].map((item) => (
                        <div key={item} className="my-2 font-semibold">{item}</div>
                    ))}
                  </Marquee>
               </div>
            </VariantWrapper>
            <VariantWrapper title="Reverse" code='<Marquee reverse>...</Marquee>'>
               <div className="relative flex h-[100px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                  <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {["1", "2", "3", "4", "5", "6"].map((item) => (
                        <div key={item} className="mx-4 font-semibold">{item}</div>
                    ))}
                  </Marquee>
               </div>
            </VariantWrapper>
         </div>
      );
    case "meteors":
      return (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Default" code='<Meteors number={20} />'>
               <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-zinc-900 md:shadow-xl">
                 <Meteors number={20} />
                 <span className="pointer-events-none text-xl font-bold text-white z-10">Meteors</span>
               </div>
            </VariantWrapper>
             <VariantWrapper title="High Density" code='<Meteors number={50} />'>
               <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-slate-900 md:shadow-xl">
                 <Meteors number={50} />
                 <span className="pointer-events-none text-xl font-bold text-white z-10">Shower</span>
               </div>
            </VariantWrapper>
             <VariantWrapper title="Blue Sky" code='<Meteors number={10} />'>
               <div className="relative flex h-[250px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-blue-950 md:shadow-xl">
                 <Meteors number={10} />
                 <span className="pointer-events-none text-xl font-bold text-white z-10">Night</span>
               </div>
            </VariantWrapper>
         </div>
      );
    case "aurora-background":
      return (
         <div className="flex flex-col gap-8 w-full">
            <VariantWrapper title="Default" code='<AuroraBackground>...</AuroraBackground>'>
               <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                 <AuroraBackground>
                    <div className="z-10 text-xl font-bold dark:text-white">Aurora</div>
                 </AuroraBackground>
               </div>
            </VariantWrapper>
            <VariantWrapper title="With Content" code='<AuroraBackground>...<Card>...</Card>...</AuroraBackground>'>
               <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                 <AuroraBackground>
                    <Card className="z-10 w-64 bg-white/10 backdrop-blur-md border-white/20">
                        <CardHeader><CardTitle>Login</CardTitle></CardHeader>
                        <CardContent>Enter your details</CardContent>
                    </Card>
                 </AuroraBackground>
               </div>
            </VariantWrapper>
             <VariantWrapper title="Subtle" code='<AuroraBackground showRadialGradient={false}>...</AuroraBackground>'>
               <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-zinc-50 md:shadow-xl">
                 <AuroraBackground showRadialGradient={false}>
                    <div className="z-10 text-xl font-bold text-zinc-900">Subtle</div>
                 </AuroraBackground>
               </div>
            </VariantWrapper>
         </div>
      );
    case "animated-beam":
      return (
         <div className="flex flex-col gap-8 w-full">
            <VariantWrapper title="Uni-Directional" code='<AnimatedBeam ... />'>
               <AnimatedBeamDemo />
            </VariantWrapper>
             <VariantWrapper title="Bi-Directional" code='<AnimatedBeam ... /><AnimatedBeam reverse ... />'>
               <AnimatedBeamBiDirectional />
            </VariantWrapper>
             <VariantWrapper title="Multi-Path" code='<AnimatedBeam ... /><AnimatedBeam ... />'>
               <AnimatedBeamMultiple />
            </VariantWrapper>
         </div>
      );
    case "globe":
       return (
         <div className="grid grid-cols-1 gap-8">
            <VariantWrapper title="Default" code='<Globe />'>
               <GlobeDemo />
            </VariantWrapper>
             <VariantWrapper title="Earth (Blue)" code='<Globe globeConfig={{ baseColor: [0.3, 0.3, 1], ... }} />'>
                <div className="relative flex h-full w-full max-w-[20rem] items-center justify-center overflow-hidden rounded-lg border bg-background px-20 pb-20 pt-8">
                    <Globe className="top-10" globeConfig={{ width: 400, height: 400, onRender: () => {}, devicePixelRatio: 2, phi: 0, theta: 0.3, dark: 0, diffuse: 1.2, mapSamples: 16000, mapBrightness: 6, baseColor: [0.3, 0.3, 1], markerColor: [1, 0, 0], glowColor: [1, 1, 1], markers: [] }} />
                </div>
            </VariantWrapper>
             <VariantWrapper title="Dark Mode" code='<Globe globeConfig={{ dark: 1, ... }} />'>
                <div className="relative flex h-full w-full max-w-[20rem] items-center justify-center overflow-hidden rounded-lg border bg-black px-20 pb-20 pt-8">
                    <Globe className="top-10" globeConfig={{ width: 400, height: 400, onRender: () => {}, devicePixelRatio: 2, phi: 0, theta: 0.3, dark: 1, diffuse: 1.2, mapSamples: 16000, mapBrightness: 6, baseColor: [0.1, 0.1, 0.1], markerColor: [1, 1, 1], glowColor: [0.5, 0.5, 0.5], markers: [] }} />
                </div>
            </VariantWrapper>
         </div>
       );
    case "border-beam":
       return (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <VariantWrapper title="Standard" code='<BorderBeam />'>
               <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                 <span className="text-xl font-bold">Standard</span>
                 <BorderBeam />
               </div>
            </VariantWrapper>
             <VariantWrapper title="Thick & Slow" code='<BorderBeam size={100} duration={20} borderWidth={3} />'>
               <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                 <span className="text-xl font-bold">Thick</span>
                 <BorderBeam size={100} duration={20} borderWidth={3} />
               </div>
            </VariantWrapper>
             <VariantWrapper title="Colored" code='<BorderBeam colorFrom="#ff0000" colorTo="#00ff00" />'>
               <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                 <span className="text-xl font-bold">Colored</span>
                 <BorderBeam colorFrom="#ff0000" colorTo="#00ff00" />
               </div>
            </VariantWrapper>
         </div>
       );
    default:
      return <div>No variants available for this component.</div>;
  }
}
