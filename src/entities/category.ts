import {
    Column,
    Entity,
    JoinColumn,
    OneToMany,
    ManyToMany,
    ManyToOne,
    PrimaryGeneratedColumn
} from 'typeorm';
import { Product } from './product';

export const Categories = [
	{
		"id" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e",
		"name" : "Men Clothes",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe",
		"name" : "Mobile & Gadgets",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "c7861866-430e-4436-81c6-32c63fe10177",
		"name" : "Consumer Electronics",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "224d9e10-4872-4619-a6c5-9b84c38793ac",
		"name" : "Computer & Accessories",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "3d0ba31a-5f48-417e-85b2-6275d15448be",
		"name" : "Cameras",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "820aa157-6727-42b7-8bed-1fad86fd860f",
		"name" : "Watches",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "e08f0544-07bc-491d-8dbb-4465e83572c0",
		"name" : "Men Shoes",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd",
		"name" : "Home Appliances",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "915abba6-71ae-41a1-a968-78b59bfcc24e",
		"name" : "Sport & Outdoor",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7",
		"name" : "Automotive",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "460e02cf-94eb-48e5-982a-b954edc700a3",
		"name" : "Men Bags",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01",
		"name" : "Toys",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "a7c84193-5921-485a-bd6e-d9c976ce09fe",
		"name" : "Pets",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "1bad594a-9c4a-41ac-be06-b1f60ea350bc",
		"name" : "Tools & Home Improvement",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "49027e7d-5540-4bb4-9571-d1d54c62b010",
		"name" : "Women Clothes",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "deff012c-1c78-45b8-b905-ee9973f49391",
		"name" : "Moms, Kids & Babies",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "831e2189-2caa-427a-b9df-ddb8b0022029",
		"name" : "Home & Living",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "cc9e61f4-06a8-48d4-b692-322558df5e4c",
		"name" : "Beauty",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf",
		"name" : "Health",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518",
		"name" : "Women Shoes",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4",
		"name" : "Women Bags",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0",
		"name" : "Fashion Accessories",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14",
		"name" : "Grocery",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893",
		"name" : "Books & Stationery",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "bb37a57a-4825-4693-acf9-50954774089f",
		"name" : "Kid Fashion",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "45b348a6-5a97-4f29-865b-3f8369966fab",
		"name" : "Home Care",
		"description" : null,
		"parentId" : null
	},
	{
		"id" : "ccf42c8c-d2dc-4115-9be5-4a0ef6fcf153",
		"name" : "Jackets, Coats & Vests",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "72b060e3-e572-47ba-9846-7b38723bb288",
		"name" : "Suit Jackets & Blazers",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "56a4b884-6836-4ede-965a-08ac97b65740",
		"name" : "Hoodies & Sweatshirts",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "6dd79927-9b37-4b0e-8d92-9d1b44883c27",
		"name" : "Jeans",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "21820cf8-57e4-4357-ba0a-fdbbf27f00b5",
		"name" : "Pants\/Suits",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "902fe895-cc06-43e2-838f-05f087004145",
		"name" : "Shorts",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "ba82011f-54f0-4a82-98d9-09e1eed5366e",
		"name" : "Tops",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "d929c4dc-3c7b-40b8-b6c9-ac9d2c8d4aa7",
		"name" : "Tanks",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "a2a68b46-254e-40c1-8849-cdc95fd67383",
		"name" : "Innerwear & Underwear",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "69aa4902-0bb9-414c-bf75-08a6ce18cbc3",
		"name" : "Sleepwear",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "cee20a7f-a92a-4c5f-b584-aa0f3fb6dc69",
		"name" : "Sets",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "30d7a01d-6c73-4f60-825e-b625c6a1ced6",
		"name" : "Socks",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "c1106fef-03c1-450c-9c2e-6da49fac5dae",
		"name" : "Traditional Wear",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "cecb0d9e-4ba8-4fef-b0b0-c8dec9f24547",
		"name" : "Costumes",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "25494847-1ee2-49ac-9068-b656f6cd36c2",
		"name" : "Occupational Attire",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "35e0125b-53b6-4281-9fc0-d614236b19bc",
		"name" : "Others",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "3688bda2-52d7-4d47-bc77-c5e9b0e2c2e7",
		"name" : "Men Jewelries",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "af521d03-7ef5-41f1-b81f-61a62b668574",
		"name" : "Eyewear",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "439d0f1e-89b8-4a03-b71c-2e579cf7c19e",
		"name" : "Belts",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "498b4283-412e-4d18-9e34-8771d6bb47f8",
		"name" : "Neckties, Bow Ties & Cravats",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "1a3ed5b9-9392-4b13-90aa-f61fe9a8c248",
		"name" : "Additional Accessories",
		"description" : null,
		"parentId" : "ae8676e8-8b6f-4bae-b882-5c447d366a8e"
	},
	{
		"id" : "d3ae832d-7f57-4b72-b257-61dcb7d92967",
		"name" : "Mobile Phones",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "080f40b9-668e-4f8b-9bcd-0147a1029c62",
		"name" : "Tablets",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "d17b68a5-843d-4e5c-8717-f9656e3b09b2",
		"name" : "Powerbanks",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "3af4697a-0e0b-49a1-b332-9969035ee989",
		"name" : "Batteries, Cables & Charger",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "45f4a57e-06c2-4865-b052-cd8a7053f857",
		"name" : "Cases, Covers, & Skins",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "cd6c3e92-4bfb-44e2-bdca-f6084b416d9a",
		"name" : "Screen Protectors",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "6732608e-bf9c-4f29-a71b-af47f088a709",
		"name" : "Phone Holders",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "2a65aa10-ea10-4d67-81c3-e00ad833a9d9",
		"name" : "Memory Cards",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "8f359954-1b20-44e1-8938-4703256e9c19",
		"name" : "Sims",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "3079e4e7-9e57-47bc-baba-8b05f7070dab",
		"name" : "Other Accessories",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "66be910e-995a-45ab-a99c-fe8e6deee0a6",
		"name" : "Other devices",
		"description" : null,
		"parentId" : "1d79a22f-f804-42da-bcd5-ed0b09c91efe"
	},
	{
		"id" : "9727f531-1ada-4d1c-98ce-2092c3ac4394",
		"name" : "Wearable Devices",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "1a461221-542a-4fa5-883e-76b1fb37e22b",
		"name" : "Tivi Accessories",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "43a82ed6-856e-44d8-917d-70cfb4d2c3d8",
		"name" : "Gaming & Console",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "097d423f-4380-4c38-91e1-de372fd68388",
		"name" : "Console Accessories",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "38dc4463-0f46-4333-852b-ed0ccc18df70",
		"name" : "Video Games",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "3931fc20-b27a-49c8-9674-7a18b300b625",
		"name" : "Accessories and spare parts",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "b4228f3c-5d5e-4f7f-8c14-ea0c1fd66476",
		"name" : "Earphones",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "154f0a18-34f1-48da-8156-6490635a6af2",
		"name" : "Audio",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "c502ae57-8d64-4fdc-9cdf-87de9cc28628",
		"name" : "Tivi",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "52c46cbd-0175-4080-a147-96fff8fcaa3e",
		"name" : "Tivi Box",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "76a75f0a-b6fd-4d27-af88-464adda597de",
		"name" : "Headphones",
		"description" : null,
		"parentId" : "c7861866-430e-4436-81c6-32c63fe10177"
	},
	{
		"id" : "9e7cea18-bd42-4c79-b46c-026062b11531",
		"name" : "Desktop Computers",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "d201e826-324f-4ebf-881b-c1e4380221de",
		"name" : "Monitors",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "d6b02a77-9161-443d-afc0-f7186b6dca4d",
		"name" : "Desktop & Laptop Components",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "743cd52e-38f3-4ee4-8812-280360560960",
		"name" : "Data Storage",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "4ced92b6-2d5a-4ee0-87cb-0843f2f5799c",
		"name" : "Network Components",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "e8fdb39c-153f-4c98-a00b-20de899cd107",
		"name" : "Printers, Scanners & Projectors",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "a498a1f5-4bf5-40e9-af60-86f6bb3de00b",
		"name" : "Peripherals & Accessories",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "e15f7977-ad54-49f3-ac46-5fedf76ecd4d",
		"name" : "Laptops",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "635b1886-5ca4-42c8-9d3f-e8ac07faa4de",
		"name" : "Others",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "7e15d70f-f764-4c20-891a-dd38c84100ea",
		"name" : "Gaming",
		"description" : null,
		"parentId" : "224d9e10-4872-4619-a6c5-9b84c38793ac"
	},
	{
		"id" : "e8049a87-cb5b-45f0-abb0-88da1e35bcf5",
		"name" : "Cameras",
		"description" : null,
		"parentId" : "3d0ba31a-5f48-417e-85b2-6275d15448be"
	},
	{
		"id" : "c4d8536e-9227-493c-836d-86b06c799af3",
		"name" : "Security Cameras & Systems",
		"description" : null,
		"parentId" : "3d0ba31a-5f48-417e-85b2-6275d15448be"
	},
	{
		"id" : "83fcf7e9-93e1-4afb-9e24-292402c30f78",
		"name" : "Memory Cards",
		"description" : null,
		"parentId" : "3d0ba31a-5f48-417e-85b2-6275d15448be"
	},
	{
		"id" : "026f806e-81bc-4038-92e6-6297b3783169",
		"name" : "Lenses",
		"description" : null,
		"parentId" : "3d0ba31a-5f48-417e-85b2-6275d15448be"
	},
	{
		"id" : "c36ca8a0-fcca-4dca-abc6-00e1b02bbfaa",
		"name" : "Camera Accessories",
		"description" : null,
		"parentId" : "3d0ba31a-5f48-417e-85b2-6275d15448be"
	},
	{
		"id" : "7286b771-6cd2-4ec8-befe-66acd05ee25d",
		"name" : "Drones",
		"description" : null,
		"parentId" : "3d0ba31a-5f48-417e-85b2-6275d15448be"
	},
	{
		"id" : "0931a0af-5a1e-47a3-894d-18da827f949c",
		"name" : "Men Watches",
		"description" : null,
		"parentId" : "820aa157-6727-42b7-8bed-1fad86fd860f"
	},
	{
		"id" : "d6e349b9-0d06-496a-8471-be039b0f1f43",
		"name" : "Women Watches",
		"description" : null,
		"parentId" : "820aa157-6727-42b7-8bed-1fad86fd860f"
	},
	{
		"id" : "0dfcd4fb-fccc-4429-aaaf-40918d3d1533",
		"name" : "Set & Couple Watches",
		"description" : null,
		"parentId" : "820aa157-6727-42b7-8bed-1fad86fd860f"
	},
	{
		"id" : "06af6cb3-e1f8-4fd0-a3c8-935d09c00c66",
		"name" : "Kid Watches",
		"description" : null,
		"parentId" : "820aa157-6727-42b7-8bed-1fad86fd860f"
	},
	{
		"id" : "4ebb5f1e-1682-414d-8ae5-3fd78d3c65d6",
		"name" : "Watches Accessories",
		"description" : null,
		"parentId" : "820aa157-6727-42b7-8bed-1fad86fd860f"
	},
	{
		"id" : "51fbc9d0-e6ea-42eb-8211-0f568b33df98",
		"name" : "Others",
		"description" : null,
		"parentId" : "820aa157-6727-42b7-8bed-1fad86fd860f"
	},
	{
		"id" : "083b216a-2e30-44bd-9cf5-75d1a449ebbf",
		"name" : "Boots",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "98a9546d-3f1e-40e5-a7b4-cec99b32b4c6",
		"name" : "Sneakers",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "623bc60f-f7af-477c-84ad-cd02352e172b",
		"name" : "Slip Ons & Mules",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "4b0b47e8-b4bb-4eaa-b195-e5e2ed0b46d9",
		"name" : "Loafers & Boat Shoes",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "9e0b7380-0a8a-4434-aa2d-8651ca88bc66",
		"name" : "Oxfords & Lace-Ups",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "bb1c6414-3a31-467c-b83e-8a5ede42a870",
		"name" : "Sandals & Flip Flops",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "c8630cf7-3a7b-4252-a3b1-2e7843df778e",
		"name" : "Shoe Care & Accessories",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "faedf0cb-d5dc-4d67-a430-728ad0a8c280",
		"name" : "Others",
		"description" : null,
		"parentId" : "e08f0544-07bc-491d-8dbb-4465e83572c0"
	},
	{
		"id" : "00b4ee2e-92e0-484a-a591-a3e759ba28f9",
		"name" : "Kitchen Appliances",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "12208693-0a9d-4a61-91f8-80eff2b2fbcd",
		"name" : "Large Appliance",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "3071829d-0b76-4c70-ab0e-0f0632075b90",
		"name" : "Vacuums & Floor care",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "9c2ce20a-be58-4ff6-95a3-94382e426fae",
		"name" : "Air Conditioners & Fans",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "14ba90bb-1e11-4771-94e1-b92ef2b4b49b",
		"name" : "Garment Care",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "cf38992a-36c2-47d9-8568-befdd78cead8",
		"name" : "Others",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "8aeb3670-3960-4391-a877-2776ddba5a72",
		"name" : "Blenders, Mixers & Grinders",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "9527b4fc-e2a4-447f-822b-b35472f6734e",
		"name" : "Electric Cookers",
		"description" : null,
		"parentId" : "3e7d31e2-1a9e-497c-b6fb-f1a491bd83bd"
	},
	{
		"id" : "e9a43bff-cb83-4687-91c8-cc49c2afeedf",
		"name" : "Luggage",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "94584e11-7714-4533-9789-cd12ae3153c0",
		"name" : "Travel Bags",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "9d80accf-5781-41a8-afbd-bdf2d644327f",
		"name" : "Travel Accessories",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "2a88398d-fab0-4d87-bedf-6f9572b8bab0",
		"name" : "Sports & Outdoor Recreation Equipments",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "8905bb64-7f3a-4b46-88b3-555b131de9e0",
		"name" : "Sports Footwear",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "3c4f1a8e-9a02-4333-97ff-d3836f66457b",
		"name" : "Sports & Outdoor Apparels",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "1f8c33cf-8993-460c-96ff-4536a8849eaa",
		"name" : "Sports & Outdoor Accessories",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "30af4d00-a5b5-4b23-bcb9-3128cf89b254",
		"name" : "Others",
		"description" : null,
		"parentId" : "915abba6-71ae-41a1-a968-78b59bfcc24e"
	},
	{
		"id" : "8a8e7c1d-5c42-422b-ba82-f2cd1ddc3da7",
		"name" : "Bike, E-bike",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "1fe24336-1cfc-4827-8b8a-22ecc5ef67a2",
		"name" : "Motorbike",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "1ddf5e99-c9ca-4722-a6d5-cd13dbc450cb",
		"name" : "Car",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "1f33a78b-7ed4-4e08-beb2-eb55b8fc7d36",
		"name" : "Helmets",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "be7e9046-8d48-4462-965f-6b169773e263",
		"name" : "Motorbike Accessories",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "686dfd2c-d45e-4bf9-9a32-264203ddd348",
		"name" : "Bicycle & E-bike Accessories",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "fc22ace9-f794-45c0-891e-46cf87a9646d",
		"name" : "Interior Accessories",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "6b474653-afa4-46dc-9ec3-124db58054c2",
		"name" : "Automotive Oils & Lubes",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "2c2c6a6e-ea81-400d-864d-174c78e3f99a",
		"name" : "Auto Parts & Spares",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "13bb4150-aa03-4637-8bd6-b4574c55f045",
		"name" : "Motorbike Spare Parts",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "61d7f73e-f2ee-4f23-b819-dca1016e7f5c",
		"name" : "Exterior Accessories",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "a0d59deb-d7a4-4a70-b3bb-208d56dc3b05",
		"name" : "Automotive Care",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "7e76f2b6-a21a-4d64-a720-a33fe1b0babf",
		"name" : "Automotive Services",
		"description" : null,
		"parentId" : "f6d7e369-eb1a-48af-aefb-811fd54fd3a7"
	},
	{
		"id" : "1cdfbdce-2640-463b-bf2f-336b77cba609",
		"name" : "Backpacks",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "acd8a8a5-438f-427d-b8a2-b8da1ea2ea6e",
		"name" : "Laptop Backpacks",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "f54918af-3500-46ab-af48-02c7c3a5df94",
		"name" : "Laptop Bags & Cases",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "ea3cae54-5679-4911-9d6f-146f11ee971c",
		"name" : "Laptop Sleeves",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "f578aec6-12e2-468a-ba80-32a948c10d5d",
		"name" : "Tote Bags",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "57a41f94-0081-47cc-afb2-e876bf92038e",
		"name" : "Briefcases",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "5ed96c49-9e9a-468e-b05c-7415f88eef13",
		"name" : "Clutches",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "202bed8e-7cb0-499f-899a-38eb23051b63",
		"name" : "Waist Bags & Chest Bags",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "d3fff208-586c-4083-8403-270883433f71",
		"name" : "Crossbody & Shoulder Bags",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "33205fba-034a-498c-aa2c-b2aba41edf8a",
		"name" : "Wallets",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "ed7dc3bf-923f-47fa-98c9-ef44d7e3aca4",
		"name" : "Others",
		"description" : null,
		"parentId" : "460e02cf-94eb-48e5-982a-b954edc700a3"
	},
	{
		"id" : "bdb02dbf-631a-4603-993e-538f07eb0c80",
		"name" : "Hobbies & Collectibles",
		"description" : null,
		"parentId" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01"
	},
	{
		"id" : "65b685f5-134d-4504-9283-701d5d0c1616",
		"name" : "Game Zone",
		"description" : null,
		"parentId" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01"
	},
	{
		"id" : "968c4173-f840-4caa-85a1-0e5c5e1031df",
		"name" : "Educational Toys",
		"description" : null,
		"parentId" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01"
	},
	{
		"id" : "4dacb687-e37e-47f5-9fc9-79c520c22bd1",
		"name" : "Baby & Toddler Toys",
		"description" : null,
		"parentId" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01"
	},
	{
		"id" : "3342fb52-8058-41a1-818e-5a32fd880e74",
		"name" : "Action & Outdoor Toys",
		"description" : null,
		"parentId" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01"
	},
	{
		"id" : "934a000c-c2ba-42d6-8abe-54472478ced2",
		"name" : "Dolls & Stuffed Toys",
		"description" : null,
		"parentId" : "7a14b6a6-e5ac-4405-ba0f-cff836db3d01"
	},
	{
		"id" : "c638613f-9d0d-4201-80c0-85e41db762fb",
		"name" : "Pet Food",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "88b9124a-712c-4bdc-a31f-c94dcc125020",
		"name" : "Pet Accessories",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "79bc93db-dfa1-4d97-ae4d-a457ff7fdb3b",
		"name" : "Litter & Toilet",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "fae3082f-92a9-4239-a5c0-1c93461e2239",
		"name" : "Pet Clothing & Accessories",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "ff35e7cc-1401-4eac-b47a-5c783704c9ac",
		"name" : "Pet Healthcare",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "49eb804f-f7c6-4034-89ea-87d1690ae996",
		"name" : "Pet Grooming",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "ae3c2881-c4d7-4b40-9b7c-4f8effe76be4",
		"name" : "Others",
		"description" : null,
		"parentId" : "a7c84193-5921-485a-bd6e-d9c976ce09fe"
	},
	{
		"id" : "77bb6ac7-2fb7-4457-a45b-4fc019017dc1",
		"name" : "Handtool",
		"description" : null,
		"parentId" : "1bad594a-9c4a-41ac-be06-b1f60ea350bc"
	},
	{
		"id" : "8874321c-b312-4077-8036-192e171c7250",
		"name" : "Large tools and equipment",
		"description" : null,
		"parentId" : "1bad594a-9c4a-41ac-be06-b1f60ea350bc"
	},
	{
		"id" : "2f2763c9-62f8-4f57-acf0-03f6a8b6286d",
		"name" : "Electrical Circuitry & Parts",
		"description" : null,
		"parentId" : "1bad594a-9c4a-41ac-be06-b1f60ea350bc"
	},
	{
		"id" : "76c07a0c-f635-4a66-a5e3-497204407730",
		"name" : "Building and construction",
		"description" : null,
		"parentId" : "1bad594a-9c4a-41ac-be06-b1f60ea350bc"
	},
	{
		"id" : "a9e6c5c0-b8e8-4e87-96e5-4498b7274ec5",
		"name" : "Accessories",
		"description" : null,
		"parentId" : "1bad594a-9c4a-41ac-be06-b1f60ea350bc"
	},
	{
		"id" : "d95dd1e9-6750-4f92-9d52-3ebbbabd4f05",
		"name" : "Pants & Leggings",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "a0eca7e3-f767-4beb-ba77-e15b5dcccbd7",
		"name" : "Shorts",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "5ae33288-d7fd-4e27-8f23-2cb97c789089",
		"name" : "Skirts",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "adfc5220-e29d-4c7e-bb47-112ecedf5c6d",
		"name" : "Jeans",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "4c7463ac-0887-42b7-9ab2-b52a5a2e3491",
		"name" : "Dresses",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "7de4163f-1089-435c-967c-7a4907beeafa",
		"name" : "Wedding Dresses",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "f644adb7-81d2-4d56-aa04-c0a4490e02b1",
		"name" : "Jumpsuits, Playsuits & Overalls",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "62717f9e-236a-4240-bf05-de3412f6eb96",
		"name" : "Jackets, Coats & Vests",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "30e65617-80ac-4731-bbec-dc75562dc40a",
		"name" : "Sweaters & Cardigans",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "54631f4e-5ec0-4797-a52a-f1d41a4dbd2d",
		"name" : "Hoodies & Sweatshirts",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "e3df6be2-bfa7-478c-b872-9dc7fd083b4e",
		"name" : "Sets",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "6f08c8cc-f041-4799-8894-dab8dbd939ed",
		"name" : "Lingerie & Underwear",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "171cbde3-228c-4da4-bb0a-23e6c108506f",
		"name" : "Sleepwear & Pajamas",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "9abb44e1-f20c-484b-99a9-a8a58b08240d",
		"name" : "Tops",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "eef1cea3-b194-4c0a-816c-54f117183469",
		"name" : "Sportwear",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "28938a87-6e50-495e-9b92-27e1f4906b25",
		"name" : "Maternity Wear",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "4366daf6-c5ae-491b-8fef-4d4fdd0ac4d0",
		"name" : "Traditional Wear",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "ed918df6-87d6-4306-80b3-89fe494380fb",
		"name" : "Costumes",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "e5aed8d5-491e-4cd0-9647-757c4e90662b",
		"name" : "Fabric",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "be2307d8-2788-4d7e-963e-c8c86c34e9f9",
		"name" : "Socks & Stockings",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "d62979dc-fe81-4b35-848c-955032f22613",
		"name" : "Others",
		"description" : null,
		"parentId" : "49027e7d-5540-4bb4-9571-d1d54c62b010"
	},
	{
		"id" : "10b17573-1d70-41a3-8ee9-c1fc357ca684",
		"name" : "Baby Travel Essentials",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "b4797064-1a96-47a6-bf10-5dd7dedfd2ef",
		"name" : "Feeding Essentials",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "bb7ecdbd-d2d7-4908-b886-ab492ff89e76",
		"name" : "Maternity Accessories",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "9647a214-4bfa-4fe1-9a28-b10f1ce1da5c",
		"name" : "Maternity Healthcare",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "310ab248-3fd4-424a-a618-329c76c6e332",
		"name" : "Bath & Body Care",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "4384bacc-3631-4241-882a-62be856254c3",
		"name" : "Nursery",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "68e3901a-ff22-421f-b96c-a2362ea02f6c",
		"name" : "Baby Safety",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "b12f3595-37b5-436b-b92a-b3da6ba7e463",
		"name" : "Baby Food",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "c6f3174c-b73d-4184-a702-d38de4d5cc76",
		"name" : "Baby Healthcare",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "2738a0cf-84fd-46b8-aba9-c0274e704e0d",
		"name" : "Diapering & Potty",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "07af450e-bb2a-4a5a-9a90-a36dfb83ea95",
		"name" : "Toys",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "8a55bf7b-d909-469f-ab80-3ed66909e0bb",
		"name" : "Gift Sets & Packages",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "1fb487e4-5397-4e12-9830-d717d0f10ec9",
		"name" : "Others",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "4fd715d8-7052-4d33-b6b1-38a8c224a3f5",
		"name" : "Milk 24 months and ups",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "9f4418b9-d3ca-41a8-a486-27c4ddf39ab1",
		"name" : "Milk Formula 0- 24 months",
		"description" : null,
		"parentId" : "deff012c-1c78-45b8-b905-ee9973f49391"
	},
	{
		"id" : "b990ff85-13a4-4137-b5c3-c854091eea71",
		"name" : "Bedding",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "c489f12f-c3cc-4bfe-afb4-efa84a57f98f",
		"name" : "Furniture",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "38fa5616-8cf9-4621-880f-dff7fd87e3e3",
		"name" : "Home Decoration",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "4fb50ee2-e7c1-41be-8989-ff337dcdaf37",
		"name" : "Tools and Home improvement",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "c53cb9df-9ff8-4475-aef9-58f8e998abb6",
		"name" : "Kitchenware and food storage",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "4b7ffc71-63db-4a0f-86fc-75deb9729584",
		"name" : "Lighting",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "210928eb-6a96-4673-8b6c-aa77a67b5ab4",
		"name" : "Outdoor & Garden",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "23f49da9-9426-4006-b7b6-725e92d2b9a2",
		"name" : "Bathroom",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "d1ac13aa-9a39-4f02-adf6-6c6e9a0006a9",
		"name" : "Regilious and Worship items",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "818dee79-b63d-4965-a006-48bb3180a5f9",
		"name" : "Party supplies",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "97ef3de7-d77e-4734-b88f-1dab2ca64ade",
		"name" : "Housekeeping and Laundry",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "21f9db0e-bea6-4f56-ad85-c8eb58a0ead1",
		"name" : "Houseorganizers",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "a1533109-5147-4f97-970d-b7be0fa96c5d",
		"name" : "Drinkware",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "903083d2-0af7-4465-be5e-c39cdc6363f9",
		"name" : "Home Fragrance & Aromatherapy",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "dd576e37-2e69-4cb0-bd76-e65e16d30345",
		"name" : "Dinnerware",
		"description" : null,
		"parentId" : "831e2189-2caa-427a-b9df-ddb8b0022029"
	},
	{
		"id" : "151c8fdd-b890-4c3f-8a46-f09cc4d93860",
		"name" : "Skincare",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "bd304f1e-0ca7-4179-b5fc-7a50e51a9a49",
		"name" : "Bath & Body Care",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "f5f7349b-8d61-4d05-8979-24b35b3c50ef",
		"name" : "Makeup",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "85aa684a-0ce6-4dc0-b9d0-befe147096ec",
		"name" : "Hair Care",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "f4a456a2-fd16-4ae4-a2ab-caef691aa7e7",
		"name" : "Beauty Tools & Accessories",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "48435a4e-45b6-4e82-9d92-deaef160304f",
		"name" : "Oral Care",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "b4314717-d9db-49b6-abdb-5cfec4bf6d15",
		"name" : "Perfumes & Fragrances",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "37c4686e-d48a-47bc-9fe8-5d9af94ca0d3",
		"name" : "Men Care",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "8fea7c1b-c214-41e7-ad1f-477cdfc432a3",
		"name" : "Others",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "e9fa964a-a1aa-4369-843f-53ff708c1057",
		"name" : "Feminine Care",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "a59e0b46-5a9a-4c9c-b88f-52b7ae0be9be",
		"name" : "Beauty Sets & Packages",
		"description" : null,
		"parentId" : "cc9e61f4-06a8-48d4-b692-322558df5e4c"
	},
	{
		"id" : "c62f7002-e322-4b2c-8a97-560454bb7205",
		"name" : "Medical Supplies",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "152edaa5-8967-4243-b087-e35b493dcf46",
		"name" : "Insect Repellents",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "b9a9e6e8-bc6d-441d-bd86-e6aa114d915e",
		"name" : "Food Supplement",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "9a0972a0-e892-4796-81ea-874b1e91fba9",
		"name" : "Adult Diapers & Incontinence",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "8ffb45f8-d60d-4bef-bbde-e5a017d461cd",
		"name" : "Beauty Supplements",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "a98bb0b8-4374-444f-9c63-2893ca26d802",
		"name" : "Sexual Wellness",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "d3d3566b-8c42-4849-8eaf-0038156d0678",
		"name" : "Massage & Therapy Devices",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "3fa190a4-2ecd-4fae-91be-4f8feef3afc0",
		"name" : "Others",
		"description" : null,
		"parentId" : "2bde4d20-f55b-4667-9254-5bf4c1c28dcf"
	},
	{
		"id" : "9cf129aa-2170-4db5-8696-fb47a074ee82",
		"name" : "Boots",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "e4d2f714-48ba-4c45-b549-9e92b0b936c9",
		"name" : "Sneakers",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "59307502-c82b-41f7-95f1-1abe52178c48",
		"name" : "Flats",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "246bd8b7-76a7-41da-ab12-99221c0920e0",
		"name" : "Heels",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "f334b4e3-572a-4224-a647-0523c122b7ff",
		"name" : "Wedges",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "22eb5346-b198-42ec-9c64-365cf63be525",
		"name" : "Flat Sandals & Flip Flops",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "00ff679d-d9fe-4069-8098-babc9734302d",
		"name" : "Shoe Care & Accessories",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "65a900ae-feed-4e14-834e-76a2583301f6",
		"name" : "Others",
		"description" : null,
		"parentId" : "66c41ee9-f8b0-45bf-b712-0880fc5fc518"
	},
	{
		"id" : "421aaf95-eec5-4333-a11a-facb6001ecdc",
		"name" : "Backpacks",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "2b85a3cf-c8c1-47e7-893c-db1c5f43b7e8",
		"name" : "Laptop Bags",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "462967a6-eb44-4846-8cb4-c953da08669b",
		"name" : "Clutches & Wristlets",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "ec753eb9-105c-464b-9b6b-82bdd39781c5",
		"name" : "Waist Bags & Chest Bags",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "8c4f2742-d813-4e6e-ac3e-06736b42609f",
		"name" : "Tote Bags",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "776ab0ff-d34c-40d1-8309-29024222186d",
		"name" : "Top-handle Bags",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "f662e42a-cb97-458d-a1c5-9e0c4f34beea",
		"name" : "Crossbody & Shoulder Bags",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "2f38e6cb-cbf3-4815-b708-feae2002ba75",
		"name" : "Wallets",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "b29f91e9-e49a-4b38-9c0a-724c5cd2f449",
		"name" : "Bag Accessories",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "8a21a538-3a45-4e47-8baa-fb44a91a6876",
		"name" : "Others",
		"description" : null,
		"parentId" : "2fb411bc-7f16-4cf5-8c3c-51adc07f5cd4"
	},
	{
		"id" : "3f547cc5-6173-44db-a7ea-520d1d27b673",
		"name" : "Rings",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "d28f0591-7298-44f2-954e-d6237d4831ed",
		"name" : "Earrings",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "50021cce-651f-4e08-a7b2-335cd34a1ddd",
		"name" : "Scarves & Shawls",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "b041ffd7-31da-46ca-b943-809b77340ec7",
		"name" : "Gloves",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "4bda0015-6e80-4bff-8235-5a43599dd074",
		"name" : "Hair Accessories",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "f62bfdc4-c88f-4ac0-a322-ca726752c637",
		"name" : "Bracelets & Bangles",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "67dd0820-675d-4ce2-9002-9e6234a7d1a9",
		"name" : "Anklets",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "6e27b46b-fdcb-4588-8a07-c8144f0a5f1a",
		"name" : "Hats & Caps",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "96ca8b8f-cfcb-476e-9fe7-1de180f4f007",
		"name" : "Necklaces",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "7e9aa351-61e1-4cd4-8b3a-306aafff73aa",
		"name" : "Eyewear",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "7acb14e6-605b-4cae-9a30-3d2ea02f4fc9",
		"name" : "Investment Precious Metals",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "83262e41-a8a9-4be0-b876-7852ef25076a",
		"name" : "Belts",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "262ac4a1-575b-4d7e-b24c-0aecd14db5ef",
		"name" : "Neckties, Bow Ties & Cravats",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "3ab8b9cc-00d1-4eb8-ad36-bb336cb88cfb",
		"name" : "Additional Accessories",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "a0fc26aa-e55e-4fc0-8deb-b629e71ee295",
		"name" : "Accessories Sets & Packages",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "b19e879c-a624-47e6-9491-9ff071e1cadb",
		"name" : "Others",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "3c4a8d0a-2727-47d7-b415-5e0609653529",
		"name" : "Socks & Stockings",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "4e35f289-56ed-49ea-88a9-5e0e5e552d71",
		"name" : "Umbrella",
		"description" : null,
		"parentId" : "15e5c250-a2fe-4069-8a83-ab64f150f9a0"
	},
	{
		"id" : "2a4b364a-05af-4839-ac80-30dcd530ea6f",
		"name" : "Snacks",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "ed620d87-94e6-476d-87a7-cc61ce067240",
		"name" : "Convenience \/ Ready-to-eat",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "c11d5bf4-1806-4ac3-a50b-d3031054044c",
		"name" : "Food Staples",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "7c9b1494-0b6e-4417-b681-568edce1bcf0",
		"name" : "Cooking Essentials",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "9e58435d-5ec5-4791-8c39-cbf46789b254",
		"name" : "Baking Needs",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "e9238ee2-5357-4716-8aa8-7495cfd5837c",
		"name" : "Dairy & Eggs",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "7ab01d0c-069e-432f-b887-a359e15ac979",
		"name" : "Beverages",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "184d5362-a976-4174-91c9-a5a794b7aa42",
		"name" : "Breakfast Cereals & Spread",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "88984a0a-d749-4ac4-a223-df59092ad200",
		"name" : "Bakery",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "889314a6-fddc-4f0e-80ca-ebb3fdb76f3c",
		"name" : "Alcoholic Beverages",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "054f88e4-f2c0-4d5b-9bef-066324baf627",
		"name" : "Gift Set & Hampers",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "1ed03260-ed59-4d82-b0d2-18f1f3abf340",
		"name" : "Fresh & Frozen Food",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "dd8ef7e6-cb22-4800-adcb-1df45677a901",
		"name" : "Others",
		"description" : null,
		"parentId" : "c8d10c19-ecc0-4e9f-b475-ce159d2f6f14"
	},
	{
		"id" : "fef16ab5-3f06-4056-9920-b540e208605b",
		"name" : "Domestic Books",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "8f18a356-fd12-4a26-9a0e-40884dc62f09",
		"name" : "Foreign Books",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "7e583041-5ef2-4fbe-a9d3-2c0a0c86e514",
		"name" : "Gift & Wrapping",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "8d1366f9-0531-4327-9038-ef5a4a1076b9",
		"name" : "Writing & Correction",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "aba0049a-6f4a-47b3-8f94-ed5d24ce7df6",
		"name" : "School & Office Supplies",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "e4f40e4f-aecd-4a5b-9a76-700a10cefd77",
		"name" : "Coloring & Arts",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "cc1a6c56-728c-4941-a97c-42a7771451e6",
		"name" : "Notebooks & Paper Products",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "7f0c7a8a-7794-4580-94c9-017e2086710b",
		"name" : "Souvenirs",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "3bfa77cb-3d49-4bc1-a965-1f34e2a8c9a6",
		"name" : "Music & Media",
		"description" : null,
		"parentId" : "65f59ea6-40f4-469a-bbb7-705c6e1e1893"
	},
	{
		"id" : "51e2957d-f523-4659-bf5a-a40e155f7307",
		"name" : "Boy Clothes",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "9b9b4ee6-0382-4248-bea5-c1c261585229",
		"name" : "Girl Clothes",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "b57eda2e-4b36-49e3-89cb-20efe141f9b3",
		"name" : "Boy Shoes",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "694ed66a-cf8d-4e24-ab50-450ddbbb8480",
		"name" : "Girl Shoes",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "f19e5509-76c9-4441-b68e-1a0ce5950b93",
		"name" : "Others",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "bc2fa503-0800-4cf0-a046-c7a02c0cea3e",
		"name" : "Baby Clothes",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "73c70801-96ed-46dc-93a6-9d1fed35685b",
		"name" : "Baby Mittens & Footwear",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "b31c471c-f0c0-4bb2-a112-3169638981da",
		"name" : "Baby & Kids Accessories",
		"description" : null,
		"parentId" : "bb37a57a-4825-4693-acf9-50954774089f"
	},
	{
		"id" : "22eb653f-284d-4137-8046-5e3a91255cc2",
		"name" : "Laundry",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "bbab35da-9a9c-4bde-b762-1a929b659519",
		"name" : "Toilet Paper",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "d2f80533-ebfb-458b-9e6a-90bb4c588a46",
		"name" : "Household Cleaning",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "5d2772d8-0a54-49b3-a8aa-db1a12a0cbb7",
		"name" : "Dishwashing",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "d13ef60e-3dac-4199-b158-274e756e0f36",
		"name" : "Cleaning Tools",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "214e06a8-5d61-43db-a174-8c80b614f2e8",
		"name" : "Air Fresheners",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "9dac8f5c-4580-4373-97cc-354de01acedb",
		"name" : "Insect Killer",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "18c8fc98-16ae-4ad5-a14e-c5941accef1a",
		"name" : "Food preservation",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	},
	{
		"id" : "0de19232-ca88-4015-ab4a-bde8df119004",
		"name" : "Trash Bags",
		"description" : null,
		"parentId" : "45b348a6-5a97-4f29-865b-3f8369966fab"
	}
];

@Entity()
export class Category {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 200,
        nullable: true,
    })
    description: string;

    @ManyToOne(
        () => Category,
        category => category.subCategories,
        { nullable: true }
    )
    @JoinColumn({ name: 'parentId' })
    parentCategory: Category;

    @OneToMany(
        () => Category,
        category => category.parentCategory,
    )
    subCategories: Category[];

    @ManyToMany(() => Product)
    products: Product[];
}