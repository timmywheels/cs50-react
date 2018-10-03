const strings = ['E', 'A', 'D', 'G', 'B', 'E'];

function Guitar() {
    return (
        // <Guitar>
        //     <String note={string[0]} />
        //     <String note={string[1]} />
        //     <String note={string[2]} />
        //     <String note={string[3]} />
        //     <String note={string[4]} />
        //     <String note={string[5]} />
        // </Guitar>
        <Guitar>
            {strings.map(note => <String note={note} />)}
        </Guitar>
    )
}
