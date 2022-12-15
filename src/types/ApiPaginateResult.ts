

export interface ApiPaginateResult<TDATA = null> {
    success: boolean;
    data: {
        list: TDATA;
        totalData: number;
        recordPerPage: number;
        currentPage: number;
    };
}

export interface IPagination {
    totalData: number;
    recordPerPage: number;
    currentPage: number;
}
