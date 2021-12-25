import React from 'react'

const MediaList = (props) => {
    return (
        <div className="grid grid-cols-1 gap-y-16 gap-x-12 md:grid-cols-2 lg:grid-cols-3">
            {props.children}
        </div>
    )
}

export default MediaList
