import "./Flowchart.style.scss";

const Flowchart = () => {
    return (
        <div id="drawio-container" style={{ width: "100%", height: "100vh" }}>
            <iframe
                // eslint-disable-next-line react/no-unknown-property
                frameborder="0"
                style={{ width: "100%", height: "642px" }}
                src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#Uhttps%3A%2F%2Fraw.githubusercontent.com%2Ffaridulccr%2Fcalculator%2Fmaster%2FUntitled%2520Diagram.drawio"
            ></iframe>
        </div>
    );
};

export default Flowchart;
