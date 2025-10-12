"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface ImageModalProps {
  images: string[]
  title: string
  description?: string
  isOpen: boolean
  onClose: () => void
  initialIndex?: number
}

export function ImageModal({
  images,
  title,
  description,
  isOpen,
  onClose,
  initialIndex = 0,
}: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  useEffect(() => {
    setCurrentIndex(initialIndex)
  }, [initialIndex, isOpen])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      } else if (e.key === "ArrowLeft" && currentIndex > 0) {
        handlePrevious()
      } else if (e.key === "ArrowRight" && currentIndex < images.length - 1) {
        handleNext()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, currentIndex, images.length])

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 1, prev + 1))
  }

  if (!isOpen) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[98vw] sm:!max-w-[95vw] md:!max-w-[90vw] lg:!max-w-[80vw] xl:!max-w-[75vw] 2xl:!max-w-[70vw] !w-[98vw] sm:!w-[95vw] md:!w-[90vw] lg:!w-[80vw] xl:!w-[75vw] 2xl:!w-[70vw] !max-h-[95vh] !h-[90vh] sm:!h-[85vh] md:!h-[90vh] lg:!h-[85vh] border-none !bg-background/98 backdrop-blur-xl p-0 overflow-hidden !flex !flex-col !gap-0 !shadow-2xl rounded-none sm:rounded-lg"
        showCloseButton={false}
      >
        <DialogTitle className="sr-only">{title}</DialogTitle>

        {/* Header */}
        <div className="border-b border-border bg-card/50 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 xl:px-7 xl:py-4.5 2xl:px-8 2xl:py-5">
          <div className="flex items-start justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-5">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold text-foreground mb-0.5 sm:mb-1 truncate">{title}</h3>
              {description && (
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground truncate">{description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1.5 sm:p-2 lg:p-2.5 xl:p-3 rounded-lg hover:bg-muted/50 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
            </button>
          </div>
        </div>

        {/* Image Container */}
        <div className="relative flex items-center justify-center bg-card/30 flex-1 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
          <div className="relative w-full h-full flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              width={0}
              height={0}
              sizes="(max-width: 640px) 98vw, (max-width: 768px) 95vw, (max-width: 1024px) 90vw, (max-width: 1280px) 80vw, (max-width: 1536px) 75vw, 70vw"
              className="w-full h-full object-contain rounded-lg shadow-xl"
              priority
              quality={100}
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              {currentIndex > 0 && (
                <button
                  onClick={handlePrevious}
                  className="absolute left-1 sm:left-2 md:left-3 lg:left-4 xl:left-5 2xl:left-6 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg bg-card/90 hover:bg-card text-foreground border border-border transition-all hover:scale-105 backdrop-blur-sm shadow-lg"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </button>
              )}
              {currentIndex < images.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-1 sm:right-2 md:right-3 lg:right-4 xl:right-5 2xl:right-6 top-1/2 -translate-y-1/2 p-1.5 sm:p-2.5 md:p-3 lg:p-3.5 xl:p-4 rounded-lg bg-card/90 hover:bg-card text-foreground border border-border transition-all hover:scale-105 backdrop-blur-sm shadow-lg"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
                </button>
              )}
            </>
          )}
        </div>

        {/* Footer - Image Counter for Multiple Images */}
        {images.length > 1 && (
          <div className="border-t border-border/40 bg-card/60 backdrop-blur-sm px-3 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 lg:px-10 lg:py-6 xl:px-12 xl:py-7">
            <div className="flex flex-col items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`rounded-full transition-all duration-300 hover:scale-110 ${
                      index === currentIndex
                        ? "bg-foreground h-2 w-6 sm:h-3 sm:w-10 lg:h-4 lg:w-12 xl:h-5 xl:w-14 shadow-md"
                        : "bg-muted-foreground/40 hover:bg-muted-foreground/60 h-1.5 w-1.5 sm:h-2.5 sm:w-2.5 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-muted-foreground font-medium">
                {currentIndex + 1} of {images.length}
              </span>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
