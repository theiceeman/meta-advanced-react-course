
const topDesserts = [
    {
        id: "1",
        title: "lemon ice cream",
        description: "mind blowing taste",
        image: "https://picsum.photos/200/300/?random",
        price: "$4.60"
    },
    {
        id: "2",
        title: "chocolate yoghurt",
        description: "unexplored flavour",
        image: "https://picsum.photos/200/300/?random",
        price: "$4.60"
    }
]

const List = () => {
    const listItems = topDesserts.map(e => {
        return (
            <div key={e.id}>
                <img src={e.image}></img>
            </div>
        )
    })

    console.log(listItems)
    return (
        <>

            {listItems}
        </>
    );
}

export default List;
