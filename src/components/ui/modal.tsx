'use client'

import { type ComponentRef, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createPortal } from 'react-dom'
import { CloseSmallIcon } from '@/components/icons'

// REFS Dialog pattern
// https://vercel.com/geist/modal
// https://ariakit.org/reference/dialog
// https://ariakit.org/examples/dialog-next-router

/**
 * Next.js routing examples
 *
 * @see
 * - [Intercepting routes](https://nextjs.org/docs/app/building-your-application/routing/intercepting-routes#modals)
 * - [Parallel routes](https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals)
 *
 * @see
 * - [React: Hydrating server-rendered HTML](https://react.dev/reference/react-dom/client/hydrateRoot#hydrating-server-rendered-html)
 * - [React: Rendering a modal dialog with a portal](https://react.dev/reference/react-dom/createPortal#rendering-a-modal-dialog-with-a-portal)
 *
 * @see https://github.com/vercel/nextgram
 */

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const dialogRef = useRef<ComponentRef<'dialog'>>(null)

  // https://ariakit.org/reference/dialog#portal
  const portal = false

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // this will set a state of the dialog to open on mount
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal()

      setShowModal(true)
    }
  }, [showModal])

  function onDismiss() {
    router.back()

    setShowModal(false)
  }

  return (<>
    {portal
      ? showModal && createPortal(
        <dialog
          ref={dialogRef}
          className="modal overlay-wrap"
          onClose={onDismiss}
        >
          {children}
          <button onClick={onDismiss} className="close-button">
            <CloseSmallIcon />
          </button>
        </dialog>,
        document.getElementById('modal-root')!
      )
      : // using native things
        <dialog
          ref={dialogRef}
          className="modal overlay-wrap"
          onClose={onDismiss}
        >
          {children}
          <button
            // formMethod="dialog"
            onClick={onDismiss}
            className="close-button"
            autoFocus
          >
            <CloseSmallIcon />
          </button>
        </dialog>
    }
  </>)
}
