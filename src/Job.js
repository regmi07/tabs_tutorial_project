
export const Job = ({ jobDetails }) => {
    const { title, company, dates, duties } = jobDetails;
    return (
        <main>
            <h1>{title}</h1>
            <h2>{company}</h2>
            <p>{dates}</p>
            {/* <div>
                {
                    duties.map((duty) => {
                        return <p>{duty}</p>
                    })
                }
            </div> */}
        </main>
    );
}