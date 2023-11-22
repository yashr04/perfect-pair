import Card from "./Card"

function Themes({themes, removeTheme}) {
    return (
        <div className="container">
            <div>
                <h2 className="title">Book Your Dream Wedding Theme</h2>
            </div>
            <div className="cards">
                {
                    themes.map( (theme) => {
                        return <Card key={theme.id} {...theme} removeTheme={removeTheme}></Card>
                    })
                }
            </div>
        </div>
    );
}

export default Themes;
