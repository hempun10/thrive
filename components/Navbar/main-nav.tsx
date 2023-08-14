"use client";

import * as React from "react";
import Link from "next/link";
import {
  CloudDev,
  CyberSecurity,
  ApplicationDev,
  Automation,
  UIUX,
  SoftwareDev,
} from "../../public/assests/index";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const img = [
  CloudDev,
  CyberSecurity,
  ApplicationDev,
  Automation,
  UIUX,
  SoftwareDev,
];

interface Props {
  className?: any;
  isMobileScreen?: boolean;
}

export function MainNav({ className, isMobileScreen = false }: Props) {
  const components: {
    title: string;
    href: string;
    description: string;
  }[] = [
    {
      title: "Cloud Computing",
      href: "/services/cloudcomputing",
      description: "Cloud Operations Monitoring Data Operations Security",
    },
    {
      title: "Cyber Security",
      href: "/services/cybersecurity",
      description: "Data Operations Security",
    },
    {
      title: "Application Modernization",
      href: "/services/applicationmodernization",
      description: "Product Analytics",
    },
    {
      title: "Automation",
      href: "/services/automation",
      description: "Business Intelligence Automation",
    },
    {
      title: "UX/UI",
      href: "/services/uiux",
      description: "UI UX Prototypes Brand Identity",
    },
    {
      title: "Software Development and Consultancy",
      href: "/services/softwaredevelopment",
      description:
        "Web Development-You need to achieve new outcomes with new technology.",
    },
  ];

  return (
    <NavigationMenu className={cn(" font-sans ", className)}>
      <NavigationMenuList
        className={cn(
          "text-textColor text-2xl",
          isMobileScreen && " flex-col text-[2rem] text-left"
        )}
      >
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          {isMobileScreen ? (
            <NavigationMenuItem>
              <Link href="/services" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Services
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ) : (
            <>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {components.map((component, index) => (
                    <div className=" flex items-center hover:bg-slate-100 rounded-md p-1">
                      <Image
                        src={img[index]}
                        alt="img"
                        height={33}
                        width={33}
                        className=" object-contain "
                      />
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    </div>
                  ))}
                </ul>
              </NavigationMenuContent>
            </>
          )}
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Us
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Insights
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Resources
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div>
            <div>
              <div className={`text-sm font-medium leading-none `}>{title}</div>
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            </div>
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
