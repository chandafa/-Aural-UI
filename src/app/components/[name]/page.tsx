import { notFound } from "next/navigation";
import { getComponentData, getAllComponentSlugs } from "@/lib/components-data";
import { cn } from "@/lib/utils";
import { ComponentPreview } from "@/components/docs/ComponentPreview";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { PropsTable } from "@/components/docs/PropsTable";
import { DocsPager } from "@/components/docs/DocsPager";
import { InstallationTabs } from "@/components/docs/InstallationTabs";
import fs from "fs/promises";
import path from "path";

// UI Component imports for rendering previews
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";
import { Form, FormField, FormLabel, FormDescription } from "@/components/ui/Form";
import { ModalDemo } from "./ModalDemo";
import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { BlurText } from "@/components/ui/BlurText";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TrueFocus } from "@/components/ui/TrueFocus";
import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { Dock, DockIcon } from "@/components/ui/Dock";
import { Meteors } from "@/components/ui/MeteorMeteors";
import { MagicCard } from "@/components/ui/MagicCard";
import { TracingBeam } from "@/components/ui/tracing-beam";

import { DialogDemo } from "./DialogDemo";
import { Switch } from "@/components/ui/Switch";
import { Slider } from "@/components/ui/Slider";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";
import { Accordion, AccordionItem } from "@/components/ui/Accordion";

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
import { NoData, NoSearchResults } from "@/components/ui/EmptyState";
import { Confetti, useConfetti } from "@/components/ui/Confetti";
import { FileTree } from "@/components/ui/FileTree";
import { Dropdown, DropdownItem, DropdownSeparator } from "@/components/ui/Dropdown";
import { StatusDot, StatusBadge } from "@/components/ui/StatusDot";

import { ComponentVariants } from "./ComponentVariants";
import { NewComponentPreview } from "./NewComponentPreviews";

export function generateStaticParams() {
  return getAllComponentSlugs().map((slug) => ({ name: slug }));
}

export function generateMetadata({ params }: { params: Promise<{ name: string }> }) {
  return params.then(({ name }) => {
    const data = getComponentData(name);
    return {
      title: data ? `${data.name} - Auralix UI` : "Component - Auralix UI",
      description: data?.description || "UI Component documentation",
    };
  });
}

