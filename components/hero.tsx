import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="text-center">
        <h1 className="text-4xl lg:text-6xl font-bold !leading-tight mx-auto max-w-4xl text-center bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent">
          Checkit & BP Private Microsite
        </h1>
        <p className="text-lg lg:text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
          A secure, internal-only microsite designed to strengthen the BP and Checkit partnership through shared knowledge, radical transparency, and strategic alignment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" variant="outline" className="text-base">
            <Link href="/auth/login">
              Sign In
            </Link>
          </Button>
          <Button asChild size="lg" className="text-base">
            <Link href="/auth/sign-up">
              Sign Up
            </Link>
          </Button>
        </div>
        <p className="text-sm text-muted-foreground mt-10 max-w-3xl mx-auto">
          <strong>Note:</strong> Access can only be granted to BP and Checkit approved and verified email domains. If you want an additional domain added, please email{" "}
          <a href="mailto:april.watts@checkit.net" className="underline hover:text-foreground transition-colors">
            april.watts@checkit.net
          </a>.
        </p>
      </div>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
