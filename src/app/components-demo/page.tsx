import { 
  Button, 
  Card, 
  CardHeader, 
  CardContent, 
  CardFooter, 
  Container, 
  Heading, 
  Text, 
  Link, 
  Icon 
} from '@/components/ui';

export default function ComponentsDemo() {
  return (
    <div className="min-h-screen bg-primary-background py-12">
      <Container>
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center">
            <Heading level={1} variant="accent">i-Bridge Design System</Heading>
            <Text variant="lead" className="mt-4">
              A showcase of reusable UI components following the i-Bridge design system
            </Text>
          </div>

          {/* Buttons Section */}
          <section>
            <Heading level={2} className="mb-6">Buttons</Heading>
            <div className="grid gap-6">
              <div className="space-y-4">
                <Text weight="semibold">Button Variants</Text>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="cta">CTA Button</Button>
                  <Button variant="outline">Outline Button</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Text weight="semibold">Button Sizes</Text>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              
              <div className="space-y-4">
                <Text weight="semibold">Button States</Text>
                <div className="flex flex-wrap gap-4">
                  <Button loading>Loading</Button>
                  <Button disabled>Disabled</Button>
                  <Button fullWidth>Full Width</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section>
            <Heading level={2} className="mb-6">Cards</Heading>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Heading level={3}>Default Card</Heading>
                  <Text variant="muted">A simple card with default styling</Text>
                </CardHeader>
                <CardContent>
                  <Text>This is the card content area where you can put any content.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" size="sm">Action</Button>
                </CardFooter>
              </Card>

              <Card variant="elevated" hover>
                <CardHeader>
                  <Heading level={3}>Elevated Card</Heading>
                  <Text variant="muted">Card with elevation and hover effect</Text>
                </CardHeader>
                <CardContent>
                  <Text>This card has more shadow and scales on hover.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="secondary" size="sm">Learn More</Button>
                </CardFooter>
              </Card>

              <Card variant="outlined" padding="lg">
                <CardHeader>
                  <Heading level={3}>Outlined Card</Heading>
                  <Text variant="muted">Card with border and large padding</Text>
                </CardHeader>
                <CardContent>
                  <Text>This card uses an outlined style with extra padding.</Text>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" size="sm">View Details</Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Typography Section */}
          <section>
            <Heading level={2} className="mb-6">Typography</Heading>
            <div className="space-y-6">
              <div>
                <Text weight="semibold" className="mb-4">Headings</Text>
                <div className="space-y-2">
                  <Heading level={1}>Heading Level 1</Heading>
                  <Heading level={2}>Heading Level 2</Heading>
                  <Heading level={3}>Heading Level 3</Heading>
                  <Heading level={4}>Heading Level 4</Heading>
                  <Heading level={5}>Heading Level 5</Heading>
                  <Heading level={6}>Heading Level 6</Heading>
                </div>
              </div>

              <div>
                <Text weight="semibold" className="mb-4">Heading Variants</Text>
                <div className="space-y-2">
                  <Heading level={2} variant="default">Default Heading</Heading>
                  <Heading level={2} variant="accent">Accent Heading</Heading>
                  <Heading level={2} variant="muted">Muted Heading</Heading>
                </div>
              </div>

              <div>
                <Text weight="semibold" className="mb-4">Text Variants</Text>
                <div className="space-y-2">
                  <Text variant="default">Default text with normal weight</Text>
                  <Text variant="muted">Muted text for secondary information</Text>
                  <Text variant="accent">Accent text for highlighting</Text>
                  <Text variant="lead">Lead text for introductions and summaries</Text>
                </div>
              </div>

              <div>
                <Text weight="semibold" className="mb-4">Text Sizes</Text>
                <div className="space-y-2">
                  <Text size="xs">Extra small text</Text>
                  <Text size="sm">Small text</Text>
                  <Text size="base">Base text (default)</Text>
                  <Text size="lg">Large text</Text>
                  <Text size="xl">Extra large text</Text>
                  <Text size="2xl">2XL text</Text>
                </div>
              </div>

              <div>
                <Text weight="semibold" className="mb-4">Links</Text>
                <div className="space-y-2">
                  <Link href="#" variant="default">Default Link</Link>
                  <br />
                  <Link href="#" variant="accent">Accent Link</Link>
                  <br />
                  <Link href="#" variant="underline">Underlined Link</Link>
                  <br />
                  <Link href="#" variant="default" external>External Link</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Icons Section */}
          <section>
            <Heading level={2} className="mb-6">Icons</Heading>
            <div className="space-y-6">
              <div>
                <Text weight="semibold" className="mb-4">Icon Sizes</Text>
                <div className="flex items-center gap-4">
                  <Icon name="user" size="xs" />
                  <Icon name="user" size="sm" />
                  <Icon name="user" size="md" />
                  <Icon name="user" size="lg" />
                  <Icon name="user" size="xl" />
                </div>
              </div>

              <div>
                <Text weight="semibold" className="mb-4">Common Icons</Text>
                <div className="grid grid-cols-6 md:grid-cols-10 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="search" />
                    <Text size="xs">Search</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="user" />
                    <Text size="xs">User</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="briefcase" />
                    <Text size="xs">Work</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="heart" />
                    <Text size="xs">Heart</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="star" />
                    <Text size="xs">Star</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="phone" />
                    <Text size="xs">Phone</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="email" />
                    <Text size="xs">Email</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="location" />
                    <Text size="xs">Location</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="calendar" />
                    <Text size="xs">Calendar</Text>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <Icon name="settings" />
                    <Text size="xs">Settings</Text>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Container Section */}
          <section>
            <Heading level={2} className="mb-6">Container Sizes</Heading>
            <div className="space-y-6">
              <div>
                <Text weight="semibold" className="mb-4">Container Variants</Text>
                <Container size="sm" className="bg-accent-primary/10 p-4 rounded">
                  <Text>Small Container (max-w-3xl)</Text>
                </Container>
                <Container size="md" className="bg-accent-secondary/10 p-4 rounded mt-4">
                  <Text>Medium Container (max-w-4xl)</Text>
                </Container>
                <Container size="lg" className="bg-highlight/10 p-4 rounded mt-4">
                  <Text>Large Container (max-w-7xl) - Current</Text>
                </Container>
                <Container size="xl" className="bg-gray-100 p-4 rounded mt-4">
                  <Text>Extra Large Container (max-w-screen-xl)</Text>
                </Container>
              </div>
            </div>
          </section>

          {/* Back to Home */}
          <section className="text-center">
            <Link href="/" variant="default" className="inline-flex items-center gap-2">
              <Icon name="arrow-left" size="sm" />
              Back to Home
            </Link>
          </section>
        </div>
      </Container>
    </div>
  );
} 