// Component preview renderers
function renderPreview(slug: string) {
  switch (slug) {
    case "button":
      return (
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      );
    case "badge":
      return (
        <div className="flex flex-wrap items-center gap-4">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="info">Info</Badge>
        </div>
      );
    case "alert":
      return (
        <div className="w-full max-w-md space-y-4">
          <Alert variant="success" title="Success">Your changes have been saved.</Alert>
          <Alert variant="error" title="Error">Something went wrong.</Alert>
          <Alert variant="warning" title="Warning">Please review your input.</Alert>
          <Alert variant="info" title="Info">Here is some information.</Alert>
        </div>
      );
    case "input":
      return (
        <div className="w-full max-w-md space-y-4">
          <Input placeholder="Default input" />
          <Input inputSize="sm" placeholder="Small input" />
          <Input inputSize="lg" placeholder="Large input" />
          <Input error placeholder="Error state" />
          <Input disabled placeholder="Disabled" />
        </div>
      );
    case "textarea":
      return (
        <div className="w-full max-w-md space-y-4">
          <Textarea placeholder="Enter your message..." />
          <Textarea error placeholder="Error state" />
          <Textarea disabled placeholder="Disabled" />
        </div>
      );
    case "select":
      return (
        <div className="w-full max-w-md space-y-4">
          <Select
            placeholder="Select an option"
            options={[
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" },
              { value: "3", label: "Option 3" },
            ]}
          />
          <Select
            selectSize="sm"
            options={[
              { value: "1", label: "Small select" },
            ]}
          />
          <Select
            error
            options={[
              { value: "1", label: "Error state" },
            ]}
          />
        </div>
      );
    case "card":
      return (
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>This is a card description.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Cards are containers that group related content and actions.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm">Action</Button>
              <Button size="sm" variant="outline">Cancel</Button>
            </CardFooter>
          </Card>
        </div>
      );
    case "modal":
      return <ModalDemo />;
    case "tooltip":
      return (
        <TooltipProvider>
          <div className="flex flex-wrap items-center gap-8">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">Tooltip on top</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">Tooltip on left</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">Tooltip on right</TooltipContent>
            </Tooltip>
          </div>
        </TooltipProvider>
      );
    case "table":
      return (
        <div className="w-full max-w-2xl">
          <Table variant="striped">
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>John Doe</TableCell>
                <TableCell>john@example.com</TableCell>
                <TableCell><Badge variant="success" size="sm">Admin</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Jane Smith</TableCell>
                <TableCell>jane@example.com</TableCell>
                <TableCell><Badge size="sm">User</Badge></TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Bob Wilson</TableCell>
                <TableCell>bob@example.com</TableCell>
                <TableCell><Badge size="sm">User</Badge></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      );
    case "form":
      return (
        <div className="w-full max-w-md">
          <Form>
            <FormField>
              <FormLabel htmlFor="demo-name" required>Name</FormLabel>
              <Input id="demo-name" placeholder="Enter your name" />
            </FormField>
            <FormField>
              <FormLabel htmlFor="demo-email" required>Email</FormLabel>
              <Input id="demo-email" type="email" placeholder="you@example.com" />
              <FormDescription>We&apos;ll never share your email.</FormDescription>
            </FormField>
            <FormField>
              <FormLabel htmlFor="demo-message">Message</FormLabel>
              <Textarea id="demo-message" placeholder="Your message..." />
            </FormField>
            <Button type="button" className="w-full">Submit</Button>
          </Form>
        </div>
      );
    case "neon-button":
      return (
        <div className="flex flex-wrap items-center gap-6 p-10 bg-black/90 rounded-xl justify-center">
          <NeonButton variant="cyan">Cyan Glow</NeonButton>
          <NeonButton variant="magenta">Magenta Glow</NeonButton>
          <NeonButton variant="lime">Lime Glow</NeonButton>
          <NeonButton variant="violet">Violet Glow</NeonButton>
        </div>
      );
    case "glass-card":
      return (
        <div className="relative w-full max-w-4xl min-h-[400px] flex items-center justify-center bg-gradient-to-br from-violet-600 via-fuchsia-600 to-indigo-600 rounded-xl p-8 overflow-hidden">
           {/* Decorative elements behind glass */}
           <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full mix-blend-overlay animate-pulse opacity-40 blur-xl" />
           <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-yellow-300 rounded-full mix-blend-overlay opacity-30 blur-2xl animate-pulse delay-700" />
           
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full relative z-10">
            <GlassCard intensity="low" className="p-6 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-2">Low Intensity</h3>
                <p className="text-sm opacity-90">Subtle frost effect that lets more background through.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs">
                Backdrop Blur Sm
              </div>
            </GlassCard>
            <GlassCard intensity="medium" className="p-6 text-white h-full flex flex-col justify-between border-white/40">
              <div>
                <h3 className="font-bold text-xl mb-2">Medium Intensity</h3>
                <p className="text-sm opacity-90">Balanced blur perfect for most overlays and cards.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs">
                Backdrop Blur Md
              </div>
            </GlassCard>
            <GlassCard intensity="high" className="p-6 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-xl mb-2">High Intensity</h3>
                <p className="text-sm opacity-90">Strong frost effect for maximum readability.</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs">
                 Backdrop Blur Xl
              </div>
            </GlassCard>
          </div>
        </div>
      );
    case "blur-text":
      return (
        <div className="flex items-center justify-center p-12 bg-background border border-border rounded-xl">
           <div className="text-4xl font-bold text-center">
             <BlurText text="Reveal Animation" delay={150} />
           </div>
        </div>
      );
    case "spotlight-card":
      return (
        <div className="p-8 bg-black/80 rounded-xl flex items-center justify-center">
          <SpotlightCard className="max-w-sm text-white p-6">
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2">Spotlight Effect</h3>
              <p className="text-slate-300">
                Move your mouse over this card to see the spotlight follower effect.
              </p>
            </div>
          </SpotlightCard>
        </div>
      );
    case "true-focus":
      return (
        <div className="p-12 bg-black/80 rounded-xl flex flex-col gap-6 items-center justify-center max-w-md mx-auto">
          <div className="w-full">
            <TrueFocus label="Type something..." />
          </div>
          <div className="w-full">
             <TrueFocus label="Custom Blue Glow" focusColor="#3b82f6" />
          </div>
        </div>
      );
    case "animated-gradient-text":
      return (
        <div className="flex items-center justify-center p-12 bg-black/5 rounded-xl">
          <AnimatedGradientText>
            <span className={cn(
                  "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
                )}>
              ✨ Magic UI
            </span>
            <span className="ml-1">x React Bits</span>
          </AnimatedGradientText>
        </div>
      );
    case "border-beam":
      return (
        <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Beam
          </span>
          <BorderBeam size={250} duration={12} delay={9} />
        </div>
      );
    case "dock":
      return (
        <div className="flex items-center justify-center p-12 bg-transparent w-full">
           <Dock magnification={60} distance={100}>
             <DockIcon className="bg-black/10 dark:bg-white/10 text-2xl">🏠</DockIcon>
             <DockIcon className="bg-black/10 dark:bg-white/10 text-2xl">⚡</DockIcon>
             <DockIcon className="bg-black/10 dark:bg-white/10 text-2xl">🎨</DockIcon>
             <DockIcon className="bg-black/10 dark:bg-white/10 text-2xl">🧩</DockIcon>
             <DockIcon className="bg-black/10 dark:bg-white/10 text-2xl">🚀</DockIcon>
           </Dock>
        </div>
      );
    case "meteor-meteors":
      return (
        <div className="relative flex h-[400px] w-full items-center justify-center overflow-hidden rounded-lg border bg-slate-950 px-4 md:shadow-xl">
          <Meteors number={30} />
          <p className="z-10 text-center text-5xl font-medium tracking-tighter text-white whitespace-pre-wrap">
            Meteors
          </p>
        </div>
      );
    case "magic-card":
      return (
        <div className={"flex h-[400px] w-full flex-col gap-4 lg:h-[250px] lg:flex-row"}>
          <MagicCard className="cursor-pointer flex-col items-center justify-center text-4xl shadow-2xl">
            Magic
          </MagicCard>
          <MagicCard className="cursor-pointer flex-col items-center justify-center text-4xl shadow-2xl">
            Card
          </MagicCard>
        </div>
      );
    case "dialog":
      return <DialogDemo />;
    case "switch":
      return (
        <div className="flex items-center justify-center p-12 bg-black/80 rounded-xl">
           <Switch />
        </div>
      );

    case "tabs":
      return (
        <div className="flex items-center justify-center p-12 bg-black/80 rounded-xl w-full">
            <Tabs defaultValue="account" className="w-[400px]">
              <div className="flex justify-center mb-4">
                <TabsList>
                    <TabsTrigger value="account">Account</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="account" className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-slate-400">Make changes to your account here.</p>
              </TabsContent>
              <TabsContent value="password" className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-slate-400">Change your password here.</p>
              </TabsContent>
            </Tabs>
        </div>
      );
    case "accordion":
      return (
        <div className="flex items-center justify-center p-12 bg-black/80 rounded-xl w-full">
             <Accordion className="w-full max-w-md">
                <AccordionItem value="item-1" trigger="Is it accessible?">
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionItem>
                <AccordionItem value="item-2" trigger="Is it styled?">
                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                </AccordionItem>
                <AccordionItem value="item-3" trigger="Is it animated?">
                    Yes. It&apos;s animated by default, but you can disable it if you prefer.
                </AccordionItem>
            </Accordion>
        </div>
      );
    case "tracing-beam":
      return (
        <div className="relative w-full max-w-4xl mx-auto h-[400px] overflow-y-auto bg-black/80 rounded-xl p-4">
           <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
                <div className="mb-10 text-white">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-white/20">
                    Badge
                  </h2>
                  <p className="text-xl mb-4">
                    Lorem Ipsum Dolor Sit Amet
                  </p>
                  <p className="text-sm text-neutral-400">
                    Sit duis est minim proident non nisi velit non consectetur. Esse
                    adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt.
                  </p>
                </div>
                <div className="mb-10 text-white">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-white/20">
                    Another Section
                  </h2>
                  <p className="text-xl mb-4">
                    Ex irure dolore veniam
                  </p>
                  <p className="text-sm text-neutral-400">
                     Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore.
                  </p>
                </div>
                 <div className="mb-10 text-white">
                  <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4 border border-white/20">
                    Final Section
                  </h2>
                   <p className="text-sm text-neutral-400">
                     Ullamco ut sunt consectetur sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea velit id esse adipisicing deserunt amet dolore.
                  </p>
                </div>
            </div>
          </TracingBeam>
        </div>
      );
    // ============ NEW iOS-STYLE COMPONENT PREVIEWS ============
    // These are rendered via a client component to support interactivity
    case "checkbox":
    case "radio":
    case "search-field":
    case "number-field":
    case "spinner":
    case "progress":
    case "breadcrumb":
    case "pagination":
    case "popover":
    case "divider":
    case "tag":
    case "kbd":
    case "typing-animation":
    case "flip-words":
    case "text-reveal":
    case "shiny-text":
    case "expandable-card":
    case "flip-card":
    case "tilt-card":
    case "hover-card":
    case "grid-pattern":
    case "dot-pattern":
    case "ripple":
    case "particles":
    case "iphone-mockup":
    case "macbook-mockup":
    case "safari-mockup":
    case "terminal-mockup":
    case "empty-state":
    case "confetti":
    case "file-tree":
    case "dropdown":
    case "status-dot":
    // Phase 1 Essentials
    case "sheet":
    case "carousel":
    case "skeleton":
    case "toast":
    case "toggle":
    // Phase 2 Components
    case "combobox":
    case "calendar":
    case "date-picker":
    case "input-otp":
    case "slider":
    case "toggle-group":
    case "resizable":
    // Phase 3 Components
    case "marquee":
    case "animated-beam":
    case "meteors":
    case "aurora-background":
    case "globe":
    case "border-beam":
      return <NewComponentPreview slug={slug} />;
    default:
      return <p>Preview not available</p>;
  }
}

