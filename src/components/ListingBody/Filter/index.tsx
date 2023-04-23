/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import './styles.css';

type FormData = {
    minPrice: number;
    maxPrice: number;
}

type Props = {
    // eslint-disable-next-line @typescript-eslint/ban-types
    onFilter: Function;
}

export default function Filter({onFilter}: Props) {

    const [formData, setFormData] = useState<FormData>({
        minPrice: 0,
        maxPrice: Number.MAX_VALUE
    });

    function handleInputChange(event: any) {
        const name = event.target.name;
        const value = event.target.value;

        value === "" 
            ? name === "minPrice" 
                ? setFormData({ ...formData, [name]: 0 }) 
            : name === "maxPrice" 
                ? setFormData({ ...formData, [name]: Number.MAX_VALUE }) 
            : null 
        : setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event: any) {
        event.preventDefault();
        onFilter(formData.minPrice, formData.maxPrice);
    }

    return( 
        <main className='ddf-container dff-pt20'>
            <section className="ddf-filter-section">
                <form onSubmit={handleSubmit} className='ddf-filter-form'>
                    <input 
                        name='minPrice'
                        className='ddf-filter-input' 
                        type="text" 
                        placeholder='Preço mínimo'
                        value={formData.minPrice || ""}
                        onChange={handleInputChange}
                    />
                    <input 
                        name='maxPrice'
                        className='ddf-filter-input' 
                        type="text" 
                        placeholder='Preço máximo'
                        value={(formData.maxPrice === Number.MAX_VALUE || !formData.maxPrice) ? "" : formData.maxPrice}
                        onChange={handleInputChange}
                        />
                    <button type='submit' value={"Filtrar"}>Filtrar</button>
                </form>
            </section>
        </main>
    );
}