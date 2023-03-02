import SingleEvent from '@/src/components/events/single-event';

export default function EventPage({ data }) {
    return <SingleEvent data={data} />;
}

export async function getStaticPaths() {
    const { allEvents } = await import('/data/data.json');

    const allPaths = allEvents.map((ev) => {
        return {
            params: {
                cat: ev.city.toString(),
                id: ev.id.toString(),
            },
        };
    });

    return {
        paths: allPaths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { allEvents } = await import('/data/data.json');
    const id = context.params.id;

    const eventData = allEvents.find((event) => event.id === id);

    return {
        props: {
            data: eventData,
        },
    };
}
