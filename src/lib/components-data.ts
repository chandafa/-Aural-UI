import { type PropDefinition } from "@/components/docs/PropsTable";

export interface ComponentData {
  name: string;
  slug: string;
  description: string;
  filename: string;
  props: PropDefinition[];
  examples: {
    title: string;
    code: string;
  }[];
}

export const componentsData: Record<string, ComponentData> = {
  button: {
    name: "Button",
    slug: "button",
    filename: "Button.tsx",
    description: "A versatile button component for triggering actions and events.",
    props: [
      { name: "variant", type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"', default: '"primary"', description: "The visual style variant of the button." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the button." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the button is disabled." },
      { name: "children", type: "ReactNode", default: "-", description: "The content of the button." },
    ],
    examples: [
      {
        title: "Default Button",
        code: `import { Button } from "@/components/ui/Button";

<Button>Click me</Button>`,
      },
      {
        title: "Button Variants",
        code: `<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`,
      },
      {
        title: "Button Sizes",
        code: `<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`,
      },
    ],
  },
  badge: {
    name: "Badge",
    slug: "badge",
    filename: "Badge.tsx",
    description: "A small label component to highlight status or categories.",
    props: [
      { name: "variant", type: '"default" | "success" | "warning" | "error" | "info"', default: '"default"', description: "The color variant of the badge." },
      { name: "size", type: '"sm" | "md"', default: '"md"', description: "The size of the badge." },
      { name: "children", type: "ReactNode", default: "-", description: "The content of the badge." },
    ],
    examples: [
      {
        title: "Default Badge",
        code: `import { Badge } from "@/components/ui/Badge";

<Badge>Default</Badge>`,
      },
      {
        title: "Badge Variants",
        code: `<Badge variant="default">Default</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>
<Badge variant="info">Info</Badge>`,
      },
    ],
  },
  alert: {
    name: "Alert",
    slug: "alert",
    filename: "Alert.tsx",
    description: "Display important messages and notifications to users.",
    props: [
      { name: "variant", type: '"success" | "error" | "warning" | "info"', default: '"info"', description: "The type/color of the alert." },
      { name: "title", type: "string", default: "-", description: "Optional title for the alert." },
      { name: "icon", type: "boolean", default: "true", description: "Whether to show the icon." },
      { name: "children", type: "ReactNode", default: "-", description: "The alert message content." },
    ],
    examples: [
      {
        title: "Info Alert",
        code: `import { Alert } from "@/components/ui/Alert";

<Alert variant="info">
  This is an informational message.
</Alert>`,
      },
      {
        title: "Alert with Title",
        code: `<Alert variant="success" title="Success!">
  Your changes have been saved.
</Alert>`,
      },
      {
        title: "Alert Variants",
        code: `<Alert variant="success">Success message</Alert>
<Alert variant="error">Error message</Alert>
<Alert variant="warning">Warning message</Alert>
<Alert variant="info">Info message</Alert>`,
      },
    ],
  },
  input: {
    name: "Input",
    slug: "input",
    filename: "Input.tsx",
    description: "A text input field for capturing user input.",
    props: [
      { name: "inputSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the input." },
      { name: "error", type: "boolean", default: "false", description: "Whether the input has an error state." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the input is disabled." },
      { name: "placeholder", type: "string", default: "-", description: "Placeholder text." },
    ],
    examples: [
      {
        title: "Default Input",
        code: `import { Input } from "@/components/ui/Input";

<Input placeholder="Enter your text..." />`,
      },
      {
        title: "Input Sizes",
        code: `<Input inputSize="sm" placeholder="Small" />
<Input inputSize="md" placeholder="Medium" />
<Input inputSize="lg" placeholder="Large" />`,
      },
      {
        title: "Error State",
        code: `<Input error placeholder="Invalid input" />`,
      },
    ],
  },
  textarea: {
    name: "Textarea",
    slug: "textarea",
    filename: "Textarea.tsx",
    description: "A multi-line text input field for longer content.",
    props: [
      { name: "error", type: "boolean", default: "false", description: "Whether the textarea has an error state." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the textarea is disabled." },
      { name: "placeholder", type: "string", default: "-", description: "Placeholder text." },
      { name: "rows", type: "number", default: "-", description: "Number of visible text lines." },
    ],
    examples: [
      {
        title: "Default Textarea",
        code: `import { Textarea } from "@/components/ui/Textarea";

<Textarea placeholder="Enter your message..." />`,
      },
      {
        title: "With Error State",
        code: `<Textarea error placeholder="This field is required" />`,
      },
    ],
  },
  select: {
    name: "Select",
    slug: "select",
    filename: "Select.tsx",
    description: "A dropdown select component for choosing from options.",
    props: [
      { name: "options", type: "SelectOption[]", default: "[]", description: "Array of options { value, label, disabled? }." },
      { name: "selectSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the select." },
      { name: "placeholder", type: "string", default: "-", description: "Placeholder text when no option is selected." },
      { name: "error", type: "boolean", default: "false", description: "Whether the select has an error state." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the select is disabled." },
    ],
    examples: [
      {
        title: "Default Select",
        code: `import { Select } from "@/components/ui/Select";

<Select
  placeholder="Choose an option"
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
    { value: "3", label: "Option 3" },
  ]}
/>`,
      },
      {
        title: "Select Sizes",
        code: `<Select selectSize="sm" options={options} />
<Select selectSize="md" options={options} />
<Select selectSize="lg" options={options} />`,
      },
    ],
  },
  card: {
    name: "Card",
    slug: "card",
    filename: "Card.tsx",
    description: "A container component for grouping related content.",
    props: [
      { name: "hoverable", type: "boolean", default: "false", description: "Whether the card shows hover effect." },
      { name: "className", type: "string", default: "-", description: "Additional CSS classes." },
      { name: "children", type: "ReactNode", default: "-", description: "Card content." },
    ],
    examples: [
      {
        title: "Basic Card",
        code: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>This is the card content.</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
      },
      {
        title: "Hoverable Card",
        code: `<Card hoverable>
  <CardContent>Hover over me!</CardContent>
</Card>`,
      },
    ],
  },
  modal: {
    name: "Modal",
    slug: "modal",
    filename: "Modal.tsx",
    description: "A dialog component for displaying content in an overlay.",
    props: [
      { name: "isOpen", type: "boolean", default: "-", description: "Whether the modal is open." },
      { name: "onClose", type: "() => void", default: "-", description: "Callback when the modal should close." },
      { name: "size", type: '"sm" | "md" | "lg" | "xl"', default: '"md"', description: "The size of the modal." },
      { name: "closeOnBackdrop", type: "boolean", default: "true", description: "Whether clicking the backdrop closes the modal." },
      { name: "children", type: "ReactNode", default: "-", description: "Modal content." },
    ],
    examples: [
      {
        title: "Basic Modal",
        code: `import { Modal, ModalHeader, ModalTitle, ModalBody, ModalFooter } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <ModalHeader>
    <ModalTitle>Modal Title</ModalTitle>
  </ModalHeader>
  <ModalBody>
    <p>This is the modal content.</p>
  </ModalBody>
  <ModalFooter>
    <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
    <Button>Confirm</Button>
  </ModalFooter>
</Modal>`,
      },
    ],
  },
  tooltip: {
    name: "Tooltip",
    slug: "tooltip",
    filename: "Tooltip.tsx",
    description: "A popup that displays information on hover or focus.",
    props: [
      { name: "content", type: "string", default: "-", description: "The tooltip text content." },
      { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"top"', description: "The position of the tooltip." },
      { name: "children", type: "ReactNode", default: "-", description: "The trigger element." },
    ],
    examples: [
      {
        title: "Basic Tooltip",
        code: `import { Tooltip } from "@/components/ui/Tooltip";
import { Button } from "@/components/ui/Button";

<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>`,
      },
      {
        title: "Tooltip Positions",
        code: `<Tooltip content="Top" position="top">
  <Button>Top</Button>
</Tooltip>
<Tooltip content="Bottom" position="bottom">
  <Button>Bottom</Button>
</Tooltip>
<Tooltip content="Left" position="left">
  <Button>Left</Button>
</Tooltip>
<Tooltip content="Right" position="right">
  <Button>Right</Button>
</Tooltip>`,
      },
    ],
  },
  table: {
    name: "Table",
    slug: "table",
    filename: "Table.tsx",
    description: "A component for displaying tabular data.",
    props: [
      { name: "striped", type: "boolean", default: "false", description: "Whether to show striped rows." },
      { name: "hoverable", type: "boolean", default: "false", description: "Whether rows highlight on hover." },
      { name: "children", type: "ReactNode", default: "-", description: "Table content (TableHeader, TableBody)." },
    ],
    examples: [
      {
        title: "Basic Table",
        code: `import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/Table";

<Table>
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
      <TableCell>Admin</TableCell>
    </TableRow>
    <TableRow>
      <TableCell>Jane Smith</TableCell>
      <TableCell>jane@example.com</TableCell>
      <TableCell>User</TableCell>
    </TableRow>
  </TableBody>
</Table>`,
      },
      {
        title: "Striped & Hoverable",
        code: `<Table striped hoverable>
  {/* Table content */}
</Table>`,
      },
    ],
  },
  form: {
    name: "Form",
    slug: "form",
    filename: "Form.tsx",
    description: "Form components for building accessible forms.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Form fields and elements." },
      { name: "onSubmit", type: "FormEventHandler", default: "-", description: "Form submit handler." },
    ],
    examples: [
      {
        title: "Complete Form",
        code: `import { Form, FormField, FormLabel, FormDescription, FormError } from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Button } from "@/components/ui/Button";

<Form onSubmit={handleSubmit}>
  <FormField>
    <FormLabel htmlFor="name" required>Name</FormLabel>
    <Input id="name" placeholder="Enter your name" />
    <FormDescription>Your full name as it appears on documents.</FormDescription>
  </FormField>
  
  <FormField>
    <FormLabel htmlFor="email" required>Email</FormLabel>
    <Input id="email" type="email" placeholder="you@example.com" />
  </FormField>
  
  <FormField>
    <FormLabel htmlFor="message">Message</FormLabel>
    <Textarea id="message" placeholder="Your message..." />
  </FormField>
  
  <Button type="submit">Submit</Button>
</Form>`,
      },
      {
        title: "With Validation Error",
        code: `<FormField>
  <FormLabel htmlFor="email" required>Email</FormLabel>
  <Input id="email" error placeholder="Invalid email" />
  <FormError>Please enter a valid email address.</FormError>
</FormField>`,
      },
    ],
  },
  "neon-button": {
    name: "Neon Button",
    slug: "neon-button",
    filename: "NeonButton.tsx",
    description: "A high-energy, glowing button component for distinctive calls to action.",
    props: [
      { name: "variant", type: '"cyan" | "magenta" | "lime" | "violet"', default: '"cyan"', description: "The color theme of the neon glow." },
      { name: "neonSize", type: '"sm" | "md" | "lg"', default: '"md"', description: "The size of the button." },
      { name: "children", type: "ReactNode", default: "-", description: "Button content." },
    ],
    examples: [
      {
        title: "Neon Variants",
        code: `import { NeonButton } from "@/components/ui/NeonButton";

<NeonButton variant="cyan">Cyan Glow</NeonButton>
<NeonButton variant="magenta">Magenta Glow</NeonButton>
<NeonButton variant="lime">Lime Glow</NeonButton>
<NeonButton variant="violet">Violet Glow</NeonButton>`,
      },
      {
        title: "Sizes",
        code: `<NeonButton neonSize="sm">Small</NeonButton>
<NeonButton neonSize="md">Medium</NeonButton>
<NeonButton neonSize="lg">Large</NeonButton>`,
      },
    ],
  },
  "glass-card": {
    name: "Glass Card",
    slug: "glass-card",
    filename: "GlassCard.tsx",
    description: "A modern, frosted glass effect card for premium UI designs.",
    props: [
      { name: "intensity", type: '"low" | "medium" | "high"', default: '"medium"', description: "The intensity of the blur and opacity." },
      { name: "children", type: "ReactNode", default: "-", description: "Card content." },
    ],
    examples: [
      {
        title: "Glass Intensities",
        code: `import { GlassCard } from "@/components/ui/GlassCard";

<GlassCard intensity="low" className="p-6">
  <h3 className="text-lg font-bold mb-2">Low Intensity</h3>
  <p>Subtle frosted glass effect.</p>
</GlassCard>

<GlassCard intensity="medium" className="p-6">
  <h3 className="text-lg font-bold mb-2">Medium Intensity</h3>
  <p>Balanced blur and opacity.</p>
</GlassCard>

<GlassCard intensity="high" className="p-6">
  <h3 className="text-lg font-bold mb-2">High Intensity</h3>
  <p>Strong frosted glass effect.</p>
</GlassCard>`,
      },
    ],
  },
  "blur-text": {
    name: "Blur Text",
    slug: "blur-text",
    filename: "BlurText.tsx",
    description: "Text that reveals itself with a blur effect animation.",
    props: [
      { name: "text", type: "string", default: "-", description: "The text to display." },
      { name: "delay", type: "number", default: "0", description: "Delay before starting animation (ms)." },
      { name: "wordDelay", type: "number", default: "50", description: "Delay between each word (ms)." },
    ],
    examples: [
      {
        title: "Basic Blur Text",
        code: `import { BlurText } from "@/components/ui/BlurText";

<BlurText text="Hello World" />`,
      },
       {
        title: "With Delay",
        code: `<BlurText text="Content appears later" delay={500} wordDelay={100} />`,
      },
    ],
  },
  "spotlight-card": {
    name: "Spotlight Card",
    slug: "spotlight-card",
    filename: "SpotlightCard.tsx",
    description: "A card that reveals a spotlight effect on hover.",
    props: [
      { name: "spotlightColor", type: "string", default: '"rgba(139, 92, 246, 0.15)"', description: "Color of the spotlight." },
      { name: "children", type: "ReactNode", default: "-", description: "Card content." },
    ],
    examples: [
      {
        title: "Default Spotlight",
        code: `import { SpotlightCard } from "@/components/ui/SpotlightCard";

<SpotlightCard>
  <div className="p-6">
    <h3 className="font-bold">Hover me</h3>
    <p>I have a spotlight effect.</p>
  </div>
</SpotlightCard>`,
      },
    ],
  },
  "true-focus": {
    name: "True Focus",
    slug: "true-focus",
    filename: "TrueFocus.tsx",
    description: "An input field with a smooth focus transition and glow.",
    props: [
      { name: "label", type: "string", default: '"Focus me"', description: "Placeholder text." },
      { name: "focusColor", type: "string", default: '"#8b5cf6"', description: "Color of the focus glow." },
    ],
    examples: [
      {
        title: "Basic Input",
        code: `import { TrueFocus } from "@/components/ui/TrueFocus";

<TrueFocus />`,
      },
      {
        title: "Custom Color",
        code: `<TrueFocus label="Search..." focusColor="#06b6d4" />`,
      },
    ],
  },
  "animated-gradient-text": {
    name: "Animated Gradient Text",
    slug: "animated-gradient-text",
    filename: "AnimatedGradientText.tsx",
    description: "Text with a shimmering, moving gradient background.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Text content." },
    ],
    examples: [
      {
        title: "Basic Usage",
        code: `import { AnimatedGradientText } from "@/components/ui/AnimatedGradientText";

<AnimatedGradientText>
  <span className="inline-block bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent">
    Magic UI
  </span>
</AnimatedGradientText>`,
      },
    ],
  },
  "border-beam": {
    name: "Border Beam",
    slug: "border-beam",
    filename: "BorderBeam.tsx",
    description: "A glowing beam that moves around the border of a container.",
    props: [
      { name: "size", type: "number", default: "200", description: "Length of the beam." },
      { name: "duration", type: "number", default: "15", description: "Duration of the animation in seconds." },
      { name: "borderWidth", type: "number", default: "1.5", description: "Width of the border." },
      { name: "colorFrom", type: "string", default: '"#ffaa40"', description: "Start color." },
      { name: "colorTo", type: "string", default: '"#9c40ff"', description: "End color." },
    ],
    examples: [
      {
        title: "Card with Border Beam",
        code: `import { BorderBeam } from "@/components/ui/BorderBeam";

<div className="relative h-48 w-full overflow-hidden rounded-xl border bg-background">
  <BorderBeam />
</div>`,
      },
    ],
  },
  "dock": {
    name: "Dock",
    slug: "dock",
    filename: "Dock.tsx",
    description: "An interactive macOS-style dock with icon magnification.",
    props: [
      { name: "magnification", type: "number", default: "60", description: "Scale of magnification." },
      { name: "distance", type: "number", default: "140", description: "Distance of influence." },
      { name: "children", type: "ReactNode", default: "-", description: "DockIcons." },
    ],
    examples: [
      {
        title: "Basic Dock",
        code: `import { Dock, DockIcon } from "@/components/ui/Dock";

<Dock>
  <DockIcon>🏠</DockIcon>
  <DockIcon>🔍</DockIcon>
  <DockIcon>⚙️</DockIcon>
</Dock>`,
      },
    ],
  },
  "meteor-meteors": {
    name: "Meteor Meteors",
    slug: "meteor-meteors",
    filename: "MeteorMeteors.tsx",
    description: "A background effect with falling meteor animations.",
    props: [
      { name: "number", type: "number", default: "20", description: "Number of meteors." },
    ],
    examples: [
      {
        title: "Background Effect",
        code: `import { Meteors } from "@/components/ui/MeteorMeteors";

<div className="relative h-48 w-full overflow-hidden bg-slate-900">
  <Meteors number={20} />
</div>`,
      },
    ],
  },
  "magic-card": {
    name: "Magic Card",
    slug: "magic-card",
    filename: "MagicCard.tsx",
    description: "A card with a spotlight gradient border that follows the mouse.",
    props: [
      { name: "gradientSize", type: "number", default: "200", description: "Size of the spotlight." },
      { name: "gradientColor", type: "string", default: '"#262626"', description: "Color of the spotlight." },
    ],
    examples: [
      {
        title: "Magic Card Grid",
        code: `import { MagicCard } from "@/components/ui/MagicCard";

<MagicCard className="p-8">
  Content
</MagicCard>`,
      },
    ],
  },
  dialog: {
    name: "Dialog",
    slug: "dialog",
    filename: "Dialog.tsx",
    description: "A liquid glass modal dialog with highly rounded aesthetics.",
    props: [
      { name: "isOpen", type: "boolean", default: "false", description: "Whether the dialog is open." },
      { name: "onClose", type: "() => void", default: "-", description: "Callback to close the dialog." },
      { name: "title", type: "string", default: "-", description: "Dialog title." },
      { name: "description", type: "string", default: "-", description: "Dialog description text." },
      { name: "children", type: "ReactNode", default: "-", description: "Custom content body." },
      { name: "footer", type: "ReactNode", default: "-", description: "Footer content (usually buttons)." },
    ],
    examples: [
      {
        title: "Basic Dialog",
        code: `import { Dialog, DialogButton } from "@/components/ui/Dialog";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Dialog</Button>

<Dialog
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Dialog Title"
  description="This is a description of the dialog contents."
  footer={
    <>
      <DialogButton variant="secondary" onClick={() => setIsOpen(false)}>
        Cancel
      </DialogButton>
      <DialogButton onClick={() => console.log("Confirmed")}>
        Confirm
      </DialogButton>
    </>
  }
/>`,
      },
    ],
  },
  switch: {
    name: "Switch",
    slug: "switch",
    filename: "Switch.tsx",
    description: "A toggle switch control with a liquid glass aesthetic.",
    props: [
        { name: "checked", type: "boolean", default: "false", description: "The controlled checked state." },
        { name: "onCheckedChange", type: "(checked: boolean) => void", default: "-", description: "Event handler called when the state changes." },
        { name: "className", type: "string", default: "-", description: "Additional class names." },
    ],
    examples: [
        {
            title: "Basic Switch",
            code: `import { Switch } from "@/components/ui/Switch";
import { useState } from "react";

const [checked, setChecked] = useState(false);

<Switch checked={checked} onCheckedChange={setChecked} />`,
        },
    ],
  },

  tabs: {
    name: "Tabs",
    slug: "tabs",
    filename: "Tabs.tsx",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    props: [
        { name: "defaultValue", type: "string", default: "-", description: "The value of the tab to activate by default." },
        { name: "children", type: "ReactNode", default: "-", description: "TabsList and TabsContent components." },
    ],
    examples: [
        {
            title: "Basic Tabs",
            code: `import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/Tabs";

<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,
        },
    ],
  },
  accordion: {
    name: "Accordion",
    slug: "accordion",
    filename: "Accordion.tsx",
    description: "A vertically stacked set of interactive headings that each reveal a section of content.",
    props: [
        { name: "children", type: "ReactNode", default: "-", description: "AccordionItem components." },
    ],
    examples: [
        {
            title: "FAQ Accordion",
            code: `import { Accordion, AccordionItem } from "@/components/ui/Accordion";

<Accordion>
  <AccordionItem value="item-1" trigger="Is it accessible?">
    Yes. It adheres to the WAI-ARIA design pattern.
  </AccordionItem>
  <AccordionItem value="item-2" trigger="Is it styled?">
    Yes. It comes with default styles that matches the other components' aesthetic.
  </AccordionItem>
</Accordion>`,
        },
    ],
  },
  "tracing-beam": {
    name: "Tracing Beam",
    slug: "tracing-beam",
    filename: "tracing-beam.tsx",
    description: "A beam that follows the path of an SVG as the user scrolls.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Content to be traced." },
      { name: "className", type: "string", default: "-", description: "Additional CSS classes." },
    ],
    examples: [
        {
            title: "Basic Usage",
            code: `import { TracingBeam } from "@/components/ui/tracing-beam";

<TracingBeam className="px-6">
  <div className="max-w-2xl mx-auto antialiased pt-4 relative">
    {/* Your content here */}
    <div className="mb-10">
      <h2>Title</h2>
      <p>Description...</p>
    </div>
  </div>
</TracingBeam>`,
        },
    ],
  },
  // ============== NEW iOS-STYLE COMPONENTS ==============
  checkbox: {
    name: "Checkbox",
    slug: "checkbox",
    filename: "Checkbox.tsx",
    description: "iOS-style checkbox with smooth checkmark animation.",
    props: [
      { name: "checked", type: "boolean", default: "false", description: "Whether the checkbox is checked." },
      { name: "onChange", type: "(checked: boolean) => void", default: "-", description: "Callback when checked state changes." },
      { name: "label", type: "string", default: "-", description: "Label text for the checkbox." },
      { name: "description", type: "string", default: "-", description: "Optional description text." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the checkbox." },
      { name: "disabled", type: "boolean", default: "false", description: "Whether the checkbox is disabled." },
    ],
    examples: [
      {
        title: "Basic Checkbox",
        code: `import { Checkbox } from "@/components/ui/Checkbox";

<Checkbox label="Accept terms" />`,
      },
      {
        title: "With Description",
        code: `<Checkbox 
  label="Marketing emails" 
  description="Receive updates about new features" 
/>`,
      },
    ],
  },
  radio: {
    name: "Radio",
    slug: "radio",
    filename: "Radio.tsx",
    description: "iOS-style radio group with dot fill animation.",
    props: [
      { name: "options", type: "RadioOption[]", default: "[]", description: "Array of options {value, label, description?}." },
      { name: "value", type: "string", default: "-", description: "Currently selected value." },
      { name: "onChange", type: "(value: string) => void", default: "-", description: "Callback when selection changes." },
      { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Layout direction." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the radio buttons." },
    ],
    examples: [
      {
        title: "Basic Radio Group",
        code: `import { RadioGroup } from "@/components/ui/Radio";

<RadioGroup 
  options={[
    { value: "1", label: "Option 1" },
    { value: "2", label: "Option 2" },
  ]}
  value={selected}
  onChange={setSelected}
/>`,
      },
    ],
  },
  "search-field": {
    name: "SearchField",
    slug: "search-field",
    filename: "SearchField.tsx",
    description: "Spotlight-inspired search input with clear button.",
    props: [
      { name: "value", type: "string", default: "-", description: "Input value." },
      { name: "onChange", type: "(value: string) => void", default: "-", description: "Callback on value change." },
      { name: "onSearch", type: "(value: string) => void", default: "-", description: "Callback on Enter press." },
      { name: "placeholder", type: "string", default: '"Search..."', description: "Placeholder text." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the input." },
      { name: "loading", type: "boolean", default: "false", description: "Show loading indicator." },
    ],
    examples: [
      {
        title: "Basic Search",
        code: `import { SearchField } from "@/components/ui/SearchField";

<SearchField placeholder="Search..." onSearch={(q) => console.log(q)} />`,
      },
    ],
  },
  "number-field": {
    name: "NumberField",
    slug: "number-field",
    filename: "NumberField.tsx",
    description: "iOS-style stepper with increment/decrement buttons.",
    props: [
      { name: "value", type: "number", default: "0", description: "Current value." },
      { name: "onChange", type: "(value: number) => void", default: "-", description: "Callback on value change." },
      { name: "min", type: "number", default: "-", description: "Minimum value." },
      { name: "max", type: "number", default: "-", description: "Maximum value." },
      { name: "step", type: "number", default: "1", description: "Step increment." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the stepper." },
    ],
    examples: [
      {
        title: "Quantity Stepper",
        code: `import { NumberField } from "@/components/ui/NumberField";

<NumberField value={qty} onChange={setQty} min={0} max={10} />`,
      },
    ],
  },
  spinner: {
    name: "Spinner",
    slug: "spinner",
    filename: "Spinner.tsx",
    description: "iOS activity indicator and circular spinner.",
    props: [
      { name: "size", type: '"xs" | "sm" | "md" | "lg" | "xl"', default: '"md"', description: "Size of the spinner." },
      { name: "color", type: '"default" | "primary" | "white"', default: '"default"', description: "Color variant." },
    ],
    examples: [
      {
        title: "Basic Spinner",
        code: `import { Spinner, ActivityIndicator } from "@/components/ui/Spinner";

<Spinner />
<ActivityIndicator />`,
      },
    ],
  },
  progress: {
    name: "Progress",
    slug: "progress",
    filename: "Progress.tsx",
    description: "Linear and circular progress indicators.",
    props: [
      { name: "value", type: "number", default: "0", description: "Progress value (0-100)." },
      { name: "variant", type: '"default" | "gradient" | "striped"', default: '"default"', description: "Visual variant." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the progress bar." },
      { name: "showValue", type: "boolean", default: "false", description: "Show percentage value." },
    ],
    examples: [
      {
        title: "Linear Progress",
        code: `import { LinearProgress, CircularProgress } from "@/components/ui/Progress";

<LinearProgress value={75} />
<CircularProgress value={50} showValue />`,
      },
    ],
  },
  breadcrumb: {
    name: "Breadcrumb",
    slug: "breadcrumb",
    filename: "Breadcrumb.tsx",
    description: "Minimal breadcrumb navigation.",
    props: [
      { name: "items", type: "BreadcrumbItem[]", default: "[]", description: "Array of {label, href?}." },
      { name: "separator", type: '"chevron" | "slash" | "dot"', default: '"chevron"', description: "Separator style." },
    ],
    examples: [
      {
        title: "Basic Breadcrumb",
        code: `import { Breadcrumb } from "@/components/ui/Breadcrumb";

<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Details" },
]} />`,
      },
    ],
  },
  pagination: {
    name: "Pagination",
    slug: "pagination",
    filename: "Pagination.tsx",
    description: "Clean page navigation with dynamic ellipsis.",
    props: [
      { name: "currentPage", type: "number", default: "-", description: "Current active page." },
      { name: "totalPages", type: "number", default: "-", description: "Total number of pages." },
      { name: "onPageChange", type: "(page: number) => void", default: "-", description: "Callback when page changes." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of pagination buttons." },
    ],
    examples: [
      {
        title: "Basic Pagination",
        code: `import { Pagination } from "@/components/ui/Pagination";

<Pagination 
  currentPage={page} 
  totalPages={10} 
  onPageChange={setPage} 
/>`,
      },
    ],
  },
  popover: {
    name: "Popover",
    slug: "popover",
    filename: "Popover.tsx",
    description: "Floating popover with backdrop blur.",
    props: [
      { name: "trigger", type: "ReactNode", default: "-", description: "Element that triggers the popover." },
      { name: "children", type: "ReactNode", default: "-", description: "Popover content." },
      { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: "Popover position." },
      { name: "align", type: '"start" | "center" | "end"', default: '"center"', description: "Alignment." },
    ],
    examples: [
      {
        title: "Basic Popover",
        code: `import { Popover } from "@/components/ui/Popover";

<Popover trigger={<Button>Open</Button>}>
  <p>Popover content here</p>
</Popover>`,
      },
    ],
  },
  divider: {
    name: "Divider",
    slug: "divider",
    filename: "Divider.tsx",
    description: "Subtle divider line with optional label.",
    props: [
      { name: "orientation", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Divider direction." },
      { name: "variant", type: '"solid" | "dashed" | "dotted"', default: '"solid"', description: "Line style." },
      { name: "label", type: "string", default: "-", description: "Optional center label." },
    ],
    examples: [
      {
        title: "Divider with Label",
        code: `import { Divider } from "@/components/ui/Divider";

<Divider />
<Divider label="OR" />`,
      },
    ],
  },
  tag: {
    name: "Tag",
    slug: "tag",
    filename: "Tag.tsx",
    description: "Removable tag/chip component.",
    props: [
      { name: "variant", type: '"default" | "primary" | "success" | "warning" | "error"', default: '"default"', description: "Color variant." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size." },
      { name: "removable", type: "boolean", default: "false", description: "Show remove button." },
      { name: "onRemove", type: "() => void", default: "-", description: "Callback on remove." },
    ],
    examples: [
      {
        title: "Tags",
        code: `import { Tag, TagGroup } from "@/components/ui/Tag";

<TagGroup>
  <Tag>React</Tag>
  <Tag variant="primary" removable>TypeScript</Tag>
</TagGroup>`,
      },
    ],
  },
  kbd: {
    name: "Kbd",
    slug: "kbd",
    filename: "Kbd.tsx",
    description: "Keyboard shortcut display with macOS-style symbols.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Key label." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size." },
    ],
    examples: [
      {
        title: "Keyboard Shortcuts",
        code: `import { Kbd, Shortcut } from "@/components/ui/Kbd";

<Kbd>⌘</Kbd>
<Shortcut keys={["cmd", "k"]} />`,
      },
    ],
  },
  "typing-animation": {
    name: "TypingAnimation",
    slug: "typing-animation",
    filename: "TypingAnimation.tsx",
    description: "Typewriter text animation with blinking cursor.",
    props: [
      { name: "text", type: "string", default: "-", description: "Text to type." },
      { name: "duration", type: "number", default: "100", description: "Delay between characters (ms)." },
      { name: "delay", type: "number", default: "0", description: "Initial delay before typing." },
      { name: "cursor", type: "boolean", default: "true", description: "Show blinking cursor." },
    ],
    examples: [
      {
        title: "Typing Effect",
        code: `import { TypingAnimation } from "@/components/ui/TypingAnimation";

<TypingAnimation text="Hello, World!" duration={100} />`,
      },
    ],
  },
  "flip-words": {
    name: "FlipWords",
    slug: "flip-words",
    filename: "FlipWords.tsx",
    description: "Word rotation animation with fade and 3D flip variants.",
    props: [
      { name: "words", type: "string[]", default: "-", description: "Array of words to cycle through." },
      { name: "duration", type: "number", default: "3000", description: "Duration per word (ms)." },
    ],
    examples: [
      {
        title: "Flip Words",
        code: `import { FlipWords } from "@/components/ui/FlipWords";

<div>Build <FlipWords words={["amazing", "beautiful", "modern"]} /> apps</div>`,
      },
    ],
  },
  "text-reveal": {
    name: "TextReveal",
    slug: "text-reveal",
    filename: "TextReveal.tsx",
    description: "Scroll-triggered text reveal effect.",
    props: [
      { name: "children", type: "string", default: "-", description: "Text to reveal." },
    ],
    examples: [
      {
        title: "Scroll Reveal",
        code: `import { TextReveal } from "@/components/ui/TextReveal";

<TextReveal>This text reveals on scroll</TextReveal>`,
      },
    ],
  },
  "shiny-text": {
    name: "ShinyText",
    slug: "shiny-text",
    filename: "ShinyText.tsx",
    description: "Shimmer and gradient text effects.",
    props: [
      { name: "children", type: "string", default: "-", description: "Text content." },
      { name: "shimmerWidth", type: "number", default: "100", description: "Width of shimmer effect." },
      { name: "duration", type: "number", default: "2", description: "Animation duration (s)." },
    ],
    examples: [
      {
        title: "Shiny Text",
        code: `import { ShinyText, GradientText } from "@/components/ui/ShinyText";

<ShinyText>Premium Feature</ShinyText>
<GradientText>Magic Gradient</GradientText>`,
      },
    ],
  },
  "expandable-card": {
    name: "ExpandableCard",
    slug: "expandable-card",
    filename: "ExpandableCard.tsx",
    description: "Click-to-expand card with smooth height animation.",
    props: [
      { name: "title", type: "string", default: "-", description: "Card title." },
      { name: "description", type: "string", default: "-", description: "Optional description." },
      { name: "children", type: "ReactNode", default: "-", description: "Expandable content." },
      { name: "defaultExpanded", type: "boolean", default: "false", description: "Initial expanded state." },
    ],
    examples: [
      {
        title: "Expandable Card",
        code: `import { ExpandableCard } from "@/components/ui/ExpandableCard";

<ExpandableCard title="Click to expand">
  <p>Hidden content revealed on click.</p>
</ExpandableCard>`,
      },
    ],
  },
  "flip-card": {
    name: "FlipCard",
    slug: "flip-card",
    filename: "FlipCard.tsx",
    description: "3D flip card with hover and click triggers.",
    props: [
      { name: "front", type: "ReactNode", default: "-", description: "Front face content." },
      { name: "back", type: "ReactNode", default: "-", description: "Back face content." },
      { name: "flipOnHover", type: "boolean", default: "true", description: "Flip on mouse hover." },
      { name: "flipOnClick", type: "boolean", default: "false", description: "Flip on click." },
    ],
    examples: [
      {
        title: "Flip Card",
        code: `import { FlipCard } from "@/components/ui/FlipCard";

<FlipCard 
  front={<div>Front</div>} 
  back={<div>Back</div>} 
/>`,
      },
    ],
  },
  "tilt-card": {
    name: "TiltCard",
    slug: "tilt-card",
    filename: "TiltCard.tsx",
    description: "Mouse-follow 3D tilt effect with optional glare.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Card content." },
      { name: "maxTilt", type: "number", default: "15", description: "Maximum tilt angle in degrees." },
      { name: "scale", type: "number", default: "1.02", description: "Scale on hover." },
      { name: "glare", type: "boolean", default: "true", description: "Show glare effect." },
    ],
    examples: [
      {
        title: "Tilt Card",
        code: `import { TiltCard } from "@/components/ui/TiltCard";

<TiltCard className="p-6">
  <h3>Hover over me!</h3>
</TiltCard>`,
      },
    ],
  },
  "hover-card": {
    name: "HoverCard",
    slug: "hover-card",
    filename: "HoverCard.tsx",
    description: "Rich hover preview card with delay support.",
    props: [
      { name: "trigger", type: "ReactNode", default: "-", description: "Element that triggers the card." },
      { name: "children", type: "ReactNode", default: "-", description: "Card content." },
      { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: "Position." },
      { name: "openDelay", type: "number", default: "200", description: "Delay before opening (ms)." },
    ],
    examples: [
      {
        title: "Hover Preview",
        code: `import { HoverCard, HoverCardContent } from "@/components/ui/HoverCard";

<HoverCard trigger={<span>@username</span>}>
  <HoverCardContent 
    title="John Doe" 
    subtitle="@johndoe"
    stats={[{ label: "Followers", value: 1234 }]}
  />
</HoverCard>`,
      },
    ],
  },
  "grid-pattern": {
    name: "GridPattern",
    slug: "grid-pattern",
    filename: "GridPattern.tsx",
    description: "Subtle grid background pattern.",
    props: [
      { name: "size", type: "number", default: "40", description: "Grid cell size in pixels." },
      { name: "fade", type: "boolean", default: "true", description: "Apply radial fade mask." },
      { name: "squares", type: "[number, number][]", default: "-", description: "Highlighted square positions." },
    ],
    examples: [
      {
        title: "Grid Background",
        code: `import { GridPattern } from "@/components/ui/GridPattern";

<div className="relative h-64">
  <GridPattern />
</div>`,
      },
    ],
  },
  "dot-pattern": {
    name: "DotPattern",
    slug: "dot-pattern",
    filename: "DotPattern.tsx",
    description: "Dot background pattern with mouse-interactive variant.",
    props: [
      { name: "size", type: "number", default: "24", description: "Spacing between dots." },
      { name: "radius", type: "number", default: "1", description: "Dot radius." },
      { name: "fade", type: "boolean", default: "true", description: "Apply radial fade." },
    ],
    examples: [
      {
        title: "Dot Background",
        code: `import { DotPattern, AnimatedDotPattern } from "@/components/ui/DotPattern";

<div className="relative h-64">
  <DotPattern />
</div>`,
      },
    ],
  },
  ripple: {
    name: "Ripple",
    slug: "ripple",
    filename: "Ripple.tsx",
    description: "Click ripple effect and ripple button.",
    props: [
      { name: "color", type: "string", default: '"#007AFF"', description: "Ripple color." },
      { name: "duration", type: "number", default: "600", description: "Animation duration (ms)." },
    ],
    examples: [
      {
        title: "Ripple Button",
        code: `import { RippleButton } from "@/components/ui/Ripple";

<RippleButton>Click me</RippleButton>`,
      },
    ],
  },
  particles: {
    name: "Particles",
    slug: "particles",
    filename: "Particles.tsx",
    description: "Floating particles effect with glowing variant.",
    props: [
      { name: "quantity", type: "number", default: "50", description: "Number of particles." },
      { name: "color", type: "string", default: '"#007AFF"', description: "Particle color." },
    ],
    examples: [
      {
        title: "Particles Background",
        code: `import { Particles, GlowingParticles } from "@/components/ui/Particles";

<div className="relative h-64">
  <Particles quantity={30} />
</div>`,
      },
    ],
  },
  "iphone-mockup": {
    name: "IPhoneMockup",
    slug: "iphone-mockup",
    filename: "IPhoneMockup.tsx",
    description: "iPhone device frame with Dynamic Island.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Screen content." },
      { name: "variant", type: '"silver" | "space-gray" | "gold"', default: '"space-gray"', description: "Device color." },
      { name: "showNotch", type: "boolean", default: "true", description: "Show Dynamic Island." },
      { name: "showStatusBar", type: "boolean", default: "true", description: "Show status bar." },
    ],
    examples: [
      {
        title: "iPhone Preview",
        code: `import { IPhoneMockup } from "@/components/ui/IPhoneMockup";

<IPhoneMockup>
  <div className="bg-white h-full">
    Your app content
  </div>
</IPhoneMockup>`,
      },
    ],
  },
  "macbook-mockup": {
    name: "MacBookMockup",
    slug: "macbook-mockup",
    filename: "MacBookMockup.tsx",
    description: "MacBook laptop frame mockup.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Screen content." },
      { name: "variant", type: '"silver" | "space-gray"', default: '"space-gray"', description: "Device color." },
    ],
    examples: [
      {
        title: "MacBook Preview",
        code: `import { MacBookMockup } from "@/components/ui/MacBookMockup";

<MacBookMockup>
  <img src="/screenshot.png" alt="App" />
</MacBookMockup>`,
      },
    ],
  },
  "safari-mockup": {
    name: "SafariMockup",
    slug: "safari-mockup",
    filename: "SafariMockup.tsx",
    description: "Safari browser window mockup with title bar.",
    props: [
      { name: "url", type: "string", default: '"example.com"', description: "URL to display." },
      { name: "children", type: "ReactNode", default: "-", description: "Page content." },
    ],
    examples: [
      {
        title: "Safari Window",
        code: `import { SafariMockup } from "@/components/ui/SafariMockup";

<SafariMockup url="auralix-ui.dev">
  <div className="p-4">Website content</div>
</SafariMockup>`,
      },
    ],
  },
  "terminal-mockup": {
    name: "TerminalMockup",
    slug: "terminal-mockup",
    filename: "TerminalMockup.tsx",
    description: "Terminal window mockup with typing animation.",
    props: [
      { name: "children", type: "ReactNode", default: "-", description: "Terminal content." },
      { name: "title", type: "string", default: '"Terminal"', description: "Window title." },
    ],
    examples: [
      {
        title: "Terminal Window",
        code: `import { TerminalMockup, TerminalLine } from "@/components/ui/TerminalMockup";

<TerminalMockup>
  <TerminalLine command="npm install auralix-ui" />
  <TerminalLine output="+ auralix-ui@1.0.0" />
</TerminalMockup>`,
      },
    ],
  },
  "empty-state": {
    name: "EmptyState",
    slug: "empty-state",
    filename: "EmptyState.tsx",
    description: "Empty data placeholder with pre-built variants.",
    props: [
      { name: "icon", type: "ReactNode", default: "-", description: "Icon to display." },
      { name: "title", type: "string", default: "-", description: "Title text." },
      { name: "description", type: "string", default: "-", description: "Description text." },
      { name: "action", type: "ReactNode", default: "-", description: "Action button." },
    ],
    examples: [
      {
        title: "Empty States",
        code: `import { NoData, NoSearchResults, ErrorState } from "@/components/ui/EmptyState";

<NoData />
<NoSearchResults />
<ErrorState action={<Button>Retry</Button>} />`,
      },
    ],
  },
  confetti: {
    name: "Confetti",
    slug: "confetti",
    filename: "Confetti.tsx",
    description: "Celebration confetti effect.",
    props: [
      { name: "active", type: "boolean", default: "false", description: "Trigger confetti." },
      { name: "duration", type: "number", default: "3000", description: "Effect duration (ms)." },
      { name: "particleCount", type: "number", default: "50", description: "Number of particles." },
    ],
    examples: [
      {
        title: "Celebrate",
        code: `import { Confetti, useConfetti } from "@/components/ui/Confetti";

const { active, fire } = useConfetti();

<Button onClick={fire}>Celebrate!</Button>
<Confetti active={active} />`,
      },
    ],
  },
  "file-tree": {
    name: "FileTree",
    slug: "file-tree",
    filename: "FileTree.tsx",
    description: "File tree view with expand/collapse.",
    props: [
      { name: "data", type: "FileTreeNode[]", default: "-", description: "Tree structure data." },
      { name: "onSelect", type: "(node: FileTreeNode) => void", default: "-", description: "Callback on node select." },
    ],
    examples: [
      {
        title: "File Tree",
        code: `import { FileTree } from "@/components/ui/FileTree";

<FileTree data={[
  { name: "src", type: "folder", children: [
    { name: "index.ts", type: "file" },
  ]},
]} />`,
      },
    ],
  },
  dropdown: {
    name: "Dropdown",
    slug: "dropdown",
    filename: "Dropdown.tsx",
    description: "iOS-style dropdown menu.",
    props: [
      { name: "trigger", type: "ReactNode", default: "-", description: "Trigger element." },
      { name: "children", type: "ReactNode", default: "-", description: "Menu items." },
      { name: "align", type: '"start" | "center" | "end"', default: '"start"', description: "Alignment." },
    ],
    examples: [
      {
        title: "Dropdown Menu",
        code: `import { Dropdown, DropdownItem, DropdownSeparator } from "@/components/ui/Dropdown";

<Dropdown trigger={<Button>Options</Button>}>
  <DropdownItem>Edit</DropdownItem>
  <DropdownItem>Duplicate</DropdownItem>
  <DropdownSeparator />
  <DropdownItem destructive>Delete</DropdownItem>
</Dropdown>`,
      },
    ],
  },
  "status-dot": {
    name: "StatusDot",
    slug: "status-dot",
    filename: "StatusDot.tsx",
    description: "Status indicator dots with pulse animation.",
    props: [
      { name: "status", type: '"online" | "offline" | "away" | "busy" | "default"', default: '"default"', description: "Status type." },
      { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Dot size." },
      { name: "pulse", type: "boolean", default: "false", description: "Animate with pulse." },
    ],
    examples: [
      {
        title: "Status Indicators",
        code: `import { StatusDot, StatusBadge } from "@/components/ui/StatusDot";

<StatusDot status="online" pulse />
<StatusBadge status="away" />`,
      },
    ],
  },
  skeleton: {
    name: "Skeleton",
    slug: "skeleton",
    filename: "Skeleton.tsx",
    description: "Loading placeholder for content that is still loading.",
    props: [
      { name: "className", type: "string", default: "-", description: "Additional class names." },
    ],
    examples: [
      {
        title: "Default Skeleton",
        code: `import { Skeleton } from "@/components/ui/Skeleton";

<Skeleton className="w-[100px] h-[20px] rounded-full" />
<Skeleton className="w-[200px] h-[20px] rounded-full" />`,
      },
    ],
  },
  toast: {
    name: "Toast",
    slug: "toast",
    filename: "Toast.tsx",
    description: "Notification message displayed temporarily.",
    props: [
      { name: "type", type: '"success" | "error" | "info" | "warning"', default: '"default"', description: "The type of toast." },
      { name: "message", type: "string", default: "-", description: "The message content." },
      { name: "duration", type: "number", default: "3000", description: "Duration in ms." },
    ],
    examples: [
      {
        title: "Show Toast",
        code: `import { useToast } from "@/components/ui/Toast";

const { toast } = useToast();
<Button onClick={() => toast("Success!", "success")}>Show Toast</Button>`,
      },
    ],
  },
  sheet: {
    name: "Sheet",
    slug: "sheet",
    filename: "Sheet.tsx",
    description: "A slide-out drawer component for navigation or details.",
    props: [
      { name: "side", type: '"top" | "bottom" | "left" | "right"', default: '"right"', description: "The side to slide from." },
    ],
    examples: [
      {
        title: "Right Sheet",
        code: `import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet";

<Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>Content here</SheetContent>
</Sheet>`,
      },
    ],
  },
  carousel: {
    name: "Carousel",
    slug: "carousel",
    filename: "Carousel.tsx",
    description: "A swipeable content slider with support for auto-play and controls.",
    props: [
      { name: "items", type: "ReactNode[]", default: "[]", description: "Array of items to display." },
      { name: "autoPlay", type: "boolean", default: "false", description: "Enable auto-play." },
      { name: "showControls", type: "boolean", default: "true", description: "Show prev/next buttons." },
    ],
    examples: [
      {
        title: "Image Carousel",
        code: `import { Carousel } from "@/components/ui/Carousel";

<Carousel items={[<img src="1.jpg" />, <img src="2.jpg" />]} />`,
      },
    ],
  },
  toggle: {
    name: "Toggle",
    slug: "toggle",
    filename: "Toggle.tsx",
    description: "A two-state button that can be either on or off.",
    props: [
      { name: "pressed", type: "boolean", default: "false", description: "The controlled state." },
      { name: "onPressedChange", type: "(pressed: boolean) => void", default: "-", description: "Callback when state changes." },
      { name: "variant", type: '"default" | "outline"', default: '"default"', description: "Visual variant." },
    ],
    examples: [
      {
        title: "Toggle Button",
        code: `import { Toggle } from "@/components/ui/Toggle";

<Toggle>Bold</Toggle>`,
      },
    ],
  },
  combobox: {
    name: "Combobox",
    slug: "combobox",
    filename: "Combobox.tsx",
    description: "Autocomplete input and command palette with a list of suggestions.",
    props: [
        { name: "options", type: "{ value: string, label: string }[]", default: "[]", description: "Options to display." },
        { name: "value", type: "string", default: "-", description: "Selected value." },
    ],
    examples: [
        {
            title: "Default Combobox",
            code: `import { Combobox } from "@/components/ui/Combobox";

<Combobox
  options={[
    { value: "next.js", label: "Next.js" },
    { value: "sveltekit", label: "SvelteKit" },
    { value: "astro", label: "Astro" },
  ]}
/>`,
        },
    ],
  },
  calendar: {
    name: "Calendar",
    slug: "calendar",
    filename: "Calendar.tsx",
    description: "A date field component to select a single date.",
    props: [
        { name: "mode", type: '"single" | "range" | "multiple"', default: '"single"', description: "Selection mode." },
        { name: "selected", type: "Date | Date[] | DateRange", default: "-", description: "Selected date(s)." },
    ],
    examples: [
        {
            title: "Calendar Demo",
            code: `import { Calendar } from "@/components/ui/Calendar";

<Calendar mode="single" className="rounded-md border" />`,
        },
    ],
  },
  "date-picker": {
    name: "Date Picker",
    slug: "date-picker",
    filename: "DatePicker.tsx",
    description: "A date picker component with a calendar popover.",
    props: [
        { name: "date", type: "Date", default: "-", description: "Selected date." },
    ],
    examples: [
        {
            title: "Date Picker Demo",
            code: `import { DatePicker } from "@/components/ui/DatePicker";

const [date, setDate] = React.useState<Date>();
<DatePicker date={date} setDate={setDate} />`,
        },
    ],
  },
  "input-otp": {
    name: "Input OTP",
    slug: "input-otp",
    filename: "InputOTP.tsx",
    description: "Accessible one-time password input.",
    props: [
        { name: "maxLength", type: "number", default: "6", description: "Number of characters." },
    ],
    examples: [
        {
            title: "OTP Input",
            code: `import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/InputOTP";

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
</InputOTP>`,
        },
    ],
  },
  slider: {
    name: "Slider",
    slug: "slider",
    filename: "Slider.tsx",
    description: "An input where the user selects a value from within a given range.",
    props: [
        { name: "defaultValue", type: "number[]", default: "[0]", description: "Default value." },
        { name: "max", type: "number", default: "100", description: "Maximum value." },
    ],
    examples: [
        {
            title: "Slider Demo",
            code: `import { Slider } from "@/components/ui/Slider";

<Slider defaultValue={[33]} max={100} step={1} />`,
        },
    ],
  },
  "toggle-group": {
    name: "Toggle Group",
    slug: "toggle-group",
    filename: "ToggleGroup.tsx",
    description: "A set of two-state buttons that can be toggled on or off.",
    props: [
        { name: "type", type: '"single" | "multiple"', default: '"single"', description: "Selection type." },
    ],
    examples: [
        {
            title: "Toggle Group Demo",
            code: `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/ToggleGroup";

<ToggleGroup type="single">
  <ToggleGroupItem value="a">A</ToggleGroupItem>
  <ToggleGroupItem value="b">B</ToggleGroupItem>
</ToggleGroup>`,
        },
    ],
  },
  resizable: {
    name: "Resizable",
    slug: "resizable",
    filename: "Resizable.tsx",
    description: "Accessible resizable panel groups and layouts.",
    props: [
        { name: "direction", type: '"horizontal" | "vertical"', default: '"horizontal"', description: "Layout direction." },
    ],
    examples: [
        {
            title: "Resizable Layout",
            code: `import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/Resizable";

<ResizablePanelGroup direction="horizontal">
  <ResizablePanel>One</ResizablePanel>
  <ResizableHandle />
  <ResizablePanel>Two</ResizablePanel>
</ResizablePanelGroup>`,
        },
    ],
  },

  marquee: {
    name: "Marquee",
    slug: "marquee",
    filename: "Marquee.tsx",
    description: "An infinite scrolling component for text or images.",
    props: [
        { name: "reverse", type: "boolean", default: "false", description: "Reverse direction." },
        { name: "pauseOnHover", type: "boolean", default: "false", description: "Pause animation on hover." },
        { name: "vertical", type: "boolean", default: "false", description: "Vertical scrolling." },
        { name: "repeat", type: "number", default: "4", description: "Number of repeats." },
    ],
    examples: [
        {
            title: "Horizontal Marquee",
            code: `import { Marquee } from "@/components/ui/Marquee";

<Marquee className="[--duration:20s]">
  {/* content */}
</Marquee>`,
        },
    ],
  },
  "animated-beam": {
    name: "Animated Beam",
    slug: "animated-beam",
    filename: "AnimatedBeam.tsx",
    description: "An animated beam of light connecting two elements.",
    props: [
        { name: "containerRef", type: "RefObject", default: "-", description: "Container ref." },
        { name: "fromRef", type: "RefObject", default: "-", description: "Source element ref." },
        { name: "toRef", type: "RefObject", default: "-", description: "Target element ref." },
        { name: "duration", type: "number", default: "random", description: "Animation duration." },
    ],
    examples: [],
  },
  meteors: {
    name: "Meteors",
    slug: "meteors",
    filename: "Meteors.tsx",
    description: "A background effect with falling meteors.",
    props: [
        { name: "number", type: "number", default: "20", description: "Number of meteors." },
    ],
    examples: [],
  },
  "aurora-background": {
    name: "Aurora Background",
    slug: "aurora-background",
    filename: "AuroraBackground.tsx",
    description: "A subtle, animated aurora background gradient.",
    props: [
         { name: "showRadialGradient", type: "boolean", default: "true", description: "Show radial gradient." },
    ],
    examples: [],
  },

  globe: {
    name: "Globe",
    slug: "globe",
    filename: "Globe.tsx",
    description: "An interactive, auto-rotating 3D globe.",
    props: [
        { name: "globeConfig", type: "object", default: "-", description: "Configuration for cobe globe." },
    ],
    examples: [],
  },
};

export function getComponentData(slug: string): ComponentData | undefined {
  return componentsData[slug];
}

export function getAllComponentSlugs(): string[] {
  return Object.keys(componentsData);
}
