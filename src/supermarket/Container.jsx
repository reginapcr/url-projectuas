export default function Container({children}){
    return(
        <div className="card">
            <h1 className="card2">Artikel Sayur</h1>
            <br/>
                {children}
            <br/>
            <footer>
                <p>2025 - Politeknik Caltex Riau</p>
            </footer>
        </div>
    )
}

