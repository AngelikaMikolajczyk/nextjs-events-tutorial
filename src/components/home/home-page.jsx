import Link from 'next/link';
import Image from 'next/image';

export function HomePage({ data }) {
    return (
        <div className="home_body">
            {data?.map((ev) => (
                <Link className="card" href={`/events/${ev.id}`} key={ev.id}>
                    <div className="image">
                        <Image src={ev.image} alt={ev.title} width={600} height={400} />
                    </div>
                    <div className="content">
                        <h2>{ev.title}</h2>
                        <p>{ev.description}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
