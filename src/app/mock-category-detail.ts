
import { Product } from './product';

export const ProductCategory: Product[] = 
    [{
		"id": 1,
		"pName": "Electronics",
		"image": "assets/images/Electronics.jpg",
		"pTypes": [{
				"catName": "Mobile",
				"image": "assets/images/mobile.jpg"

			},
			{
				"catName": "Laptop",
				"image": "assets/images/laptop.jpg"

			},
			{
				"catName": "Fridge",
				"image": "assets/images/fridge.jpg"

			}
		]
	},


	{
		"id": 2,
		"pName": "Fashion",
		"image": "assets/images/fashion.jpg",
		"pTypes": [{
			"catName": "Clothing",
			"image": "assets/images/fashion.jpg"
		}, {
			"catName": "FootWear",
			"image": "assets/images/fashion.jpg"
		}]
	},
	{
		"id": 3,
		"pName": "Furniture",
		"image": "assets/images/furniture.jpg",
		"pTypes": [{
			"catName": "Wardrobe",
			"image": "assets/images/furniture.jpg"
		}, {
			"catName": "Beds",
			"image": "assets/images/furniture.jpg"


		}]
	}
]