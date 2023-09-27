import { Button, Card, TabButton } from "@/components"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button variant="outlined">Learn more</Button>
      <TabButton variant="outlined" isActiveTab={true}>
        Get started
      </TabButton>
      <Card
        title="Vessel Vulnerabilities: Why Attackers Increasingly Target Maritime"
        image="/0.jpg"
        article="Articles"
        date="24 March"
        link="https://nextjs.org/docs/messages/fast-refresh-reload"
        isDark={true}
      />
      <Card
        title="Vessel Vulnerabilities: Why Attackers Increasingly Target Maritime"
        image="/1.jpg"
        article="Articles"
        date="24 March"
        link="https://nextjs.org/docs/messages/fast-refresh-reload"
        isDark={false}
      />
    </main>
  )
}
