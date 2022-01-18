import './Header.css'

const Header = () => {
    return (  
        <header className='row header'>
            <div className='col-6 p-3'>
                <img className='imgPortada' src={require(`../../assets/img/hamburguesaPortada.png`)} alt="Hamburguesas" />
            </div>
            <div className='col-6 contenedorTextoPrincipal' >
                <h1 className='tituloPrincipal'>Bulldog <span className='d-block'>Restaurant</span> </h1>
                <h2 className='subtituloHeader'>Vení a probar las mejores Burgers</h2>
            </div>
        </header>
    );
}
 
export default Header;