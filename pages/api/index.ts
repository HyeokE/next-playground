import axios from "axios";

export interface RowDetailPostListType {
    body: {
        data: {
            content: DetailPostDataType[];
            totalElements: number;
            totalPages: number;
            empty: boolean;
            first: boolean;
            last: boolean;
        };
    };
}
export interface DetailPostDataType {
    modifiedAt: string;
    uploadDate: string;
    example: string;
    category: {
        categoryName: string;
        uploadDate: string;
    };
    content: string;
    postHashTags: string;
    postId: number;
    title: string;
    likes: string[];
    imagePath: string;
    memberInfo: AuthorProps;
}
export interface AuthorProps {
    member: {
        profileImageUrl: string;
    };
    nickname: string;
}

export class Api {
    private API: string;
    constructor() {
        this.API = 'https://gdsc-dju.kro.kr';
    }
    getPostListData = (params: string) => {
        return axios.get<RowDetailPostListType>(`https://gdsc-dju.kro.kr/api/v1/post/list`);
    };
}

export default new Api();