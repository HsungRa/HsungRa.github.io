import category from "../../public/category/category.json";

let length=0;
for (let c in category) {
    length = length+1
}


export const CATEGORY_CONFIG = category;
export const CATEGORY_COUNT = length;
