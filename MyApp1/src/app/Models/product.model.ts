export class Product {
    id: number | undefined;
    description: string | undefined;
    image: string | undefined;
    price: number | undefined;
    title: string | undefined;
    category: string | undefined;
    rating: Rating | undefined;
}
class Rating {
    count: number | undefined;
    rate: number | undefined;
}
