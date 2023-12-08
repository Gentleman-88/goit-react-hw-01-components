export const Statistics = ({ stats, title = "" }) => {
    return (
        <>
            <section className="statistics">
                {title.length > 0 && <h2 className="title">{title}</h2>}
                <ul className="stat-list">
                    {Array.isArray(stats) &&
                        stats.map((stat) => (
                            <li className="item" key={stat.id}>
                                <span className="label">{stat.label}</span>
                                <span className="percentage">{stat.percentage}</span>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}