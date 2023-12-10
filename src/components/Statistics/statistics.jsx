import css from './Statistics.module.css'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Statistics = ({ stats, title = "" }) => {
    return (
        <>
            <section className={css.statistics}>
                {title.length > 0 && <h2 className={css.title}>{title}</h2>}
                <ul className={css.stat_list}>
                    {Array.isArray(stats) &&
                        stats.map((stat) => (
                            <li style={{backgroundColor: getRandomHexColor()}} className={css.item} key={stat.id}>
                                <span className={css.label}>{stat.label}</span>
                                <span className={css.percentage}>{stat.percentage}</span>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}