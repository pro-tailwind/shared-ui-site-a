import React from 'react'

import { Button } from './components/button'
import { Modal } from './components/modal'

export default function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isOpen2, setIsOpen2] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [activeTheme, setActiveTheme] = React.useState('base')

  function handleConfirm() {
    setIsLoading(true)

    setTimeout(() => {
      setIsOpen2(false)
    }, 2000)
  }

  return (
    <div data-theme={activeTheme}>
      <div className="mx-auto mt-4 max-w-2xl px-4">
        <div className="flex items-center gap-2">
          <p className="mr-2 text-xs font-medium uppercase tracking-widest text-slate-500">
            theme:{' '}
          </p>
          {['base', 'rainforest', 'candy'].map((themeKey) => (
            <Button
              data-theme={themeKey}
              key={themeKey}
              size="small"
              impact={themeKey === activeTheme ? 'light' : 'none'}
              onClick={() => setActiveTheme(themeKey)}
            >
              {themeKey}
            </Button>
          ))}
        </div>
        <hr className="mt-4 border-t border-slate-200" />
      </div>
      <div className="mx-auto mt-16 max-w-2xl px-4">
        <h1 className="text-xl font-medium">Pro Tailwind UI Components</h1>
        <p className="mt-2 text-lg/7 text-slate-700">
          The following `Button` and `Modal` components are imported from npm ✨
        </p>
        <h2 className="mt-10 text-lg font-medium">Buttons</h2>
        <div className="mt-4 flex gap-4">
          <Button>Bold button</Button>
          <Button impact="light">Light button</Button>
          <Button impact="none">Ghost button</Button>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Button size="large">Large</Button>
          <Button>Medium</Button>
          <Button size="small">Small</Button>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <Button shape="square">Square</Button>
          <Button>Rounded</Button>
          <Button shape="pill">Pill shape</Button>
        </div>

        <h2 className="mt-10 text-lg font-medium">Modal (using Buttons!)</h2>
        <div className="mt-4 flex gap-4">
          <Button impact="light" onClick={() => setIsOpen(true)}>
            Kind modal
          </Button>
          <Button impact="light" tone="danger" onClick={() => setIsOpen2(true)}>
            Danger modal
          </Button>
        </div>

        <Modal
          open={isOpen}
          slideFrom="bottom"
          onClose={() => setIsOpen(false)}
          title="You're just awesome ❤️"
          actions={{
            confirm: {
              label: 'Thank you!',
              action: () => setIsOpen(false),
            },
          }}
        >
          <div className="mt-4">
            <p className="text-slate-500">
              Just wanted to let you know... you're pretty awesome. Keep doing what you're dooing,
              you legend!
            </p>
          </div>
        </Modal>

        <Modal
          open={isOpen2}
          tone="danger"
          isLoading={isLoading}
          slideFrom="bottom"
          onClose={() => setIsOpen2(false)}
          onCloseComplete={() => setIsLoading(false)}
          title="Delete account permantly"
          actions={{
            confirm: {
              label: 'Yes, delete my account!',
              action: handleConfirm,
            },
            cancel: {
              label: 'Wow no, stop!',
              action: () => setIsOpen2(false),
            },
          }}
        >
          <div className="mt-4">
            <p className="text-slate-500">
              You're about to delete your account permantently. This action cannot be undone. Are
              you sure you want to do this?
            </p>
          </div>
        </Modal>
      </div>
    </div>
  )
}
