import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EventsPage({ data }) {
    return (
        <div className="events_page">
            {data.map((ev) => (
                <Link href={`/events/${ev.id}`} key={ev.id} className="card">
                    <Image src={ev.image} alt={ev.title} width={500} height={500} />
                    <h2>{ev.title}</h2>
                </Link>
            ))}
        </div>
    );
}
