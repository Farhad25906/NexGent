import { Button } from "@/components/ui/button"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded bg-emerald-500" />
          <span className="text-xl font-bold tracking-tight">NEXGENT</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="transition-colors hover:text-emerald-500">Products</a>
          <a href="#" className="transition-colors hover:text-emerald-500">Resource</a>
          <a href="#" className="transition-colors hover:text-emerald-500">Community</a>
          <a href="#" className="transition-colors hover:text-emerald-500">Pricing</a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-sm font-medium">Login</Button>
          <Button className="bg-emerald-500 hover:bg-emerald-600">Register</Button>
        </div>
      </div>
    </nav>
  )
}
