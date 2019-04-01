
import { Product } from './product';

export const ProductCategory: Product[] = 
    [{
		"id": 1,
		"pName": "Electronics",
		"image": "assets/images/Electronics.jpg",
		"pTypes": [{
				"catname": "Mobile",
				"image": "assets/images/mobile.jpg"

			},
			{
				"catname": "Laptop",
				"image": "assets/images/laptop.jpg"

			},
			{
				"catname": "Fridge",
				"image": "assets/images/fridge.jpg"

			}
		]
	},


	{
		"id": 2,
		"pName": "Fashion",
		"image": "assets/images/fashion.jpg",
		"pTypes": [{
			"catname": "Clothing",
			"image": "assets/images/fashion.jpg"
		}, {
			"catname": "FootWear",
			"image": "assets/images/fashion.jpg"
		}]
	},
	{
		"id": 3,
		"pName": "Furniture",
		"image": "assets/images/furniture.jpg",
		"pTypes": [{
			"catname": "Wardrobe",
			"image": "assets/images/furniture.jpg"
		}, {
			"catname": "Beds",
			"image": "assets/images/furniture.jpg"


		}]
	}
]