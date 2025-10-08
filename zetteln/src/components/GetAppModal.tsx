import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import ArrowRight from '../assets/icons/ArrowRight'

export default function GetAppModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="bg-black-800 flex items-center gap-2 rounded-full px-6 py-3 text-white transition-all duration-200 hover:bg-black"
      >
        <ArrowRight /> App testen
      </button>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="relative w-[90%] max-w-lg rounded-2xl bg-white p-6 shadow-2xl dark:bg-gray-900"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-gray-400 transition hover:text-gray-600 dark:hover:text-gray-200"
              >
                "x"
              </button>

              {/* Modal content */}
              <div className="space-y-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">🦈 Join Shack’s Beta Crew</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Shack is warming up the waters… Want to be the first to dive in when our AI auction app hits beta? You
                  can also help us shape it or join the pilot crew.
                </p>

                {/* Embedded Tally Form */}
                <div className="mt-4">
                  <iframe
                    data-tally-src="https://tally.so/embed/your-tally-form-id?hideTitle=1&transparentBackground=1"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Join Shack Beta"
                    className="rounded-xl"
                  ></iframe>
                </div>

                <p className="text-xs text-gray-400">Your info stays safe with Shack 🦈</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
