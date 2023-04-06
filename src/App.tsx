import React from 'react'

import { Button, Modal } from 'protailwind-ui-components'

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
    <div className="mx-auto mt-20 max-w-4xl px-4">
      <h1 className="text-4xl font-semibold">Vite + React</h1>
      <p className="mt-2">Click on the Vite and React logos to learn more</p>
      <div className="mt-6 flex gap-4">
        <Button>I am cool</Button>
        <Button impact="light">I am cool</Button>
        <Button impact="none">I am cool</Button>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button size="large">I am cool</Button>
        <Button>I am cool</Button>
        <Button size="small">I am cool</Button>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button shape="square">I am cool</Button>
        <Button>I am cool</Button>
        <Button shape="pill">I am cool</Button>
      </div>

      <div className="mt-20"></div>

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
            You're about to delete your account permantently. This action cannot be undone. Are you
            sure you want to do this?
          </p>
        </div>
      </Modal>
      {/* 
        ------------------------------
        Toggle buttons
        ------------------------------
      */}
      <div className="flex gap-2">
        <Button tone="danger" impact="light" onClick={() => setIsOpen(true)}>
          Open modal
        </Button>
      </div>
    </div>
  )
}

export default App
