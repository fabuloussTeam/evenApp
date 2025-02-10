import "./globals.css";
import  Home  from "../pages/index";




export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`antialiased`}
			>
				<div>
					<p>Je suis un entete</p>
				</div>
				<div className="content">{children}</div>
				<div className="footer">Footer</div>
			</body>
		</html>
	);
}
