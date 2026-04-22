import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Projects } from './components/Projects'
import { projects } from './data/projects'
import { skills } from './data/skills'

function App() {
  return (
    <div className="min-h-dvh">
      <Header />
      <main className="mx-auto max-w-6xl">
        <Hero />
        <About
          bio="这里写一段更详细的自我介绍：你关注的方向、擅长的技术，以及你希望解决的问题。"
          skills={skills}
        />
        <Projects projects={projects} />
        <Contact
          links={[
            { label: 'Email', href: 'mailto:you@example.com' },
            { label: 'GitHub', href: 'https://github.com/yourname' },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
