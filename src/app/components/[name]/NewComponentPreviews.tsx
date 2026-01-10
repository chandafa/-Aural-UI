"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";

// Form Components
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
import { TextReveal } from "@/components/ui/TextReveal";
import { ShinyText, GradientText } from "@/components/ui/ShinyText";
import { ExpandableCard } from "@/components/ui/ExpandableCard";
import { FlipCard } from "@/components/ui/FlipCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { HoverCard, HoverCardContent } from "@/components/ui/HoverCard";
import { GridPattern } from "@/components/ui/GridPattern";
import { DotPattern } from "@/components/ui/DotPattern";
import { RippleButton } from "@/components/ui/Ripple";
import { Particles } from "@/components/ui/Particles";
import { IPhoneMockup } from "@/components/ui/IPhoneMockup";
import { MacBookMockup } from "@/components/ui/MacBookMockup";
import { SafariMockup } from "@/components/ui/SafariMockup";
import { TerminalMockup, TerminalLine } from "@/components/ui/TerminalMockup";
import { NoData } from "@/components/ui/EmptyState";
import { Confetti, useConfetti } from "@/components/ui/Confetti";
import { FileTree } from "@/components/ui/FileTree";
import { Dropdown, DropdownItem, DropdownSeparator } from "@/components/ui/Dropdown";
import { StatusDot, StatusBadge } from "@/components/ui/StatusDot";

// Phase 1 Essentials
import { Skeleton } from "@/components/ui/Skeleton";
import { ToastProvider, useToast } from "@/components/ui/Toast";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/Sheet";
import { Carousel } from "@/components/ui/Carousel";
import { Toggle } from "@/components/ui/Toggle";

// Phase 2 Form Components
import { Combobox } from "@/components/ui/Combobox";
import { Calendar } from "@/components/ui/Calendar";
import { DatePicker } from "@/components/ui/DatePicker";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/InputOTP";
import { Slider } from "@/components/ui/Slider";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/Resizable";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { Marquee } from "@/components/ui/Marquee";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { Meteors } from "@/components/ui/Meteors";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { Globe } from "@/components/ui/Globe";
import { Bold } from "lucide-react";

// Helper for Toast Preview
function ToastDemo() {
  const { toast } = useToast();
  return (
    <div className="flex gap-4">
      <Button onClick={() => toast("Operation successful", "success")}>Success</Button>
      <Button onClick={() => toast("Something went wrong", "error")} variant="destructive">Error</Button>
      <Button onClick={() => toast("New update available", "info")} variant="outline">Info</Button>
    </div>
  );
}

function DatePickerDemo() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return <DatePicker date={date} setDate={setDate} />;
}

