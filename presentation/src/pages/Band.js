import React from 'react'


const Band = ({band, bandimg}) => {
    return (
        <li className='artist' style={{backgroundImage: "url(" + bandimg + ")", backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
            {band}
        </li>
    )
}


export default Band