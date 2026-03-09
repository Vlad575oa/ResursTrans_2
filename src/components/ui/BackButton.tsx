"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BackButtonProps {
    href: string;
    sectionId?: string;
    defaultLabel?: string;
    className?: string;
}

/**
 * Smart back button that:
 * 1. Remembers which section the user came from
 * 2. Returns to that specific section when navigating back
 * 3. Falls back to the provided href if no referrer
 */
export function BackButton({ href, sectionId = "", defaultLabel = "Back", className = "" }: BackButtonProps) {
    const router = useRouter();
    const [referrer, setReferrer] = useState<string | null>(null);

    useEffect(() => {
        // Get the referrer from session storage
        const savedReferrer = sessionStorage.getItem("backReferrer");
        setReferrer(savedReferrer);
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        
        // Determine the target URL
        let targetUrl = href;
        
        // If we have a section ID and the referrer matches the base path, scroll to section
        if (sectionId && referrer) {
            const basePath = href.split("#")[0];
            if (referrer.includes(basePath)) {
                // Navigate to the section
                targetUrl = `${basePath}#${sectionId}`;
            }
        }
        
        // Use client-side navigation
        router.push(targetUrl);
    };

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={`inline-flex items-center gap-2 text-primary hover:text-white transition-colors group ${className}`}
        >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
                arrow_back
            </span>
            {defaultLabel}
        </Link>
    );
}

/**
 * Helper to store the current section before navigation
 * Call this when clicking on links that should remember the source section
 */
export function useSectionReferrer(sectionId: string) {
    useEffect(() => {
        // Store current URL with section as the referrer
        const currentUrl = window.location.href;
        if (!currentUrl.includes(`#${sectionId}`)) {
            sessionStorage.setItem("backReferrer", currentUrl);
        }
    }, [sectionId]);
}

/**
 * Link component that automatically stores referrer information
 */
export function SmartLink({ 
    href, 
    sectionId,
    children,
    className,
    ...props 
}: React.ComponentProps<typeof Link> & { sectionId?: string }) {
    const handleClick = () => {
        // Store the current page as referrer
        const currentUrl = window.location.href;
        sessionStorage.setItem("backReferrer", currentUrl);
    };

    return (
        <Link 
            href={href} 
            onClick={handleClick}
            className={className}
            {...props}
        >
            {children}
        </Link>
    );
}
