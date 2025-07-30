type ContainerProps = {
    children: React.ReactNode;
};

export function Container({ children }: ContainerProps) {
    return (
        <div className="min-h-screen bg-cover bg-center bg-[url('/assets/home/background-home-mobile.jpg')] sm:bg-[url('/assets/home/background-home-tablet.jpg')] md:bg-[url('/assets/home/background-home-desktop.jpg')]">
            {children}
        </div>
    );
}
