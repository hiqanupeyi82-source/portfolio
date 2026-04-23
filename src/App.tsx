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
          bio="靠AI写代码的小白。"
          skills={skills}
        />
        <Projects projects={projects} />
        <Contact
          links={[
            { kind: 'copy', label: 'Email', value: '506905826@qq.com' },
            {
              kind: 'link',
              label: 'GitHub',
              href: 'https://github.com/hiqanupeyi82-source',
            },
          ]}
        />
      </main>
      <Footer />
    </div>
  )
}

export default App
