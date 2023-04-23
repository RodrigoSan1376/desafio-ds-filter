import './styles.css';

export default function Filter() {
    return(
        <main className='ddf-container dff-pt20'>
            <section className="ddf-filter-section">
                <form className='ddf-filter-form'>
                    <input className='ddf-filter-input' type="text" placeholder='Preço mínimo'/>
                    <input className='ddf-filter-input' type="text" placeholder='Preço máximo'/>
                    <button>Filtrar</button>
                </form>
            </section>
        </main>
    );
}