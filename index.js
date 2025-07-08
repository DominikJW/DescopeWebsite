// The code below includes your Project ID (P2zK1PUWU84mhs0Hx5wcByG3HTAl)
import { AuthProvider } from '@descope/nextjs-sdk';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<AuthProvider projectId="P2zK1PUWU84mhs0Hx5wcByG3HTAl">
			<html lang="en">
				<body>{children}</body>
			</html>
		</AuthProvider>
	);
}
