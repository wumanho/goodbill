type RecordItem = {
    tags: string[];
    type: string;
    notes: string;
    amount: number;
    createTime?: Date;
}
type Tag = {
    id: string;
    name: string;
}
type TagsModel = {
    data: Tag[];
    get: () => Tag[];
    create: (name: string) => string;
    update: (id: string, name: string) => void;
    remove: (id: string) => void;
    save: () => void;
}

// interface Window {
// }