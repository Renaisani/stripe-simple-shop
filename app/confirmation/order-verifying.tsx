import Link from 'next/link';

export default function VerifyingConfirmationPage() {
    return (
        <div className="confirmation-container">
            <h1>Verifying Payment...</h1>
            <div className="confirmation-order-summary">

            </div>
            <div className="item-list">

            </div>
            <Link href="/" className="home-button">Return to Home</Link>
        </div>
    );
}
