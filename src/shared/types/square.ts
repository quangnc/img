import type { TUser } from "./user";

export type TSquare = {
	_id: string;
	user_info: TUser;
	temp: TSquareTemp;
	img: string;
	category: string;
	title: string;
};

export type TSquareTemp = {
	preview: number;
	download: number;
	using: number;
};
