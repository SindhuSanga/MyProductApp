
import { Product } from './product';

export const PRODUCTS: Product[] = [
   {
      "id": 1,
		"pName": "Electronics",
		"image": "assets/images/Electronics.jpg",
		"pTypes": [{
      "catname": "Mobile",
      "image": "assets/images/mobile.jpg",
      "Data": [{
         "id": "Mob1",
         "type": "windows",
         "price": "999",
         "image": "assets/images/windows.jpg"
      },
      {
         "id": "Mob2",
         "type": "Android",
         "price": "From 3999",
         "image": "assets/images/Android.jpg"
      },
      {
         "id": "Mob3",
         "type": "iphone",
         "price": "from 999",
         "image": "assets/images/Iphone.jpg"

      }
      ]
   }, {
      "catname": "Laptop",
      "image": "assets/images/laptop.jpg",
      "Data": [{
         "id": "L1",
         "type": "Dell",
         "image": "assets/images/laptop.jpg",
         "price": "from 39999"
      },
      {
         "id": "L2",
         "type": "HP",
         "image": "assets/images/laptop.jpg",
         "price": "from 24999"
      }
      ]

   },
   {
      
      "catname": "Fridge",
      "image": "assets/images/fridge.jpg",
      "Data": [{
         "id": "F1",
         "type": "LG",
         "image": "assets/images/fridge.jpg",
         "price": "from 39999"
      },
      {
         "id": "F2",
         "type": "Samsung",
         "image": "assets/images/fridge.jpg",
         "price": "from 24999"
      }
      ]
   }]

   },
   {"id": 2,
   "pName": "Fashion",
   "image": "assets/images/fashion.jpg",
   "pTypes": [{
      "catname": "Clothing",
      "image": "assets/images/fashion.jpg",
      "Data": [{
         "id": "cloth1",
         "type": "MensWear",
         "image": "assets/images/jeans.jpg",
         "price": "999"
      },
      {
         "id": "cloth2",
         "type": "Women'sWear",
         "image": "assets/images/salwar.jpg",
         "price": "From 3999"
      },
      {
         "id": "cloth3",
         "type": "KidsWear",
         "image": "assets/images/fashion.jpg",
         "price": "from 999"

      }
      ]
   }, {
      "catname": "FootWear",
      "image": "assets/images/fashion.jpg",
      "Data": [{
         "id": "FW1",
         "type": "Sandals",
         "image": "assets/images/fashion.jpg",
         "price": "from 499"
      },
      {
         "id": "FW1",
         "type": "LeatherBoots",
         "image": "assets/images/fashion.jpg",
         "price": "from 4999"
      }
      ]
   }]
   },
   {
      "id": 3,
		"pName": "Furniture",
		"image": "assets/images/furniture.jpg",
		"pTypes": [{
      "catname": "Wardrobe",
      "image": "assets/images/furniture.jpg",
      "Data": [{
         "id": "W01",
         "type": "Single",
         "image": "assets/images/furniture.jpg",
         "price": "999"
      },
      {
         "id": "W02",
         "type": "Double",
         "image": "assets/images/furniture.jpg",
         "price": "From 3999"
      }
      ]
   }, {
      "catname": "Beds",
      "image": "assets/images/furniture.jpg",
      "Data": [{
         "id": "Bed1",
         "type": "kingSize",
         "image": "assets/images/furniture.jpg",
         "price": "from 499"
      },
      {
         "id": "Bed2",
         "type": "QueenSize",
         "image": "assets/images/furniture.jpg",
         "price": "from 4999"
      }
      ]
   }]
   }
]