import { TableOfContents } from "@/components/docs/TableOfContents";

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;
  const data = getComponentData(name);

  if (!data) {
    notFound();
  }

  const slugs = getAllComponentSlugs();
  const currentIndex = slugs.indexOf(name);
  const prevSlug = slugs[currentIndex - 1];
  const nextSlug = slugs[currentIndex + 1];
  const prev = prevSlug ? getComponentData(prevSlug) : undefined;
  const next = nextSlug ? getComponentData(nextSlug) : undefined;

  // Read component source code
  const filePath = path.join(process.cwd(), "src/components/ui", data.filename);
  let sourceCode = "";
  try {
    sourceCode = await fs.readFile(filePath, "utf-8");
  } catch (error) {
    console.error(`Error reading file: ${filePath}`, error);
    sourceCode = "// Source code not found";
  }

  const cliCommands = {
    npm: `npx auralix-ui add ${data.slug}`,
    pnpm: `pnpm dlx auralix-ui add ${data.slug}`,
    yarn: `npx auralix-ui add ${data.slug}`,
    bun: `bunx auralix-ui add ${data.slug}`,
  };

  const hasVariants = ["button", "badge", "alert", "input", "textarea", "select", "card", "dialog", "modal", "dock", "accordion", "tabs", "switch", "slider", "tooltip", "table", "copy-command", "combobox", "calendar", "date-picker", "input-otp", "toggle-group", "resizable", "marquee", "animated-beam", "meteors", "aurora-background", "globe", "border-beam", "sheet", "carousel", "skeleton", "toast", "toggle"].includes(data.slug);

  return (
    <div className="flex flex-col xl:flex-row gap-10">
      <div className="flex-1 min-w-0 space-y-12">
        {/* Header */}
        <div>
          <h1 className="mb-2 text-3xl font-bold">{data.name}</h1>
          <p className="text-lg text-muted-foreground">{data.description}</p>
        </div>

        {/* Preview */}
        <section id="preview" className="scroll-mt-24">
          <h2 className="mb-4 text-xl font-semibold">Preview</h2>
          <ComponentPreview>{renderPreview(name)}</ComponentPreview>
        </section>

        {/* Installation */}
        <section id="installation" className="scroll-mt-24">
          <h2 className="mb-4 text-xl font-semibold">Installation</h2>
          <InstallationTabs
            cliCommands={cliCommands}
            sourceCode={sourceCode}
          />
        </section>

        {/* Examples */}
        <section id="usage" className="scroll-mt-24">
          <h2 className="mb-4 text-xl font-semibold">Usage</h2>
          <div className="space-y-6">
            {data.examples.map((example, index) => (
              <div key={index}>
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                  {example.title}
                </h3>
                <CodeBlock code={example.code} />
              </div>
            ))}
          </div>
        </section>


        {/* Props Table */}
        <section id="props" className="scroll-mt-24">
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
          <PropsTable props={data.props} />
        </section>

        {/* Variants Section */}
        <section id="variants" className="scroll-mt-24">
           {["button", "badge", "alert", "input", "textarea", "select", "card", "dialog", "modal", "dock", "accordion", "tabs", "switch", "slider", "tooltip", "table", "copy-command", "combobox", "calendar", "date-picker", "input-otp", "toggle-group", "resizable", "marquee", "animated-beam", "meteors", "aurora-background", "globe", "border-beam", "sheet", "carousel", "skeleton", "toast", "toggle"].includes(data.slug) && (
              <>
                 <h2 className="mb-6 text-xl font-semibold">Variants</h2>
                 <div className="rounded-xl border border-border bg-background/50 p-6 md:p-12">
                   <ComponentVariants slug={data.slug} />
                 </div>
              </>
           )}
        </section>

        <hr className="my-6 border-border" />
        
        <DocsPager prev={prev} next={next} />
      </div>
      
      {/* Right Sidebar */}
      <div className="hidden xl:block w-64 flex-none">
        <div className="sticky top-24">
          <TableOfContents showVariants={hasVariants} />
        </div>
      </div>
    </div>
  );
}
