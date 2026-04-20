import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Secure Checkout | Cloud Media Server',
    description: 'Complete your deployment configuration.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function CheckoutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
