import data from 'data/data.json';



export const Statistics = () => {
    return (
        <>
            <Statistics title="Upload stats" stats={data} />
            <Statistics stats={data} />
            <section className="statistics">
                <h2 className="title" >Upload stats</h2>
                
                <ul className="stat-list">
                    <li className="item">
                        <span className="label">.docx</span>
                        <span className="percentage">4%</span>
                    </li>
                    <li className="item">
                        <span className="label">.mp3</span>
                        <span className="percentage">14%</span>
                    </li>
                    <li className="item">
                        <span className="label">.pdf</span>
                        <span className="percentage">41%</span>
                    </li>
                    <li className="item">
                        <span className="label">.mp4</span>
                        <span className="percentage">12%</span>
                    </li>
                </ul>
            </section>
        </>
    )
}