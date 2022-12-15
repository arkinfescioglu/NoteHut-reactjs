import React from 'react';
import isEqual from "react-fast-compare";
import AppsFooter from "components/AppsFooter";
import LightButton from "components/Form/Buttons/LightButton";

interface IProps {
    showLoadMore: boolean;
    loadMore: () => any;
}

const NoteListContentFooter:React.FC<IProps> = ({
    showLoadMore,
    loadMore
}) => {

    return(
        <>
            {showLoadMore && (
                <>
                    <AppsFooter>
                        <div className="text-center">
                            <LightButton
                                text="Load more"
                                className="w-50"
                                onClick={loadMore}
                            />
                        </div>
                    </AppsFooter>
                </>
            )}
        </>
    )
}
export default React.memo(NoteListContentFooter, (prev, next) => {
    return isEqual(prev.showLoadMore, next.showLoadMore);
})
