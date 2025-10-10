"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Link2, Mail, Code2, Home, User, Briefcase, FolderGit2, FileText } from "lucide-react"

export function CommandPalette() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
    setOpen(false)
  }

  const sendEmail = () => {
    window.location.href = "mailto:hello@guilhermepozo.com"
    setOpen(false)
  }

  const viewSource = () => {
    window.open("https://github.com/guilhermepozo", "_blank")
    setOpen(false)
  }

  const navigateTo = (hash: string) => {
    const element = document.querySelector(hash)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed top-6 right-6 px-4 py-2 text-sm text-muted hover:text-foreground border border-border rounded-lg hover:border-purple transition-colors flex items-center gap-2 bg-background/80 backdrop-blur-sm z-50"
      >
        <span>Press</span>
        <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">⌘K</kbd>
      </button>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="GENERAL">
            <CommandItem onSelect={copyLink} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Link2 className="w-4 h-4" />
                <span>Copy Link</span>
              </div>
              <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">L</kbd>
            </CommandItem>

            <CommandItem onSelect={sendEmail} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
              </div>
              <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">E</kbd>
            </CommandItem>

            <CommandItem onSelect={viewSource} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Code2 className="w-4 h-4" />
                <span>View Source</span>
              </div>
              <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">S</kbd>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="GO TO">
            <CommandItem onSelect={() => navigateTo("#")} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </div>
              <div className="flex gap-1">
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">G</kbd>
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">H</kbd>
              </div>
            </CommandItem>

            <CommandItem onSelect={() => navigateTo("#about")} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <User className="w-4 h-4" />
                <span>About</span>
              </div>
              <div className="flex gap-1">
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">G</kbd>
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">A</kbd>
              </div>
            </CommandItem>

            <CommandItem onSelect={() => navigateTo("#experience")} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="w-4 h-4" />
                <span>Experience</span>
              </div>
              <div className="flex gap-1">
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">G</kbd>
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">E</kbd>
              </div>
            </CommandItem>

            <CommandItem onSelect={() => navigateTo("#projects")} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FolderGit2 className="w-4 h-4" />
                <span>Projects</span>
              </div>
              <div className="flex gap-1">
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">G</kbd>
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">P</kbd>
              </div>
            </CommandItem>

            <CommandItem onSelect={() => navigateTo("#writing")} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4" />
                <span>Writing</span>
              </div>
              <div className="flex gap-1">
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">G</kbd>
                <kbd className="px-2 py-1 text-xs bg-muted/20 border border-border rounded">W</kbd>
              </div>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
}
