import Link from 'next/link'
function Sobre(){
    return(
        <div>
            <h1>Sobre</h1>
            <Link href="/home">
                <a>Acessar pagina home</a>
            </Link>
        </div>
    )
}

export default Sobre