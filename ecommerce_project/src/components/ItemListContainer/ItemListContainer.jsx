
const categoria = ['Notebooks','Smartphones','Audio','Consolas','Accesorios']

function ItemListContainer({greetings}) {
    
  return (
    <>
    <h2>{greetings}</h2>
    <ul className="list-group">
    {categoria.map((category, index) =>
      (<li className="list-group-item" key={index}>{category}</li>)
    )}
    </ul>
    </>
  )
}

export default ItemListContainer