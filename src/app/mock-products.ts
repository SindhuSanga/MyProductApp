
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
         "price": "from 39999"
      },
      {
         "id": "L2",
         "type": "HP",
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
         "price": "from 39999"
      },
      {
         "id": "F2",
         "type": "Samsung",
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
         "price": "999"
      },
      {
         "id": "cloth2",
         "type": "Women'sWear",
         "price": "From 3999"
      },
      {
         "id": "cloth2",
         "type": "KidsWear",
         "price": "from 999"

      }
      ]
   }, {
      "catname": "FootWear",
      "image": "assets/images/fashion.jpg",
      "Data": [{
         "id": "FW1",
         "type": "Sandals",
         "price": "from 499"
      },
      {
         "id": "FW1",
         "type": "LeatherBoots",
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
         "price": "999"
      },
      {
         "id": "W02",
         "type": "Double",
         "price": "From 3999"
      }
      ]
   }, {
      "catname": "Beds",
      "image": "assets/images/furniture.jpg",
      "Data": [{
         "id": "Bed1",
         "type": "kingSize",
         "price": "from 499"
      },
      {
         "id": "Bed2",
         "type": "QueenSize",
         "price": "from 4999"
      }
      ]
   }]
   }
]