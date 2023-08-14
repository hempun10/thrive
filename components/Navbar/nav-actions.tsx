import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MainNav } from "./main-nav";

export function NavActions() {
  return (
    <div className=" md:hidden font-sans">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className=" text-xl">
            Menu
          </Button>
        </SheetTrigger>
        <SheetContent className=" font-sans">
          <MainNav isMobileScreen={true} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
