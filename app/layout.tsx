import classNames from "classnames";

export default function Layout({
	children,
}: {
	children?: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>app</title>
				<link rel="icon" href="/favicon.ico" type={"image/x-icon"} />
				<script src="https://cdn.tailwindcss.com/" />
			</head>
			<body className={classNames("bg-black text-white")}>{children}</body>
		</html>
	);
}
