"use client";

type TErrorProps = {
	error: Error;
	reset: () => void;
};

export default function Error({ error, reset }: TErrorProps) {
	return (
		<div className="w-max h-max flex items-center flex-col justify-center">
			<h2>Something went wrong!</h2>
			<button onClick={reset}>Try again</button>
		</div>
	);
}
