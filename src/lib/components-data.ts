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
  slider: {
    name: "Slider",
    slug: "slider",
    filename: "Slider.tsx",
    description: "A range slider with a glassy track and glowing thumb.",
    props: [
        { name: "value", type: "number", default: "0", description: "The current value." },
        { name: "min", type: "number", default: "0", description: "The minimum value." },
        { name: "max", type: "number", default: "100", description: "The maximum value." },
        { name: "onValueChange", type: "(value: number) => void", default: "-", description: "Event handler called when the value changes." },
    ],
    examples: [
        {
            title: "Volume Slider",
            code: `import { Slider } from "@/components/ui/Slider";
import { useState } from "react";

const [val, setVal] = useState(50);

<Slider value={val} onValueChange={setVal} max={100} />`,
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
};

export function getComponentData(slug: string): ComponentData | undefined {
  return componentsData[slug];
}

export function getAllComponentSlugs(): string[] {
  return Object.keys(componentsData);
}