const AnimatedBeamPreview = () => {
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

const GlobePreview = () => {
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

interface NewComponentPreviewProps {
  slug: string;
}

export function NewComponentPreview({ slug }: NewComponentPreviewProps) {
  const [radioValue, setRadioValue] = useState("1");
  const [searchValue, setSearchValue] = useState("");
  const [numberValue, setNumberValue] = useState(5);
  const [currentPage, setCurrentPage] = useState(3);
  const { active: confettiActive, fire: fireConfetti } = useConfetti();

  switch (slug) {
    case "checkbox":
      return (
        <div className="space-y-4">
          <Checkbox label="Accept terms and conditions" />
          <Checkbox label="Subscribe to newsletter" description="Get weekly updates" />
          <Checkbox label="Disabled option" disabled />
        </div>
      );
    case "radio":
      return (
        <RadioGroup
          name="demo-radio"
          options={[
            { value: "1", label: "Option 1", description: "First choice" },
            { value: "2", label: "Option 2", description: "Second choice" },
            { value: "3", label: "Option 3" },
          ]}
          value={radioValue}
          onChange={setRadioValue}
        />
      );
    case "search-field":
      return (
        <div className="w-full max-w-md space-y-4">
          <SearchField 
            placeholder="Search..." 
            value={searchValue}
            onChange={setSearchValue}
          />
          <SearchField placeholder="Loading..." loading />
          <SearchField placeholder="Small search" size="sm" />
        </div>
      );
    case "number-field":
      return (
        <div className="space-y-4">
          <NumberField label="Quantity" value={numberValue} min={0} max={10} onChange={setNumberValue} />
          <NumberField label="Step by 5" value={10} step={5} onChange={() => {}} />
        </div>
      );
    case "spinner":
      return (
        <div className="flex items-center gap-6">
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <ActivityIndicator size="md" />
        </div>
      );
    case "progress":
      return (
        <div className="w-full max-w-md space-y-6">
          <Progress value={75} />
          <Progress value={50} variant="gradient" />
          <div className="flex gap-6">
            <CircularProgress value={65} size={64} />
            <CircularProgress value={80} size={64} showValue />
          </div>
        </div>
      );
    case "breadcrumb":
      return (
        <div className="space-y-4">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: "Category", href: "/products/category" },
            { label: "Current Page" },
          ]} />
          <Breadcrumb separator="slash" items={[
            { label: "Home", href: "/" },
            { label: "Page" },
          ]} />
        </div>
      );
    case "pagination":
      return (
        <div className="space-y-4">
          <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
          <Pagination currentPage={1} totalPages={5} onPageChange={() => {}} size="sm" />
        </div>
      );
    case "popover":
      return (
        <Popover trigger={<Button variant="outline">Click me</Button>}>
          <div className="space-y-2">
            <h4 className="font-medium">Popover Title</h4>
            <p className="text-sm text-muted-foreground">This is the popover content.</p>
          </div>
        </Popover>
      );
    case "divider":
      return (
        <div className="w-full max-w-md space-y-4">
          <Divider />
          <Divider label="OR" />
          <Divider variant="dashed" />
        </div>
      );
    case "tag":
      return (
        <TagGroup>
          <Tag>Default</Tag>
          <Tag variant="primary">Primary</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="error" removable onRemove={() => {}}>Removable</Tag>
        </TagGroup>
      );
    case "kbd":
      return (
        <div className="flex flex-wrap items-center gap-4">
          <Kbd>⌘</Kbd>
          <Kbd>K</Kbd>
          <Shortcut keys={["cmd", "shift", "p"]} />
          <Shortcut keys={["ctrl", "c"]} />
        </div>
      );
    case "typing-animation":
      return (
        <div className="text-2xl font-semibold">
          <TypingAnimation text="Hello, I am typing..." duration={100} />
        </div>
      );
    case "flip-words":
      return (
        <div className="text-2xl font-semibold">
          Build <FlipWords words={["amazing", "beautiful", "modern", "stunning"]} /> applications
        </div>
      );
    case "text-reveal":
      return (
        <div className="text-xl">
          <TextReveal>Scroll down to see this text reveal word by word as you scroll through the page.</TextReveal>
        </div>
      );
    case "shiny-text":
      return (
        <div className="space-y-4 text-3xl font-bold">
          <ShinyText>Premium Feature</ShinyText>
          <GradientText>Magic Gradient</GradientText>
        </div>
      );
    case "expandable-card":
      return (
        <div className="w-full max-w-md space-y-4">
          <ExpandableCard title="Click to expand" description="More details inside">
            <p className="text-muted-foreground">This is the hidden content that appears when you click the card header.</p>
          </ExpandableCard>
          <ExpandableCard title="Another card" defaultExpanded>
            <p className="text-muted-foreground">This card is expanded by default.</p>
          </ExpandableCard>
        </div>
      );
    case "flip-card":
      return (
        <div className="flex items-center justify-center p-8">
          <div className="w-[300px] h-[200px]">
             <FlipCard
                front={
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-zinc-900 border border-zinc-800 rounded-2xl">
                    <h3 className="text-xl font-bold mb-2">Hover Me</h3>
                    <p className="text-sm text-zinc-400">Backface hidden 3D flip effect</p>
                  </div>
                }
                back={
                  <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl">
                    <h3 className="text-xl font-bold text-white mb-2">Hello World!</h3>
                    <p className="text-sm text-white/80">This content was hidden behind</p>
                  </div>
                }
             />
          </div>
        </div>
      );
    case "tilt-card":
      return (
        <TiltCard className="w-64 h-40 p-6">
          <h3 className="font-bold text-lg mb-2">Tilt Card</h3>
          <p className="text-sm text-muted-foreground">Move your mouse over me!</p>
        </TiltCard>
      );
    case "hover-card":
      return (
        <HoverCard trigger={<span className="text-primary underline cursor-pointer">@johndoe</span>}>
          <HoverCardContent
            title="John Doe"
            subtitle="@johndoe"
            description="Software developer building amazing apps."
            stats={[
              { label: "Followers", value: 1234 },
              { label: "Following", value: 567 },
            ]}
          />
        </HoverCard>
      );
    case "grid-pattern":
      return (
        <div className="relative w-full h-64 rounded-xl border bg-background overflow-hidden">
          <GridPattern />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">Grid Pattern</span>
          </div>
        </div>
      );
    case "dot-pattern":
      return (
        <div className="relative w-full h-64 rounded-xl border bg-background overflow-hidden">
          <DotPattern />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold">Dot Pattern</span>
          </div>
        </div>
      );
    case "ripple":
      return (
        <div className="flex items-center gap-4">
          <RippleButton>Click for ripple</RippleButton>
          <RippleButton rippleColor="rgba(147, 51, 234, 0.4)">Purple ripple</RippleButton>
        </div>
      );
    case "particles":
      return (
        <div className="relative w-full h-64 rounded-xl bg-zinc-900 overflow-hidden">
          <Particles quantity={30} color="#007AFF" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">Floating Particles</span>
          </div>
        </div>
      );
    case "iphone-mockup":
      return (
        <IPhoneMockup>
          <div className="h-full bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
            <span className="text-white text-xl font-bold">Your App</span>
          </div>
        </IPhoneMockup>
      );
    case "macbook-mockup":
      return (
        <MacBookMockup>
          <div className="h-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Your Website</span>
          </div>
        </MacBookMockup>
      );
    case "safari-mockup":
      return (
        <SafariMockup url="auralix-ui.dev" className="w-full max-w-2xl">
          <div className="h-48 bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-800 dark:to-zinc-900 flex items-center justify-center">
            <span className="text-xl font-bold">Website Content</span>
          </div>
        </SafariMockup>
      );
    case "terminal-mockup":
      return (
        <TerminalMockup className="w-full max-w-xl">
          <TerminalLine command="npm install auralix-ui" />
          <TerminalLine output="added 1 package" />
          <TerminalLine command="npx auralix-ui init" />
          <TerminalLine output="✓ Configuration created" />
        </TerminalMockup>
      );
    case "empty-state":
      return (
        <div className="w-full max-w-md">
          <NoData action={<Button size="sm">Add Item</Button>} />
        </div>
      );
    case "confetti":
      return (
        <div className="relative w-full h-[400px] flex flex-col items-center justify-center border rounded-lg bg-zinc-950 overflow-hidden">
          <Confetti active={confettiActive} className="absolute inset-0" />
          <div className="z-10 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">Congratulations!</h3>
            <p className="text-zinc-400">Click the button to celebrate.</p>
            <Button onClick={fireConfetti} className="bg-white text-black hover:bg-zinc-200">
              🎉 Celebrate
            </Button>
          </div>
        </div>
      );
    case "file-tree":
      return (
        <FileTree
          data={[
            { name: "src", type: "folder", children: [
              { name: "components", type: "folder", children: [
                { name: "Button.tsx", type: "file" },
                { name: "Card.tsx", type: "file" },
              ]},
              { name: "lib", type: "folder", children: [
                { name: "utils.ts", type: "file" },
              ]},
              { name: "app.tsx", type: "file" },
            ]},
            { name: "package.json", type: "file" },
          ]}
        />
      );
    case "dropdown":
      return (
        <Dropdown trigger={<Button variant="outline">Open Menu</Button>}>
          <DropdownItem>Edit</DropdownItem>
          <DropdownItem>Duplicate</DropdownItem>
          <DropdownItem>Archive</DropdownItem>
          <DropdownSeparator />
          <DropdownItem destructive>Delete</DropdownItem>
        </Dropdown>
      );
    case "status-dot":
      return (
        <div className="flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-2">
            <StatusDot status="online" pulse />
            <span>Online</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot status="away" />
            <span>Away</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot status="busy" />
            <span>Busy</span>
          </div>
          <div className="flex items-center gap-2">
            <StatusDot status="offline" />
            <span>Offline</span>
          </div>
          <StatusBadge status="online" />
        </div>
      );
    case "skeleton":
      return (
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      );
    case "toast":
      return (
        <ToastProvider>
          <div className="h-64 flex items-center justify-center border rounded-lg bg-muted/20">
            <ToastDemo />
          </div>
        </ToastProvider>
      );
    case "sheet":
      return (
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Open Sheet</Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Edit Profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-right text-sm font-medium">Name</span>
                <Skeleton className="col-span-3 h-9 w-full" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <span className="text-right text-sm font-medium">Username</span>
                <Skeleton className="col-span-3 h-9 w-full" />
              </div>
            </div>
            <SheetFooter>
              <Button type="submit">Save changes</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      );
    case "carousel":
      return (
        <div className="w-full max-w-lg mx-auto">
          <Carousel
            items={[
              <div key="1" className="h-48 w-full bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">Slide 1</div>,
              <div key="2" className="h-48 w-full bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">Slide 2</div>,
              <div key="3" className="h-48 w-full bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold">Slide 3</div>,
            ]}
          />
        </div>
      );
    case "toggle":
      return (
        <Toggle aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
      );
    case "combobox":
      return (
        <div className="w-[200px]">
          <Combobox
            options={[
              { value: "next.js", label: "Next.js" },
              { value: "sveltekit", label: "SvelteKit" },
              { value: "astro", label: "Astro" },
              { value: "nuxt.js", label: "Nuxt.js" },
              { value: "remix", label: "Remix" },
            ]}
          />
        </div>
      );
    case "calendar":
      return (
        <Calendar
          mode="single"
          className="rounded-md border shadow"
        />
      );
    case "date-picker":
      return (
         // Simplified preview since it requires state, usually managed in parent
         <div className="w-[300px] h-[350px] flex items-start justify-center pt-10">
              <DatePickerDemo />
          </div>
      );
    case "input-otp":
      return (
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      );
    case "slider":
      return (
        <Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />
      );
    case "toggle-group":
      return (
        <ToggleGroup type="single" defaultValue="a">
           <ToggleGroupItem value="a">A</ToggleGroupItem>
           <ToggleGroupItem value="b">B</ToggleGroupItem>
           <ToggleGroupItem value="c">C</ToggleGroupItem>
        </ToggleGroup>
      );
    case "resizable":
      return (
        <ResizablePanelGroup direction="horizontal" className="max-w-md rounded-lg border md:min-w-[450px]">
          <ResizablePanel defaultSize={50}>
            <div className="flex h-[200px] items-center justify-center p-6">
              <span className="font-semibold">One</span>
            </div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize={50}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Two</span>
                </div>
              </ResizablePanel>
              <ResizableHandle withHandle />
              <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6">
                  <span className="font-semibold">Three</span>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>
        </ResizablePanelGroup>
      );
    case "marquee":
      return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {["Google", "Microsoft", "Apple", "Amazon", "Netflix", "Meta"].map((item) => (
               <div key={item} className="mx-8 flex items-center gap-2 rounded-lg border bg-white/5 px-4 py-2">
                 <div className="h-6 w-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
                 <span className="font-semibold">{item}</span>
               </div>
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] mt-8">
             {["Next.js", "React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"].map((item) => (
               <div key={item} className="mx-8 flex items-center gap-2 rounded-lg border bg-white/5 px-4 py-2">
                 <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500" />
                 <span className="font-semibold">{item}</span>
               </div>
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background dark:from-background"></div>
        </div>
      );
    case "meteors":
      return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={30} />
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Meteors
          </span>
        </div>
      );
    case "aurora-background":
      return (
        <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <AuroraBackground>
              <div className="relative flex flex-col items-center justify-center gap-4 px-4 text-center">
                 <div className="text-4xl font-bold dark:text-white">
                    Aurora Background
                 </div>
                 <div className="text-base font-light dark:text-neutral-200">
                    A subtle and beautiful background effect.
                 </div>
              </div>
            </AuroraBackground>
        </div>
      );
    case "animated-beam":
        return <AnimatedBeamPreview />;
    case "globe":
        return <GlobePreview />;
    case "border-beam":
      return (
        <div className="relative flex h-[200px] w-full max-w-sm flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Border Beam
          </span>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      );
    default:
      return null;
  }
}
