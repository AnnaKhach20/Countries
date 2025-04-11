import React from 'react'

export default function Map({ name }) {
    return (
        <section className='w-full'>
            <iframe
                src={`https://www.google.com/maps?q=${name}&z=6&output=embed`}
                className='map'
            >
            </iframe>
        </section>
    )
}
