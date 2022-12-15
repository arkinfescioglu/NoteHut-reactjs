
export interface Note {
    id: string;
    userId: string;
    categoryId: string;
    noteTitle: string;
    noteContent: string;
    isImportant: boolean;
    isTrash: boolean;
    createdAt: any;
    updatedAt: any;
    category:NoteCategoryRelation
}

interface NoteCategoryRelation {
    id: string;
    categoryName: string;
    categoryOrder: number;
    isMain: boolean;
}
