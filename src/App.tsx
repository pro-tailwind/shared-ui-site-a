import React from 'react'

import { Button, Modal } from '@protailwind/ui-dev'

function App() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  function handleConfirm() {
    setIsLoading(true)

    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  }

  return (
    <div className="mx-auto mt-20 max-w-2xl px-4">
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
      <div className="mt-4">
        {/* Toggle */}
        <Button tone="danger" impact="light" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
        {/* The Modal iself (using Headless UI) */}
        <Modal
          open={isOpen}
          isLoading={isLoading}
          slideFrom="top"
          tone="danger"
          onClose={() => setIsOpen(false)}
          onCloseComplete={() => setIsLoading(false)}
          title="Delete account permantly"
          actions={{
            confirm: {
              label: 'Yes, delete my account!',
              action: handleConfirm,
            },
            cancel: {
              label: 'Wow no, stop!',
              action: () => setIsOpen(false),
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

export default App
