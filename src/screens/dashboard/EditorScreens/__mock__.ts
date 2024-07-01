import type { TSquare } from "@/shared/types/square";
import { TUser } from "@/shared/types/user";

const generateRandomString = (length: number) => {
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	let result = "";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};

const generateRandomNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomUser = (): TUser => {
	return {
		_id: generateRandomString(10),
		name: `User_${generateRandomString(5)}`,
		avatar: `https://randomuser.me/api/portraits/thumb/men/${generateRandomNumber(
			1,
			99
		)}.jpg`,
		email: `user${generateRandomNumber(1, 100)}@example.com`,
		bio: `Bio of user ${generateRandomString(5)}`,
	};
};

const generateRandomTSquare = (): TSquare => {
	return {
		_id: generateRandomString(10),
		user_info: generateRandomUser(),
		temp: {
			preview: generateRandomNumber(0, 1000),
			download: generateRandomNumber(0, 1000),
			using: generateRandomNumber(0, 1000),
		},
		img: `https://picsum.photos/200?random=${generateRandomNumber(1, 1000)}`,
		category: `Category_${generateRandomString(5)}`,
		title: `Title_${generateRandomString(10)}`,
	};
};

export const squares: TSquare[] = Array.from(
	{ length: 40 },
	generateRandomTSquare
);

export const categories = [
	"All",
	"Anime Games",
	"photography",
	"illustration",
	"Brand and visual design",
	"game design",
	"Realism",
	"Second Dimension",
	"3D",
	"Flat Abstract",
	"Chinese style",
	"girl",
	"boys",
	"Building",
];

export const squareSelected = [
	"Members only model",
	"Member Download Model",
	"Comfy UI Workflow",
	"Lib Academy Graduation Exhibition",
];
