interface PageContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function PageContainer({
    children,
    className = "",
}: PageContainerProps) {
    return (
        <main className={`max-w-[1920px] mx-auto p-6 w-full flex-1 ${className}`}>
            {children}
        </main>
    );
}